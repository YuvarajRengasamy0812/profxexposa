import React from "react";
import { Link } from "react-router-dom";

const EventSwitcher = () => {
  return (
    <>
      {/*!-- Event Switcher Section Starts --*/}
      <section className="event-switcher position-sticky top-0 z-3 bg-white py-2 border-bottom border-lightgrey">
        <div className="container">
          <div className="d-flex justify-content-center flex-wrap gap-3">
            {/* Summit - Active */}
            <Link
              to="/Booknow"
              className="switch-btn px-4 py-2 rounded-5 bg-pink text-white fw-semibold border border-pink"
            >
              Get Free Tickets
            </Link>

            {/* ProFin Expo */}
            {/* <a
              href="https://profinexpo.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="switch-btn px-4 py-2 rounded-5 bg-lightgrey text-grey fw-semibold border border-pink"
            >
              ProFin Expo
            </a> */}
          </div>
        </div>
      </section>
      {/*!-- Event Switcher Section End --*/}
    </>
  );
};

export default EventSwitcher;
