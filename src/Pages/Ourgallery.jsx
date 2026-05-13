import React from "react";
import Breadcrumb from "../Components/Breadcrumb";
import Gallery from "../Components/Gallery";
import { Link } from "react-router-dom";
import Pagehelmet from "../Components/Pagehelmet";

function Ourgallery() {
  return (
    <div>
      <Pagehelmet pageTitle="Gallery" />

      <Breadcrumb title="Our Recent Events Gallery" />

      {/*--Gallery Section end--*/}
      <section className="gallery py-10">
        <div className="container">
          <div className="gallery-inner">
            <Gallery />
          </div>
        </div>
      </section>
      {/*--Gallery Section end--*/}

      {/*--Ticketbook Section start--*/}
      <section className="ticket1 position-relative bg-lightgrey">
        <div className="container">
          <div className="ticket-inner  text-center position-relative">
            <div className="ticket-title w-lg-55 mx-auto">
              <p className="mb-1 pink ">LET'S DO IT HURRY</p>
              <h1 className="mb-2">
                HAVEN'T BOOKED YOUR SEAT YET?
                <span className="pink">Get Ticket</span>
              </h1>
            </div>
            <div className="ticket-info w-lg-55 mx-auto">
              <p>
                Purchase a suitable ticket to attend the <b>PROFX SUMMIT DUBAI 2026</b> and gain access to insightful sessions, networking
                opportunities, and hands-on workshops. Don't miss out on the
                chance to be part of Dubai premier Forex event!
              </p>
              {/* <p className="mb-5">
                <strong>Early Bird Offer:</strong> Book your tickets now and
                enjoy a special 20% discount! Use code EARLYBIRD20 at checkout.
              </p> */}
              <div className="ticket-button">
                <Link to="/Booknow" className="btn">
                  Book Your Free Ticket Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*--Ticketbook Section end--*/}
    </div>
  );
}

export default Ourgallery;
