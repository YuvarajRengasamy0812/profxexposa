import React from "react";
import { Layers, Shield, Bitcoin, Boxes } from "lucide-react";

const pillars = [
  {
    title: "Forex & Trading Innovation",
    description:
      "Explore cutting-edge strategies in Forex, trading platforms, and liquidity management. Learn from global market leaders and industry pioneers.",
    icon: <Bitcoin size={40} />,
  },
  {
    title: "FinTech & Digital Payments",
    description:
      "Discover the latest in digital finance, payment solutions, and FinTech innovations shaping the future of banking and commerce.",
    icon: <Boxes size={40} />,
  },
  {
    title: "Forex & Digital Assets",
    description:
      "Dive into Forex applications, NFT marketplaces, DeFi protocols, and secure digital asset management for enterprise and retail.",
    icon: <Layers size={40} />,
  },
  {
    title: "Regulation & Compliance",
    description:
      "Engage with experts on regulatory frameworks, AML practices, and compliance standards to operate confidently in global finance markets.",
    icon: <Shield size={40} />,
  },
];

const CorePillars = () => {
  return (
    <section className="core-pillars py-5 mt-5">
      <div className="container">
        <div className="row text-center mb-5">
          <div className="col">
            <p className="pink mb-1">Core Pillars</p>
            <h2 className="black fw-bold">
              Our <span className="pink">Focus Areas</span>
            </h2>
            <p className="text-grey">
              The key pillars driving <b>PROFX SUMMIT DUBAI 2026</b> - integrating global finance, trading, FinTech, blockchain, and innovation.
            </p>
          </div>
        </div>

        <div className="row g-4 d-flex flex-wrap">
          {pillars.map((pillar, idx) => (
            <div className="col-lg-3 col-md-6 d-flex" key={idx}>
              <div className="pillar-card p-4 rounded shadow-lg text-center bg-white">
                <div className="pillar-icon mb-3">{pillar.icon}</div>
                <h5 className="fw-bold black mb-2">{pillar.title}</h5>
                <p className="text-grey">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorePillars;
