import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../Components/Breadcrumb";
import Pagehelmet from "../Components/Pagehelmet";
import { buildAssetUrl } from "../utils/assetUrl";
import { getAllInfluencers } from "../api/influencer";

const defaultInfluencerImage = buildAssetUrl("/assets/images/speakers/1.jpg");

const badgeStyle = {
  Featured: { background: "linear-gradient(135deg, #c19d38, #e8c96b)", color: "#1a1a1a" },
  "Top Creator": { background: "linear-gradient(135deg, #0e5941, #15831d)", color: "#fff" },
  "Rising Star": { background: "linear-gradient(135deg, #b83280, #e91e8c)", color: "#fff" },
};

const stats = [
  {
    icon: "fa-users",
    target: 10,
    suffix: "M+",
    label: "Combined Reach",
    desc: "Across all platforms globally",
    gradient: "linear-gradient(135deg, #c19d38, #e8c96b)",
  },
  {
    icon: "fa-globe",
    target: 20,
    suffix: "+",
    label: "Countries",
    desc: "International audience coverage",
    gradient: "linear-gradient(135deg, #0e5941, #15831d)",
  },
  {
    icon: "fa-mobile",
    target: 6,
    suffix: "+",
    label: "Platforms",
    desc: "YouTube, IG, TikTok & more",
    gradient: "linear-gradient(135deg, #1a1a8c, #3a3ae8)",
  },
  {
    icon: "fa-video-camera",
    target: 500,
    suffix: "+",
    label: "Content Pieces",
    desc: "Created for ProFX Expo Africa",
    gradient: "linear-gradient(135deg, #b83280, #e91e8c)",
  },
];

const normalizeTags = (value) => {
  if (Array.isArray(value)) {
    return value
      .map((tag) => {
        if (typeof tag === "string") {
          return tag.trim();
        }

        if (tag && typeof tag === "object") {
          return (tag.tag_name || tag.name || tag.seo_url || "").trim();
        }

        return "";
      })
      .filter(Boolean);
  }

  if (typeof value === "string") {
    return value
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);
  }

  return [];
};

const formatInfluencerData = (responseData) => {
  const fieldNameById = (responseData?.section_fields || []).reduce((acc, field) => {
    if (field?.id) {
      acc[field.id] = (field.title_en || field.title || "").toLowerCase();
    }

    return acc;
  }, {});

  const topics = Array.isArray(responseData?.topics)
    ? responseData.topics
    : Array.isArray(responseData?.items)
      ? responseData.items
      : Array.isArray(responseData)
        ? responseData
        : [];

  return topics.map((item, index) => {
    const fieldsObj = {};

    (item.fields || []).forEach((field) => {
      const fieldName = (
        field.field_title ||
        fieldNameById[field.field_id] ||
        field.title_en ||
        field.title ||
        ""
      ).toLowerCase();

      if (fieldName) {
        fieldsObj[fieldName] = field.value;
      }
    });

    const fallbackBadge = index % 3 === 0 ? "Featured" : index % 3 === 1 ? "Top Creator" : "Rising Star";

    return {
      id: item.id || `${item.title || "influencer"}-${index}`,
      name: item.title || fieldsObj.name || "Influencer",
      handle: fieldsObj.subname || fieldsObj.handle || fieldsObj.username || "",
      niche: fieldsObj.niche || fieldsObj.company || item.description || "Official Influencer",
      platform: fieldsObj.platform || fieldsObj.company || "Influencer",
      followers: fieldsObj.followers || fieldsObj.followers_count || "",
      bio: fieldsObj.bio || item.description || fieldsObj.subname || fieldsObj.company || "",
      tags: normalizeTags(item.tags || fieldsObj.tags || fieldsObj.tag),
      img: item.image || fieldsObj.image || defaultInfluencerImage,
      badge: fieldsObj.badge || fallbackBadge,
    };
  });
};

function useCountUp(target, duration = 2000, started = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;

    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;

      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration, started]);

  return count;
}

