import React from "react";

const EventFeatures = () => {
  return (
    <>
      {/*!-- Theme Spotlight Section Start --*/}
      <section className="event-feature py-8">
        <div className="container">
          <div className="row justify-content-center text-center pb-5">
            <div className="col-lg-8">
              <p
                className="mb-1 pink"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                FEATURES
              </p>

              <h2
                className="black fw-bold pb-3"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Why <span className="pink"><b>PROFX SUMMIT DUBAI 2026</b></span> Matters
              </h2>

              <p className="text-grey" data-aos="fade-up">
                Discover how global finance, trading innovation, and financial
                technology are shaping the future of the industry.
              </p>
            </div>
          </div>

          <div className="row">
            {/* Column 1 */}
            <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-right">
              <div className="feature-box p-4 bg-lightgrey rounded-4 h-100 text-center">
                <div className="feature-icon mb-3">
                  <img
                    src="assets/images/resources/blockchain.png"
                    alt="icon"
                    className="w-25"
                  />
                </div>

                <h4 className="black fw-bold pb-2">
                  Global Finance Insights
                </h4>

                <h6 className="pink fw-semibold pb-2">
                  Learn from Industry Leaders
                </h6>

                <p className="text-grey">
                  Gain valuable insights from global leaders across Forex, FinTech,
                  and digital finance. PROFX Summit delivers expert-led sessions
                  covering market trends, regulations, and emerging financial
                  technologies.
                </p>
              </div>
            </div>

            {/* Column 2 */}
            <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up">
              <div className="feature-box p-4 bg-lightgrey rounded-4 h-100 text-center">
                <div className="feature-icon mb-3">
                  <img
                    src="assets/images/resources/metaverse.png"
                    alt="icon"
                    className="w-25"
                  />
                </div>

                <h4 className="black fw-bold pb-2">
                  Live Exhibitions & Networking
                </h4>

                <h6 className="pink fw-semibold pb-2">
                  Connect, Collaborate, Grow
                </h6>

                <p className="text-grey">
                  Explore live exhibition booths and engage directly with brokers,
                  technology providers, and service firms while networking with
                  decision-makers, investors, and innovators from around the world.
                </p>
              </div>
            </div>

            {/* Column 3 */}
            <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-left">
              <div className="feature-box p-4 bg-lightgrey rounded-4 h-100 text-center">
                <div className="feature-icon mb-3">
                  <img
                    src="assets/images/resources/crypto.png"
                    alt="icon"
                    className="w-25"
                  />
                </div>

                <h4 className="black fw-bold pb-2">
                  Recognition & Awards
                </h4>

                <h6 className="pink fw-semibold pb-2">
                  Celebrating Excellence in Finance
                </h6>

                <p className="text-grey">
                  The summit concludes with the prestigious PROFX Awards Ceremony,
                  honoring companies and individuals who have demonstrated innovation,
                  leadership, and outstanding performance in the global financial
                  ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*!-- Theme Spotlight Section End --*/}

    </>
  );
};

export default EventFeatures;
