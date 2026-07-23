import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PageHelmet from "../Components/Pagehelmet";
import Breadcrumb from "../Components/Breadcrumb";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Select from "react-select";
import countryList from "react-select-country-list";
import { postLeagueBooking } from "../api/leaguebooking";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { buildAssetUrl } from "../utils/assetUrl";

const LEAGUE_LOGO = buildAssetUrl("/assets/images/league/League-white.png");
const GOLD = "linear-gradient(135deg, #c19d38, #e8c96b)";

const termsSections = [
  {
    title: "1. Eligibility",
    text: "The ProFX League – FX Championship 2026 is open to all traders aged 18 years and above from any country, unless restricted by local law. Participants must register individually using valid personal information. Employees, contractors, and immediate family members of ProFX Media, event sponsors, and affiliated brokers are not eligible to participate. By registering, you confirm that you meet all eligibility requirements.",
  },
  {
    title: "2. Entry & Registration",
    text: "Registration is completely free. Each participant may register only once using a unique email address and phone number. Multiple registrations by the same individual will result in disqualification of all associated accounts. Participants are responsible for ensuring their registration details are accurate and up to date.",
  },
  {
    title: "3. Championship Structure",
    text: "The championship consists of 4 Weekly Qualifier Rounds followed by 1 Grand Final Round. Each qualifier round runs from Monday to Friday. The top 50 traders by profit percentage from each qualifier round will advance to the Grand Final. Qualified traders may not re-enter additional qualifier rounds. Traders who do not qualify may participate in subsequent qualifier rounds.",
  },
  {
    title: "4. Trading Platform & Account",
    text: "All trading will be conducted on MT5 (MetaTrader 5) using a championship/demo account provided by the official platform sponsor. Account credentials will be shared after successful registration. The starting balance, leverage, and tradeable instruments will be defined by the platform sponsor and communicated prior to each round. Participants must use only the designated championship account for all trading activity.",
  },
  {
    title: "5. Permitted Instruments & Trading Rules",
    text: "Participants may trade FX currency pairs, Gold (XAU/USD), and sponsor-approved indices. The use of Expert Advisors (EAs), automated bots, arbitrage strategies, latency trading, tick scalping, or any form of hedging manipulation is strictly prohibited. Any trading activity deemed exploitative of platform pricing or connectivity is prohibited. Violation of trading rules will result in immediate disqualification.",
  },
  {
    title: "6. Ranking & Qualification Criteria",
    text: "Participants are ranked based on overall profit percentage achieved during the round period. In the event of a tie in profit percentage, secondary criteria including maximum drawdown, number of trades, and compliance score will be applied. The ProFX League Committee's decision on rankings and qualification is final and binding.",
  },
  {
    title: "7. Grand Final",
    text: "The Grand Final will include up to 200 traders — 50 qualifiers from each of the 4 qualifier rounds. The Grand Final will be conducted on the Official Sponsor's trading platform. The top 25 traders in the Grand Final will be declared winners. Final rankings will be based on profit percentage, maximum drawdown, and full compliance with trading rules.",
  },
  {
    title: "8. Prize Distribution",
    text: "Prize money will be awarded to the top 25 finishers in the Grand Final as per the published prize breakdown. Prizes will be distributed in USD via bank transfer or the sponsor's approved payment method within 30 business days of the final results being confirmed. Winners are responsible for any applicable taxes or fees in their jurisdiction. ProFX Media and sponsors reserve the right to withhold prizes pending identity verification (KYC).",
  },
  {
    title: "9. Disqualification",
    text: "ProFX Media reserves the right to disqualify any participant found to be in breach of these terms, engaging in fraudulent activity, using prohibited trading strategies, providing false registration information, or acting in a manner contrary to the spirit of fair competition. Disqualified participants forfeit all prizes and results.",
  },
  {
    title: "10. Privacy & Data",
    text: "By registering, you consent to ProFX Media collecting and processing your personal data for the purpose of operating the championship, communicating results, and distributing prizes. Your data may be shared with official event sponsors and partners. We will not sell your personal data to third parties. For full details, refer to our Privacy Policy at profxexpo.com.",
  },
  {
    title: "11. Amendments & Final Authority",
    text: "ProFX Media and the ProFX League Committee reserve the right to amend these terms at any time, modify the championship structure, cancel or postpone rounds, and make final decisions on all matters relating to the championship. Continued participation after any amendment constitutes acceptance of the revised terms. All decisions made by the ProFX League Committee are final.",
  },
];

const customSelectStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "#F7F7F7",
    border: `1.5px solid ${state.isFocused ? "#a07d1a" : "#c9a227"}`,
    borderRadius: "25px",
    minHeight: "50px",
    boxShadow: state.isFocused ? "0 0 0 3px rgba(201,162,39,0.18)" : "none",
    paddingLeft: "16px",
    fontSize: "15px",
    fontWeight: "400",
    color: "#707070",
    "&:hover": { borderColor: "#a07d1a" },
  }),
  valueContainer: (provided) => ({ ...provided, padding: "0" }),
  input:          (provided) => ({ ...provided, margin: "0", padding: "0", color: "#707070" }),
  placeholder:    (provided) => ({ ...provided, color: "#707070" }),
  singleValue:    (provided) => ({ ...provided, color: "#707070" }),
  indicatorsContainer: (provided) => ({ ...provided, paddingRight: "15px" }),
  dropdownIndicator:   (provided) => ({ ...provided, color: "#707070" }),
  indicatorSeparator:  () => ({ display: "none" }),
  menu: (provided) => ({ ...provided, borderRadius: "15px", fontSize: "14px" }),
};

const LeagueEnroll = () => {
  const countryOptions = countryList().getData();
  const navigate = useNavigate();
  const location = useLocation();
  const termsBodyRef = useRef(null);

  const [fullName,           setFullName]           = useState("");
  const [email,              setEmail]              = useState("");
  const [phone,              setPhone]              = useState("");
  const [nationality,        setNationality]        = useState(null);
  const [companyName,        setCompanyName]        = useState("");
  const [position,           setPosition]           = useState("");
  const [referralCode,       setReferralCode]       = useState("");
  const [referralFromLink,   setReferralFromLink]   = useState(false);
  const [loading,            setLoading]            = useState(false);
  const [termsAccepted,      setTermsAccepted]      = useState(false);
  const [showTermsModal,     setShowTermsModal]     = useState(false);
  const [termsScrolledToEnd, setTermsScrolledToEnd] = useState(false);

  useEffect(() => {
    const defaultCountry = countryOptions.find((c) => c.value === "AE");
    if (defaultCountry && !nationality) setNationality(defaultCountry);
  }, []);


  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const codeFromLink = params.get("ref") || params.get("referral_code") || params.get("referral");

    if (codeFromLink) {
      setReferralCode(codeFromLink.trim().toUpperCase());
      setReferralFromLink(true);
    } else {
      setReferralCode("");
      setReferralFromLink(false);
    }
  }, [location.search]);
  const handlePhoneChange = (value, country) => {
    setPhone(value);
    if (country?.name) {
      const matched = countryOptions.find((c) => c.label === country.name);
      if (matched) setNationality(matched);
    }
  };

  const openTermsModal = () => {
    setTermsScrolledToEnd(false);
    setShowTermsModal(true);
    setTimeout(() => {
      const el = termsBodyRef.current;
      if (el && el.scrollHeight <= el.clientHeight + 5) setTermsScrolledToEnd(true);
    }, 0);
  };

  const handleTermsScroll = () => {
    const el = termsBodyRef.current;
    if (!el) return;
    if (el.scrollTop + el.clientHeight >= el.scrollHeight - 8) setTermsScrolledToEnd(true);
  };

  const handleTermsCheckboxChange = (e) => {
    if (e.target.checked) { openTermsModal(); return; }
    setTermsAccepted(false);
  };

  const acceptTerms = () => {
    if (!termsScrolledToEnd) return;
    setTermsAccepted(true);
    setShowTermsModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!termsAccepted) { openTermsModal(); return; }

    const digitsOnly = phone.replace(/\D/g, "");
    if (digitsOnly.length < 10) {
      return Swal.fire({ icon: "error", title: "Invalid Phone", text: "Please enter a valid phone number." });
    }

    setLoading(true);
    try {
      const res = await postLeagueBooking({
        api_key: process.env.REACT_APP_API_KEY,
        name:    fullName,
        email:   email,
        phone:   digitsOnly,
        country: nationality?.label || "",
        company: companyName,
        role:    position,
        referral_code: referralCode.trim().toUpperCase(),
      });

      if (res.data.code === "1" || res.data.code === 1) {
        await Swal.fire({
          icon: "success",
          title: "Enrollment Successful!",
          text: "You have been enrolled in the ProFX League Championship.",
          showConfirmButton: false,
          timer: 2500,
        });
        navigate("/League");
      } else {
        Swal.fire({ icon: "error", title: "Enrollment Failed", text: res.data.msg || "Something went wrong." });
      }
    } catch (err) {
      Swal.fire({ icon: "error", title: "Error", text: err.response?.data?.msg || "Something went wrong. Try again later." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
        @keyframes leagueFormGlow {
          0%, 100% { box-shadow: 0 0 30px rgba(14,89,65,0.18), 0 8px 40px rgba(0,0,0,0.12); }
          50%       { box-shadow: 0 0 60px rgba(14,89,65,0.30), 0 8px 48px rgba(0,0,0,0.18); }
        }
        .league-enroll-sidebar {
          background: linear-gradient(160deg, #0e5941 0%, #15831d 60%, #0e5941 100%);
          border-radius: 16px;
          animation: leagueFormGlow 4s ease-in-out infinite;
        }
        .league-enroll-input {
          border-radius: 25px !important;
          border: 1.5px solid #ddd !important;
          height: 50px;
          font-size: 15px;
          padding-left: 20px !important;
          transition: border-color 0.2s, box-shadow 0.2s;
          background: #F7F7F7 !important;
        }
        .league-enroll-input:focus {
          border-color: #c9a227 !important;
          box-shadow: 0 0 0 3px rgba(201,162,39,0.18) !important;
          outline: none;
        }
        .league-enroll-btn {
          background: linear-gradient(135deg, #c19d38, #e8c96b);
          color: #1a1a1a;
          font-weight: 800;
          font-size: 1rem;
          height: 52px;
          border: none;
          border-radius: 50px;
          width: 100%;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 6px 20px rgba(193,157,56,0.4);
          letter-spacing: 0.02em;
        }
        .league-enroll-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 12px 36px rgba(193,157,56,0.6);
        }
        .league-enroll-btn:disabled {
          opacity: 0.65;
          cursor: not-allowed;
        }
        .league-stat-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.25);
          color: #fff;
          padding: 6px 16px;
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 500;
        }
        .league-stat-pill strong { color: #e8c96b; }
        .league-referral-applied {
          min-height: 50px;
          border-radius: 25px;
          border: 1.5px dashed #c9a227;
          background: #fff9e7;
          color: #1a1a1a;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 0 20px;
          font-weight: 700;
        }
        .league-referral-applied i,
        .league-referral-applied strong {
          color: #c19d38;
        }
        .league-referral-applied strong {
          margin-left: auto;
          letter-spacing: 0.04em;
        }
      `}</style>

      <PageHelmet pageTitle="Enroll – ProFX League" />
      <Breadcrumb title="League Enrollment" />

      <div className="container-fluid min-vh-100 py-6 d-flex align-items-center" style={{ background: "linear-gradient(135deg, #f6f5ea, #f9f9f5)" }}>
        <div className="container">
          <div className="row g-4 align-items-stretch">

            {/* LEFT SIDE – League info panel */}
            <div className="col-12 col-lg-4">
              <div className="league-enroll-sidebar h-100 p-4 p-lg-5 d-flex flex-column">

                <div className="mb-4">
                  <img src={LEAGUE_LOGO} alt="ProFX League" style={{ maxWidth: 260, width: "100%" }} />
                </div>

                <h4 style={{ color: "#e8c96b", fontWeight: 800, marginBottom: 8 }}>
                  FX Championship 2026
                </h4>
                <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.93rem", lineHeight: 1.7, marginBottom: 24 }}>
                  Join the world's largest free online trading championship. Compete against traders globally,
                  qualify through our weekly rounds, and win your share of the prize pool.
                </p>

                <div className="d-flex flex-wrap gap-2 mb-4">
                  {[
                    { label: "$5,000", sub: "Prize Pool" },
                    { label: "FREE",   sub: "Entry"      },
                    { label: "4",      sub: "Rounds"     },
                    { label: "MT5",    sub: "Platform"   },
                  ].map(({ label, sub }) => (
                    <span key={sub} className="league-stat-pill">
                      <strong>{label}</strong> {sub}
                    </span>
                  ))}
                </div>

                <ul style={{ listStyle: "none", padding: 0, margin: 0, flex: 1 }}>
                  {[
                    "Open to all traders worldwide",
                    "No deposit required — 100% free",
                    "4 weekly qualifier rounds",
                    "Top 50 per round advance to Grand Final",
                    "20 – 21 August 2026",
                  ].map((item) => (
                    <li key={item} style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.88rem", marginBottom: 10, display: "flex", alignItems: "flex-start", gap: 10 }}>
                      <i className="fa fa-check-circle" style={{ color: "#e8c96b", marginTop: 3, flexShrink: 0 }}></i>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-4">
                  <Link to="/League" style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.82rem", textDecoration: "none" }}>
                    <i className="fa fa-arrow-left me-2"></i>Back to Championship Page
                  </Link>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE – Enrollment form */}
            <div className="col-12 col-lg-8">
              <div className="h-100 bg-white rounded-4 shadow p-4 p-lg-5">

                <div className="text-center mb-4">
                  <span style={{
                    display: "inline-block",
                    background: GOLD,
                    color: "#1a1a1a",
                    fontWeight: 700,
                    fontSize: "0.72rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    padding: "5px 20px",
                    borderRadius: 50,
                    marginBottom: 12,
                  }}>
                    FREE ENROLLMENT
                  </span>
                  <h4 style={{ fontWeight: 800, color: "#1a1a1a", marginBottom: 4 }}>
                    Register for ProFX League
                  </h4>
                  <p style={{ color: "#888", fontSize: "0.88rem", margin: 0 }}>
                    Fill in your details to secure your spot in the championship.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="row g-3">

                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control league-enroll-input"
                      placeholder="Full Name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="col-12">
                    <input
                      type="email"
                      className="form-control league-enroll-input"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="col-12">
                    <div className="phone-no">
                      <PhoneInput
                        country={"ae"}
                        value={phone}
                        onChange={handlePhoneChange}
                        inputProps={{
                          name: "phone",
                          required: true,
                          placeholder: "Phone No.",
                          style: {
                            fontSize: "15px",
                            fontWeight: "400",
                            backgroundColor: "#F7F7F7",
                            border: "none",
                            borderRadius: "25px",
                            padding: "3px 42px",
                            color: "#707070",
                            width: "100%",
                            boxShadow: "none",
                            height: "50px",
                          },
                        }}
                        containerStyle={{ width: "100%" }}
                        inputStyle={{ width: "100%", height: "50px" }}
                        buttonStyle={{ border: "none", backgroundColor: "transparent", borderRadius: "25px 0 0 25px" }}
                        dropdownStyle={{ fontSize: "15px" }}
                        specialLabel=""
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <Select
                      options={countryOptions}
                      value={nationality}
                      onChange={setNationality}
                      placeholder="Nationality"
                      isSearchable
                      styles={customSelectStyles}
                      classNamePrefix="react-select"
                    />
                  </div>

                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control league-enroll-input"
                      placeholder="Company Name"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control league-enroll-input"
                      placeholder="Position / Role"
                      value={position}
                      onChange={(e) => setPosition(e.target.value)}
                    />
                  </div>


                  {referralFromLink ? (
                    <div className="col-12">
                      <div className="league-referral-applied">
                        <i className="fa fa-link"></i>
                        <span>Referral link applied</span>
                        <strong>Applied</strong>
                      </div>
                    </div>
                  ) : (
                    <div className="col-12">
                      <input
                        type="text"
                        className="form-control league-enroll-input"
                        placeholder="Referral Code"
                        value={referralCode}
                        onChange={(e) => setReferralCode(e.target.value.toUpperCase())}
                      />
                    </div>
                  )}
                  <div className="col-12">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="leagueTerms"
                        checked={termsAccepted}
                        onChange={handleTermsCheckboxChange}
                        required
                      />
                      <label className="form-check-label" htmlFor="leagueTerms">
                        I agree to the{" "}
                        <a
                          className="text-decoration-none"
                          style={{ color: "#c19d38", fontWeight: 600, cursor: "pointer" }}
                          onClick={openTermsModal}
                        >
                          Terms &amp; Conditions
                        </a>
                      </label>
                    </div>
                  </div>

                  <div className="col-12 mt-2">
                    <button type="submit" className="league-enroll-btn" disabled={loading}>
                      {loading ? (
                        <><i className="fa fa-spinner fa-spin me-2"></i>Enrolling...</>
                      ) : (
                        <><i className="fa fa-trophy me-2"></i>Enroll Now – It's Free!</>
                      )}
                    </button>
                  </div>

                  <div className="col-12 text-center">
                    <small style={{ color: "#aaa", fontSize: "0.78rem" }}>
                      Already enrolled?{" "}
                      <Link to="/Login" style={{ color: "#c19d38", fontWeight: 600, textDecoration: "none" }}>
                        Login to your account
                      </Link>
                    </small>
                  </div>

                </form>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Terms Modal ── */}
      {showTermsModal && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.45)" }}
          tabIndex="-1"
          role="dialog"
          aria-modal="true"
          aria-labelledby="leagueTermsTitle"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content border-0 shadow">
              <div className="modal-header">
                <div>
                  <h5 className="modal-title mb-1" id="leagueTermsTitle" style={{ color: "#c19d38", fontWeight: 800 }}>
                    Terms &amp; Conditions
                  </h5>
                  <small className="text-grey">
                    Please read and scroll through the full terms before accepting.
                  </small>
                </div>
              </div>

              <div
                className="modal-body"
                ref={termsBodyRef}
                onScroll={handleTermsScroll}
                style={{ maxHeight: "60vh" }}
              >
                {termsSections.map((section) => (
                  <div className="mb-4" key={section.title}>
                    <h6 className="fw-bold mb-2">{section.title}</h6>
                    <p className="text-grey mb-0">{section.text}</p>
                  </div>
                ))}
                <p className="text-grey mb-0">
                  If you have any questions about these Terms &amp; Conditions, please contact our support team before enrolling.
                </p>
              </div>

              <div className="modal-footer d-flex flex-column align-items-stretch">
                {!termsScrolledToEnd && (
                  <small className="text-grey text-center">
                    Scroll to the bottom to enable acceptance.
                  </small>
                )}
                <button
                  type="button"
                  className="league-enroll-btn"
                  onClick={acceptTerms}
                  disabled={!termsScrolledToEnd}
                >
                  Accept Terms &amp; Continue Enrollment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LeagueEnroll;

