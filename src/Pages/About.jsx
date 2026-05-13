import React from "react";
import Breadcrumb from "../Components/Breadcrumb";
import { Link } from "react-router-dom";
import Pagehelmet from "../Components/Pagehelmet";
import AboutSection from "../Components/AboutSection ";
import OurVision from "../Components/OurVision";
import CorePillars from "../Components/CorePillars";
import AccessSynergies from "../Components/AccessSynergies";
import DirectionSection from "../Components/DirectionSection";
import LetsDoIt from "../Components/LetsDoIt";

function About() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Pagehelmet pageTitle="About Us" />
      <Breadcrumb title="About Us" />

      {/*--Overview Section start--*/}
      <section className="overview pb-0">
        <div className="container">
          <div className="inner-overview pb-10 position-relative border-dashed-bottom-2">
            <div className="row">
              {/* Left Text Content */}
              <div className="col-lg-6">
                <div className="overview-left text-center text-lg-start">
                  <div className="overview-title pb-4">
                    <p className="mb-1 pink">OVERVIEW</p>
                    <h2 className="mb-2">
                      GET THE LATEST INFO ABOUT{" "}
                      <span className="pink">
                        <b>PROFX SUMMIT 2026</b>
                      </span>
                    </h2>
                    <p data-aos="fade-right" data-aos-delay="1100">
                      <b>PROFX SUMMIT DUBAI 2026</b> is a premier international financial
                      gathering that brings together global leaders from Forex,
                      FinTech, Blockchain, and digital finance under one roof.
                    </p>
                    <p className="mb-2" data-aos="fade-right" data-aos-delay="1200">
                      The two-day summit features expert-led discussions, live
                      exhibition booths, continuous networking opportunities, and a
                      prestigious awards ceremony recognizing excellence across the
                      global financial ecosystem.
                    </p>
                  </div>

                  {/* Event Info Boxes */}
                  <div className="overview-event-info pb-6 g-4 text-start position-absolute">
                    <div className="row justify-content-around">
                      {/* Where */}
                      <div className="col-lg-6 col-md-6">
                        <a>
                          <div className="event-info-box align-items-center d-flex p-4 rounded bg-white box-shadow my-2" data-aos="fade-right" data-aos-delay="1300">
                            <div className="event-info-icon text-center">
                              <i className="fa fa-map-marker text-white bg-pink rounded-circle me-3"></i>
                            </div>
                            <div className="location-info">
                              <Link to="/Contact">
                                <h5 className="mb-1">WHERE</h5>
                                <small className="pink">
                                  Le Meridian, Airport Road, Dubai UAE
                                </small>
                              </Link>
                            </div>
                          </div>
                        </a>
                      </div>

                      {/* When */}
                      <div className="col-lg-6 col-md-6">
                        <a>
                          <div className="event-info-box align-items-center d-flex p-4 rounded bg-white box-shadow my-2" data-aos="fade-left" data-aos-delay="1400">
                            <div className="event-info-icon text-center">
                              <i className="fa fa-calendar-o text-white bg-pink rounded-circle me-3"></i>
                            </div>
                            <div className="time-info">
                              <Link to="/Contact">
                                <h5 className="mb-1">WHEN</h5>
                                <small className="pink">
                                  Thu & Fri <br /> December 10-11, 2026
                                </small>
                              </Link>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Images */}
              <div className="col-lg-6">
                <div className="overview-img">
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6 p-0">
                      <div className="container-img-left mb-2">
                        <div className="img-left-1 float-end w-lg-80">
                          <img
                            className="mb-2 w-100 rounded"
                            src="assets/images/group/1.jpg"
                            alt="blockchain-session"
                          />
                        </div>
                        <div className="img-left-2">
                          <img
                            src="assets/images/group/2.jpg"
                            alt="networking"
                            className="w-100 rounded"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="container-img-right w-lg-75">
                        <img
                          src="assets/images/group/3.jpg"
                          alt="expo-floor"
                          className="w-100 rounded"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*--Overview Section end--*/}

      {/* --About Section Start-- */}
      <AboutSection />
      {/*--About Section End-- */}

      {/* Timeline Section Start */}
      <OurVision />
      {/* Timeline Section End */}

      {/* Core Pillars Section Start */}
      <CorePillars />
      {/* Core Pillars Section End */}

      {/* Core Pillars Section Start */}
      {/* <AccessSynergies /> */}
      {/* Core Pillars Section End */}

      {/*--Conference Section Start--*/}
      <section className="conference py-5">
        <div className="container">
          <div className="conference-inner text-center">
            <div className="row gx-lg-5 align-items-center">
              {/* Left Column - Benefits List */}
              <div className="col-lg-6 order-2 order-lg-1">
                <div className="conference-left">
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6 px-2 pt-2">
                      <div className="event-benefit-list-left mb-4">
                        <div className="benefit-card py-5 px-4 rounded mb-4 box-shadow bg-white text-center hover-animate">
                          <div className="list-box-icon mb-3">
                            <i className="fa fa-users pink fs-3"></i>
                          </div>
                          <h5 className="mb-2 black">Networking Opportunities</h5>
                          <p className="mb-3 text-grey">
                            Connect with 5,000+ finance professionals, innovators, and decision-makers from across the globe.
                          </p>
                          <Link
                            to="/Eventlists"
                            className="btn bg-blue text-white px-3 py-1 rounded-pill"
                          >
                            Learn More <i className="fa fa-long-arrow-right ms-2"></i>
                          </Link>
                        </div>

                        <div className="benefit-card py-5 px-4 rounded box-shadow bg-white text-center hover-animate">
                          <div className="list-box-icon mb-3">
                            <i className="fa fa-globe pink fs-3"></i>
                          </div>
                          <h5 className="mb-2 black">Global Insights</h5>
                          <p className="mb-3 text-grey">
                            Gain knowledge on international finance, trading innovation, FinTech, and Forex integration.
                          </p>
                          <Link
                            to="/Eventlists"
                            className="btn bg-blue text-white px-3 py-1 rounded-pill"
                          >
                            Learn More <i className="fa fa-long-arrow-right ms-2"></i>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 px-2">
                      <div className="benefit-card py-5 px-4 rounded box-shadow bg-white text-center hover-animate">
                        <div className="list-box-icon mb-3">
                          <i className="fa fa-bar-chart pink fs-3"></i>
                        </div>
                        <h5 className="mb-2 black">Exhibition & Showcase</h5>
                        <p className="mb-3 text-grey">
                          Explore live exhibition booths featuring Forex, FinTech, digital assets, and trading solutions from leading companies.
                        </p>
                        <Link
                          to="/Eventlists"
                          className="btn bg-blue text-white px-3 py-1 rounded-pill"
                        >
                          Learn More <i className="fa fa-long-arrow-right ms-2"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Section Info */}
              <div className="col-lg-6 order-1 order-lg-2">
                <div className="event-benefit-list-right text-lg-start ps-lg-5">
                  <div className="overview-title pb-4">
                    <p className="mb-1 pink">WHY ATTEND</p>
                    <h2 className="mb-3 black fw-bold">
                      Discover the <span className="pink">PROFX Summit Advantage</span>
                    </h2>
                  </div>
                  <div className="overview-info text-grey">
                    <p>
                      Attend <b><b>PROFX SUMMIT DUBAI 2026</b></b> - a two-day international finance summit - to learn from expert keynote speakers, panelists, Exhibitors and industry innovators. Explore the latest in Forex, FinTech, blockchain, and trading innovation while networking with global leaders.
                    </p>
                    <p>
                      Join 100+ speakers, 50+ sessions, and 5,000+ attendees to gain actionable insights, connect with top companies, and experience live exhibitions and strategic networking.
                    </p>
                    <div className="overview-btn mt-4">
                      <Link
                        to="/Booknow"
                        className="btn bg-blue text-white px-4 py-2 rounded-pill"
                      >
                        Join Event <i className="fa fa-long-arrow-right ms-2"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Right Column */}
            </div>
          </div>
        </div>
      </section>
      {/*--Conference Section end--*/}

      {/*--Speakers Section Start--*/}
      {/* <section className="speakers pt-0">
        <div className="container">
          <div className="speaker-inner">
            <div className="speaker-title text-center p-2">
              <div className="row align-items-center ">
                <div className="col-lg-6">
                  <div className="title-content  text-lg-start mb-2">
                    <p className="mb-1 pink">EVENT SPEAKERS</p>
                    <h2 className="mb-1">
                      MEET OUR <span className="pink">SPEAKERS</span>
                    </h2>
                    <p className="m-0">
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="speaker-button text-lg-end">
                    <Link to="/Speakerlists" className="btn">
                      VIEW MORE SPEAKERS
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="sepaker-list text-center text-white">
              <div className="row">
                <div className=" col-lg-3 col-md-6 p-2">
                  <div className="speaker-box  position-relative overflow-hidden text-white">
                    <img
                      className="speaker-image rounded w-100"
                      src="assets/images/speakers/1.jpg"
                      alt="speaker-image"
                    />
                    <div className="box-content position-absolute bottom-0 z-1">
                      <h6 className="speaker-title d-block text-white pb-1">
                        <Link to="/Speakerdetail">GERARDO AMBROSE</Link>
                      </h6>
                      <span className="speaker-post d-block pb-2">
                        Marketing Expert
                      </span>
                      <ul className="social-link pb-2 ps-0 d-flex gap-2 position-relative justify-content-center">
                        {["facebook", "twitter", "google", "instagram"].map(
                          (icon, i) => (
                            <li key={i} className="d-inline-block">
                              <a href="#" className="rounded d-block">
                                <i className={`fa fa-${icon}`}></i>
                              </a>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className=" col-lg-3 col-md-6 p-2">
                  <div className="speaker-box position-relative overflow-hidden">
                    <img
                      className="speaker-image rounded w-100"
                      src="assets/images/speakers/2.jpg"
                      alt="speaker-image"
                    />
                    <div className="box-content position-absolute bottom-0 z-1">
                      <h6 className="speaker-title d-block text-white pb-1">
                        <Link to="/Speakerdetail">GERARDO AMBROSE</Link>
                      </h6>
                      <span className="speaker-post d-block pb-2">
                        Marketing Expert
                      </span>
                      <ul className="social-link pb-2 ps-0 d-flex gap-2 position-relative justify-content-center">
                        {["facebook", "twitter", "google", "instagram"].map(
                          (icon, i) => (
                            <li key={i} className="d-inline-block">
                              <a href="#" className="rounded d-block">
                                <i className={`fa fa-${icon}`}></i>
                              </a>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 p-2">
                  <div className="speaker-box position-relative overflow-hidden">
                    <img
                      className="speaker-image rounded w-100"
                      src="assets/images/speakers/3.jpg"
                      alt="speaker-image"
                    />
                    <div className="box-content position-absolute bottom-0 z-1">
                      <h6 className="speaker-title d-block text-white pb-1">
                        <Link to="/Speakerdetail">GERARDO AMBROSE</Link>
                      </h6>
                      <span className="speaker-post d-block pb-2">
                        Marketing Expert
                      </span>
                      <ul className="social-link pb-2 ps-0 d-flex gap-2 position-relative justify-content-center">
                        {["facebook", "twitter", "google", "instagram"].map(
                          (icon, i) => (
                            <li key={i} className="d-inline-block">
                              <a href="#" className="rounded d-block">
                                <i className={`fa fa-${icon}`}></i>
                              </a>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 p-2">
                  <div className="speaker-box position-relative overflow-hidden">
                    <img
                      className="speaker-image rounded w-100"
                      src="assets/images/speakers/4.jpg"
                      alt="speaker-image"
                    />
                    <div className="box-content position-absolute bottom-0 z-1">
                      <h6 className="speaker-title d-block text-white pb-1">
                        <Link to="/Speakerdetail">GERARDO AMBROSE</Link>
                      </h6>
                      <span className="speaker-post d-block pb-2">
                        Marketing Expert
                      </span>
                      <ul className="social-link pb-2 ps-0 d-flex gap-2 position-relative justify-content-center">
                        {["facebook", "twitter", "google", "instagram"].map(
                          (icon, i) => (
                            <li key={i} className="d-inline-block">
                              <a href="#" className="rounded d-block">
                                <i className={`fa fa-${icon}`}></i>
                              </a>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/*--Speakers Section end--*/}

      {/*--Ticketbook Section start--*/}
      <LetsDoIt />
      {/*--Ticketbook Section end--*/}

      {/*--Direction Section start--*/}
      <DirectionSection />
      {/*--Direction Section end--*/}
    </div>
  );
}

export default About;
