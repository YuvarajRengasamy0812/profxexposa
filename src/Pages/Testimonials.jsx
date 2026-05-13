import React from "react";
import Breadcrumb from "../Components/Breadcrumb";
import Pagehelmet from "../Components/Pagehelmet";
import { Link } from "react-router-dom";

function Testimonials() {
  return (
    <div>
      <Pagehelmet pageTitle="Testimonials" />
      <Breadcrumb title="Testimonials" />

      {/*--Testimonial Section start---*/}
      <div className="testimonial py-10">
        <div className="container">
          <div className="testimonial-inner">
            <div className="row g-md-4 g-lg-5 gy-3">
              <div className="col-lg-4 col-md-6">
                <div className="box1 rounded bg-white text-center border border-1 px-4 py-6">
                  <div className="testimonial-content">
                    <i className="fa fa-quote-left mb-2" aria-hidden="true"></i>
                    <p className="m-auto mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                  <div className="testimonial-bio">
                    <img
                      src="assets/images/team/2.jpg"
                      alt="testimonial-image"
                      className="bio-img mb-1 rounded-circle"
                    />
                    <div>
                      <p className="mb-0 fw-semibold pink text-uppercase">
                        Selon Helum
                      </p>
                      <small>Planner</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="box1 rounded bg-white text-center border border-1 px-4 py-6">
                  <div className="testimonial-content">
                    <i className="fa fa-quote-left mb-2" aria-hidden="true"></i>
                    <p className="m-auto mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                  <div className="testimonial-bio">
                    <img
                      src="assets/images/team/3.jpg"
                      alt="testimonial-image"
                      className="bio-img mb-1 rounded-circle"
                    />
                    <div>
                      <p className="mb-0 fw-semibold pink text-uppercase">
                        Nelly Bell
                      </p>
                      <small>CEO</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="box1 rounded bg-white text-center border border-1 px-4 py-6">
                  <div className="testimonial-content">
                    <i className="fa fa-quote-left mb-2" aria-hidden="true"></i>
                    <p className="m-auto mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                  <div className="testimonial-bio">
                    <img
                      src="assets/images/team/1.jpg"
                      alt="testimonial-image"
                      className="bio-img mb-1 rounded-circle"
                    />
                    <div>
                      <p className="mb-0 fw-semibold pink text-uppercase">
                        Ricky Malone
                      </p>
                      <small>Director</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="box1 rounded bg-white text-center border border-1 px-4 py-6">
                  <div className="testimonial-content">
                    <i className="fa fa-quote-left mb-2" aria-hidden="true"></i>
                    <p className="m-auto mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                  <div className="testimonial-bio">
                    <img
                      src="assets/images/team/3.jpg"
                      alt="testimonial-image"
                      className="bio-img mb-1 rounded-circle"
                    />
                    <div>
                      <p className="mb-0 fw-semibold pink text-uppercase">
                        Nelly Bell
                      </p>
                      <small>CEO</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="box1 rounded bg-white text-center border border-1 px-4 py-6">
                  <div className="testimonial-content">
                    <i className="fa fa-quote-left mb-2" aria-hidden="true"></i>
                    <p className="m-auto mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                  <div className="testimonial-bio">
                    <img
                      src="assets/images/team/1.jpg"
                      alt="testimonial-image"
                      className="bio-img mb-1 rounded-circle"
                    />
                    <div>
                      <p className="mb-0 fw-semibold pink text-uppercase">
                        Ricky Malone
                      </p>
                      <small>Director</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="box1 rounded bg-white text-center border border-1 px-4 py-6">
                  <div className="testimonial-content">
                    <i className="fa fa-quote-left mb-2" aria-hidden="true"></i>
                    <p className="m-auto mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                  <div className="testimonial-bio">
                    <img
                      src="assets/images/team/2.jpg"
                      alt="testimonial-image"
                      className="bio-img mb-1 rounded-circle"
                    />
                    <div>
                      <p className="mb-0 fw-semibold pink text-uppercase">
                        Selon Helum
                      </p>
                      <small>Planner</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*--Testimonial Section end---*/}

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
              <p className="mb-5">
                <strong>Early Bird Offer:</strong> Book your tickets now and
                enjoy a special 20% discount! Use code EARLYBIRD20 at checkout.
              </p>
              <div className="ticket-button">
                <Link to="/Booknow" className="btn">
                  GET TICKETS NOW
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

export default Testimonials;
