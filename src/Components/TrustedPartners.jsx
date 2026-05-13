import React from "react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {getAllTrustedPartners } from "../api/trustedpartners";

export default function TrustedPartners() {

    const [isPaused, setIsPaused] = React.useState(false);
    const [trusted, setTrusted] = useState([]);

  useEffect(() => {
    getTrustedList();
  }, [])


  const getTrustedList = () => {
    getAllTrustedPartners()
      .then((res) => {
        setTrusted(res?.data?.topics);
      })
      .catch((err) => {
        console.log(err);
      });
  };


    return (
        <section className="bg-white py-5 overflow-hidden">
            {/* Title */}
            <div className="text-center mb-5 px-3 py-5">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-uppercase fw-medium mb-3"
                    style={{ letterSpacing: "0.2em", fontSize: "0.85rem", color: "#e91e63" }}
                >
                    Our Partners
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.10, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="fw-light"
                    style={{ color: "#223645", fontSize: "clamp(2rem, 4vw, 3rem)" }}
                >
                    Trusted By{" "}
                    <span className="fw-semibold" style={{ color: "#e91e63" }}>
                        100+
                    </span>{" "}
                    Forex & Fintech
                    <br className="d-none d-md-block" />
                    <span className="fw-semibold"> Titans Worldwide</span>
                </motion.h2>
            </div>

            {/* Marquee */}
            <div
                className="position-relative"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {/* Gradients */}
                <div
                    className="position-absolute top-0 start-0 h-100"
                    style={{
                        width: "80px",
                        background: "linear-gradient(to right, #fff, transparent)",
                        zIndex: 10,
                    }}
                />
                <div
                    className="position-absolute top-0 end-0 h-100"
                    style={{
                        width: "80px",
                        background: "linear-gradient(to left, #fff, transparent)",
                        zIndex: 10,
                    }}
                />

                <div className="marquee-wrapper">
                    <div className="marquee-track">
                        {trusted.map((partner, index) => (
                            <a
                                key={`${partner.title}-${index}`}
                                href={partner.details}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="partner-card d-flex flex-column align-items-center justify-content-center px-4 px-md-5 py-4 rounded-4 text-decoration-none"
                            >
                                <div className="logo-box d-flex align-items-center justify-content-center">
                                    <img src={partner.photo_file} alt={partner.title} />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
