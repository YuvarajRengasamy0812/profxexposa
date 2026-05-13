import React from "react";
import Breadcrumb from "../Components/Breadcrumb";
import Pagehelmet from "../Components/Pagehelmet";
import Contactform from "../Components/Contactform";

function Contact() {
  return (
    <div>
      <Pagehelmet pageTitle="Contact Us" />
      <Breadcrumb title="Contact Us" />

      {/*--Contact Section end--*/}
      <section className="contact">
        <div className="container">
          <div className="contact-inner text-center text-md-start">
            <div className="row g-md-5 gy-5 align-items-center">
              <div className="col-lg-4 col-md-5">
                <div className="contact-event-info p-8 text-white h-100 rounded bg-pink">
                  <div className="event-venue pb-5">
                    <h5 className="text-white pb-2">EVENT VENUE:</h5>
                    <p className="m-0">Le Meridian, Dubai UAE</p>
                  </div>
                  <div className="address pb-5">
                    <h5 className="text-white pb-2">ADDRESS:</h5>
                    <p className="m-0">
                      Le Meridian, Airport Road, Dubai UAE
                    </p>
                  </div>
                  {/* <div className="reception-info pb-5">
                    <h5 className="text-white pb-2">RECEPTION INFO:</h5>
                    <p className="pb-5 m-0">Booking: (+91) 04 0355 11061</p>
                  </div> */}
                  <div className="ticket-info pb-5">
                    <h5 className="text-white pb-2">Ticket INFO:</h5>
                    <p className="m-0">Booking: <a className="social-url" href="tel:+971588845033">(+971) 58 884 5033</a></p>
                    <p className="m-0 mt-2">Email: <a className="social-url" href="mailto:info@profxmedia.com">info@profxmedia.com</a></p>
                  </div>
                  <div className="direction-link">
                    <a className="btn border" href="https://maps.app.goo.gl/pzmErXhidm3Euz8f6">Get Directions</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-7">
                <div className="contact-form">
                  <div className="form-title mb-4">
                    <h2 className="mb-1">
                      Drop a <span className="pink">line</span>
                    </h2>
                    <p>
                      Reach out to us for any queries or assistance. We're here to help!
                    </p>
                  </div>
                  <div className="form">
                    <Contactform />
                  </div>
                </div>
              </div>
            </div>
            <div className="map-direction mt-5">
              <iframe
                height="400"
                className="rounded w-100"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d209000.25475612728!2d55.264738!3d25.249132!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d052da27f4b%3A0x1e08c07158e27b01!2sLe%20M%C3%A9ridien%20Dubai%20Hotel%20%26%20Conference%20Centre!5e1!3m2!1sen!2sae!4v1766667195286!5m2!1sen!2sae"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      {/*--Contact Section end--*/}
    </div>
  );
}

export default Contact;
