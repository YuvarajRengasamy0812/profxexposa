import React from "react";
import Breadcrumb from "../Components/Breadcrumb";
import Pagehelmet from "../Components/Pagehelmet";
import Booking from "../Components/Booking";
import DirectionSection from "../Components/DirectionSection";

function Booknow() {
  return (
    <div>
      <Pagehelmet pageTitle="Book Ticket Now" />
      <Breadcrumb title="Book Tickets Now" />

      {/*--Book now Section start*/}
      <section className="ticket-booking pb-0">
        <div className="container">
          <div className="booking-form w-lg-75 m-auto px-2">
            <div className="form-title mb-4">
              <h2 className="mb-2">
                <span className="pink"><b>PROFX SUMMIT 2026</b></span> Booking Form
              </h2>
              <p>Book your tickets to the event now!!</p>
            </div>
            <div className="form-content">
              <Booking />
            </div>
          </div>
        </div>
      </section>
      {/*--Book now Section end*/}

      {/*--Direction Section start--*/}
      <DirectionSection className="mt-0" />
      {/*--Direction Section end--*/}
    </div>
  );
}

export default Booknow;