function StatCard({ stat, started }) {
  const count = useCountUp(stat.target, 1800, started);

  return (
    <div className="col-lg-3 col-md-6">
      <div
        className="text-center h-100 rounded-4 p-4 p-lg-5"
        style={{
          background: "#fff",
          border: "1px solid rgba(0,0,0,0.07)",
          boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-6px)";
          e.currentTarget.style.boxShadow = "0 16px 48px rgba(0,0,0,0.13)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.07)";
        }}
      >
        <div
          className="d-inline-flex align-items-center justify-content-center rounded-circle mb-4"
          style={{
            width: 72,
            height: 72,
            background: stat.gradient,
            boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
          }}
        >
          <i className={`fa ${stat.icon} text-white`} style={{ fontSize: "1.6rem" }}></i>
        </div>
        <h2 className="fw-bold mb-1" style={{ fontSize: "2.6rem", color: "#1a1a1a", lineHeight: 1 }}>
          {count}
          <span style={{ background: stat.gradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            {stat.suffix}
          </span>
        </h2>
        <h6 className="fw-bold mb-1" style={{ color: "#1a1a1a" }}>{stat.label}</h6>
        <p className="text-grey mb-0" style={{ fontSize: "0.85rem" }}>{stat.desc}</p>
      </div>
    </div>
  );
}

function Influencers() {
  const statsRef = useRef(null);
  const [statsStarted, setStatsStarted] = useState(false);
  const [influencersData, setInfluencersData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    getAllInfluencers()
      .then((res) => {
        if (!isMounted) return;

        const data = res?.data || {};

        if (data?.success) {
          setInfluencersData(formatInfluencerData(data));
          setError("");
        } else {
          setInfluencersData([]);
          setError(data?.message || "Unable to load influencers.");
        }
      })
      .catch((err) => {
        if (!isMounted) return;

        console.error("Influencers API Error:", err);
        setInfluencersData([]);
        setError(err?.response?.data?.message || err?.message || "Unable to load influencers.");
      })
      .finally(() => {
        if (isMounted) {
          setIsLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <Pagehelmet pageTitle="Influencers" />
      <Breadcrumb title="Influencers" />

      <section className="py-10 py-md-14" style={{ background: "#fff" }}>
        <div className="container">
          <div className="col-lg-8 mx-auto text-center mb-8">
            <p className="pink fw-bold mb-1"><b>PROFX EXPO AFRICA 2026</b> - OFFICIAL INFLUENCERS</p>
            <h2 className="mb-3">
              MEET OUR <span className="pink">Digital Voice Leaders</span>
            </h2>
            <p className="text-grey fs-5 m-0">
              Partnered with the most impactful voices in global finance, forex, and fintech - creators who educate, inspire, and move markets. Their reach amplifies the ProFX Expo Africa story to millions worldwide.
            </p>
          </div>

          <div className="row g-4">
            {isLoading && (
              <div className="col-12 text-center">
                <p className="text-grey mb-0">Loading influencers...</p>
              </div>
            )}

            {!isLoading && influencersData.length === 0 && (
              <div className="col-12 text-center">
                <p className="text-grey mb-0">{error || "No influencer profiles available right now."}</p>
              </div>
            )}

            {!isLoading && influencersData.map((inf) => (
              <div key={inf.id} className="col-lg-3 col-md-6">
                <div
                  className="h-100 rounded-4 overflow-hidden"
                  style={{
                    background: "#fff",
                    border: "1px solid rgba(0,0,0,0.07)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-6px)";
                    e.currentTarget.style.boxShadow = "0 20px 56px rgba(0,0,0,0.13)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.07)";
                  }}
                >
                  <div className="position-relative" style={{ height: "260px", overflow: "hidden" }}>
                    <img
                      src={inf.img}
                      alt={inf.name}
                      className="w-100 h-100"
                      style={{ objectFit: "cover", objectPosition: "top" }}
                    />
                    <div
                      className="position-absolute bottom-0 start-0 end-0"
                      style={{
                        height: "65%",
                        background: "linear-gradient(to top, rgba(10,10,10,0.88), transparent)",
                      }}
                    />
                    {/* <span
                      className="position-absolute top-0 end-0 m-3 px-3 py-1 rounded-pill fw-bold"
                      style={{
                        fontSize: "0.68rem",
                        letterSpacing: "0.05em",
                        ...(badgeStyle[inf.badge] || badgeStyle.Featured),
                      }}
                    >
                      {inf.platform}
                    </span> */}
                  </div>

                  <div className="p-4">
                    <h5 className="fw-bold mb-0" style={{ color: "#1a1a1a" }}>{inf.name}</h5>
                    {inf.handle && (
                      <p className="pink fw-semibold mb-2" style={{ fontSize: "0.85rem" }}>{inf.handle}</p>
                    )}

                    <p
                      className="fw-semibold mb-3"
                      style={{ fontSize: "0.75rem", color: "#888", textTransform: "uppercase", letterSpacing: "0.07em" }}
                    >
                      {inf.niche}
                    </p>

                    <p className="text-grey mb-3" style={{ fontSize: "0.88rem", lineHeight: 1.65 }}>
                      {inf.bio || "Profile details will be updated soon."}
                    </p>

                    {inf.tags.length > 0 && (
                      <div className="d-flex flex-wrap gap-1">
                        {inf.tags.map((tag, index) => (
                          <span
                            key={`${inf.id}-${tag}-${index}`}
                            className="px-2 py-1 rounded-2"
                            style={{
                              fontSize: "0.7rem",
                              background: "rgba(193,157,56,0.12)",
                              color: "#c19d38",
                              fontWeight: 600,
                            }}
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={statsRef} className="pt-0" style={{ background: "#f9f9f5" }}>
        <div className="container">
          <div className="text-center mb-8">
            <p className="pink fw-bold mb-1">OUR IMPACT IN NUMBERS</p>
            <h3 className="fw-bold mb-0">
              A <span className="pink">Global Network</span> of Finance Creators
            </h3>
          </div>
          <div className="row g-4">
            {stats.map((stat, index) => (
              <StatCard key={index} stat={stat} started={statsStarted} />
            ))}
          </div>
        </div>
      </section>

      <section className="ticket position-relative">
        <div className="overlay"></div>
        <div className="container">
          <div className="ticket-inner w-lg-75 mx-auto text-center position-relative text-white">
            <div className="ticket-title">
              <h5 className="text-white mb-1">ARE YOU A FINANCE INFLUENCER?</h5>
              <h1 className="text-white mb-2">
                JOIN OUR OFFICIAL{" "}
                <span className="pink">INFLUENCER PROGRAM!</span>
              </h1>
            </div>
            <div className="ticket-info">
              <p>
                Partner with <b>PROFX EXPO AFRICA 2026</b> and amplify your brand to a global audience of traders, investors, and finance professionals across 20+ countries.
              </p>
              <div className="ticket-button d-flex flex-column flex-md-row justify-content-center gap-3">
                <Link to="/Contact" className="btn">
                  Apply Now
                </Link>
                <Link to="/Register" className="btn btn1">
                  Book a Pass
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Influencers;
