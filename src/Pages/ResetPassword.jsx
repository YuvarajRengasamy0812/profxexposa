import React from "react";
import { Link } from "react-router-dom";
import PageHelmet from "../Components/Pagehelmet";
import Breadcrumb from "../Components/Breadcrumb";

const ResetPassword = () => {
  return (
    <>
      <PageHelmet pageTitle="Reset Password" />
      <Breadcrumb title="Reset Password" />

      <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-lightgrey py-6">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="bg-white rounded shadow p-4">

            <h4 className="pink mb-4 text-center">Reset Password</h4>

            <input
              type="password"
              className="form-control mb-3"
              placeholder="New Password"
              required
            />

            <input
              type="password"
              className="form-control mb-4"
              placeholder="Confirm New Password"
              required
            />

            <button className="btn bg-pink text-white w-100 mb-3">
              Reset Password
            </button>

            <div className="text-center">
              <small className="text-grey">
                Back to{" "}
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

export default ResetPassword;
