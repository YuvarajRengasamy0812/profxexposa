import React, { useEffect, useState } from 'react';
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Search from "../Components/Search";
import CustomNavbar from "./CustomNavbar";
import { getAllSocial } from '../api/socialmedia';
import { getAllTopBar } from '../api/topbar';
import { getAllLog } from '../api/style';
import ProfileDropdown from "../Pages/ProfileDropdown";
import { useAuth } from "./AuthContext";
import { buildAssetUrl } from "../utils/assetUrl";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, logout } = useAuth();
  const [social, setSocial] = useState(() => {
    const cached = sessionStorage.getItem("social");
    return cached ? JSON.parse(cached) : [];
  });
  const [topbar, setTopBar] = useState(() => {
    const cached = sessionStorage.getItem("topbar");
    return cached ? JSON.parse(cached) : [];
  });
  const [logo, setLogo] = useState(() => {
    const cached = sessionStorage.getItem("logo");
    return cached ? JSON.parse(cached) : [];
  });

  useEffect(() => {
    getAllSocial()
      .then((res) => {
        const data = res?.data?.details || [];
        setSocial(data);
        sessionStorage.setItem("social", JSON.stringify(data));
      })
      .catch(() => {});

    getAllTopBar()
      .then((res) => {
        const data = res?.data?.details || [];
        setTopBar(data);
        sessionStorage.setItem("topbar", JSON.stringify(data));
      })
      .catch(() => {});

    getAllLog()
      .then((res) => {
        const data = res?.data?.details || [];
        setLogo(data);
        sessionStorage.setItem("logo", JSON.stringify(data));
      })
      .catch(() => {});

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className={`main_header_area w-100 site-header position-absolute w-100 site-header ${isScrolled ? "scrolled" : ""}`}>
      {/* Top bar with social and contact info */}
      <div className="header-content text-white">
        <div className="container">
          <div className="header-content-inner py-2">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="social-links">
                  <ul className="m-0 p-0 d-flex gap-2">
                    {[
                      {
                        icon: "facebook",
                        url: social.facebook || "#",
                      },
                      {
                        icon: "twitter",
                        url: social.twitter || "#",
                      },
                      {
                        icon: "instagram",
                        url: social.instagram || "#",
                      },
                      {
                        icon: "youtube",
                        url: social.youtube || "#",
                      },
                      {
                        icon: "linkedin",
                        url: social.linkedin || "#",
                      },
                    ].map((item, i) => (
                      <li key={i} className="d-inline">
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="d-inline-block rounded-circle bg-white  bg-opacity-25 social-url"
                        >
                          <i className={`fa fa-${item.icon} border-social rounded-circle text-center`}></i>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="header-event-info text-end">
                  <ul className="m-0 p-0">
                    <li className="px-2 border-end border-lightgrey border-opacity-50 d-inline">
                      <i className="fa fa-phone pe-1"></i>
                      <small><a className="social-url" href={`tel:${topbar.phone}`}>{topbar.phone}</a></small>
                    </li>
                    <li className="px-2 border-end border-lightgrey border-opacity-50 d-inline">
                      <i className="fa fa-envelope-o pe-1"></i>
                      <small><a className="social-url" href={`mailto:${topbar.email}`}>{topbar.email}</a></small>
                    </li>
                    <li className="px-2 d-inline">
                      <i className="fa fa-clock-o pe-1"></i>
                      <small>{topbar.working_time}</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="header_menu" id="header_menu">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg py-2 w-100">
            <div className="row w-100 align-items-center">
              <div className="col-lg-2 col-md-10 col-9">
                <div className="navbar-brand m-0 ps-5">
                  <Link to="/">
                    <img
                      src={
                        isScrolled
                          ? buildAssetUrl('/assets/images/logo/profx-dark.png')
                          : buildAssetUrl('/assets/images/logo/profx-white.png')
                      }
                      alt="Logo"
                      className=""
                      style={{ maxWidth: "125px", transition: "0.3s ease" }}
                    />
                  </Link>
                </div>
              </div>

              <div className="col-lg-7 col-md-2 col-2">
                {/* <Navbar /> */}
                <CustomNavbar />
              </div>

              <div className="col-lg-3 d-none d-lg-block">
                <div className="menu-search d-flex align-items-center justify-content-center gap-3">
                  {/* <Search className="d-md-none" /> */}
                  {user ? (
                    <>
                      <ProfileDropdown user={user} onLogout={logout} />
                      <Link to="/Booknow" className="btn btn3">
                        Buy Ticket <i className="fa fa-long-arrow-right ms-4"></i>
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link to="/Register" className="btn btn3">
                        Register
                      </Link>
                      <Link to="/Login" className="btn btn3">
                        Login
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </nav>
          <div id="slicknav-mobile"></div>
        </div>
      </div>
      {/* Search Overlay */}
      <div id="search1">
        <button type="button" className="close">
          &times;
        </button>
        <form>
          <input
            className="form-control form-control-lg rounded text-white"
            placeholder="Search..."
          />
        </form>
        <button type="button" className="btn">
          <i className="fa fa-search text-white" aria-hidden="true"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;

