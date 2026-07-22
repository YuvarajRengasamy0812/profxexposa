import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { getAllHeader } from '../api/header';
import ProfileDropdown from "../Pages/ProfileDropdown";
import { useAuth } from "./AuthContext";
const CustomNavbar = () => {
  const { user, logout } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [menuLinks, setMenuLinks] = useState(() => {
    const cached = sessionStorage.getItem("menuLinks");
    return cached ? JSON.parse(cached) : [];
  });

  useEffect(() => {
    getAllHeader()
      .then((res) => {
        const links = res?.data?.links || [];
        setMenuLinks(links);
        sessionStorage.setItem("menuLinks", JSON.stringify(links));
      })
      .catch(() => {});
  }, []);

  return (
    <>
      {/* DESKTOP MENU */}
      <ul className="cust-nav-desktop justify-content-center" style={{ marginBottom: 0 }}>
        {menuLinks.map((link) =>
          link.sub_links_count > 0 ? (
            // Dropdown menu
            <li key={link.id} className="cust-dropdown">
              <button className="cust-dropdown-btn">
                {link.title} <ChevronDown size={16} />
              </button>
              <ul className="cust-dropdown-menu shadow-lg">
                {link.sub_links.map((sub) => (
                  <li key={sub.id}>
                    <Link to={sub.href || "#"}>{sub.title}</Link>
                  </li>
                ))}
              </ul>
            </li>
          ) : (
            <li key={link.id}>
              <Link to={link.href || "#"}>{link.title}</Link>
            </li>
          )
        )}
      </ul>

      {/* MOBILE TOP BAR */}
      <div className="d-flex align-items-center d-lg-none position-relative" style={{ minHeight: 35 }}>
        {/* Left side: ProfileDropdown if logged in */}
        {user && (
          <ProfileDropdown
            user={user}
            onLogout={logout}
          />
        )}

        {/* Menu button always on right */}
        <button
          className="cust-mobile-toggle position-absolute end-0"
          onClick={() => setMobileOpen(true)}
          style={{ top: 0, left: 50, }}
        >
          <Menu size={32} />
        </button>
      </div>


      {/* MOBILE OVERLAY */}
      {mobileOpen && (
        <div className="cust-overlay" onClick={() => setMobileOpen(false)}></div>
      )}

      {/* MOBILE PANEL */}
      <div className={`cust-mobile-panel ${mobileOpen ? "cust-open" : ""}`}>
        <div className="cust-mobile-header">
          <button
            onClick={() => setMobileOpen(false)}
            className="cust-close-btn"
          >
            <X size={30} />
          </button>
        </div>

        <div className="cust-mobile-list">
          {menuLinks.map((link) =>
            link.sub_links_count > 0 ? (
              <div key={link.id} className="cust-mobile-dropdown">
                <button
                  onClick={() => setCompanyOpen(!companyOpen)}
                  className="cust-mobile-dropdown-btn"
                >
                  {link.title}{" "}
                  <ChevronDown
                    size={16}
                    className={companyOpen ? "rotate" : ""}
                  />
                </button>
                <div
                  className={`cust-mobile-dropdown-menu ${companyOpen ? "cust-show" : ""
                    }`}
                >
                  {link.sub_links.map((sub) => (
                    <Link
                      key={sub.id}
                      to={sub.href || "#"}
                      onClick={() => setMobileOpen(false)}
                    >
                      {sub.title}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.id}
                to={link.href || "#"}
                onClick={() => setMobileOpen(false)}
              >
                {link.title}
              </Link>
            )
          )}
        </div>

        {/* BOTTOM BUTTONS */}
        <div className="cust-mobile-bottom d-flex flex-column justify-content-center align-items-center">
          {user ? (
            <Link
              to="/Booknow"
              className="btn btn3 w-50"
              onClick={() => setMobileOpen(false)}
            >
              Buy Ticket <i className="fa fa-long-arrow-right ms-2"></i>
            </Link>
          ) : (
            <>
              <Link
                to="/Register"
                className="btn btn3 w-50 mb-2"
                onClick={() => setMobileOpen(false)}
              >
                Register
              </Link>
              <Link
                to="/Login"
                className="btn w-50"
                onClick={() => setMobileOpen(false)}
              >
                Login
              </Link>
            </>
          )}
        </div>
      </div>

    </>
  );
};

export default CustomNavbar;


