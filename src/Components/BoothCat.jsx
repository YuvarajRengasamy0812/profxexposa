import React from 'react'

const BoothCat = () => {
    return (
        <>
            <section class="py-5">
                <div class="container">
                    {/* Section Title  */}
                    <div className="col-lg-6 mx-auto">
                        <div className="title-content text-lg-center mb-4">
                            <p className="mb-1 pink">
                                Booth Categories
                            </p>
                            <h2 className="mb-1">
                                Elevate your brand’s presence at<span className="pink"> <b>PROFX SUMMIT DUBAI 2026</b></span>
                            </h2>
                            <p className="m-0">
                                By choosing the booth that fits your visibility and engagement goals.
                            </p>
                        </div>
                    </div>

                    {/* Booth Cards  */}
                    <div class="row g-4">
                        {/* Gold Booth  */}
                        <div class="col-lg-4 col-md-6">
                            <div class="bc-card text-center bg-vip  p-4 h-100">
                                <h3 class="fw-bold mb-3 text-white">Gold Booth</h3>
                                <p class="text-black-50 mb-3">
                                    Premium booth placement with maximum visibility and branding exposure.
                                </p>
                                <span class="bc-badge bg-black text-white rounded-pill px-3 py-1">Top Tier</span>
                            </div>
                        </div>

                        {/* Silver Booth  */}
                        <div class="col-lg-4 col-md-6">
                            <div class="bc-card text-center bg-blue p-4 h-100">
                                <h3 class="fw-bold mb-3 text-white">Silver Booth</h3>
                                <p class="text-white-50 mb-3">
                                    Strategically positioned booth offering strong engagement opportunities.
                                </p>
                                <span class="bc-badge bg-white text-blue rounded-pill px-3 py-1">Prime Location</span>
                            </div>
                        </div>

                        {/* Standard Booth  */}
                        <div class="col-lg-4 col-md-6">
                            <div class="bc-card text-center bg-lightgrey text-black  p-4 h-100">
                                <h3 class="fw-bold mb-3">Standard Booth</h3>
                                <p class="text-grey mb-3">
                                    Cost-effective exhibition solution ideal for growing brands.
                                </p>
                                <span class="bc-badge bg-black text-white rounded-pill px-3 py-1">Growth Friendly</span>
                            </div>
                        </div>
                    </div>

                    {/* Who Can Exhibit  */}
                    <div className="col-lg-6 mx-auto mt-5">
                        <div className="title-content text-lg-center mb-4">
                            <p className="mb-1 pink">
                                Who Can Exhibit
                            </p>
                            <p className="m-0">
                                Forex brokers, FinTech providers, Forex companies, payment processors, CRM providers, influencers, and financial technology innovators.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default BoothCat