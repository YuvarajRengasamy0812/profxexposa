import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import PageHelmet from "../Components/Pagehelmet";
import Breadcrumb from "../Components/Breadcrumb";
import { User, Camera } from "lucide-react";
import { buildAssetUrl } from "../utils/assetUrl";

const Profile = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("profile");
  const [avatar, setAvatar] = useState(buildAssetUrl('/assets/images/resources/avatar.png'));
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      setUser(JSON.parse(stored));
    } else {
      navigate("/Login");
    }
  }, [navigate]);

  // Handle profile picture change
  const handleAvatarChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = URL.createObjectURL(e.target.files[0]);
      setAvatar(file);
    }
  };

  if (!user) return null;

  return (
    <>
      <PageHelmet pageTitle="My Profile" />
      <Breadcrumb title="My Profile" />

      <div className="container-fluid bg-lightgrey py-6 min-vh-100">
        <div className="container">

          {/* PROFILE HEADER */}
          <div className="bg-white rounded shadow p-4 mb-4 d-flex flex-wrap align-items-center gap-4">
            <div className="position-relative d-inline-block">
              <img
                src={avatar}
                alt="Profile"
                className="rounded-circle img-fluid"
                width={80}
              />
              <label
                htmlFor="avatarUpload"
                className="position-absolute bottom-0 end-0 rounded-circle bg-pink text-white d-flex align-items-center justify-content-center"
                style={{ width: 28, height: 28, cursor: "pointer" }}
              >
                <Camera size={14} />
              </label>
              <input
                type="file"
                id="avatarUpload"
                accept="image/*"
                hidden
                onChange={handleAvatarChange}
              />
            </div>
            <div>
              <h4 className="mb-1">{user.full_name}</h4>
              <p className="text-grey mb-1">{user.email}</p>
              <span className="badge border border-pink pink">{user.user_type}</span>
            </div>
          </div>

          <div className="row g-4">

            {/* SIDEBAR */}
            <div className="col-lg-3">
              <div className="bg-white rounded shadow p-3">
                <button
                  className={`w-100 btn text-start mb-2 ${activeTab === "profile" ? "bg-pink text-white" : ""}`}
                  onClick={() => setActiveTab("profile")}
                >
                  <User size={16} className="me-2" />
                  My Profile
                </button>

                <button
                  className={`w-100 btn text-start ${activeTab === "booth" ? "bg-pink text-white" : ""}`}
                  onClick={() => setActiveTab("booth")}
                >
                  My Booth
                </button>
              </div>
            </div>

            {/* CONTENT */}
            <div className="col-lg-9">

              {/* MY PROFILE FORM */}
              {activeTab === "profile" && (
                <div className="bg-white rounded shadow p-4">
                  <h5 className="pink mb-3">Profile Information</h5>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input type="text" placeholder="Full Name" defaultValue={user.full_name} />
                    </div>
                    <div className="col-md-6">
                      <input type="email" placeholder="Email" defaultValue={user.email} />
                    </div>
                    <div className="col-md-6">
                      <input type="text" placeholder="Company Name" defaultValue={user.company_name} />
                    </div>
                    <div className="col-md-6">
                      <input type="text" placeholder="Phone" defaultValue={user.phone} />
                    </div>
                    <div className="col-md-6">
                      <input type="text" placeholder="Nationality" defaultValue={user.nationality} />
                    </div>
                    <div className="col-md-6">
                      <input type="text" placeholder="Sponsor Package" defaultValue={user.sponsor_package} />
                    </div>
                    <div className="col-12">
                      <textarea placeholder="Special Requirements" rows={3} defaultValue={user.special_requirements} />
                    </div>
                  </div>
                </div>
              )}

              {/* MY BOOTH SECTION */}
              {activeTab === "booth" && (
                <div className="bg-white rounded shadow p-4 text-center py-5">
                  <div className="mb-3" style={{ fontSize: 64, color: "#ff66b3" }}>🏟️</div>
                  <h5 className="mb-2">No Booth Booked Yet</h5>
                  <p className="text-muted mb-4">You haven't booked a booth yet. Explore our floor plan to find and reserve your perfect spot.</p>
                  <Link to="/Floorplan" className="btn bg-pink text-white px-4">
                    View Floor Plan
                  </Link>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
