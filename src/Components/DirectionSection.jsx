import React from "react";

const DirectionSection = () => {
  return (
    <>
      <section className="direction">
        <div className="container">
          <div className="section-title text-center pb-2 w-lg-60 m-auto">
            <p className="mb-1  pink">REACH US</p>
            <h2 className="mb-1">
              GET DIRECTION TO THE <span className="pink"><b>PROFX EXPO AFRICA 2026</b></span>
            </h2>
            <p className="mb-0">
              Reach out to us for any queries or assistance. We're here to help!
            </p>
          </div>
          <div className="direction-content">
            <div className="direction-info">
              <div className="row">
                <div className="col-lg-5 col-md-5 px-1">
                  <div className="p-6 d-flex text-white w-100 h-100 rounded bg-pink ">
                    <div className="justify-content-center align-self-center ms-6">
                      <h5 className="text-white pb-2">EVENT VENUE:</h5>
                      <p className="pb-5 m-0">Cape Town, South Africa</p>
                      <h5 className="text-white pb-2">ADDRESS:</h5>
                      <p className="pb-5 m-0">
                        Cape Town, South Africa
                      </p>
                      <h5 className="text-white pb-2">RECEPTION INFO:</h5>
                      <p className="pb-5 m-0">Booking: <a className="social-url" href="tel:+971588845033">(+971) 58 884 5033</a></p>
                      <a className="btn border" href="https://maps.google.com/?q=Cape+Town,+South+Africa">Get Directions</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 col-md-7 px-1 py-2">
                  <iframe
                    height="400"
                    className="rounded w-100"
                    src="https://maps.google.com/maps?q=Cape%20Town,%20South%20Africa&output=embed"
                  ></iframe>
                </div>
              </div>
            </div>
            {/* <div className="location-gallery">
              <div id="selector" className="row pt-1 justify-content-center">
                <div
                  className="item col-lg-4 col-md-6 p-1"
                  data-src="images/group/4.jpg"
                >
                  <a>
                    <img
                      src="assets/images/thumbnail/4.jpg"
                      className="w-100 rounded"
                      alt="VR Presentation and conference"
                    />
                  </a>
                </div>
                <div
                  className="item col-lg-4 col-md-6 p-1"
                  data-src="images/group/7.jpg"
                >
                  <a>
                    <img
                      src="assets/images/thumbnail/7.jpg"
                      className="w-100 rounded"
                      alt="VR Presentation and conference"
                    />
                  </a>
                </div>
                <div
                  className="item col-lg-4 col-md-6 p-1"
                  data-src="images/group/1.jpg"
                >
                  <a>
                    <img
                      src="assets/images/thumbnail/1.jpg"
                      className="w-100 rounded"
                      alt="VR Presentation and conference"
                    />
                  </a>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default DirectionSection;
