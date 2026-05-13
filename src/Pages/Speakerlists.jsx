import React from "react";
import Breadcrumb from "../Components/Breadcrumb";
import { Link } from "react-router-dom";
import Pagehelmet from "../Components/Pagehelmet";
import LetsDoIt from "../Components/LetsDoIt";

function Eventlists() {
  return (
    <div>
      <Pagehelmet pageTitle="Our Speakers" />
      <Breadcrumb title="Our Speakers" />

      {/*--Speakers Section Start--*/}
      <section className="speakers">
        <div className="container">
          <div className="col-lg-12">
            <div className="title-content text-center mb-2">
              <p className="mb-1 pink">
                <b>PROFX SUMMIT 2026</b> SPEAKERS
              </p>
              <h2 className="mb-1">
                MEET OUR{" "}
                <span className="pink"> Speakers: 100+ Industry Leaders & Experts</span>
              </h2>
              <p className="m-0">
                Curated from global finance, trading, FinTech, and Forex companies - CEOs, founders, regulators, and innovators. Filter, connect, and collaborate with thought-leaders shaping the future of global finance.
              </p>
            </div>
          </div>
          <div className="speaker-inner">
            <div className="sepaker-list text-center text-white">
              <div className="row row-cols-1 row-cols-lg-4 row-cols-md-2">
                <div className=" col p-2">
                  <div className="speaker-box  position-relative overflow-hidden text-white">
                    <img
                      className="speaker-image rounded w-100"
                      src="assets/images/speakers/1.jpg"
                      alt="speaker-image"
                    />
                    <div className="box-content position-absolute bottom-0 z-1">
                      <h6 className="speaker-title d-block text-white pb-1">
                        <Link to="">GERARDO AMBROSE</Link>
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
                <div className=" col p-2">
                  <div className="speaker-box position-relative overflow-hidden">
                    <img
                      className="speaker-image rounded w-100"
                      src="assets/images/speakers/2.jpg"
                      alt="speaker-image"
                    />
                    <div className="box-content position-absolute bottom-0 z-1">
                      <h6 className="speaker-title d-block text-white pb-1">
                        <Link to="">GERARDO AMBROSE</Link>
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
                <div className="col p-2">
                  <div className="speaker-box position-relative overflow-hidden">
                    <img
                      className="speaker-image rounded w-100"
                      src="assets/images/speakers/3.jpg"
                      alt="speaker-image"
                    />
                    <div className="box-content position-absolute bottom-0 z-1">
                      <h6 className="speaker-title d-block text-white pb-1">
                        <Link to="">GERARDO AMBROSE</Link>
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
                <div className="col p-2">
                  <div className="speaker-box position-relative overflow-hidden">
                    <img
                      className="speaker-image rounded w-100"
                      src="assets/images/speakers/4.jpg"
                      alt="speaker-image"
                    />
                    <div className="box-content position-absolute bottom-0 z-1">
                      <h6 className="speaker-title d-block text-white pb-1">
                        <Link to="">GERARDO AMBROSE</Link>
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
                <div className=" col p-2">
                  <div className="speaker-box position-relative overflow-hidden">
                    <img
                      className="speaker-image rounded w-100"
                      src="assets/images/speakers/2.jpg"
                      alt="speaker-image"
                    />
                    <div className="box-content position-absolute bottom-0 z-1">
                      <h6 className="speaker-title d-block text-white pb-1">
                        <Link to="">GERARDO AMBROSE</Link>
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
                <div className="col p-2">
                  <div className="speaker-box position-relative overflow-hidden">
                    <img
                      className="speaker-image rounded w-100"
                      src="assets/images/speakers/3.jpg"
                      alt="speaker-image"
                    />
                    <div className="box-content position-absolute bottom-0 z-1">
                      <h6 className="speaker-title d-block text-white pb-1">
                        <Link to="">GERARDO AMBROSE</Link>
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
                <div className="col p-2">
                  <div className="speaker-box position-relative overflow-hidden">
                    <img
                      className="speaker-image rounded w-100"
                      src="assets/images/speakers/4.jpg"
                      alt="speaker-image"
                    />
                    <div className="box-content position-absolute bottom-0 z-1">
                      <h6 className="speaker-title d-block text-white pb-1">
                        <Link to="">GERARDO AMBROSE</Link>
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
                <div className=" col p-2">
                  <div className="speaker-box  position-relative overflow-hidden text-white">
                    <img
                      className="speaker-image rounded w-100"
                      src="assets/images/speakers/1.jpg"
                      alt="speaker-image"
                    />
                    <div className="box-content position-absolute bottom-0 z-1">
                      <h6 className="speaker-title d-block text-white pb-1">
                        <Link to="">GERARDO AMBROSE</Link>
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
      </section>
      {/*--Speakers Section end--*/}

      {/*--Ticketbook Section start--*/}
      <LetsDoIt />
      {/*--Ticketbook Section end--*/}
    </div>
  );
}

export default Eventlists;
