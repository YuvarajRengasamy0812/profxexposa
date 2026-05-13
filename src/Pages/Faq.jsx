import React from 'react'
import Breadcrumb from '../Components/Breadcrumb'
import Pagehelmet from '../Components/Pagehelmet'

function Faq() {
    return (
        <div>
            <Pagehelmet pageTitle="Frequent Questions" />
            <Breadcrumb title="Frequent Questions" />

            {/*--General question Section start--*/}
            <section className="faq-general-ques pb-0">
                <div className="container">
                    <div className="general-ques">
                        <div className="row">
                            <div className="col-lg-6 order-2 order-lg-1 p-2">
                                <div className="general-ques-left text-white">
                                    <div className=" text-center">
                                        <img src="assets/images/team/6.png" alt="faq-general-image" className="w-50" /><br />
                                    </div>
                                    <div className="speaker-statement-box p-4 rounded bg-pink w-lg-80 mb-mi">
                                        <div className="speaker-statement ps-4 border-start border-white border-7">
                                            <p><small>"Free entry passes to <b>PROFX SUMMIT 2026</b> - get clarity on everything <b>PROFX SUMMIT 2026</b> has to offer."</small></p>
                                            <h6 className="text-white">PROFX Help Desk</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Section */}
                            <div className="col-lg-6 order-1 order-lg-2 p-2">
                                <div className="general-ques-right">
                                    <div className="section-title pb-4 text-center text-lg-start">
                                        <p className="mb-1 pink">GENERAL QUESTIONS</p>
                                        <h2 className="mb-2">FREQUENTLY ASKED <span className="pink">QUESTIONS</span></h2>
                                        <p>Your most common ProFX Summit Dubai 2026 queries - answered.</p>
                                    </div>

                                    <div className="faq-accordion p-4 bg-white rounded border border-2 border-light-subtle">
                                        <div className="accordion accordion-faq" id="accordionFlushExample">

                                            {/* FAQ 1 */}
                                            <div className="accordion-item">
                                                <p className="accordion-header p-4">
                                                    <button className="accordion-button collapsed fw-semibold p-0"
                                                        type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#flush-collapseOne">
                                                        What is the core theme of ProFX Summit 2026?
                                                    </button>
                                                </p>
                                                <div id="flush-collapseOne" className="accordion-collapse collapse"
                                                    data-bs-parent="#accordionFlushExample">
                                                    <div className="accordion-body bg-lightgrey p-6">
                                                        ProFX Summit Dubai 2026 brings together global finance, trading, FinTech, and Forex leaders for a two-day summit featuring expert-led sessions, live exhibition booths, networking opportunities, and the prestigious ProFX Awards.
                                                    </div>
                                                </div>
                                            </div>

                                            {/* FAQ 2 */}
                                            <div className="accordion-item">
                                                <p className="accordion-header p-4">
                                                    <button className="accordion-button collapsed fw-semibold p-0"
                                                        type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#flush-collapseTwo">
                                                        Where is the event located and what are the logistics?
                                                    </button>
                                                </p>
                                                <div id="flush-collapseTwo" className="accordion-collapse collapse"
                                                    data-bs-parent="#accordionFlushExample">
                                                    <div className="accordion-body bg-lightgrey p-6">
                                                        Le Méridien, Airport Road, Dubai, UAE - centrally located and easily accessible.
                                                        Event Hours: 10 AM - 9 PM. Free airport shuttle service available for attendees.
                                                    </div>
                                                </div>
                                            </div>

                                            {/* FAQ 3 */}
                                            <div className="accordion-item">
                                                <p className="accordion-header p-4">
                                                    <button className="accordion-button collapsed fw-semibold p-0"
                                                        type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#flush-collapseThree">
                                                        Is entry free, and do tickets cover all areas of the summit?
                                                    </button>
                                                </p>
                                                <div id="flush-collapseThree" className="accordion-collapse collapse"
                                                    data-bs-parent="#accordionFlushExample">
                                                    <div className="accordion-body bg-lightgrey p-6">
                                                        Yes, entry to ProFX Summit Dubai 2026 is completely free for all attendees. Registration grants access to summit sessions, exhibition booths, networking areas, and the awards ceremony.
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/*--General question Section end--*/}


            {/*--Popular Questions Section start--*/}
            <section className="faq-popular-ques bg-lightgrey">
                <div className="container">
                    <div className="popular-ques">
                        <div className="row">

                            {/* Left Col */}
                            <div className="col-lg-6">
                                <div className="popular-ques-left me-4 m-sm-0">
                                    <div className="section-title pb-4 text-center text-lg-start">
                                        <p className="mb-1 pink">POPULAR QUESTIONS</p>
                                        <h2 className="mb-">PROFX Summit <span className="pink">FAQ</span></h2>
                                        <p>Browse the most common questions from attendees, exhibitors, sponsors, and speakers.</p>
                                    </div>

                                    <div className="faq-accordion p-4 mb-6 bg-white rounded">
                                        <div className="accordion accordion-faq" id="accordionExample">

                                            {/* FAQ 1 */}
                                            <div className="accordion-item">
                                                <p className="accordion-header p-4">
                                                    <button className="accordion-button collapsed fw-semibold p-0 text-uppercase"
                                                        type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#collapseOne">
                                                        Who can attend the ProFX Summit?
                                                    </button>
                                                </p>
                                                <div id="collapseOne" className="accordion-collapse collapse"
                                                    data-bs-parent="#accordionExample">
                                                    <div className="accordion-body bg-lightgrey p-6">
                                                        The summit is open to professionals from finance, trading, FinTech, blockchain, and technology sectors. Entry is free for all registered attendees.
                                                    </div>
                                                </div>
                                            </div>

                                            {/* FAQ 2 */}
                                            <div className="accordion-item">
                                                <p className="accordion-header p-4">
                                                    <button className="accordion-button collapsed fw-semibold p-0 text-uppercase"
                                                        type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#collapseTwo">
                                                        Can companies exhibit at the event?
                                                    </button>
                                                </p>
                                                <div id="collapseTwo" className="accordion-collapse collapse"
                                                    data-bs-parent="#accordionExample">
                                                    <div className="accordion-body bg-lightgrey p-6">
                                                        Yes, ProFX Summit offers Gold, Silver, and Standard exhibition booths for companies to showcase their products and services. Booths are active throughout both days to maximize engagement.
                                                    </div>
                                                </div>
                                            </div>

                                            {/* FAQ 3 */}
                                            <div className="accordion-item">
                                                <p className="accordion-header p-4">
                                                    <button className="accordion-button collapsed fw-semibold p-0 text-uppercase"
                                                        type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#collapseThree">
                                                        How can I become a sponsor?
                                                    </button>
                                                </p>
                                                <div id="collapseThree" className="accordion-collapse collapse"
                                                    data-bs-parent="#accordionExample">
                                                    <div className="accordion-body bg-lightgrey p-6">
                                                        ProFX Summit offers multiple sponsorship tiers, including Title Sponsor, Platinum, Gold, Networking Lounge, and Awards Sponsor. Each package provides tailored branding, visibility, and engagement opportunities.
                                                    </div>
                                                </div>
                                            </div>

                                            {/* FAQ 4 */}
                                            <div className="accordion-item">
                                                <p className="accordion-header p-4">
                                                    <button className="accordion-button collapsed fw-semibold p-0 text-uppercase"
                                                        type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#collapseFour">
                                                        Are there speaking opportunities?
                                                    </button>
                                                </p>
                                                <div id="collapseFour" className="accordion-collapse collapse"
                                                    data-bs-parent="#accordionExample">
                                                    <div className="accordion-body bg-lightgrey p-6">
                                                        Yes, speakers, panelists, and industry experts can apply to present sessions or participate in panel discussions. Applications are reviewed to ensure a high-quality program.
                                                    </div>
                                                </div>
                                            </div>

                                            {/* FAQ 5 */}
                                            <div className="accordion-item">
                                                <p className="accordion-header p-4">
                                                    <button className="accordion-button collapsed fw-semibold p-0 text-uppercase"
                                                        type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#collapseFive">
                                                        Where is the event located?
                                                    </button>
                                                </p>
                                                <div id="collapseFive" className="accordion-collapse collapse"
                                                    data-bs-parent="#accordionExample">
                                                    <div className="accordion-body bg-lightgrey p-6">
                                                        Le Méridien, Airport Road, Dubai, UAE. The venue is easily accessible and provides ample space for summit sessions, networking, and exhibition booths.
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* Right Col: Form */}
                            <div className="col-lg-6 align-self-center">
                                <div className="faq-form bg-white rounded box-shadow p-6 ms-4 m-sm-0">
                                    <div className="form-title mb-4">
                                        <h2 className="mb-2">Still have a <span className="pink">Question</span>?</h2>
                                        <p className="m-0">Can’t find what you’re looking for? Our team is here to help.</p>
                                    </div>

                                    <div className="form-content justify-content-between">
                                        <form>
                                            <input type="text" placeholder="Full Name" className="mb-3" />
                                            <div className="row justify-content-around">
                                                <div className="col-lg-6 col-md-6">
                                                    <input type="tel" placeholder="Phone No." className="mb-3" />
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <input type="email" placeholder="Email Address" className="mb-3" required />
                                                </div>
                                            </div>

                                            <textarea placeholder="How may we help you?" rows="4" className="mb-3"></textarea>
                                            <button className="btn mb-5" id="sub-btn">SEND MESSAGE</button>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/*--Popular question Section end--*/}

        </div>
    )
}

export default Faq
