import React from "react";
import Breadcrumb from "../Components/Breadcrumb";
import { Link } from "react-router-dom";
import Pagehelmet from "../Components/Pagehelmet";
import TicketSection from "../Components/TicketSection";

function Pricing() {
  return (
    <div>
      <Pagehelmet pageTitle="Our Pricings" />
      <Breadcrumb title="Our Pricing" />

      {/*--Pricing Section start--*/}
      <TicketSection />
      {/*--Pricing Section end--*/}

      {/*--Ticketbook Section start--*/}
      <section className="ticket2 position-relative pb-0">
        <div className="container">
          <div className="ticket-inner  text-center position-relative">
            <div className="row">
              <div className="col-lg-6">
                <div className="ticket-left text-lg-start pb-6">
                  <div className="ticket-title">
                    <p className="mb-1 pink ">LET'S DO IT HURRY</p>
                    <h2 className="mb-2">
                      HAVEN'T BOOKED YOUR SEAT YET?{" "}
                      <span className="pink">Get Ticket</span>
                    </h2>
                  </div>
                  <div className="ticket-info">
                    <p>
                      Purchase a suitable ticket to attend the PROFX Blockchain
                      Summit 2026 and gain access to insightful sessions,
                      networking opportunities, and hands-on workshops. Don't
                      miss out on the chance to be part of Dubai premier Forex
                      event!
                    </p>
                    <p className="mb-5">
                      <strong>Early Bird Offer:</strong> Book your tickets now
                      and enjoy a special 20% discount! Use code EARLYBIRD20 at
                      checkout.
                    </p>
                    <div className="ticket-button">
                      <Link to="/Booknow" className="btn">
                        GET TICKETS NOW
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="">
                  <img
                    src="assets/images/team/5.png"
                    alt="ticket-img"
                    className="w-50"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*--Ticketbook Section end--*/}
    </div>
  );
}

export default Pricing;
