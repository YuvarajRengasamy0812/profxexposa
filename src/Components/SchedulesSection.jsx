import { Podcast } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const SchedulesSection = () => {
  return (
    <>
      <section className="schedules">
        <div className="container">
          <div className="schedule-inner">
            <div className="schedule-title text-center mb-6 w-lg-60 mx-auto">
              <p className="mb-1 pink">OUR AGENDA</p>
              <h2 className="mb-1">
                FOLLOW <span className="pink">EVENT</span> SCHEDULES
              </h2>
              <p className="m-0">
                <b>PROFX EXPO AFRICA 2026</b> is a two-day immersive experience featuring
                continuous summit sessions alongside a full-scale exhibition.
                Attendees can freely move between expert-led knowledge sessions,
                networking zones, and exhibitor booths throughout the event.
              </p>
            </div>

            {/* DAY 1 */}
            <div className="schedule-list-outer">
              <div className="schedule-list-top mb-7">
                <div className="row align-items-center align-items-lg-start align-items-md-start">
                  <div className="col-lg-3 col-md-4 mt-lg-5 mt-md-5 pt-lg-3 pt-md-3">
                    <div className="schedule-day text-center text-sm-start py-6 position-relative ps-2 z-1">
                      <h4 className="pink mb-2">1ST DAY</h4>
                      <h6 className="mb-2">AUGUST 10, 2026</h6>
                      <p>
                        PROFX EXPO AFRICA 2026
                        <br />
                        Cape Town, <br />South Africa
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-9 col-md-8">
                    <div className="schedule-list text-center text-sm-start">

                      <div className="schedule-list-box bg-white border border-lightpink border-2 rounded px-6 py-4 mb-5">
                        <h5>
                          <Link to="/Booknow" className="black">
                            OPENING CEREMONY & WELCOME ADDRESS
                          </Link>
                        </h5>
                        <p><small>Official inauguration of <b>PROFX EXPO AFRICA 2026</b></small></p>
                        <ul className="p-0">
                          <li className="d-inline">
                            <Podcast className="pink mx-2" />
                            <small>PROFX EXPO AFRICA TEAM</small>
                          </li>
                        </ul>
                      </div>

                      <div className="schedule-list-box bg-white border border-lightpink border-2 rounded px-6 py-4 mb-5">
                        <h5>
                          <Link to="/Booknow" className="black">
                            KEYNOTE SPEECHES BY GLOBAL INDUSTRY LEADERS
                          </Link>
                        </h5>
                        <p><small>Insights from leaders across Forex, FinTech & Trading</small></p>
                        <ul className="p-0">
                          <li className="d-inline">
                            <Podcast className="pink mx-2" />
                            <small>GLOBAL INDUSTRY LEADERS</small>
                          </li>
                        </ul>
                      </div>

                      <div className="schedule-list-box bg-white border border-lightpink border-2 rounded px-6 py-4 mb-5">
                        <h5>
                          <Link to="/Booknow" className="black">
                            PANEL DISCUSSION - FOREX, FINTECH & TRADING INNOVATION
                          </Link>
                        </h5>
                        <p><small>Expert discussions on market evolution and innovation</small></p>
                        <ul className="p-0">
                          <li className="d-inline">
                            <Podcast className="pink mx-2" />
                            <small>INDUSTRY PANEL</small>
                          </li>
                        </ul>
                      </div>

                      <div className="schedule-list-box bg-white border border-lightpink border-2 rounded px-6 py-4 mb-5">
                        <h5>
                          <Link to="/Booknow" className="black">
                            EXHIBITION BOOTHS OPEN
                          </Link>
                        </h5>
                        <p><small>Explore products and platforms all day</small></p>
                        <ul className="p-0">
                          <li className="d-inline">
                            <Podcast className="pink mx-2" />
                            <small>EXHIBITORS & PARTNERS</small>
                          </li>
                        </ul>
                      </div>

                      <div className="schedule-list-box bg-white border border-lightpink border-2 rounded px-6 py-4 mb-5">
                        <h5>
                          <Link to="/Booknow" className="black">
                            NETWORKING & BUSINESS MEETINGS
                          </Link>
                        </h5>
                        <p><small>Connect with investors and global professionals</small></p>
                        <ul className="p-0">
                          <li className="d-inline">
                            <Podcast className="pink mx-2" />
                            <small>PROFX NETWORK</small>
                          </li>
                        </ul>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              {/* DAY 2 */}
              <div className="schedule-title-bottom">
                <div className="row align-items-center align-items-lg-start align-items-md-start">
                  <div className="col-lg-3 col-md-4 mt-lg-5 mt-md-5 pt-lg-3 pt-md-3">
                    <div className="schedule-day text-center text-sm-start py-6 ps-2 z-1">
                      <h4 className="pink mb-2">2ND DAY</h4>
                      <h6 className="mb-2">AUGUST 11, 2026</h6>
                      <p>
                        PROFX EXPO AFRICA 2026
                        <br />
                        Cape Town, <br />South Africa
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-9 col-md-8">
                    <div className="schedule-list text-center text-sm-start">

                      <div className="schedule-list-box bg-white border border-lightpink border-2 rounded px-6 py-4 mb-5">
                        <h5>
                          <Link to="/Booknow" className="black">
                            EXPERT TALKS & FIRESIDE CHATS
                          </Link>
                        </h5>
                        <p><small>In-depth conversations with market experts</small></p>
                        <Podcast className="pink mx-2" /> <small>INVITED EXPERTS</small>
                      </div>

                      <div className="schedule-list-box bg-white border border-lightpink border-2 rounded px-6 py-4 mb-5">
                        <h5>
                          <Link to="/Booknow" className="black">
                            ADVANCED PANELS - MARKET TRENDS & TECHNOLOGY
                          </Link>
                        </h5>
                        <p><small>Deep dives into future markets and technology</small></p>
                        <Podcast className="pink mx-2" /> <small>TECH & MARKET PANEL</small>
                      </div>

                      <div className="schedule-list-box bg-white border border-lightpink border-2 rounded px-6 py-4 mb-5">
                        <h5>
                          <Link to="/Booknow" className="black">
                            EXHIBITION BOOTHS & PRODUCT SHOWCASES
                          </Link>
                        </h5>
                        <p><small>Live demos and product launches</small></p>
                        <Podcast className="pink mx-2" /> <small>EXHIBITORS</small>
                      </div>

                      <div className="schedule-list-box bg-white border border-lightpink border-2 rounded px-6 py-4 mb-5">
                        <h5>
                          <Link to="/Booknow" className="black">
                            INVESTOR & PARTNER NETWORKING
                          </Link>
                        </h5>
                        <p><small>Strategic meetings with investors and partners</small></p>
                        <Podcast className="pink mx-2" /> <small>INVESTORS & PARTNERS</small>
                      </div>

                      <div className="schedule-list-box bg-white border border-lightpink border-2 rounded px-6 py-4 mb-5">
                        <h5>
                          <Link to="/Booknow" className="black">
                            PROFX AWARDS CEREMONY
                          </Link>
                        </h5>
                        <p><small>Celebrating excellence in Forex & FinTech</small></p>
                        <Podcast className="pink mx-2" /> <small>PROFX EXPO AFRICA BOARD</small>
                      </div>

                      <div className="partner-button mt-6">
                        <Link to="/Eventlists" className="btn">
                          VIEW MORE DETAILS
                        </Link>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SchedulesSection;
