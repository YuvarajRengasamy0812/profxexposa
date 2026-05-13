import React from "react";
import { FileText } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="about-section py-5 position-relative mt-5">
      <div className="container">
        <div className="row align-items-center">

          {/* Left Text Content */}
          <div className="col-lg-6">
            <div className="about-text mb-4 mb-lg-0">
              <p className="small pink mb-2">ABOUT PROFX SUMMIT</p>
              <h2 className="mb-3">
                <b>PROFX SUMMIT DUBAI 2026</b> - <span className="pink">Global Finance, Trading & Innovation</span>
              </h2>
              <p className="text-dark mb-3">
                <b>PROFX SUMMIT DUBAI 2026</b> is an exclusive international finance summit bringing together the brightest minds and leading companies from Forex, FinTech, Blockchain, and financial innovation. Hosted in Dubai, one of the world’s leading financial hubs, the summit provides a powerful platform for knowledge exchange, brand visibility, and strategic collaboration.
              </p>
              <p className="text-dark mb-4">
                The event combines professional summit sessions with a live exhibition environment, allowing businesses to showcase their solutions while engaging directly with industry professionals. The summit concludes with the PROFX Awards, recognizing excellence and innovation across the financial ecosystem.
              </p>

              <a
                href="assets/brochure/PROFX SUMMIT 2026 - Event Brochure.pdf"
                target="_blank"
                className="btn btn-download d-inline-flex align-items-center px-4 py-2 rounded-pill"
              >
                <FileText size={20} className="me-2" />
                Download Event Brochure
              </a>
            </div>
          </div>

          {/* Right Visual / Illustration */}
          <div className="col-lg-6">
            <div className="about-image text-center">
              <img
                src="assets/images/resources/blockchain-hero.jpg"
                alt="Forex Illustration"
                className="img-fluid rounded shadow-sm animate-pulse"
              />
            </div>
          </div>

        </div>
      </div>
    </section>

  );
};

export default AboutSection;
