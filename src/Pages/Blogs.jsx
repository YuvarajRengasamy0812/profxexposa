import React from "react";
import Breadcrumb from "../Components/Breadcrumb";
import Pagehelmet from "../Components/Pagehelmet";

function Blogs() {
  return (
    <div>
      <Pagehelmet pageTitle="Blogs" />
      <Breadcrumb title="Blogs" />
      {/* -- Blog Hero Section -- */}
      <section className="blog-hero-section position-relative">
        <div className="container">
          <div className="row align-items-center g-5 py-10">
            {/* Left Text */}
            <div className="col-lg-6">
              <p className="pink fw-semibold mb-2">BLOG</p>
              <h1 className="display-5 fw-bold black mb-3">
                Forex Wisdom from the <span className="pink">Frontlines</span>
              </h1>
              <p className="text-grey fs-5 mb-4">
                Insider takes on Dubai Forex pivot - tutorials, news, and
                founder spotlights. Subscribe for weekly drops straight to your
                inbox.
              </p>

              <a href="#" className="btn blog-subscribe-btn">
                Subscribe - Get "2026 Trends" Free eBook
              </a>
            </div>

            {/* Right Featured Hero Image */}
            <div className="col-lg-6">
              <div className="blog-hero-img shadow-xl rounded-4 overflow-hidden">
                <img
                  src="assets/images/resources/blogs.jpg"
                  className="img-fluid"
                  alt="Featured Blog Banner"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* -- End Blog Hero Section -- */}

      {/* -- Blog Feed Section -- */}
      <section className="blog-feed-section py-10">
        <div className="container">
          <div className="text-center mb-8">
            <p className="pink mb-1 fw-bold">BLOG</p>

            <h2 className="display-5 fw-bold mb-3">
              In-Depth Articles
              <span className="pink"> from the Frontlines</span>
            </h2>

            <p className="text-grey w-lg-60 mx-auto fs-5">
              Explore expert insights on Forex trends, startup spotlights,
              and more.
            </p>
          </div>

          {/* -- Blog Filter Section -- */}
          <section className="blog-filter-section mt-0 pt-0">
            <div className="container text-center">
              <div className="filter-buttons d-inline-flex gap-3 flex-wrap">
                <button className="filter-btn active">All</button>
                <button className="filter-btn">Regulation</button>
                <button className="filter-btn">Tech</button>
                <button className="filter-btn">Case Studies</button>
              </div>
            </div>
          </section>
          {/* -- End Blog Filter Section -- */}
          {/* Masonry Grid */}
          <div className="row g-5">
            {/* Post 1 - Tax Article */}
            <div className="col-lg-4 col-md-6">
              <div className="blog-card p-4 rounded-4 shadow-sm">
                <span className="badge bg-pink text-white mb-3">
                  Tax Article
                </span>

                <h4 className="fw-bold black mb-2">
                  5 Crypto Tax Strategies for Dubain Traders in 2026
                </h4>

                <p className="text-grey small mb-2">
                  Post-legalization tips: From VDA offsets to DeFi reporting.
                  <br />{" "}
                  <span className="pink">
                    8 Min Read | By Summit Tax Expert
                  </span>
                </p>

                <p className="text-grey">
                  “RBI's new guidelines mean 30% savings if you structure
                  right...”
                </p>

                <div className="d-flex gap-3 mt-3">
                  <a className="pink fw-semibold" href="#">
                    Read Full
                  </a>
                </div>
              </div>
            </div>

            {/* Post 2 - Startups List */}
            <div className="col-lg-4 col-md-6">
              <div className="blog-card p-4 rounded-4 shadow-sm">
                <span className="badge bg-blue text-white mb-3">
                  Startups List
                </span>

                <h4 className="fw-bold black mb-2">
                  15 Dubain Forex Startups Pitching at Our Summit
                </h4>

                <p className="text-grey small mb-2">5 Min Read</p>

                <p className="text-grey">
                  Spot the next unicorn: DAOs disrupting remittances.
                </p>

                <div className="d-flex gap-3 mt-3">
                  <a className="pink fw-semibold" href="#">
                    Read Full
                  </a>
                </div>
              </div>
            </div>

            {/* Placeholder for 10+ more posts */}
            <div className="col-12 text-center mt-5">
              <button className="btn load-more-btn">Load More</button>
            </div>
          </div>
        </div>
      </section>
      {/* -- End Blog Feed Section -- */}

      {/* -- Contribute Corner -- */}
      <section className="contribute-corner py-12 bg-lightgrey">
        <div className="container text-center">
          <h2 className="fw-bold black mb-3">Contribute Corner</h2>
          <p className="text-grey fs-5 w-lg-50 mx-auto mb-4">
            Got a hot take on NFTs in Bollywood? Guest post approved in{" "}
            <strong>48 hours</strong> - with byline and promo.
          </p>

          <a href="#" className="btn submit-idea-btn">
            Submit Idea Form
          </a>
        </div>
      </section>
      {/* -- End Contribute Corner -- */}
    </div>
  );
}

export default Blogs;
