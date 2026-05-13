import React, { useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Download,
  Share2,
  X,
} from "lucide-react";

export default function Gallery({ limit = null }) {  // ⬅ NEW
  const tabs = ["All", "Speakers", "Expo Zone", "Workshops", "Networking"];

  const images = [
    {
      thumb: "assets/images/gallery/Speakers1.png",
      full: "assets/images/gallery/Speakers1.png",
      alt: "Speakers",
      category: "Speakers",
    },
    {
      thumb: "assets/images/gallery/Speakers2.png",
      full: "assets/images/gallery/Speakers2.png",
      alt: "Speakers",
      category: "Speakers",
    },
    {
      thumb: "assets/images/gallery/Speakers3.png",
      full: "assets/images/gallery/Speakers3.png",
      alt: "Speakers",
      category: "Speakers",
    },
    {
      thumb: "assets/images/gallery/Speakers4.png",
      full: "assets/images/gallery/Speakers4.png",
      alt: "Speakers",
      category: "Speakers",
    },
    {
      thumb: "assets/images/gallery/Speakers5.png",
      full: "assets/images/gallery/Speakers5.png",
      alt: "Speakers",
      category: "Speakers",
    },
    {
      thumb: "assets/images/gallery/Speakers6.png",
      full: "assets/images/gallery/Speakers6.png",
      alt: "Speakers",
      category: "Speakers",
    },
    {
      thumb: "assets/images/gallery/Speakers7.png",
      full: "assets/images/gallery/Speakers7.png",
      alt: "Speakers",
      category: "Speakers",
    },
    {
      thumb: "assets/images/gallery/Speakers8.png",
      full: "assets/images/gallery/Speakers8.png",
      alt: "Speakers",
      category: "Speakers",
    },
    {
      thumb: "assets/images/gallery/Speakers9.png",
      full: "assets/images/gallery/Speakers9.png",
      alt: "Speakers",
      category: "Speakers",
    },
    {
      thumb: "assets/images/gallery/Speakers10.png",
      full: "assets/images/gallery/Speakers10.png",
      alt: "Speakers",
      category: "Speakers",
    },
    {
      thumb: "assets/images/gallery/Expozone1.png",
      full: "assets/images/gallery/Expozone1.png",
      alt: "Expo Zone Booth",
      category: "Expo Zone",
    },
    {
      thumb: "assets/images/gallery/Expozone2.png",
      full: "assets/images/gallery/Expozone2.png",
      alt: "Expo Zone Booth",
      category: "Expo Zone",
    },
    {
      thumb: "assets/images/gallery/Expozone3.png",
      full: "assets/images/gallery/Expozone3.png",
      alt: "Expo Zone Booth",
      category: "Expo Zone",
    },
    {
      thumb: "assets/images/gallery/Expozone4.png",
      full: "assets/images/gallery/Expozone4.png",
      alt: "Expo Zone Booth",
      category: "Expo Zone",
    },
    {
      thumb: "assets/images/gallery/Expozone5.png",
      full: "assets/images/gallery/Expozone5.png",
      alt: "Expo Zone Booth",
      category: "Expo Zone",
    },
    {
      thumb: "assets/images/gallery/Expozone6.png",
      full: "assets/images/gallery/Expozone6.png",
      alt: "Expo Zone Booth",
      category: "Expo Zone",
    },
    {
      thumb: "assets/images/gallery/Expozone7.png",
      full: "assets/images/gallery/Expozone7.png",
      alt: "Expo Zone Booth",
      category: "Expo Zone",
    },
    {
      thumb: "assets/images/gallery/Expozone8.png",
      full: "assets/images/gallery/Expozone8.png",
      alt: "Expo Zone Booth",
      category: "Expo Zone",
    },
    {
      thumb: "assets/images/gallery/Expozone9.png",
      full: "assets/images/gallery/Expozone9.png",
      alt: "Expo Zone Booth",
      category: "Expo Zone",
    },
    {
      thumb: "assets/images/gallery/Expozone10.png",
      full: "assets/images/gallery/Expozone10.png",
      alt: "Expo Zone Booth",
      category: "Expo Zone",
    },
    {
      thumb: "assets/images/gallery/Expozone11.png",
      full: "assets/images/gallery/Expozone11.png",
      alt: "Expo Zone Booth",
      category: "Expo Zone",
    },
    {
      thumb: "assets/images/gallery/Expozone12.png",
      full: "assets/images/gallery/Expozone12.png",
      alt: "Expo Zone Booth",
      category: "Expo Zone",
    },
    {
      thumb: "assets/images/gallery/Expozone13.png",
      full: "assets/images/gallery/Expozone13.png",
      alt: "Expo Zone Booth",
      category: "Expo Zone",
    },
    {
      thumb: "assets/images/gallery/Expozone14.png",
      full: "assets/images/gallery/Expozone14.png",
      alt: "Expo Zone Booth",
      category: "Expo Zone",
    },
    {
      thumb: "assets/images/gallery/Expozone15.png",
      full: "assets/images/gallery/Expozone15.png",
      alt: "Expo Zone Booth",
      category: "Expo Zone",
    },
    {
      thumb: "assets/images/gallery/workshop1.png",
      full: "assets/images/gallery/workshop1.png",
      alt: "Workshop Training",
      category: "Workshops",
    },
    {
      thumb: "assets/images/gallery/workshop2.png",
      full: "assets/images/gallery/workshop2.png",
      alt: "Workshop Training",
      category: "Workshops",
    },
    {
      thumb: "assets/images/gallery/workshop3.png",
      full: "assets/images/gallery/workshop3.png",
      alt: "Workshop Training",
      category: "Workshops",
    },
    {
      thumb: "assets/images/gallery/workshop4.png",
      full: "assets/images/gallery/workshop4.png",
      alt: "Workshop Training",
      category: "Workshops",
    },
    {
      thumb: "assets/images/gallery/Networking1.png",
      full: "assets/images/gallery/Networking1.png",
      alt: "Networking Event",
      category: "Networking",
    },
    {
      thumb: "assets/images/gallery/Networking2.png",
      full: "assets/images/gallery/Networking2.png",
      alt: "Networking Event",
      category: "Networking",
    },
    {
      thumb: "assets/images/gallery/Networking3.png",
      full: "assets/images/gallery/Networking3.png",
      alt: "Networking Event",
      category: "Networking",
    },
    {
      thumb: "assets/images/gallery/Networking4.png",
      full: "assets/images/gallery/Networking4.png",
      alt: "Networking Event",
      category: "Networking",
    },
    {
      thumb: "assets/images/gallery/Networking5.png",
      full: "assets/images/gallery/Networking5.png",
      alt: "Networking Event",
      category: "Networking",
    },
    {
      thumb: "assets/images/gallery/Networking6.png",
      full: "assets/images/gallery/Networking6.png",
      alt: "Networking Event",
      category: "Networking",
    },
    {
      thumb: "assets/images/gallery/Networking7.png",
      full: "assets/images/gallery/Networking7.png",
      alt: "Networking Event",
      category: "Networking",
    },
    {
      thumb: "assets/images/gallery/Networking8.png",
      full: "assets/images/gallery/Networking8.png",
      alt: "Networking Event",
      category: "Networking",
    },

  ];

  const [activeTab, setActiveTab] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [zoom, setZoom] = useState(1);
  const imgRef = useRef(null);

  // Filter first
  let filtered =
    activeTab === "All"
      ? images
      : images.filter((img) => img.category === activeTab);

  // Apply limit if passed
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
    const link = document.createElement("a");
    link.href = filtered[lightboxIndex].full;
    link.download = "image.jpg";
    link.click();
  };

  const shareImg = async () => {
    if (navigator.share) {
      await navigator.share({
        title: "Gallery Image",
        url: filtered[lightboxIndex].full,
      });
    }
  };

  return (
    <div className="premium-gallery container">

      {/* Tabs - HIDE when limit is active */}
      {!limit && (
        <div className="filter-buttons d-inline-flex gap-3 flex-wrap pt-2 pb-5 align-items-center w-100 justify-content-center">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`filter-btn ${activeTab === tab ? "filter-btn active" : "filter-btn"
                }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      )}

      {/* Gallery Grid */}
      <div className="row fade-animation">
        {filtered.map((img, i) => (
          <div key={i} className="col-lg-4 col-md-6 mb-3 px-2 gallery-img-item">
            <img
              src={img.thumb}
              alt={img.alt}
              className="w-100 rounded shadow-sm hover-scale"
              onClick={() => openLightbox(i)}
              style={{ cursor: "pointer" }}
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="lightbox position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{ background: "rgba(0,0,0,0.85)", zIndex: 2000 }}
        >
          {/* Left Arrow */}
          <button
            className="position-absolute start-0 bg-transparent border-0 text-white ms-3 p-0"
            style={{ left: 20, zIndex: 2 }}
            onClick={prevImage}
          >
            <ChevronLeft size={40} />
          </button>

          {/* Image */}
          <img
            ref={imgRef}
            src={filtered[lightboxIndex].full}
            alt="full"
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              transform: `scale(${zoom})`,
              transition: "0.3s",
            }}
            draggable
          />

          {/* Right Arrow */}
          <button
            className="position-absolute end-0 bg-transparent border-0 text-white me-3 p-0"
            style={{ right: 20 }}
            onClick={nextImage}
          >
            <ChevronRight size={40} />
          </button>

          {/* Toolbar */}
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

      {/* CSS */}
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
