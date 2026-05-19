import React, { useEffect, useRef, useState } from "react";
import { buildAssetUrl } from "../utils/assetUrl";
import { getAllGallery } from "../api/gallery";
import {
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Download,
  Share2,
  X,
} from "lucide-react";

const FALLBACK_IMAGE = buildAssetUrl("/assets/images/gallery/Speakers1.png");

const firstFilledValue = (...values) => {
  for (const value of values) {
    if (typeof value === "string" && value.trim()) {
      return value.trim();
    }
  }

  return "";
};

const getFieldMap = (fields = []) =>
  Array.isArray(fields)
    ? fields.reduce((acc, field) => {
        const key = field?.field_title?.toString().trim().toLowerCase();
        if (key) {
          acc[key] = field?.value;
        }
        return acc;
      }, {})
    : {};

const normalizeCategory = (value) => {
  const normalized = value?.toString().trim().toLowerCase();

  if (!normalized) {
    return "General";
  }

  if (normalized === "work shop" || normalized === "workshop" || normalized === "workshops") {
    return "Workshops";
  }

  if (normalized === "expo zone" || normalized === "expo") {
    return "Expo Zone";
  }

  if (normalized === "speaker" || normalized === "speakers") {
    return "Speakers";
  }

  if (normalized === "networking") {
    return "Networking";
  }

  return value
    .toString()
    .trim()
    .replace(/\s+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

const getCollectionFromResponse = (payload) => {
  if (Array.isArray(payload)) {
    return payload;
  }

  if (Array.isArray(payload?.items)) {
    return payload.items;
  }

  if (Array.isArray(payload?.topics)) {
    return payload.topics;
  }

  if (Array.isArray(payload?.data)) {
    return payload.data;
  }

  return [];
};

const normalizeGalleryItem = (item, index) => {
  const fieldMap = getFieldMap(item?.fields);
  const image = firstFilledValue(
    item?.image,
    item?.thumb,
    item?.full,
    item?.photo_file,
    item?.photo,
    fieldMap.image,
    fieldMap.photo
  ) || FALLBACK_IMAGE;

  return {
    id: item?.id || `${item?.category || "gallery"}-${index}`,
    thumb: image,
    full: image,
    alt:
      firstFilledValue(
        item?.alt,
        item?.title,
        item?.name,
        item?.description,
        fieldMap.alt,
        fieldMap.title
      ) || `Gallery image ${index + 1}`,
    category: normalizeCategory(
      firstFilledValue(
        item?.category,
        item?.category_name,
        item?.section,
        fieldMap.category
      )
    ),
  };
};

export default function Gallery({ limit = null }) {
  const [images, setImages] = useState([]);
  const [activeTab, setActiveTab] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const imgRef = useRef(null);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await getAllGallery();
        const rawItems = getCollectionFromResponse(response?.data);
        const formattedItems = rawItems.map(normalizeGalleryItem);

        setImages(formattedItems);
      } catch (fetchError) {
        console.error("Error fetching gallery:", fetchError);
        setError("Unable to load gallery data right now.");
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  useEffect(() => {
    setLightboxIndex(null);
    setZoom(1);
  }, [activeTab, limit]);

  const tabs = ["All", ...new Set(images.map((img) => img.category).filter(Boolean))];

  let filtered =
    activeTab === "All"
      ? images
      : images.filter((img) => img.category === activeTab);

  if (limit) {
    filtered = filtered.slice(0, limit);
  }

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setZoom(1);
  };

  const closeLightbox = () => setLightboxIndex(null);

  const prevImage = () => {
    setLightboxIndex((prev) => (prev === 0 ? filtered.length - 1 : prev - 1));
    setZoom(1);
  };

  const nextImage = () => {
    setLightboxIndex((prev) =>
      prev === filtered.length - 1 ? 0 : prev + 1
    );
    setZoom(1);
  };

  const downloadImg = () => {
    if (lightboxIndex === null || !filtered[lightboxIndex]) {
      return;
    }

    const link = document.createElement("a");
    link.href = filtered[lightboxIndex].full;
    link.download = "image.jpg";
    link.click();
  };

  const shareImg = async () => {
    if (lightboxIndex === null || !filtered[lightboxIndex]) {
      return;
    }

    if (navigator.share) {
      await navigator.share({
        title: "Gallery Image",
        url: filtered[lightboxIndex].full,
      });
    }
  };

  return (
    <div className="premium-gallery container">
      {!limit && (
        <div className="filter-buttons d-inline-flex gap-3 flex-wrap pt-2 pb-5 align-items-center w-100 justify-content-center">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`filter-btn ${activeTab === tab ? "filter-btn active" : "filter-btn"}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      )}

      {loading && (
        <div className="text-center py-5">
          <div className="spinner-border pink" role="status" aria-hidden="true"></div>
          <p className="text-grey mt-3 mb-0">Loading gallery data...</p>
        </div>
      )}

      {!loading && error && (
        <div className="alert alert-warning text-center rounded-4" role="alert">
          {error}
        </div>
      )}

      {!loading && !error && filtered.length === 0 && (
        <div className="alert alert-light text-center rounded-4 border" role="alert">
          No gallery records found.
        </div>
      )}

      {!loading && !error && filtered.length > 0 && (
        <div className="row fade-animation">
          {filtered.map((img, i) => (
            <div key={img.id || i} className="col-lg-4 col-md-6 mb-3 px-2 gallery-img-item">
              <img
                src={img.thumb}
                alt={img.alt}
                className="w-100 rounded shadow-sm hover-scale"
                onClick={() => openLightbox(i)}
                onError={(event) => {
                  event.currentTarget.src = FALLBACK_IMAGE;
                }}
                style={{ cursor: "pointer" }}
              />
            </div>
          ))}
        </div>
      )}

      {lightboxIndex !== null && filtered[lightboxIndex] && (
        <div
          className="lightbox position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{ background: "rgba(0,0,0,0.85)", zIndex: 2000 }}
        >
          <button
            className="position-absolute start-0 bg-transparent border-0 text-white ms-3 p-0"
            style={{ left: 20, zIndex: 2 }}
            onClick={prevImage}
          >
            <ChevronLeft size={40} />
          </button>

          <img
            ref={imgRef}
            src={filtered[lightboxIndex].full}
            alt={filtered[lightboxIndex].alt}
            onError={(event) => {
              event.currentTarget.src = FALLBACK_IMAGE;
            }}
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              transform: `scale(${zoom})`,
              transition: "0.3s",
            }}
            draggable
          />

          <button
            className="position-absolute end-0 bg-transparent border-0 text-white me-3 p-0"
            style={{ right: 20 }}
            onClick={nextImage}
          >
            <ChevronRight size={40} />
          </button>

          <div className="toolbar position-absolute d-flex gap-2">
            <button className="btn btn-light" onClick={() => setZoom((z) => z + 0.2)}>
              <ZoomIn />
            </button>
            <button
              className="btn btn-light"
              onClick={() => setZoom((z) => Math.max(1, z - 0.2))}
            >
              <ZoomOut />
            </button>
            <button className="btn btn-light" onClick={shareImg}>
              <Share2 />
            </button>
            <button className="btn btn-light" onClick={downloadImg}>
              <Download />
            </button>
            <button className="btn btn-light" onClick={closeLightbox}>
              <X size={32} />
            </button>
          </div>
        </div>
      )}

      <style>{`
        .hover-scale:hover { transform: scale(1.03); transition: 0.3s; }
        .fade-animation { animation: fadeIn 0.4s ease-in-out; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .toolbar button {
          background: transparent !important;
          border: none !important;
          color: #adadad !important;
          padding: 6px;
        }

        .toolbar svg { width: 20px; height: 20px; }

        .toolbar {
          right: 25px;
          top: 25px;
        }
      `}</style>
    </div>
  );
}
