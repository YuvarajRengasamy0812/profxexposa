import React, { useState } from "react";
import { X, ArrowRight, User, Mail, Briefcase, Phone } from "lucide-react";

const RoleTabs = () => {
  const [activeTab, setActiveTab] = useState("visitor");
  const [showBoothModal, setShowBoothModal] = useState(false);
  const [showNominateModal, setShowNominateModal] = useState(false);
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));
  const closeBoothModal = () => { setShowBoothModal(false); setStep(1); };
  const closeNominateModal = () => setShowNominateModal(false);
  return (
    <section className="role-tabs-wrapper py-5">
      <div className="container">

        {/* Section Title */}
        <h2 className="text-center mb-4 black fw-bold" data-aos="fade-up" data-aos-delay="600">
          Your <span className="pink">Role Here</span>
        </h2>
        <p className="text-center text-grey mb-5" data-aos="fade-up" data-aos-delay="700">
          Choose your path - Visitor, Exhibitor, or Speaker
        </p>

        {/* Tabs */}
        <div className="tabs d-flex justify-content-center mb-4">
          <button
            className={`tab-btn ${activeTab === "visitor" ? "active" : ""}`}
            onClick={() => setActiveTab("visitor")}
          >
            Visitor
          </button>

          <button
            className={`tab-btn ${activeTab === "exhibitor" ? "active" : ""}`}
            onClick={() => setActiveTab("exhibitor")}
          >
            Exhibitor
          </button>

          <button
            className={`tab-btn ${activeTab === "speaker" ? "active" : ""}`}
            onClick={() => setActiveTab("speaker")}
          >
            Speaker
          </button>
        </div>

        {/* TAB CONTENT */}
        <div className="col-lg-6 mx-auto tab-content card shadow-sm p-4 border-0 animate-fade d-flex justify-content-center">
          {activeTab === "visitor" && (
            <div>
              <h3 className="pink fw-bold mb-3">Easy Entry for Curious Minds</h3>
              <ul className="text-grey">
                <li>Trendspot: 50+ sessions on hot topics in Forex & Fintech.</li>
                <li>Network: Connect with industry leaders.</li>
                <li>Perks: Access to exclusive events of Forex & Fintech .</li>
              </ul>

              <a href="/Booknow" className="btn bg-blue text-white px-4 py-2 mt-3 rounded-pill">
                Book Free Ticket
              </a>
            </div>
          )}

          {activeTab === "exhibitor" && (
            <div>
              <h3 className="pink fw-bold mb-3">Exhibit & Explode Your Reach</h3>
              <ul className="text-grey">
                <li>Prime booths in the Digital Assets Pavilion.</li>
                <li>Guaranteed 500+ business leads.</li>
                <li>Setup done in 1 hour with our team.</li>
              </ul>

              <button
                className="btn bg-blue text-white px-4 py-2 rounded-pill"
                onClick={() => setShowBoothModal(true)}
              >
                Book Booth - 3 Step Form
              </button>
            </div>
          )}

          {activeTab === "speaker" && (
            <div>
              <h3 className="pink fw-bold mb-3">Speak & Spark Change</h3>
              <ul className="text-grey">
                <li>Share your Forex & Fintech story on the big stage.</li>
                <li>Full promo & VIP access managed for you.</li>
                <li>Topics include Forex & Fintech.</li>
              </ul>

              <button
                className="btn bg-blue text-white px-4 py-2 rounded-pill"
                onClick={() => setShowNominateModal(true)}
              >
                Nominate Now - Quick Form
              </button>
            </div>
          )}
        </div>
      </div>
      {/* -------- Book Booth Modal -------- */}
      {showBoothModal && (
        <div className="custom-modal-overlay">
          <div className="custom-modal">
            <div className="modal-header">
              <h4 className="pink">Book Booth - Step {step}/3</h4>
              <X size={24} className="cursor-pointer" onClick={closeBoothModal} />
            </div>

            <div className="modal-body">
              {/* Step 1 */}
              {step === 1 && (
                <div className="step-content">
                  <label><User className="icon" /> Name</label>
                  <input type="text" placeholder="Full Name" />
                  <label><Mail className="icon" /> Email</label>
                  <input type="email" placeholder="Email Address" />
                </div>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <div className="step-content">
                  <label><Phone className="icon" /> Phone</label>
                  <input type="text" placeholder="Phone Number" />
                  <label><Briefcase className="icon" /> Company</label>
                  <input type="text" placeholder="Company Name" />
                </div>
              )}

              {/* Step 3 */}
              {step === 3 && (
                <div className="step-content">
                  <label>Send us a message</label>
                  <textarea placeholder="Preferred Booth Details"></textarea>
                  <p className="text-light-grey mt-2">Our team will contact you to finalize the setup.</p>
                </div>
              )}
            </div>

            <div className="modal-footer d-flex justify-content-between">
              {step > 1 ? (
                <button className="btn bg-lightgrey text-grey rounded-pill px-4 py-2" onClick={prevStep}>
                  ← Back
                </button>
              ) : <div></div>}

              {step < 3 ? (
                <button className="btn bg-pink text-white rounded-pill px-4 py-2" onClick={nextStep}>
                  Next <ArrowRight size={16} className="ms-1" />
                </button>
              ) : (
                <button className="btn bg-pink text-white rounded-pill px-4 py-2" onClick={closeBoothModal}>
                  Submit
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* -------- Nominate Quick Form Modal -------- */}
      {showNominateModal && (
        <div className="custom-modal-overlay">
          <div className="custom-modal">
            <div className="modal-header">
              <h4 className="pink">Nominate Now - Quick Form</h4>
              <X size={24} className="cursor-pointer" onClick={closeNominateModal} />
            </div>

            <div className="modal-body">
              <label><User className="icon" /> Name</label>
              <input type="text" placeholder="Full Name" />
              <label><Mail className="icon" /> Email</label>
              <input type="email" placeholder="Email Address" />
              <label><Briefcase className="icon" /> Topic</label>
              <input type="text" placeholder="Topic / Area of Expertise" />
            </div>

            <div className="modal-footer d-flex justify-content-end">
              <button className="btn bg-pink text-white rounded-pill px-4 py-2" onClick={closeNominateModal}>
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default RoleTabs;
