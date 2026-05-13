import React from "react";
import { Link } from "react-router-dom";

const TicketTwo = () => {
  return (
    <>
      <section className="price bg-lightgrey">
        <div className="container">
          <div className="price-inner text-center">
            <div className="price-title mb-7 w-lg-60 m-auto">
              <p className="mb-1 pink">PRICING TABLE</p>
              <h2 className="mb-1">
                EXPLORE FLEXIBLE <span className="pink">PRICING</span> PLANS
              </h2>
              <p className="m-0">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="price-options g-2 pb-6">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="ticket-box">
                    <div className="ticket-box-inner bg-white position-relative rounded-bottom-5">
                      <img
                        src="assets/images/pattern/2.png"
                        alt="pattern"
                        className="w-100 pattern position-absolute rounded-top"
                      />
                      <div className="ticket-title py-6 bg-pink text-white">
                        <h4 className="text-white  mb-1">BASIC TICKET</h4>
                        <p>Stander Package</p>
                      </div>
                      <div className="ticket-price bg-white py-6">
                        <div className="ticket-price-inner d-flex justify-content-center align-items-start black fw-bold">
                          <span className="me-1 mb-0 currency">$</span>
                          <span className="me-1 m-0 dollor">19</span>
                          <span className="me-1 mb-0 cents">99</span>
                        </div>
                        <p className="m-0">Person</p>
                      </div>
                      <div className="benifit-list bg-white px-5">
                        <ul className="m-auto p-0 list-unstyled">
                          <li className="py-2 text-capitalize lh-1  border-dashed-bottom-1">
                            <p className="my-1">
                              <small>Second Balcony Seat</small>
                            </p>
                          </li>
                          <li className="py-2 text-capitalize lh-1  border-dashed-bottom-1">
                            <p className="my-1">
                              <small>Snack & software</small>
                            </p>
                          </li>
                          <li className="py-2 text-capitalize lh-1  border-dashed-bottom-1">
                            <p className="my-1">
                              <small>Certificates</small>
                            </p>
                          </li>
                          <li className="pt-2 border border-0 text-capitalize lh-1">
                            <p className="my-1">
                              <small>Private access</small>
                            </p>
                          </li>
                        </ul>
                      </div>
                      <div className="ticket-button  m-auto p-6">
                        <Link to="/Pricing" className="btn">
                          PURCHASE
                        </Link>
                        <p className="mt-4">
                          <small>
                            *Please read our term and condition before order
                            ticket
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="ticket-box-inner bg-white position-relative rounded-bottom-5">
                    <img
                      src="assets/images/pattern/2.png"
                      alt="pattern"
                      className="w-100 pattern position-absolute rounded-top"
                    />
                    <div className="ticket-title py-6 bg-pink text-white ">
                      <h4 className="text-white  mb-1">SILVER TICKET</h4>
                      <p>Pro Package</p>
                    </div>
                    <div className="ticket-price bg-white py-6">
                      <div className="ticket-price-inner d-flex justify-content-center align-items-start fw-bold">
                        <span className="me-1 mb-0 currency pink">$</span>
                        <span className="me-1 m-0 dollor pink">39</span>
                        <span className="me-1 mb-0 cents pink">99</span>
                      </div>
                      <p className="m-0">Person</p>
                    </div>
                    <div className="benifit-list bg-white">
                      <ul className=" m-auto p-0 list-unstyled">
                        <li className="pb-2 border border-0 text-capitalize lh-1">
                          <p className="my-1">
                            <small>Second Balcony Seat</small>
                          </p>
                        </li>
                        <li className="py-2 border border-0 text-capitalize lh-1">
                          <p className="my-1">
                            <small>Snack & software</small>
                          </p>
                        </li>
                        <li className="py-2 border border-0 text-capitalize lh-1">
                          <p className="my-1">
                            <small>Certificates</small>
                          </p>
                        </li>
                        <li className="py-2 border border-0 text-capitalize lh-1">
                          <p className="my-1">
                            <small>Private access</small>
                          </p>
                        </li>
                        <li className="pt-2 border border-0 text-capitalize lh-1">
                          <p className="my-1">
                            <small>Printed material</small>
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div className="partner-button  m-auto p-6">
                      <Link to="/Pricing" className="btn">
                        PURCHASE
                      </Link>
                      <p className="mt-4">
                        <small>
                          *Please read our term and condition before order
                          ticket
                        </small>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="ticket-box-inner  bg-white position-relative rounded-bottom-5">
                    <img
                      src="assets/images/pattern/1.png"
                      alt="pattern"
                      className="w-100 pattern position-absolute rounded-top"
                    />
                    <div className="ticket-title">
                      <h4 className="pt-6 mb-1">GOLDEN TICKET</h4>
                      <p>Enterprise Package</p>
                    </div>
                    <div className="ticket-price bg-white py-6">
                      <div className="ticket-price-inner d-flex justify-content-center align-items-start black fw-bold">
                        <span className="me-1 mb-0 currency">$</span>
                        <span className="me-1 m-0 dollor">199</span>
                        <span className="me-1 mb-0 cents">99</span>
                      </div>
                      <p className="m-0">Person</p>
                    </div>
                    <div className="benifit-list bg-white px-5">
                      <ul className=" m-auto p-0 list-unstyled">
                        <li className="py-2 text-capitalize lh-1  border-dashed-bottom-1">
                          <p className="my-1">
                            <small>Second Balcony Seat</small>
                          </p>
                        </li>
                        <li className="py-2 text-capitalize lh-1  border-dashed-bottom-1">
                          <p className="my-1">
                            <small>Snack & software</small>
                          </p>
                        </li>
                        <li className="py-2 text-capitalize lh-1  border-dashed-bottom-1">
                          <p className="my-1">
                            <small>Certificates</small>
                          </p>
                        </li>
                        <li className="pt-2 border border-0 text-capitalize lh-1">
                          <p className="my-1">
                            <small>Private access</small>
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div className="partner-button  m-auto p-5">
                      <Link to="/Pricing" className="btn">
                        PURCHASE
                      </Link>
                      <p className="mt-4">
                        <small>
                          *Please read our term and condition before order
                          ticket
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="m-0">
              All prices exclude 25% VAT. For more details, view our{" "}
              <a href="" className="pink">
                Terms & Policy
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TicketTwo;
