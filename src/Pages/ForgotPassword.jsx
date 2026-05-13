import React from "react";
import { Link } from "react-router-dom";
import PageHelmet from "../Components/Pagehelmet";
import Breadcrumb from "../Components/Breadcrumb";

const ForgotPassword = () => {
  return (
    <>
      <PageHelmet pageTitle="Forgot Password" />
      <Breadcrumb title="Forgot Password" />

      <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-lightgrey py-6">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="bg-white rounded shadow p-4">

            <h4 className="pink mb-3 text-center">Forgot Password</h4>
            <p className="text-grey text-center mb-4">
              Enter your registered email and we’ll send you a reset link.
            </p>

            <input
              type="email"
              className="form-control mb-3"
              placeholder="Email Address"
              required
            />

            <button className="btn bg-pink text-white w-100 mb-3">
              Send Reset Link
            </button>

            <div className="text-center">
              <small className="text-grey">
                Remembered your password?{" "}
                <Link to="/login" className="pink">
                  Login
                </Link>
              </small>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
