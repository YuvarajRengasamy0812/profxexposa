import React, { useState } from "react";
import FloorPlanAfrica from "./FloorPlanAfrica";
import { buildAssetUrl } from "../utils/assetUrl";

const TABS = [
  { key: "layout", label: "Floor Plan" },
  { key: "interactive", label: "Interactive Floor Plan" },
];

const FloorPlanSection = ({ id }) => {
  const [activeTab, setActiveTab] = useState("layout");

  return (
    <section id={id} className="floorplan-section py-5 py-md-7">
      <div className="container-fluid px-4">
        {/* Tabs */}
        <div className="d-flex justify-content-center mb-4">
          <div
            style={{
              display: "inline-flex",
              background: "#f1f3f5",
              borderRadius: "50px",
              padding: "5px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              border: "1px solid #e0e0e0",
              gap: "4px",
            }}
          >
            {TABS.map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  style={{
                    padding: "10px 28px",
                    borderRadius: "50px",
                    border: "none",
                    cursor: "pointer",
                    fontWeight: 600,
                    fontSize: "14px",
                    letterSpacing: "0.3px",
                    transition: "all 0.25s ease",
                    background: isActive
                      ? "linear-gradient(135deg, #c9a227 0%, #a07d1a 100%)"
                      : "transparent",
                    color: isActive ? "#fff" : "#555",
                    boxShadow: isActive
                      ? "0 2px 12px rgba(160,125,26,0.4)"
                      : "none",
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab content */}
        {activeTab === "interactive" && <FloorPlanAfrica />}

        {activeTab === "layout" && (
          <div className="text-center">
            <img
              src={buildAssetUrl("/assets/images/floorplan-layout.jpg")}
              alt="PROFX EXPO AFRICA floor plan layout"
              className="img-fluid rounded shadow-sm"
              style={{ maxWidth: "1200px", width: "100%", height: "auto" }}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default FloorPlanSection;
