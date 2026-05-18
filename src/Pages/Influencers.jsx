import React, { useEffect, useRef, useState } from "react";
import Breadcrumb from "../Components/Breadcrumb";
import { Link } from "react-router-dom";
import Pagehelmet from "../Components/Pagehelmet";
import LetsDoIt from "../Components/LetsDoIt";
import { buildAssetUrl } from "../utils/assetUrl";

const influencers = [
  {
    id: 1,
    name: "Alexandra Torres",
    handle: "@alexforex",
    niche: "Forex & Crypto Analyst",
    platform: "YouTube",
    followers: "1.2M",
    bio: "Top-tier forex educator breaking down market trends for 1M+ subscribers across platforms.",
    tags: ["Forex", "Crypto", "FinTech"],
    img: buildAssetUrl("/assets/images/speakers/1.jpg"),
    badge: "Featured",
  },
  {
    id: 2,
    name: "Marcus Reid",
    handle: "@marcustrading",
    niche: "Stock & Options Trader",
    platform: "Instagram",
    followers: "890K",
    bio: "Certified financial analyst sharing real-time trade setups and portfolio strategies.",
    tags: ["Stocks", "Options", "Investment"],
    img: buildAssetUrl("/assets/images/speakers/2.jpg"),
    badge: "Top Creator",
  },
  {
    id: 3,
    name: "Priya Nair",
    handle: "@priyafinance",
    niche: "FinTech & Blockchain",
    platform: "LinkedIn",
    followers: "620K",
    bio: "Demystifying blockchain, DeFi, and Web3 for emerging market investors and entrepreneurs.",
    tags: ["Blockchain", "DeFi", "Web3"],
    img: buildAssetUrl("/assets/images/speakers/3.jpg"),
    badge: "Rising Star",
  },
  {
    id: 4,
    name: "David Okonkwo",
    handle: "@davidfxpro",
    niche: "Commodities & Futures",
    platform: "TikTok",
    followers: "2.1M",
    bio: "Africa's most-followed commodities trader simplifying complex futures markets for everyday investors.",
    tags: ["Commodities", "Futures", "Africa"],
    img: buildAssetUrl("/assets/images/speakers/4.jpg"),
    badge: "Featured",
  },
  {
    id: 5,
    name: "Sofia Mendes",
    handle: "@sofiacapital",
    niche: "Private Equity & VC",
    platform: "Twitter/X",
    followers: "450K",
    bio: "Venture capital insider spotlighting high-growth fintech startups across Latin America and Africa.",
    tags: ["VC", "Startups", "FinTech"],
    img: buildAssetUrl("/assets/images/speakers/1.jpg"),
    badge: "Top Creator",
  },
  {
    id: 6,
    name: "James Kiptoo",
    handle: "@kiptoomarkets",
    niche: "Emerging Markets",
    platform: "YouTube",
    followers: "730K",
    bio: "Covering East African financial markets, forex regulation, and economic policy with precision.",
    tags: ["Markets", "Africa", "Policy"],
    img: buildAssetUrl("/assets/images/speakers/2.jpg"),
    badge: "Rising Star",
  },
  {
    id: 7,
    name: "Mei Lin Zhang",
    handle: "@meifxasia",
    niche: "Asian Forex Markets",
    platform: "Instagram",
    followers: "980K",
    bio: "Bilingual content creator bridging Asian and African forex markets with actionable insights.",
    tags: ["Asia", "Forex", "Strategy"],
    img: buildAssetUrl("/assets/images/speakers/3.jpg"),
    badge: "Featured",
  },
  {
    id: 8,
    name: "Samuel Adesanya",
    handle: "@samuelwealthfx",
    niche: "Wealth Management",
    platform: "LinkedIn",
    followers: "510K",
    bio: "Certified wealth manager educating African professionals on wealth creation through global markets.",
    tags: ["Wealth", "Management", "Africa"],
    img: buildAssetUrl("/assets/images/speakers/4.jpg"),
    badge: "Top Creator",
  },
];

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsStarted(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <Pagehelmet pageTitle="Influencers" />
      <Breadcrumb title="Influencers" />

      {/* Influencer Cards Grid */}
      <section className="py-10 py-md-14" style={{ background: "#fff" }}>
        <div className="container">
          <div className="col-lg-8 mx-auto text-center mb-8">
            <p className="pink fw-bold mb-1"><b>PROFX EXPO AFRICA 2026</b> — OFFICIAL INFLUENCERS</p>
            <h2 className="mb-3">
              MEET OUR <span className="pink">Digital Voice Leaders</span>
            </h2>
            <p className="text-grey fs-5 m-0">
              Partnered with the most impactful voices in global finance, forex, and fintech — creators who educate, inspire, and move markets. Their reach amplifies the ProFX Expo Africa story to millions worldwide.
            </p>
          </div>
          <div className="row g-4">
            {influencers.map((inf) => (
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
                  {/* Photo area */}
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
                    {/* Badge */}
                    <span
                      className="position-absolute top-0 end-0 m-3 px-3 py-1 rounded-pill fw-bold"
                      style={{ fontSize: "0.68rem", letterSpacing: "0.05em", ...badgeStyle[inf.badge] }}
                    >
                      {inf.badge}
                    </span>
                    {/* Platform tag */}
                    <span
                      className="position-absolute top-0 start-0 m-3 px-3 py-1 rounded-pill text-white fw-semibold"
                      style={{ fontSize: "0.68rem", background: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)" }}
                    >
                      {inf.platform}
                    </span>
                    {/* Followers on image */}
                    <div className="position-absolute bottom-0 start-0 ms-3 mb-3">
                      <span className="text-white fw-bold fs-5 d-block lh-1">{inf.followers}</span>
                      <span className="text-white opacity-75" style={{ fontSize: "0.72rem" }}>Followers</span>
                    </div>
                  </div>

                  {/* Card content */}
                  <div className="p-4">
                    <h5 className="fw-bold mb-0" style={{ color: "#1a1a1a" }}>{inf.name}</h5>
                    <p className="pink fw-semibold mb-2" style={{ fontSize: "0.85rem" }}>{inf.handle}</p>

                    <p
                      className="fw-semibold mb-3"
                      style={{ fontSize: "0.75rem", color: "#888", textTransform: "uppercase", letterSpacing: "0.07em" }}
                    >
                      {inf.niche}
                    </p>

                    <p className="text-grey mb-3" style={{ fontSize: "0.88rem", lineHeight: 1.65 }}>
                      {inf.bio}
                    </p>

                    {/* Tags */}
                    <div className="d-flex flex-wrap gap-1">
                      {inf.tags.map((tag, i) => (
                        <span
                          key={i}
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
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Stats Cards */}
      <section ref={statsRef} className="pt-0" style={{ background: "#f9f9f5" }}>
        <div className="container">
          <div className="text-center mb-8">
            <p className="pink fw-bold mb-1">OUR IMPACT IN NUMBERS</p>
            <h3 className="fw-bold mb-0">
              A <span className="pink">Global Network</span> of Finance Creators
            </h3>
          </div>
          <div className="row g-4">
            {stats.map((stat, i) => (
              <StatCard key={i} stat={stat} started={statsStarted} />
            ))}
          </div>
        </div>
      </section>

      {/* Influencer Program CTA */}
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
