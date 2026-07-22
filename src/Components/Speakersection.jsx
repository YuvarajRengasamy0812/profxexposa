import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { getAllSpeakers } from "../api/speakers";
import { buildAssetUrl } from "../utils/assetUrl";

const Speakersection = () => {
  const [speakersData, setSpeakersData] = useState([]);

  useEffect(() => {
    let ignore = false;

    getAllSpeakers()
      .then((res) => {
        if (ignore) {
          return;
        }

        const data = res?.data || {};
        const topics = Array.isArray(data?.topics) ? data.topics : [];

        if (data.success) {
          const formattedData = topics.map((item) => {
            const fieldsObj = {};
            const fields = Array.isArray(item.fields) ? item.fields : [];

            fields.forEach((field) => {
              fieldsObj[field.field_title] = field.value;
            });

            return {
              id: item.id,
              name: item.title,
              designation: item.description,
              company: fieldsObj.company || "",
              image: item.image || buildAssetUrl("/assets/images/resources/avatar.png"),
              socials: {
                linkedin: fieldsObj.linkedin || "#",
                instagram: fieldsObj.instagram || "#",
              },
            };
          });

          setSpeakersData(formattedData);
        }
      })
      .catch((err) => console.error("API Error:", err));

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <section className="speakers">
      {/* Title */}
      <div className="text-center mb-2 px-3">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-uppercase fw-medium mb-3"
          style={{ letterSpacing: "0.2em", fontSize: "0.85rem", color: "#c19d38" }}
        >
          PROFX EXPO AFRICA 2026 SPEAKERS
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
          className="fw-light"
          style={{ color: "#223645", fontSize: "clamp(2rem, 4vw, 3rem)" }}
        >
          OUR <span className="fw-semibold" style={{ color: "#c19d38" }}>SPEAKERS</span>
        </motion.h2>
      </div>

      <div className="container">
        <div className="speaker-list text-center text-white">
          <div className="row">
            {speakersData.map((speaker) => (
              <div className="col-lg-3 col-md-6 p-2" key={speaker.id}>
                <div className="speaker-box position-relative overflow-hidden text-white" style={{ borderRadius: "25px" }}>
                  
                  <img
                    className="speaker-image rounded w-100"
                    src={speaker.image}
                    alt={speaker.name}
                  />

                  {/* Always visible overlay */}
                  <div className="profx-speakers-overlay">
                    <h6 className="mb-0">{speaker.name}</h6>
                    <span>{speaker.designation}</span>
                    <small>{speaker.company}</small>
                  </div>

                  {/* Hover content */}
                  <div className="box-content position-absolute bottom-0 z-1">
                    <h6 className="speaker-title d-block text-white pb-1">
                      <Link to="#">{speaker.name}</Link>
                    </h6>

                    <span className="speaker-post d-block pb-2">
                      {speaker.designation}<br />
                      {speaker.company}
                    </span>

                    {/* <ul className="social-link pb-2 ps-0 d-flex gap-2 position-relative justify-content-center">
                      {Object.entries(speaker.socials).map(([icon, url], idx) => (
                        <li key={idx} className="d-inline-block">
                          <a href={url} target="_blank" rel="noreferrer" className="rounded d-block">
                            <i className={`fa fa-${icon}`}></i>
                          </a>
                        </li>
                      ))}
                    </ul> */}

                
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speakersection;

