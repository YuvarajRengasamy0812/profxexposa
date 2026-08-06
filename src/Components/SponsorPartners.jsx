import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getAllSponsors } from "../api/sponsors";
import "./SponsorPartners.css";

const normalizeText = (value = "") =>
  String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

const normalizeSponsorsResponse = (data) => {
  const categories = data?.categories || data?.details || data?.data || [];
  return Array.isArray(categories) ? categories : [];
};

const normalizeSponsorItems = (items) => (Array.isArray(items) ? items : []);

const getSponsorImage = (item) =>
  item?.image || item?.topic_image || item?.thumbnail || item?.attach_file || "";

const getSponsorUrl = (item) => item?.description || item?.url || item?.link || "#";

const SponsorSection = ({
  title,
  items,
  single = false,
  showTitle = true,
  threePerRow = false,
}) => {
  if (!items.length) {
    return null;
  }

  return (
    <div className="profx-sponsors-group text-center">
      <h5 className="profx-sponsors-title">{title}</h5>

      <div
        className={`profx-sponsors-grid ${
          single ? "profx-sponsors-grid--single" : ""
        } ${threePerRow ? "profx-sponsors-grid--three" : ""}`}
      >
        {items.map((item, index) => {
          const image = getSponsorImage(item);
          const sponsorUrl = getSponsorUrl(item);
          const sponsorTitle = item?.title || item?.name || `${title} sponsor`;

          return (
            <div key={item.id ?? sponsorTitle ?? index} className="profx-sponsor-item">
              <div className="profx-sponsor-item-inner text-center">
                <a
                  href={sponsorUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="profx-sponsors-card"
                >
                  {image ? (
                    <img src={image} alt={sponsorTitle} loading="lazy" />
                  ) : (
                    <span>{sponsorTitle}</span>
                  )}
                </a>

                {showTitle && (
                  <p className="profx-sponsor-name fw-bold pink">{sponsorTitle}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default function SponsorPartners() {
  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    let ignore = false;

    getAllSponsors()
      .then((res) => {
        if (!ignore) {
          setSponsors(normalizeSponsorsResponse(res?.data));
        }
      })
      .catch((error) => {
        console.error("Error fetching sponsors:", error);
      });

    return () => {
      ignore = true;
    };
  }, []);

  const getCategoryItems = (...aliases) => {
    const normalizedAliases = aliases.map(normalizeText).filter(Boolean);
    const category = sponsors.find((cat) => {
      const title = normalizeText(cat?.title || cat?.name || cat?.category_name);
      return normalizedAliases.some(
        (alias) => title === alias || title.includes(alias) || alias.includes(title)
      );
    });

    return normalizeSponsorItems(category?.topics || category?.items || category?.sponsors);
  };

  const sections = [
    {
      title: "Official Sponsors",
      aliases: ["official"],
      single: true,
      showTitle: false,
    },
     {
      title: "Exclusive Sponsors",
      aliases: ["exclusive"],
      single: true,
      showTitle: false,
    },
      {
      title: "Regional  Sponsors",
      aliases: ["regional"],
      single: true,
      showTitle: false,
    },
    {
      title: "Elite Sponsors",
      aliases: ["elite", "elite hub", "elitehub"],
      showTitle: false,
    },
   
    {
      title: "Diamond Sponsors",
      aliases: ["diamond"],
      single: true,
      showTitle: false,
    },
    {
      title: "Gold Sponsors",
      aliases: ["gold"],
      showTitle: false,
    },
    {
      title: "Silver Sponsors",
      aliases: ["silver"],
      showTitle: false,
      threePerRow: true,
    },
    {
      title: "Standard Sponsors",
      aliases: ["standard"],
      showTitle: false,
    },
    {
      title: "Other Sponsors",
      aliases: ["others", "other"],
      showTitle: true,
    },
  ];

  return (
    <section className="profx-sponsors-section bg-white">
      <div className="profx-sponsors-intro text-center">
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
          transition={{ duration: 0.1, delay: 0.1 }}
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

      <div className="container profx-sponsors-container">
        {sections.map((section) => (
          <SponsorSection
            key={section.title}
            title={section.title}
            items={getCategoryItems(...section.aliases)}
            single={section.single}
            showTitle={section.showTitle}
            threePerRow={section.threePerRow}
          />
        ))}
      </div>
    </section>
  );
}