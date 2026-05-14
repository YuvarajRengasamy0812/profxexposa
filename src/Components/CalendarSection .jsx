import React, { useEffect, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";

import { gsap } from "gsap";
import { Tooltip } from "bootstrap";

const CalendarSection = () => {

  // Sample event mapping based on your DOCS
  const events = [
    { title: "Opening Ceremony & Welcome Address", date: "2026-08-20T10:00:00" },
    { title: "Keynote Speeches by Global Industry Leaders", date: "2026-08-20T10:30:00" },
    { title: "Panel Discussions on Forex, FinTech & Trading Innovation", date: "2026-08-20T13:00:00" },
    { title: "Exhibition Booths Open All Day", date: "2026-08-20T09:00:00" },
    { title: "Networking & Business Meetings", date: "2026-08-20T15:30:00" },
    { title: "Expert Talks & Fireside Chats", date: "2026-08-21T10:00:00" },
    { title: "Advanced Panels on Market Trends & Technology", date: "2026-08-21T11:30:00" },
    { title: "Exhibition Booths & Product Showcases", date: "2026-08-21T09:00:00" },
    { title: "Investor & Partner Networking", date: "2026-08-21T14:00:00" },
    { title: "PROFX Awards Ceremony", date: "2026-08-21T17:30:00" },
  ];

  return (
    <section
      className="py-5 calendar-section"
      style={{
        background: "linear-gradient(180deg, #fff, #f7f7f7)",
      }}
    >
      <div className="container text-center">
        <h2 className="fw-bold mb-2 agenda-title">
          Agenda: <span className="highlight-text">48 Hours of Forex Acceleration</span>
        </h2>
        <p className="text-muted mb-4">
          Curated tracks for every level - filter by interest and build your path.
          <strong> Pro Tip:</strong> Sync to app for reminders and live updates.
        </p>

        <button className="btn btn-gradient px-4 py-2 mb-4">
          Launch Agenda Builder Tool
        </button>

        <div className="calendar-wrapper shadow-sm p-3 rounded">
          <FullCalendar
            plugins={[dayGridPlugin, listPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            initialDate="2026-08-20"
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,listWeek",
            }}
            height="auto"
            events={events}
            eventDisplay="block"
          />
        </div>
      </div>
    </section>
  );
};

export default CalendarSection;
