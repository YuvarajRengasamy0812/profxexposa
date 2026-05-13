import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, LogOut } from "lucide-react";

const ProfileDropdown = ({ user, onLogout }) => {

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);


  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

//  const handleLogout = () => {
//   // Clear all relevant localStorage items
//   localStorage.removeItem("user");              // user info
//   localStorage.removeItem("token");             // auth token
//   localStorage.removeItem("loginType");         // optional if stored
//   localStorage.removeItem("masterId");         // optional if stored
//   localStorage.removeItem("rzp_checkout_anon_id"); // optional if stored
//   localStorage.removeItem("rzp_device_id");     // optional if stored

//   // Optionally, you can clear all localStorage
//   // localStorage.clear();

//   // Navigate to login page
//   navigate("/login");
// };


  return (
    <div
      className="pd-profile-dropdown position-relative"
      ref={dropdownRef}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Avatar Toggle */}
      <button
        className="pd-dropdown-toggle"
        onClick={() => setOpen(!open)}
      >
        <img
          src={user?.avatar || "/assets/images/resources/avatar.png"}
          alt="User Avatar"
          className="pd-avatar rounded-circle"
        />
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="pd-dropdown-menu shadow-lg rounded">
          <Link to="/MyProfile" className="pd-dropdown-item">
            <User size={16} /> Profile
          </Link>
          <button
           onClick={onLogout}
            className="pd-dropdown-item"
          >
            <LogOut size={16} /> Logout
          </button>
        </div>
      )}

      {/* Inline CSS */}
      <style jsx>{`
        .pd-profile-dropdown {
          cursor: pointer;
        }

        .pd-dropdown-toggle {
          background: transparent;
          border: none;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s ease;
        }

        .pd-dropdown-toggle:hover {
          transform: scale(1.05);
        }

        .pd-avatar {
          width: 36px;
          height: 36px;
          border: 2px solid #fff; /* subtle pink border */
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .pd-avatar:hover {
          transform: scale(1.1);
          box-shadow: 0 4px 12px rgba(241, 65, 138, 0.4);
        }

        .pd-dropdown-menu {
          position: absolute;
          top: 110%;
          right: 0;
          min-width: 150px;
          background: #fff;
          border: 1px solid rgba(0,0,0,0.08);
          overflow: hidden;
          animation: pd-slide-down 0.25s ease forwards;
          z-index: 999;
        }

        .pd-dropdown-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1rem;
          font-weight: 500;
          color: #333;
          background: transparent;
          border: none;
          width: 100%;
          text-align: left;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .pd-dropdown-item:hover {
          background: rgba(241, 65, 138, 0.1);
        }

        @keyframes pd-slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ProfileDropdown;
