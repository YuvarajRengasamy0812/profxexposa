import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Clock, Users } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TabbedDays = () => {
  const [activeTab, setActiveTab] = useState("day1");
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  const day1 = [
    {
      id: 1,
      time: "09:00 AM",
      title: "Doors Open & Welcome Address",
      badge: "All Attendees",
    },
    {
      id: 2,
      time: "10:30 AM",
      title: "Keynote Speeches by Global Industry Leaders",
      badge: "VIP + All",
    },
    {
      id: 3,
      time: "01:00 PM",
      title: "Panel Discussions - Forex, FinTech & Trading Innovation",
      badge: "All Attendees",
    },
    {
      id: 4,
      time: "09:00 AM - 05:00 PM",
      title: "Exhibition Booths Open",
      badge: "All Attendees",
    },
    {
      id: 5,
      time: "03:30 PM",
      title: "Networking & Business Meetings",
      badge: "Business + VIP",
    },
  ];

  const day2 = [
    {
      id: 1,
      time: "10:00 AM",
      title: "Expert Talks & Fireside Chats",
      badge: "All Attendees",
    },
    {
      id: 2,
      time: "11:30 AM",
      title: "Advanced Panels - Market Trends & Technology",
      badge: "VIP + All",
    },
    {
      id: 3,
      time: "09:00 AM - 05:00 PM",
      title: "Exhibition Booths & Product Showcases",
      badge: "All Attendees",
    },
    {
      id: 4,
      time: "02:00 PM",
      title: "Investor & Partner Networking",
      badge: "Business + VIP",
    },
    {
      id: 5,
      time: "05:30 PM",
      title: "PROFX Awards Ceremony",
      badge: "All Attendees",
    },
  ];


  return (
    <section className="ag-day-section py-5">
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5">
          <p className="ag-pink fw-semibold mb-1">Event Agenda</p>
          <h2 className="ag-black fw-bold">
            Full Schedule - <span className="ag-pink"><b>PROFX EXPO AFRICA 2026</b></span>
          </h2>
          <p className="ag-text-grey mt-2">
            <b>PROFX EXPO AFRICA 2026</b> is a premier two-day global finance summit featuring keynote speeches by industry leaders, panel discussions on Forex, FinTech & Trading Innovation, exhibition showcases, and exclusive networking opportunities. Join us on 10 - 11 August 2026 in Cape Town, South Africa.
          </p>
        </div>


        {/* Tabs */}
        <div className="ag-tabs d-flex justify-content-center gap-3 mb-4">
          <button
            onClick={() => setActiveTab("day1")}
            className={`ag-tab-btn ${activeTab === "day1" ? "active" : ""}`}
          >
            Day 1 - Launchpad (Dec 10)
          </button>

          <button
            onClick={() => setActiveTab("day2")}
            className={`ag-tab-btn ${activeTab === "day2" ? "active" : ""}`}
          >
            Day 2 - Scale-Up (Dec 11)
          </button>
        </div>

        {/* Content */}
        <div className="ag-accordion-wrapper">

          {(activeTab === "day1" ? day1 : day2).map((item) => (
            <div
              key={item.id}
              className={`ag-accordion-item ${openItem === item.id ? "open" : ""}`}
            >
              <div
                className="ag-accordion-header"
                onClick={() => toggleItem(item.id)}
              >
                <div className="d-flex align-items-center gap-3">
                  <Clock size={18} className="ag-pink" />
                  <span className="ag-time">{item.time}</span>
                  <span className="ag-title">{item.title}</span>
                  <span className="ag-badge">{item.badge}</span>
                </div>

                <ChevronDown
                  size={22}
                  className={`ag-chevron ${openItem === item.id ? "rotated" : ""}`}
                />
              </div>

              <div className="ag-accordion-body">
                <p className="ag-text-grey">
                  Detailed description for <strong>{item.title}</strong>
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default TabbedDays;
