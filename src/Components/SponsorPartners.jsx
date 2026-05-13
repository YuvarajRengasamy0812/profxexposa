import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

// SponsorSection component
const SponsorSection = ({ title, items, single = false, showTitle = true }) => (
    <div className="text-center mb-3">
        <h5 className="profx-sponsors-title mb-4">{title}</h5>

        <div className={`row justify-content-center ${single ? "" : "g-4"}`}>
            {items.map((item, index) => (
                <div
                    key={index}
                    className={
                        single
                            ? "col-12 d-flex justify-content-center"
                            : "col-12 col-md-3 d-flex justify-content-center"
                    }
                >
                    <div className="text-center">
                        <a
                            href={item.description} // API "description" is the URL
                            target="_blank"
                            rel="noopener noreferrer"
                            className="profx-sponsors-card d-block"
                        >
                            {item.image ? (
                                <img src={item.image} alt={item.title} />
                            ) : (
                                <span>{item.title}</span> // fallback if no image
                            )}
                        </a>

                        {/* Show title under logo only if showTitle is true */}
                        {showTitle && <p className="mt-3 mb-0 fw-bold pink">{item.title}</p>}
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default function SponsorPartners() {
    const [sponsors, setSponsors] = useState([]);

    useEffect(() => {
        const fetchSponsors = async () => {
            try {
                const { data } = await axios.get(
                    `${process.env.REACT_APP_API_URL}/website/Sponsors`
                );

                if (data.success) {
                    setSponsors(data.categories);
                }
            } catch (error) {
                console.error("Error fetching sponsors:", error);
            }
        };

        fetchSponsors();
    }, []);

    // Function to find category by title
    const getCategoryItems = (title) => {
        const category = sponsors.find(
            (cat) => cat.title.toUpperCase() === title.toUpperCase()
        );
        return category ? category.topics : [];
    };

    return (
        <section className="profx-sponsors-section py-5 bg-white">
            {/* Section Title */}
            <div className="text-center mb-5 px-3 py-5">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-uppercase fw-medium mb-3"
                    style={{ letterSpacing: "0.2em", fontSize: "0.85rem", color: "#c19d38" }}
                >
                    PROFX EXPO AFRICA SPONSORS
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.10, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="fw-light"
                    style={{ color: "#223645", fontSize: "clamp(2rem, 4vw, 3rem)" }}
                >
                    CHECK{" "}
                    <span className="fw-semibold" style={{ color: "#c19d38" }}>
                        OUR SPONSORS
                    </span>{" "}
                    WHO MAKE IT
                    <br className="d-none d-md-block" />
                    <span className="fw-semibold"> POSSIBLE</span>
                </motion.h2>
            </div>

            {/* Sponsors Categories */}
            <div className="container">
                <SponsorSection
                    title="Official Sponsors"
                    items={getCategoryItems("OFFICIAL")}
                    single
                    showTitle={false}
                />
                <SponsorSection
                    title="Exclusive Sponsors"
                    items={getCategoryItems("EXCLUSIVE")}
                    single
                    showTitle={false}
                />
                <SponsorSection
                    title="Diamond Sponsors"
                    items={getCategoryItems("DIAMOND")}
                    single
                    showTitle={false}
                />
                <SponsorSection
                    title="Gold Sponsors"
                    items={getCategoryItems("GOLD")}
                    showTitle={false}
                />
                <SponsorSection
                    title="Silver Sponsors"
                    items={getCategoryItems("SILVER")}
                    showTitle={false}
                />
                <SponsorSection
                    title="Standard Sponsors"
                    items={getCategoryItems("STANDARD")}
                    showTitle={false}
                />
                <SponsorSection
                    title="Other Sponsors"
                    items={getCategoryItems("OTHERS")}
                    showTitle={true} // hide title for Others category
                />
            </div>
        </section>
    );
}
