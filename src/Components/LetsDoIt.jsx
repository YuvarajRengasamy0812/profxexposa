import React from "react";
import { Link } from "react-router-dom";

const LetsDoIt = () => {
  return (
    <>
      <section className="ticket position-relative">
        <div className="overlay"></div>
        <div className="container">
          <div className="ticket-inner w-lg-75 mx-auto text-center position-relative text-white">
            <div className="ticket-title">
              <h5 className="text-white mb-1">DON'T MISS OUT</h5>
              <h1 className="text-white mb-2">
                HAVEN'T REGISTERED YET?{" "}
                <span className="pink">SECURE YOUR FREE ENTRY NOW!</span>
              </h1>
            </div>
            <div className="ticket-info">
              <p>
                Registration for <b>PROFX SUMMIT DUBAI 2026</b> is completely free! Gain access to expert-led sessions,
                live exhibition booths, high-level networking, and the prestigious ProFX Awards Ceremony.
                Be part of Dubai's premier international finance and trading event.
              </p>
              <div className="ticket-button">
                <Link to="/Booknow" className="btn">
                  Book Your Free Ticket Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default LetsDoIt;
