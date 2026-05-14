import CountUpBox from "../Components/CountUpBox";
import TestimonialSlider from "../Components/TestimonialSlider ";
import Gallery from "../Components/Gallery";
import { Link } from "react-router-dom";
import Countdown from "../Components/Countdown";
import EventSwitcher from "../Components/EventSwitcher";
import EventFeatures from "../Components/EventFeatures";
import RoleTabs from "../Components/RoleTabs";
import LivePulse from "../Components/LivePulse";
import DirectionSection from "../Components/DirectionSection";
import FaqSection from "../Components/FaqSection";
import SchedulesSection from "../Components/SchedulesSection";
// import TicketSection from "../Components/TicketSection";
import LetsDoIt from "../Components/LetsDoIt";
import BlogSection from "../Components/BlogSection";
// import Speakersection from "../Components/Speakersection";
import { getBrochure } from "../api/brochure";
import { useEffect, useState } from "react";
import TrustedPartners from "../Components/TrustedPartners";
// import FloorPlanDubai from "../Components/FloorPlanDubai";
import FloorPlanImage from "../Components/FloorPlanImage";
import MediaPartners from "../Components/MediaPartners";
import SponsorPartners from "../Components/SponsorPartners";
import Speakersection from "../Components/Speakersection";
import { buildAssetUrl } from "../utils/assetUrl";
// import PromoPopup from "../Components/PromoPopup";
function Home() {
  const [brochure, setBrochure] = useState([]);

  useEffect(() => {
    getSocialList();
  }, [])


  const getSocialList = () => {
    getBrochure()
      .then((res) => {
        setBrochure(res?.data?.topics);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div style={{ overflowX: "hidden" }}>
      {/* <PromoPopup /> */}
      {/*!-- Bannner section starts --*/}
      <section className="banner position-relative pb-0">
        <div className="overlay"></div>
        <div className="container">
          <div className="inner-banner position-relative text-white ">
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 z-1">
                <div className="banner-left text-center pb-lg-5 p-md-0">
                  <div className="banner-image"
                    data-aos="fade-up"
                    data-aos-delay="200">
                    <img
                      src={buildAssetUrl('/assets/images/team/4.png')}
                      alt="banner-image"
                      className="w-50 shake"
                    />
                    <br />
                  </div>
                  <div className="countdown"
                    data-aos="fade-up"
                    data-aos-delay="400">
                    <div
                      id="countdown"
                      className="countdown-inner d-flex w-100 bg-white p-2 rounded-5 justify-content-center box-shadow position-relative z-2"
                    >
                      <div className="d-flex flex-column">
                        <Countdown />
                        <EventSwitcher />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 order-1 order-lg-2">
                <div className="banner-right ms-2 text-center text-lg-start pb-8">
                  {/* Updated Title */}
                  <div
                    className="banner-title pb-3"
                    data-aos="fade-left"
                    data-aos-delay="300"
                  >
                    <a href="https://www.guinnessworldrecords.com/world-records/774828-most-participants-in-a-trading-competition">
                      <img
                        className="w-50 img-fluid mb-3"
                        src={buildAssetUrl('/assets/images//resources/guiness.png')}
                        alt="guiness"
                      />
                    </a>

                    <h4 className="text-white pb-3">PROFX EXPO AFRICA 2026</h4>

                    <h3 className="text-white">
                      Where Global Finance, Trading &{" "}
                      <span className="pink">Innovation</span> Meet
                    </h3>
                  </div>

                  {/* Updated Date & Venue */}
                  <div
                    className="banner-event-info pb-3"
                    data-aos="fade-left"
                    data-aos-delay="450"
                  >
                    <ul className="m-0 ps-0 d-sm-flex justify-content-center justify-content-lg-start list-unstyled banner-event-list">
                      <li className="pe-2 border-end border-1 border-lightgrey banner-event-item">
                        <i className="fa fa-calendar-o pe-1"></i>
                        <span>20 - 21 Aug 2026</span>
                      </li>
                      <li className="ps-2 banner-event-item banner-event-location">
                        <i className="fa fa-map-marker pe-1"></i>
                        <span>EXHIBITION HALL 5 CTICC 2, Cape Town, South Africa</span>
                      </li>
                    </ul>
                  </div>

                  {/* Updated Description */}
                  <div
                    className="event-discription"
                    data-aos="fade-left"
                    data-aos-delay="600"
                  >
                    <p className="pb-4 m-0">
                      <b>PROFX EXPO AFRICA 2026</b> is a premier international financial gathering
                      that brings together global leaders from Forex, FinTech, Blockchain, and
                      digital finance. The two-day summit features expert-led discussions,
                      live exhibition booths, high-level networking, and a prestigious awards
                      ceremony - all under one roof.
                    </p>

                    <div className="banner-button">
                      <div className="row">
                        <div className="col-lg-6 col-md-6" data-aos="fade-up">
                          <Link to="/Sponsers" className="btn me-3 my-1 w-100">
                            Sponsor the Event
                          </Link>
                        </div>

                        {brochure.map((item) => (
                          <div className="col-lg-6 col-md-6"
                            data-aos="fade-up"
                            data-aos-delay="850" key={item.id}>
                            <a
                              href={item?.attach_file}
                              target="_blank"
                              className="btn btn2 my-1 w-100"
                            >
                              Download Event Brochure
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="wave overflow-hidden position-absolute w-100 z-0"
          data-aos="fade-up"
          data-aos-delay="1000">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
            className="d-block position-relative"
          >
            <path
              className="elementor-shape-fill"
              d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3
              c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3
              c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z"
            ></path>
          </svg>
        </div>
      </section>
      {/*--Banner Section end--*/}

      {/*--Overview Section start--*/}
      <section className="overview pb-0">
        <div className="container">
          <div className="inner-overview pb-10 position-relative border-dashed-bottom-2">
            <div className="row">
              {/* Left Text Content */}
              <div className="col-lg-6">
                <div className="overview-left text-center text-lg-start">
                  <div className="overview-title pb-4">
                    <p className="mb-1 pink" data-aos="fade-up" data-aos-delay="800">OVERVIEW</p>
                    <h2 className="mb-2" data-aos="fade-right" data-aos-delay="900">
                      GET THE LATEST INFO ABOUT{" "}
                      <span className="pink" data-aos="fade-right" data-aos-delay="1000">
                        <b>PROFX EXPO AFRICA 2026</b>
                      </span>
                    </h2>
                    <p data-aos="fade-right" data-aos-delay="1100">
                      <b>PROFX EXPO AFRICA 2026</b> is a premier international financial
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
                                  EXHIBITION HALL 5 CTICC 2, Cape Town, South Africa
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
                                  Thu & Fri <br /> 20 - 21 Aug 2026
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
                        <div className="img-left-1 float-end w-lg-80" data-aos="zoom-in" data-aos-delay="1000">
                          <img
                            className="mb-2 w-100 rounded"
                            src={buildAssetUrl('/assets/images/group/1.jpg')}
                            alt="blockchain-session"
                          />
                        </div>
                        <div className="img-left-2" data-aos="zoom-in" data-aos-delay="1200">
                          <img
                            src={buildAssetUrl('/assets/images/group/2.jpg')}
                            alt="networking"
                            className="w-100 rounded"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6" data-aos="zoom-in" data-aos-delay="1400">
                      <div className="container-img-right w-lg-75">
                        <img
                          src={buildAssetUrl('/assets/images/group/3.jpg')}
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

      <EventFeatures />

      <LivePulse />

      <RoleTabs />


      {/*--Partners Section start--*/}
      <TrustedPartners />
      <SponsorPartners />
      <Speakersection />
      <MediaPartners />
      {/*--Partners Section end--*/}

      {/*--Features Section start--*/}
      <section className="feature text-white position-relative z-0 start-0">
        <div className="overlay z-n1"></div>
        <div className="container">
          <div className="feature-inner">
            {/* <div className="counter text-center border-bottom border-white border-opacity-25">
              <div className="inner-counter mb-7">
                <div className="row">
                  <div className="col-lg-3 col-md-3 p-2">
                    <div className="counter-box p-2 border-end border-white border-opacity-25">
                      <CountUpBox end={30} label="Speakers" />
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 p-2">
                    <div className="counter-box p-2 border-end border-white border-opacity-25">
                      <CountUpBox end={5000} label="Attendees" />
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 p-2">
                    <div className="counter-box p-2 border-end border-white border-opacity-25">
                      <CountUpBox end={25} label="Exhibition Booths" />
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 p-2">
                    <div className="counter-box p-2 border-opacity-25">
                      <CountUpBox end={40} suffix="M+" label="Industrial Awards" />
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            <div className="feature-lists pt-8">
              <div className="row g-4">
                <div className="col-lg-4 col-md-6">
                  <div className="feature-box py-7 h-100 px-6 rounded text bg-black bg-opacity-25">
                    <a>
                      <div className="feature-box-icon mb-4">
                        <i className="fa fa-address-book-o text-white bg-pink rounded-circle text-center"></i>
                      </div>
                      <div className="feature-box-info">
                        <h5 className="text-white mb-2">LIVE STREAMING</h5>
                        <small>
                          Access real-time sessions from global finance, trading,
                          and FinTech experts. Stream keynotes, panels, and workshops
                          from anywhere, ensuring you never miss critical insights.
                        </small>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="feature-box py-7 h-100 px-6 rounded bg-black bg-opacity-25">
                    <a>
                      <div className="feature-box-icon mb-4">
                        <i className="fa fa-comments text-white bg-pink rounded-circle text-center"></i>
                      </div>
                      <div className="feature-box-info">
                        <h5 className="text-white mb-2">FIRESIDE CHATS</h5>
                        <small>
                          Engage in intimate discussions with global finance leaders,
                          CEOs, and innovators. Gain actionable advice on trading,
                          investment strategies, and technology adoption in a relaxed,
                          interactive setting.
                        </small>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="feature-box py-7 h-100 px-6 rounded bg-black bg-opacity-25">
                    <a>
                      <div className="feature-box-icon mb-4">
                        <i className="fa fa-desktop text-white bg-pink rounded-circle text-center"></i>
                      </div>
                      <div className="feature-box-info">
                        <h5 className="text-white mb-2">NETWORKING</h5>
                        <small>
                          Connect with 5,000+ finance professionals, innovators,
                          investors, and company representatives in dedicated
                          networking areas to foster partnerships and business growth.
                        </small>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="feature-box py-7 h-100 px-6 rounded bg-black bg-opacity-25">
                    <a>
                      <div className="feature-box-icon mb-4">
                        <i className="fa fa-cogs text-white bg-pink rounded-circle text-center"></i>
                      </div>
                      <div className="feature-box-info">
                        <h5 className="text-white mb-2">HIGH-VALUE LEARNING</h5>
                        <small>
                          Participate in in-depth workshops, masterclasses, and
                          panel discussions delivered by 30+ industry leaders to
                          sharpen your skills and knowledge in finance, trading, and
                          technology.
                        </small>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="feature-box py-7 h-100 px-6 rounded bg-black bg-opacity-25">
                    <a>
                      <div className="feature-box-icon mb-4">
                        <i className="fa fa-gift text-white bg-pink rounded-circle text-center"></i>
                      </div>
                      <div className="feature-box-info">
                        <h5 className="text-white mb-2">EXCITING GIVEAWAYS</h5>
                        <small>
                          Participate in live draws and competitions to win exclusive
                          prizes, branded merchandise, and special recognition at
                          <b>PROFX EXPO AFRICA 2026</b>.
                        </small>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="feature-box py-7 h-100 px-6 rounded bg-black bg-opacity-25">
                    <a>
                      <div className="feature-box-icon mb-4">
                        <i className="fa fa-graduation-cap text-white bg-pink rounded-circle text-center"></i>
                      </div>
                      <div className="feature-box-info">
                        <h5 className="text-white mb-2">1-ON-1 SESSIONS</h5>
                        <small>
                          Schedule personalized meetings with investors, industry
                          experts, and regulators to gain tailored guidance and
                          accelerate your business strategy.
                        </small>
                      </div>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      {/*--Features Section end--*/}


      {/*--Speakers Section Start--*/}
      {/* <Speakersection /> */}
      {/*--Speakers Section end--*/}

      {/*--Ticketbook Section start--*/}
      <LetsDoIt />
      {/*--Ticketbook Section end--*/}

      {/*--Schedules Section start--*/}
      <SchedulesSection />
      {/*--Schedules Section end--*/}

      {/*--Pricing Section start--*/}
      {/* <TicketSection /> */}
      {/*--Pricing Section end--*/}

      {/* Floorplan Component */}
      {/* <FloorPlanDubai id="floorplan" /> */}
      <FloorPlanImage id="floorplan" />
      {/* Floorplan Component */}

      {/*--Gallery Section end--*/}
      <section className="gallery">
        <div className="container">
          <div className="galler-inner">
            <div className="section-title text-center mb-5">
              <div className="row align-items-center ">
                <div className="col-lg-6 pb-2">
                  <div className="title-content  text-lg-start">
                    <p className="mb-1 pink">OUR RECENT EVENT GALLERY</p>
                    <h2 className="mb-1">
                      WAS AN AMAGING <span className="pink">GALLERY</span>
                    </h2>
                    <p className="m-0">
                      Our Dubai expo, ProFX Expo Dubai 2025, earned an official Guinness World Record.
                      Top traders battled it out for a share of the $25,000 prize pool. A truly unforgettable milestone!
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="speaker-button text-lg-end">
                    <Link to="/Ourgallery" className="btn">
                      VIEW MORE SHOTS
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <Gallery limit={6} />
          </div>
        </div>
      </section>
      {/*--Gallery Section end--*/}

      {/*--Testimonials Section start--*/}
      <section className="testimonial bg-lightgrey">
        <div className="container">
          <div className="section-title w-lg-60 m-auto text-center pb-5">
            <p className="mb-1  pink">OUR TESTIMONIALS</p>
            <h2 className="mb-1">
              WHAT PEOPLES'S SAYS ABOUT{" "}
              <span className="pink">PROFX EXPO AFRICA 2026</span>
            </h2>
            <p className="m-0">
              Powerful Testimonials From Our Delegates And Speakers
            </p>
          </div>
          <TestimonialSlider />
        </div>
      </section>
      {/*--Testimonials Section end--*/}

      {/*--FAQ Section start--*/}
      <FaqSection />
      {/*--FAQ Section end--*/}

      {/*--Direction Section start--*/}
      <DirectionSection />
      {/*--Direction Section end--*/}

      {/*--Blog Section start--*/}
      {/* <BlogSection /> */}
      {/*--Blog Section end--*/}
    </div>
  );
}

export default Home;
