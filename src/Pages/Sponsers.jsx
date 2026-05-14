import React from "react";
import Breadcrumb from "../Components/Breadcrumb";
import { Link } from "react-router-dom";
import Pagehelmet from "../Components/Pagehelmet";

function Sponsers() {
  const brochureUrl = `${process.env.PUBLIC_URL}/assets/brochure/ProFx Expo Africa 2026 Capetown - Sponsorship Brochure.pdf`;

  return (
    <div>
      <Pagehelmet pageTitle="Our Sponsers" />
      <Breadcrumb title="Our Sponsers" />

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
                PROFX EXPO AFRICA 2026 offers a wide range of sponsorship opportunities designed to maximize your brand exposure, authority, and engagement across the summit venue, digital platforms, and marketing campaigns.
              </p>

              <a
                href={brochureUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn primary-btn px-4 py-3"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = brochureUrl;
                  link.download = "ProFx Expo Africa 2026 Capetown - Sponsorship Brochure.pdf";
                  link.click();
                }}
              >
                Download Sponsorship Brochure
              </a>
            </div>

            {/* Image / placeholder */}
            <div className="col-lg-5">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/resources/sponsor-hero.jpg`}
                alt="Sponsor"
                className="img-fluid rounded shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      {/* -- Sponsor Hero Section End -- */}


      {/* -- Sponsor Tiers Section Start -- */}
      {/* <section className="sponsor-tiers py-10 py-md-14 bg-lightgrey">
        <div className="container">
          <div className="col-lg-6 mx-auto">
            <div className="title-content text-lg-center mb-4">
              <p className="mb-1 pink">
                <b>PROFX EXPO AFRICA 2026</b> SPONSORS
              </p>
              <h2 className="mb-1">
                Tiered <span className="pink"> Opportunities</span>
              </h2>
              <p className="m-0">
                Choose your sponsorship level to maximize your brand's impact at PROFX EXPO AFRICA 2026.
              </p>
            </div>
          </div>

          <div className="row g-4">
            Title Sponsor
            <div className="col-md-6 col-lg-3">
              <div className="tier-card business-border p-4 rounded-4 shadow-sm h-100 d-flex flex-column">
                <h4 className="tier-title business mb-1">Title Sponsor</h4>
                <p className="tier-price mb-3">₹20 Lakhs</p>
                <p className="text-grey mb-3">
                  Lead the summit with maximum visibility and branding across the event. Ideal for top-tier global financial brands.
                </p>
                <ul className="tier-list mb-4">
                  <li>• Logo on all screens, app, and badges</li>
                  <li>• Opening keynote slot + 10-min dedicated talk</li>
                  <li>• VIP tickets + exclusive access</li>
                  <li>• Custom activation opportunities</li>
                </ul>
                <a href="/Contact" className="btn w-100 mt-auto" style={{ background: "linear-gradient(230deg, #0e5941, #15831d)", color: "#fff" }}>
                  2 Slots Left
                </a>
              </div>
            </div>

            Platinum Sponsor
            <div className="col-md-6 col-lg-3">
              <div className="tier-card elite-border p-4 rounded-4 shadow-sm h-100 d-flex flex-column">
                <h4 className="tier-title elite mb-1">Platinum Sponsor</h4>
                <p className="tier-price mb-3">₹12 Lakhs</p>
                <p className="text-grey mb-3">
                  Premium visibility and engagement across select zones and networking areas.
                </p>
                <ul className="tier-list mb-4">
                  <li>• Hosting rights for networking lounge</li>
                  <li>• App banner and session branding</li>
                  <li>• Stage demo opportunities</li>
                  <li>• Branded recap in post-event report</li>
                </ul>
                <a href="/Contact" className="btn w-100 mt-auto" style={{ background: "linear-gradient(230deg, #0e5941, #15831d)", color: "#fff" }}>
                  Inquire
                </a>
              </div>
            </div>

            Gold Sponsor
            <div className="col-md-6 col-lg-3">
              <div className="tier-card vip-border p-4 rounded-4 shadow-sm h-100 d-flex flex-column">
                <h4 className="tier-title vip mb-1">Gold Sponsor</h4>
                <p className="tier-price mb-3">₹7 Lakhs</p>
                <p className="text-grey mb-3">
                  Sponsor multiple sessions and gain exposure among industry professionals.
                </p>
                <ul className="tier-list mb-4">
                  <li>• Mentions in 2-3 sessions</li>
                  <li>• Tickets + priority networking access</li>
                  <li>• Branded refreshment breaks</li>
                  <li>• Feature in agenda app & emails</li>
                </ul>
                <a href="/Contact" className="btn w-100 mt-auto" style={{ background: "linear-gradient(230deg, #c19d38, #c19d38)", color: "#fff" }}>
                  Inquire
                </a>
              </div>
            </div>

            Networking Lounge Sponsor
            <div className="col-md-6 col-lg-3">
              <div className="tier-card pink-border p-4 rounded-4 shadow-sm h-100 d-flex flex-column">
                <h4 className="tier-title pink mb-1">Networking Lounge Sponsor</h4>
                <p className="tier-price mb-3">₹5 Lakhs</p>
                <p className="text-grey mb-3">
                  Brand a dedicated networking space to connect directly with attendees.
                </p>
                <ul className="tier-list mb-4">
                  <li>• Lounge branding and signage</li>
                  <li>• Exclusive lounge access for guests</li>
                  <li>• App promotion for your lounge</li>
                  <li>• Logo in virtual streams & press kits</li>
                </ul>
                <a href="/Contact" className="btn w-100 mt-auto" style={{ background: "linear-gradient(230deg, #c19d38, #c19d38)", color: "#fff" }}>
                  Inquire
                </a>
              </div>
            </div>

            Awards Sponsor
            <div className="col-md-6 col-lg-3">
              <div className="tier-card elite-border p-4 rounded-4 shadow-sm h-100 d-flex flex-column">
                <h4 className="tier-title elite mb-1">Awards Sponsor</h4>
                <p className="tier-price mb-3">₹5 Lakhs</p>
                <p className="text-grey mb-3">
                  Gain visibility during the prestigious ProFX Awards ceremony and celebrate excellence in the industry.
                </p>
                <ul className="tier-list mb-4">
                  <li>• Logo on awards stage & screens</li>
                  <li>• Mention during award announcements</li>
                  <li>• 2 VIP tickets for awards ceremony</li>
                  <li>• Feature in event press coverage</li>
                </ul>
                <a href="/Contact" className="btn w-100 mt-auto" style={{ background: "linear-gradient(230deg, #0e5941, #15831d)", color: "#fff" }}>
                  Inquire
                </a>
              </div>
            </div>

          </div>
        </div>
      </section> */}
      {/* -- Sponsor Tiers Section End -- */}


      {/* --Partner Perks Deep Dive (Premium Edition)-- */}
      <section
        className="partner-perks py-12"
        style={{
          background: "linear-gradient(135deg, #fdfdfd, #f6f5ea)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Soft gradient glows */}
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
              Premium visibility, targeted engagement, and measurable designed for financial brands, FinTech innovators, and industry leaders participating in PROFX EXPO AFRICA 2026.
            </p>
          </div>

          {/* Premium Perks Cards */}
          <div className="row g-4">
            {/* Card 1 */}
            <div className="col-lg-4 col-md-6">
              <div className="perk-premium-card h-100 p-5 rounded-4">
                <div className="perk-icon mb-3">
                  <img src={`${process.env.PUBLIC_URL}/assets/images/resources/reach.png`} className="img-fluid" alt="reach" />
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
                  <img src={`${process.env.PUBLIC_URL}/assets/images/resources/engage.png`} className="img-fluid" alt="engage" />
                </div>

                <h4 className="black fw-bold mb-2">Engage</h4>
                <p className="text-grey fs-6 mb-3">
                  Branded lounges, app highlights, VIP zones, and targeted campaigns.
                </p>
                <p className="m-0">
                  Build meaningful connections with decision-makers, investors, and industry leaders.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-lg-4 col-md-6">
              <div className="perk-premium-card h-100 p-5 rounded-4">
                <div className="perk-icon mb-3">
                  <img src={`${process.env.PUBLIC_URL}/assets/images/resources/measure.png`} className="img-fluid" alt="measure" />
                </div>

                <h4 className="black fw-bold mb-2">Measure</h4>
                <p className="text-grey fs-6 mb-3">
                  Real-time dashboards tracking meetings, scans, and lead conversions.
                </p>
                <p className="m-0">
                  Transparent metrics to evaluate   and optimize future sponsorship activations.
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
              Strategic positioning + targeted audience = exponential network expansion and brand recognition.
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
                className="btn px-5 py-3  fw-bold"
                style={{ fontSize: "1.1rem" }}
              >
                Call +971 58 884 5033
              </a>
            </div>
          </div>
        </div>

      </section>


      {/*--Next Sponser Section start--*/}
      <section className="next-sponser position-relative">
        <div className="overlay"></div>
        <div className="container">
          <div className="next-sponser-inner w-lg-60 w-md-75 mx-auto text-center position-relative text-white">
            <div className="next-sponser-title">
              <h5 className="text-white mb-1">LET'S DO IT HURRY</h5>
              <h1 className="text-white mb-2">
                Intrested in becoming our
                <span className="pink">Next Sponsers</span>
              </h1>
            </div>
            <div className="next-sponser-info">
              <p>
                Join hands with <b>PROFX EXPO AFRICA 2026</b> to elevate your
                brand in the dynamic world of Forex. Explore tailored sponsorship
                packages designed to maximize your visibility and engagement at
                Dubai premier Forex event.
              </p>
              <div className="next-sponser-button">
                <Link to="/Booknow" className="btn btn1">
                  Become a Sponser
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*--Next Sponser Section end--*/}
    </div>
  );
}

export default Sponsers;
