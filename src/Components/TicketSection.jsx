import { BadgeCheck, OctagonX } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const TicketSection = () => {
  return (
    <>
      <section className="price bg-lightgrey">
        <div className="container">
          <div className="price-inner text-center">
            <div className="price-title mb-7 w-lg-60 m-auto">
              <p className="mb-1 pink">PRICING</p>
              <h2 className="mb-1">
                YOUR TICKET TO <span className="pink">SUMMIT</span>
              </h2>
              <p className="m-0">
                Choose from 4 powerful tiers-designed for trend explorers, skill
                builders, networkers, and deal-closers. Early Bird: 20% Off
                until Dec 31, 2026.
              </p>
            </div>

            <div className="price-options g-2 pb-6">
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-4">
                {/* General Tier */}
                <div className="">
                  <div className="ticket-box-inner bg-white position-relative rounded-bottom-5 d-flex flex-column" style={{ height: "100%" }}>
                    <img
                      src="assets/images/pattern/1.png"
                      alt="pattern"
                      className="w-100 pattern position-absolute rounded-top"
                    />

                    <div className="ticket-title py-6 bg-pink text-white">
                      <h4 className="mb-1 text-white">GENERAL PASS</h4>
                      <p>
                        <b>Best For:</b> Trend Explorers{" "}
                      </p>
                    </div>

                    <div className="ticket-price bg-white pt-6">
                      <div className="ticket-price-inner d-flex justify-content-center align-items-start black fw-bold">
                        <span className="me-1 mb-0 currency pink">₹</span>
                        <span className="me-1 m-0 tic-text pink">1,999</span>
                      </div>
                      <p className="mt-2">Per Person</p>
                    </div>

                    <div className="benifit-list bg-white px-4">
                      <ul className="list-unstyled m-0 p-0">
                        <li className="py-2 border-dashed-bottom-1">
                          <small>
                            Exhibition Hall Access
                          </small>
                        </li>
                        <li className="py-2 border-dashed-bottom-1">
                          <small>Main Conference Access</small>
                        </li>
                        <li className="py-2 border-dashed-bottom-1">
                          <small>Workshops (Limited Seats)</small>
                        </li>
                        <li className="py-2 border-dashed-bottom-1">
                          <small>Coffee/Tea Breaks</small>
                        </li>
                        <li className="py-2 border-dashed-bottom-1">
                          <small>
                            Standard Goodie Bag
                          </small>
                        </li>
                        <li className="pt-2">
                          <small>
                            App Access (Basic)
                          </small>
                        </li>
                      </ul>
                    </div>

                    <div className="ticket-button mt-auto p-6">
                      <Link to="/Pricing" className="btn">
                        BUY NOW
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Premium Tier */}
                <div className="">
                  <div className="ticket-box-inner bg-white position-relative rounded-bottom-5 d-flex flex-column" style={{ height: "100%" }}>
                    <img
                      src="assets/images/pattern/2.png"
                      alt="pattern"
                      className="w-100 pattern position-absolute rounded-top"
                    />

                    <div className="ticket-title py-6 bg-elite text-white">
                      <h4 className="mb-1 text-white">PREMIUM PASS</h4>
                      <p>
                        <b>Best For:</b> Skill Builders{" "}
                      </p>
                    </div>

                    <div className="ticket-price bg-white pt-6">
                      <div className="d-flex justify-content-center align-items-start fw-bold">
                        <span className="me-1 mb-0 currency elite">₹</span>
                        <span className="me-1 m-0 tic-text elite">3,499</span>
                      </div>
                      <p className="mt-2">Per Person</p>
                    </div>

                    <div className="benifit-list bg-white px-4">
                      <ul className="list-unstyled m-0 p-0">
                        <li className="py-2 border-dashed-bottom-1">
                          <small>
                            All General Pass Benefits
                          </small>
                        </li>
                        <li className="py-2 border-dashed-bottom-1">
                          <div>
                            <small>Priority Seating</small>
                          </div>
                        </li>
                        <li className="py-2 border-dashed-bottom-1">
                          <small>Guaranteed Workshops</small>
                        </li>
                        <li className="py-2 border-dashed-bottom-1">
                          <small>Lunch Included</small>
                        </li>
                        <li className="py-2 border-dashed-bottom-1">
                          <small>
                            Upgraded Goodie Bag
                          </small>
                        </li>
                        <li className="pt-2">
                          <small>
                            Priority Registration
                          </small>
                        </li>
                      </ul>
                    </div>

                    <div className="partner-button mt-auto p-6">
                      <Link to="/Pricing" className="btn" style={{ background: "#ae4b84" }}>
                        BUY NOW
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Business Tier */}
                <div className="">
                  <div className="ticket-box-inner bg-white position-relative rounded-bottom-5 d-flex flex-column" style={{ height: "100%" }}>
                    <img
                      src="assets/images/pattern/5.png"
                      alt="pattern"
                      className="w-100 pattern position-absolute rounded-top"
                    />

                    <div className="ticket-title py-6 bg-business text-white">
                      <h4 className="mb-1 text-white">BUSINESS PASS</h4>
                      <p>
                        <b>Best For:</b> Networkers{" "}
                      </p>
                    </div>

                    <div className="ticket-price bg-white pt-6">
                      <div className="d-flex justify-content-center align-items-start fw-bold">
                        <span className="me-1 mb-0 currency business">₹</span>
                        <span className="me-1 m-0 tic-text business">9,999</span>
                      </div>
                      <p className="mt-2">Per Person</p>
                    </div>

                    <div className="benifit-list bg-white px-4">
                      <ul className="list-unstyled m-0 p-0">
                        <li className="py-2 border-dashed-bottom-1">
                          <small>
                            All Premium Benefits
                          </small>
                        </li>
                        <li className="py-2 border-dashed-bottom-1">
                          <small>Reserved Business Seating</small>
                        </li>
                        <li className="py-2 border-dashed-bottom-1">
                          <small>Business Networking Zone</small>
                        </li>
                        <li className="py-2 border-dashed-bottom-1">
                          <small>Business Lounge Access</small>
                        </li>
                        <li className="py-2 border-dashed-bottom-1">
                          <small>Business Dinner Access</small>
                        </li>
                        <li className="py-2 border-dashed-bottom-1">
                          <small>Fast-Track Registration</small>
                        </li>
                        <li className="py-2 border-dashed-bottom-1">
                          <small>
                            Upgraded Goodie Bag
                          </small>
                        </li>
                        <li className="pt-2">
                          <small>
                            Priority Registration
                          </small>
                        </li>
                      </ul>
                    </div>

                    <div className="partner-button mt-auto p-5">
                      <Link to="/Pricing" className="btn" style={{ background: "#393182" }}>
                        BUY NOW
                      </Link>
                    </div>
                  </div>
                </div>

                {/* VIP Tier */}
                <div className="">
                  <div className="ticket-box-inner bg-white position-relative rounded-bottom-5 d-flex flex-column" style={{ height: "100%" }}>
                    <img
                      src="assets/images/pattern/4.png"
                      alt="pattern"
                      className="w-100 pattern position-absolute rounded-top"
                    />

                    <div className="ticket-title py-6 bg-vip text-white">
                      <h4 className="text-white mb-1">VIP PASS</h4>
                      <p>
                        <b>Best For:</b> Deal-Closers{" "}
                      </p>
                    </div>

                    <div className="ticket-price pt-6 bg-white">
                      <div className="d-flex justify-content-center align-items-start fw-bold">
                        <span className="me-1 currency vip">₹</span>
                        <span className="me-1 tic-text vip">24,999</span>
                      </div>
                      <p className="mt-2">Per Person</p>
                    </div>

                    <div className="benifit-list px-4 bg-white">
                      <ul className="list-unstyled m-0 p-0">
                        <li className="py-2 border-dashed-bottom-1">
                          <small>
                            All Business Pass Benefits
                          </small>
                        </li>
                        <li className="py-2 border-dashed-bottom-1">
                          <small>Front-Row VIP Seating</small>
                        </li>
                        <li className="py-2 border-dashed-bottom-1">
                          <small>VIP Lounge Access</small>
                        </li>
                        <li className="py-2 border-dashed-bottom-1">
                          <small>VIP Lunch + Dinner (Both Days)</small>
                        </li>
                        <li className="py-2 border-dashed-bottom-1">
                          <small>VIP Gala Dinner</small>
                        </li>
                        <li className="py-2 border-dashed-bottom-1">
                          <small>Meet & Greet with Speakers</small>
                        </li>
                        <li className="py-2 border-dashed-bottom-1">
                          <small>VIP Gift Box</small>
                        </li>
                        <li className="pt-2">
                          <small>VIP App Badge</small>
                        </li>
                      </ul>
                    </div>

                    <div className="partner-button mt-auto p-5">
                      <Link to="/Pricing" className="btn" style={{ background: "#d7b56b" }}>
                        BUY NOW
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Student Tier */}
                <div className="">
                  <div className="ticket-box-inner bg-white position-relative rounded-bottom-5 d-flex flex-column" style={{ height: "100%" }}>
                    <img
                      src="assets/images/pattern/6.png"
                      alt="pattern"
                      className="w-100 pattern position-absolute rounded-top"
                    />

                    <div className="ticket-title py-6 bg-student text-white">
                      <h4 className="text-white mb-1">STUDENT PASS</h4>
                      <p>
                        <b>Note:</b> Valid Student ID{" "}
                      </p>
                    </div>

                    <div className="ticket-price pt-6 bg-white">
                      <div className="d-flex justify-content-center align-items-start fw-bold">
                        <span className="me-1 currency student">₹</span>
                        <span className="me-1 tic-text student">999</span>
                      </div>
                      <p className="mt-2">Per Person</p>
                    </div>

                    <div className="benifit-list px-4 bg-white">
                      <ul className="list-unstyled m-0 p-0">
                        <li className="py-2 border-dashed-bottom-1">
                          <small>
                            Exhibition + Main Stage Access
                          </small>
                        </li>
                        <li className="py-2 border-dashed-bottom-1">
                          <small>Selected Workshops</small>
                        </li>
                        <li className="py-2 border-dashed-bottom-1">
                          <small>Coffee/Tea Breaks</small>
                        </li>
                        <li className="py-2 border-dashed-bottom-1">
                          <small>Student Goodie Bag</small>
                        </li>
                        <li className="py-2 border-dashed-bottom-1">
                          <small>Student Networking Corner</small>
                        </li>
                        <li className="pt-2">
                          <small>Certificate of Participation</small>
                        </li>
                      </ul>
                    </div>

                    <div className="partner-button mt-auto p-5">
                      <Link to="/Pricing" className="btn" style={{ background: "#dc6601" }}>
                        BUY NOW
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="m-0">
              *All prices exclude 25% VAT. View our{" "}
              <a className="pink" href="#">
                Terms & Policy
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TicketSection;
