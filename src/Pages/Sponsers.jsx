import React, { useEffect, useState } from "react";
import Breadcrumb from "../Components/Breadcrumb";
import { Link } from "react-router-dom";
import { getsponsersbrochure } from "../api/sponsersbrochure";
import Pagehelmet from "../Components/Pagehelmet";
import { buildAssetUrl } from "../utils/assetUrl";

function Sponsers() {

  const [brochure, setBrochure] = useState([]);

  useEffect(() => {
    getBrochureList();
  }, []);

  const getBrochureList = () => {
    getsponsersbrochure()
      .then((res) => {
        setBrochure(res?.data?.topics || []);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Pagehelmet pageTitle="Our Sponsors" />
      <Breadcrumb title="Our Sponsors" />

      {/* -- Sponsor Hero Section Start -- */}
      <section className="sponsor-hero py-10 py-md-14">
        <div className="container">
          <div className="row align-items-center g-4">

            {/* Content */}
            <div className="col-lg-7">
              <h2 className="sponsor-title mb-3">
                Sponsorship Opportunities:{" "}
                <span className="highlight-text">
                  Maximize Your Brand Visibility
                </span>
              </h2>

              <p className="text-grey fs-5 mb-4">
                PROFX EXPO AFRICA 2026 offers a wide range of sponsorship
                opportunities designed to maximize your brand exposure,
                authority, and engagement across the summit venue, digital
                platforms, and marketing campaigns.
              </p>

              {/* API Download Buttons */}
              <div className="row">
                {brochure.map((item) => (
                  <div
                    className="col-lg-6 col-md-6 mb-3"
                    data-aos="fade-up"
                    data-aos-delay="850"
                    key={item.id}
                  >
                    <a
                      href={item?.attach_file}
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                      className="btn primary-btn px-4 py-3 w-100"
                    >
                      Download Sponsorship Brochure
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="col-lg-5">
              <img
                src={buildAssetUrl(
                  "/assets/images/resources/sponsor-hero.jpg"
                )}
                alt="Sponsor"
                className="img-fluid rounded shadow-lg"
              />
            </div>

          </div>
        </div>
      </section>
      {/* -- Sponsor Hero Section End -- */}


      {/* --Partner Perks Deep Dive (Premium Edition)-- */}
      <section
        className="partner-perks py-12"
        style={{
          background: "linear-gradient(135deg, #fdfdfd, #f6f5ea)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="glow-1"></div>
        <div className="glow-2"></div>

        <div className="container position-relative">

          {/* Title */}
          <div className="text-center mb-8">
            <p className="pink mb-1 fw-bold">ELEVATE YOUR BRAND</p>

            <h2 className="display-5 fw-bold mb-3">
              PARTNER PERKS
              <span className="pink"> - DEEP DIVE</span>
            </h2>

            <p className="text-grey w-lg-60 mx-auto fs-5">
              Premium visibility, targeted engagement, and measurable designed
              for financial brands, FinTech innovators, and industry leaders
              participating in PROFX EXPO AFRICA 2026.
            </p>
          </div>

          {/* Premium Perks Cards */}
          <div className="row g-4">

            {/* Card 1 */}
            <div className="col-lg-4 col-md-6">
              <div className="perk-premium-card h-100 p-5 rounded-4">
                <div className="perk-icon mb-3">
                  <img
                    src={buildAssetUrl(
                      "/assets/images/resources/reach.png"
                    )}
                    className="img-fluid"
                    alt="reach"
                  />
                </div>

                <h4 className="black fw-bold mb-2">Reach</h4>

                <p className="text-grey fs-6 mb-3">
                  5,000+ attendees and extended cross-promotion across digital channels.
                </p>

                <p className="m-0">
                  Connect with a global finance and trading audience for maximum visibility.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-lg-4 col-md-6">
              <div className="perk-premium-card h-100 p-5 rounded-4">
                <div className="perk-icon mb-3">
                  <img
                    src={buildAssetUrl(
                      "/assets/images/resources/engage.png"
                    )}
                    className="img-fluid"
                    alt="engage"
                  />
                </div>

                <h4 className="black fw-bold mb-2">Engage</h4>

                <p className="text-grey fs-6 mb-3">
                  Branded lounges, app highlights, VIP zones, and targeted campaigns.
                </p>

                <p className="m-0">
                  Build meaningful connections with decision-makers, investors,
                  and industry leaders.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-lg-4 col-md-6">
              <div className="perk-premium-card h-100 p-5 rounded-4">
                <div className="perk-icon mb-3">
                  <img
                    src={buildAssetUrl(
                      "/assets/images/resources/measure.png"
                    )}
                    className="img-fluid"
                    alt="measure"
                  />
                </div>

                <h4 className="black fw-bold mb-2">Measure</h4>

                <p className="text-grey fs-6 mb-3">
                  Real-time dashboards tracking meetings, scans, and lead conversions.
                </p>

                <p className="m-0">
                  Transparent metrics to evaluate and optimize future sponsorship activations.
                </p>
              </div>
            </div>

          </div>

          {/* Story Block */}
          <div className="story-premium mt-10 p-5 rounded-4 text-center mx-auto">
            <p className="fw-bold black mb-2">Success Story</p>

            <h4 className="pink fw-bold mb-3 fs-3">
              “Last Year’s Title Sponsorship Generated 200+ High-Value Partnerships.”
            </h4>

            <p className="text-grey fs-6 mb-0">
              Strategic positioning + targeted audience = exponential network
              expansion and brand recognition.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center mt-6">
            <p className="fw-bold pink fs-5 mb-3">Ready to Partner?</p>

            <div className="d-flex flex-column flex-md-row justify-content-center gap-3">

              <Link
                to="/Contact"
                className="btn btn-primary px-5 py-3 rounded-pill fw-bold"
                style={{
                  background: "linear-gradient(230deg, #0e5941, #15831d)",
                  border: "none",
                  fontSize: "1.1rem",
                }}
              >
                Share Your Goals
              </Link>

              <a
                href="tel:+971588845033"
                className="btn px-5 py-3 fw-bold"
                style={{ fontSize: "1.1rem" }}
              >
                Call +971 58 884 5033
              </a>

            </div>
          </div>
        </div>
      </section>


      {/*--Next Sponsor Section start--*/}
      <section className="next-sponser position-relative">
        <div className="overlay"></div>

        <div className="container">
          <div className="next-sponser-inner w-lg-60 w-md-75 mx-auto text-center position-relative text-white">

            <div className="next-sponser-title">
              <h5 className="text-white mb-1">LET'S DO IT HURRY</h5>

              <h1 className="text-white mb-2">
                Interested in becoming our
                <span className="pink"> Next Sponsors</span>
              </h1>
            </div>

            <div className="next-sponser-info">
              <p>
                Join hands with <b>PROFX EXPO AFRICA 2026</b> to elevate your
                brand in the dynamic world of Forex.
              </p>

              <div className="next-sponser-button">
                <Link to="/Booknow" className="btn btn1">
                  Become a Sponsor
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/*--Next Sponsor Section end--*/}

    </div>
  );
}

export default Sponsers;