import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const accessData = [
  {
    category: "Your PROFX Pass",
    options: [
      { name: "Visitor/Elite/Business", action: "Upgrade Here" },
      { name: "Executive", action: "Auto-Included" },
      { name: "VIP", action: "Scan QR On-Site" },
    ],
  },
  {
    category: "Summit Perks",
    options: [
      { name: "Keynotes Only (Add-On ₹999)", action: "Upgrade Here" },
      { name: "Full Sessions + Lounge", action: "Auto-Included" },
      { name: "Everything Free + Cross-Event VIP", action: "Scan QR On-Site" },
    ],
  },
];

const AccessSynergies = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="access-synergies py-5 mt-5">
      <div className="container">
        <div className="row text-center mb-5">
          <div className="col">
            <p className="pink mb-1">Access & Synergies</p>
            <h2 className="black fw-bold">
              Your <span className="pink">PROFX Pass Benefits</span>
            </h2>
            <p className="text-grey">
              Explore tiered access and summit perks to maximize your experience.
            </p>
          </div>
        </div>

        <div className="accordion" id="PROFXAccordion">
          {accessData.map((section, idx) => (
            <div className="accordion-item mb-3 shadow-sm rounded" key={idx}>
              <h2
                className="as-accordion-header bg-lightgrey p-3 d-flex justify-content-between align-items-center"
                onClick={() => toggleAccordion(idx)}
              >
                <span className="fw-bold cat-title">{section.category}</span>
                <ChevronDown
                  className={`accordion-icon transition ${activeIndex === idx ? "rotate" : ""}`}
                />
              </h2>

              <div
                className={`accordion-collapse transition ${activeIndex === idx ? "show" : ""}`}
              >
                <div className="accordion-body p-3">
                  <table className="table table-striped text-center mb-0">
                    <thead>
                      <tr>
                        <th>Option</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {section.options.map((opt, i) => (
                        <tr
                          key={i}
                          className="table-row-hover rounded"
                        >
                          <td>{opt.name}</td>
                          <td>
                            <button className="btn w-lg-50 w-100 bg-blue text-white rounded-pill px-3 py-1">
                              {opt.action}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccessSynergies;
