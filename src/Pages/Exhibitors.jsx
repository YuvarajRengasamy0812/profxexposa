import React, { useState } from "react";
import PageHelmet from "../Components/Pagehelmet";
import Breadcrumb from "../Components/Breadcrumb";
import { ArrowRight, Briefcase, Mail, Phone, User, X } from "lucide-react";
// import BoothSpectrum from "../Components/BoothSpectrum";
import TicketSection from "../Components/TicketSection";
import FloorPlan from "../Components/FloorPlan";
import BoothCat from "../Components/BoothCat";
import FloorPlanDubai from "../Components/FloorPlanDubai";

const Exhibitors = () => {
  const [showBoothModal, setShowBoothModal] = useState(false);
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));
  const closeBoothModal = () => {
    setShowBoothModal(false);
    setStep(1);
  };
  return (
    <>
      <div>
        <PageHelmet pageTitle="Exhibitors" />
        <Breadcrumb title="Exhibitors" />
        {/* -- Floor Plan Section Start -- */}
        <section className="exhibitors-floorplan py-10 py-md-14">
          <div className="container">
            <div className="row align-items-center g-4">
              {/* Text Block */}
              <div className="col-lg-6">
                <h2 className="section-title mb-3">
                  Exhibit: <span className="highlight">Showcase Your Brand to Global Finance Leaders</span>
                </h2>

                <p className="section-desc mb-4">
                  Secure your exhibition space at <strong><b>PROFX SUMMIT DUBAI 2026</b></strong> and connect with <strong>3,000+ finance professionals, innovators, and decision-makers</strong> from Forex, FinTech, blockchain, and trading sectors. Maximize your brand visibility and create meaningful business opportunities during this two-day international finance summit.
                </p>

                <div className="">
                  <a href="/ExhibitorsForm" className="btn col-lg-6">
                    Reserve Your Exhibit Space
                  </a>
                </div>
              </div>

              {/* Floor Plan Visual */}
              <div className="col-lg-6">
                <div className="floorplan-box">
                  {/* Replace with iframe or image later */}
                  <img
                    src="assets/images/resources/floorplan.jpg"
                    alt="Exhibition Floor Plan"
                    className="img-fluid rounded shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Booth Categories */}
        <BoothCat />

        {/* -- Floor Plan Section End -- */}
        {/* <TicketSection /> */}
        {/* <FloorPlan /> */}
        <FloorPlanDubai />

        {/* -- Exhibitor Success Path Section Start -- */}
        <section className="exhibitor-success py-5 py-md-14">
          <div className="container">
            <div className="col-lg-6 mx-auto">
              <div className="title-content text-lg-center mb-4">
                <p className="mb-1 pink">
                  <b>PROFX SUMMIT 2026</b> EXHIBITION
                </p>
                <h2 className="mb-1">
                  Exhibition <span className="pink">Booths Overview</span>
                </h2>
                <p className="m-0">
                  The exhibition area at <b>PROFX SUMMIT DUBAI 2026</b> provides companies with a premium
                  opportunity to showcase their products and services directly to a highly targeted audience.
                </p>
              </div>
            </div>

            <div className="row g-4 d-flex justify-content-center">
              {/* Step 1 */}
              <div className="col-md-6 col-lg-3 text-center">
                <div className="success-step h-100 p-4 rounded shadow-sm d-flex justify-content-center align-items-center flex-column">
                  <div className="step-icon mb-3 bg-pink text-white rounded-circle d-flex align-items-center justify-content-center">
                    1
                  </div>
                  <h5 className="mb-2">Gold Booth</h5>
                  <p className="text-grey">
                    Premium booth placement with maximum visibility and branding exposure.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="col-md-6 col-lg-3 text-center">
                <div className="success-step h-100 p-4 rounded shadow-sm d-flex justify-content-center align-items-center flex-column">
                  <div className="step-icon mb-3 bg-blue text-white rounded-circle d-flex align-items-center justify-content-center">
                    2
                  </div>
                  <h5 className="mb-2">Silver Booth</h5>
                  <p className="text-grey">
                    Strategically positioned booth offering strong engagement opportunities.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="col-md-6 col-lg-3 text-center">
                <div className="success-step h-100 p-4 rounded shadow-sm d-flex justify-content-center align-items-center flex-column">
                  <div className="step-icon mb-3 bg-elite text-white rounded-circle d-flex align-items-center justify-content-center">
                    3
                  </div>
                  <h5 className="mb-2">Standard Booth</h5>
                  <p className="text-grey">
                    Cost-effective exhibition solution ideal for growing brands.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              {/* <div className="col-md-6 col-lg-3 text-center">
                <div className="success-step h-100 p-4 rounded shadow-sm d-flex justify-content-center align-items-center flex-column">
                  <div className="step-icon mb-3 bg-vip text-white rounded-circle d-flex align-items-center justify-content-center">
                    4
                  </div>
                  <h5 className="mb-2">Who Can Exhibit</h5>
                  <p className="text-grey">
                    Forex, FinTech, blockchain, payments, CRM, and financial tech innovators
                  </p>
                </div>
              </div> */}
            </div>

            {/* Tailored CTA */}
            <div className="text-center mt-6">
              <p className="mb-3 text-grey">
                Connect with a highly targeted financial audience. Secure your booth today and maximize visibility.
              </p>
              <a
                href="#"
                className="btn primary-btn me-3"
                onClick={() => setShowBoothModal(true)}
              >
                Inquiry Form
              </a>
              <a href="/Sponsers" className="btn outline-btn">
                Sponsor Bundle
              </a>
            </div>
          </div>
        </section>

        {/* -- Exhibitor Success Path Section End -- */}
      </div>
      {/* -------- Book Booth Modal -------- */}
      {showBoothModal && (
        <div className="custom-modal-overlay">
          <div className="custom-modal">
            <div className="modal-header">
              <h4 className="pink">Book Booth - Step {step}/3</h4>
              <X
                size={24}
                className="cursor-pointer"
                onClick={closeBoothModal}
              />
            </div>

            <div className="modal-body">
              {/* Step 1 */}
              {step === 1 && (
                <div className="step-content">
                  <label>
                    <User className="icon" /> Name
                  </label>
                  <input type="text" placeholder="Full Name" />
                  <label>
                    <Mail className="icon" /> Email
                  </label>
                  <input type="email" placeholder="Email Address" />
                </div>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <div className="step-content">
                  <label>
                    <Phone className="icon" /> Phone
                  </label>
                  <input type="text" placeholder="Phone Number" />
                  <label>
                    <Briefcase className="icon" /> Company
                  </label>
                  <input type="text" placeholder="Company Name" />
                </div>
              )}

              {/* Step 3 */}
              {step === 3 && (
                <div className="step-content">
                  <label>Booth Preferences</label>
                  <textarea placeholder="Preferred Booth Details"></textarea>
                  <p className="text-light-grey mt-2">
                    Our team will contact you to finalize the setup.
                  </p>
                </div>
              )}
            </div>

            <div className="modal-footer d-flex justify-content-between">
              {step > 1 ? (
                <button
                  className="btn bg-lightgrey text-grey rounded-pill px-4 py-2"
                  onClick={prevStep}
                >
                  ← Back
                </button>
              ) : (
                <div></div>
              )}

              {step < 3 ? (
                <button
                  className="btn bg-pink text-white rounded-pill px-4 py-2"
                  onClick={nextStep}
                >
                  Next <ArrowRight size={16} className="ms-1" />
                </button>
              ) : (
                <button
                  className="btn bg-pink text-white rounded-pill px-4 py-2"
                  onClick={closeBoothModal}
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Exhibitors;
