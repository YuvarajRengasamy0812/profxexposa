import React from "react";

const FaqSection = () => {
  return (
    <>
      <section className="faq pb-0 overflow-visible d-block position-relative z-1">
        <div className="overlay bg-blue opacity-25 z-n1"></div>
        <div className="container">
          <div>
            <div className="row">
              <div className="col-lg-6 px-4 mb-2">
                <div className="faq-general">
                  <div className="section-title pb-3 text-center text-lg-start">
                    <p className="mb-1 pink">GENERAL QUESTIONS</p>
                    <h2 className="mb-2 text-white">
                      FREQUENTLY ASKED <span className="pink">QUESTIONS</span>
                    </h2>
                    <p className="text-white">
                      Answers to common questions about <b>PROFX SUMMIT DUBAI 2026</b>
                    </p>
                  </div>
                  <div className="faq-accordion p-4 mb-5 bg-white rounded">
                    <div className="accordion accordion-faq" id="accordionFlushExample">

                      <div className="accordion-item">
                        <p className="accordion-header p-4">
                          <button
                            className="accordion-button collapsed fw-semibold p-0"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne"
                            aria-expanded="false"
                            aria-controls="flush-collapseOne"
                          >
                            Is entry free?
                          </button>
                        </p>
                        <div
                          id="flush-collapseOne"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body bg-lightgrey p-6">
                            Yes, entry to <b>PROFX SUMMIT DUBAI 2026</b> is completely free for all attendees.
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <p className="accordion-header p-4">
                          <button
                            className="accordion-button collapsed fw-semibold p-0"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseTwo"
                            aria-expanded="false"
                            aria-controls="flush-collapseTwo"
                          >
                            Where is the event located?
                          </button>
                        </p>
                        <div
                          id="flush-collapseTwo"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body bg-lightgrey p-6">
                            Le Méridien, Airport Road, Dubai, UAE.
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <p className="accordion-header p-4">
                          <button
                            className="accordion-button collapsed fw-semibold p-0"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseThree"
                            aria-expanded="false"
                            aria-controls="flush-collapseThree"
                          >
                            Who can attend?
                          </button>
                        </p>
                        <div
                          id="flush-collapseThree"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body bg-lightgrey p-6">
                            Anyone from the finance, trading, FinTech, blockchain, and technology sectors.
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <p className="accordion-header p-4">
                          <button
                            className="accordion-button collapsed fw-semibold p-0"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseFour"
                            aria-expanded="false"
                            aria-controls="flush-collapseFour"
                          >
                            Will there be exhibition booths?
                          </button>
                        </p>
                        <div
                          id="flush-collapseFour"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body bg-lightgrey p-6">
                            Yes, live exhibition booths will be available throughout both days of the summit.
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6  align-self-center px-4">
                <div className="faq-form bg-white rounded shadow-lg p-6 mb-mi">
                  <div className="form-title mb-4">
                    <p className="mb-1 pink">TICKET BOOK</p>
                    <h2 className="mb-2">
                      LET'S RESERVE A <span className="pink">SEAT</span>
                    </h2>
                    <p className="m-0">
                      Book your tickets to the <b>PROFX SUMMIT 2026</b> now!!
                    </p>
                  </div>
                  <div className="form-content justify-content-between">
                    <form>
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="mb-5"
                      />
                      <div className=" row justify-content-around">
                        <div className="col-lg-6 col-md-6">
                          <div className="phone-no">
                            <input
                              type="tel"
                              placeholder="Phone No."
                              className="mb-5"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="emai">
                            <input
                              type="email"
                              placeholder="Email Address"
                              className="mb-5"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <textarea
                        placeholder="How may we help you?"
                        rows="4"
                        className="mb-5"
                      ></textarea>
                      <button className="btn mb-5" id="sub-btn">
                        SEND MESSAGE
                      </button>
                    </form>
                    <small>
                      We respect your privacy. Your information is safe with us.
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqSection;
