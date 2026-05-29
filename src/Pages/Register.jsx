import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageHelmet from "../Components/Pagehelmet";
import Breadcrumb from "../Components/Breadcrumb";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Select from "react-select";
import countryList from "react-select-country-list";
import API from "../api/api";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';
import { Eye, EyeOff, Globe, Mail, PhoneCall, Pin } from "lucide-react";

const termsSections = [
  {
    title: "1. Acceptance of Terms",
    text: 'By registering for and using the BridgeX Suite client portal ("Platform"), you confirm that you have read, understood, and agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, you must not use the Platform.',
  },
  {
    title: "2. Eligibility",
    text: "You must be at least 18 years of age and have full legal capacity to enter into binding agreements under the laws of your jurisdiction. Use of the Platform is void where prohibited by applicable laws or regulations. By registering, you represent and warrant that you meet these eligibility requirements.",
  },
  {
    title: "3. Account Registration & Security",
    text: "You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorised use of your account. We reserve the right to suspend or terminate accounts where we suspect unauthorised access or fraudulent activity.",
  },
  {
    title: "4. KYC & Identity Verification",
    text: "To comply with applicable anti-money laundering (AML) and Know Your Customer (KYC) regulations, you may be required to submit identity and address verification documents before accessing full platform features. We reserve the right to restrict or suspend accounts that fail to complete verification within the required timeframe.",
  },
  {
    title: "5. Trading Risks",
    text: "Trading in financial instruments involves significant risk, including the risk of losing all invested capital. Past performance is not indicative of future results. You acknowledge that all trading decisions are made independently and at your own risk. The Platform does not provide financial advice or investment recommendations.",
  },
  {
    title: "6. Deposits & Withdrawals",
    text: "All deposits and withdrawals are subject to applicable processing fees and timeframes as set out in our fee schedule. Funds may be subject to holds or restrictions in accordance with our AML policy or when required by regulatory authorities. We are not liable for delays caused by third-party payment providers.",
  },
  {
    title: "7. Privacy & Data Protection",
    text: "Your personal data is collected, stored, and processed in accordance with our Privacy Policy. By using the Platform you consent to such processing. We implement industry-standard security measures to protect your information but cannot guarantee absolute security of data transmitted over the internet.",
  },
  {
    title: "8. Prohibited Activities",
    text: "You agree not to use the Platform for any unlawful purpose, to engage in market manipulation, to attempt unauthorised access to any part of the system, or to transmit any harmful, fraudulent, or misleading content. Violation of these prohibitions may result in immediate account termination and referral to relevant authorities.",
  },
  {
    title: "9. Limitation of Liability",
    text: "To the fullest extent permitted by law, BridgeX Suite and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Platform, including but not limited to trading losses, system downtime, or data loss.",
  },
  {
    title: "10. Amendments",
    text: "We reserve the right to update or modify these Terms & Conditions at any time. Continued use of the Platform following notification of changes constitutes your acceptance of the revised terms. We will provide reasonable notice of material changes via the Platform or the email address registered to your account.",
  },
  {
    title: "11. Governing Law",
    text: "These Terms & Conditions are governed by and construed in accordance with the applicable laws of the jurisdiction in which BridgeX Suite operates. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the competent courts in that jurisdiction.",
  },
];

const isBlockedAnalyticsFetchError = (event) => {
  const error = event.reason || event.error || event;
  const message = String(error?.message || event.message || "");
  const stack = String(error?.stack || event.filename || "");

  return (
    message.includes("Failed to fetch") &&
    (stack.includes("googletagmanager.com") ||
      stack.includes("gtag/js") ||
      stack.includes("injectScriptAdjust") ||
      stack.includes("chrome-extension://"))
  );
};

const sendRegistrationAnalytics = () => {
  if (process.env.NODE_ENV !== "production") return;
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  try {
    window.gtag("event", "sign_up", { method: "register_form" });
    window.gtag("event", "conversion", {
      send_to: "AW-16663879548/vKA5CIeCoMgZEPy--ok-",
    });
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.warn("Registration analytics skipped:", error);
    }
  }
};

const Register = () => {
  const countryOptions = countryList().getData();
  const handlePhoneChange = (value, country) => {
    setPhone(value);

    if (country?.name) {
      const matchedCountry = countryOptions.find(
        (c) => c.label === country.name
      );

      if (matchedCountry) {
        setNationality(matchedCountry);
      }
    }
  };


  useEffect(() => {
    const defaultCountry = countryOptions.find(
      (c) => c.value === "AE"
    );
    if (defaultCountry && !nationality) {
      setNationality(defaultCountry);
    }
  }, []);




  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phone, setPhone] = useState("");
  const [userType, setUserType] = useState("");
  const [nationality, setNationality] = useState(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [specialReq, setSpecialReq] = useState("");
  const [sponsorPackage, setSponsorPackage] = useState("");
  const [products, setProducts] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [termsScrolledToEnd, setTermsScrolledToEnd] = useState(false);
  const termsBodyRef = useRef(null);

  useEffect(() => {
    const suppressBlockedAnalyticsError = (event) => {
      if (isBlockedAnalyticsFetchError(event)) {
        event.preventDefault();
      }
    };

    window.addEventListener("error", suppressBlockedAnalyticsError);
    window.addEventListener("unhandledrejection", suppressBlockedAnalyticsError);

    return () => {
      window.removeEventListener("error", suppressBlockedAnalyticsError);
      window.removeEventListener("unhandledrejection", suppressBlockedAnalyticsError);
    };
  }, []);

  const openTermsModal = () => {
    setTermsScrolledToEnd(false);
    setShowTermsModal(true);

    setTimeout(() => {
      const termsBody = termsBodyRef.current;
      if (termsBody && termsBody.scrollHeight <= termsBody.clientHeight + 5) {
        setTermsScrolledToEnd(true);
      }
    }, 0);
  };

  const handleTermsScroll = () => {
    const termsBody = termsBodyRef.current;
    if (!termsBody) return;

    const reachedEnd =
      termsBody.scrollTop + termsBody.clientHeight >= termsBody.scrollHeight - 8;

    if (reachedEnd) {
      setTermsScrolledToEnd(true);
    }
  };

  const handleTermsCheckboxChange = (e) => {
    if (e.target.checked) {
      openTermsModal();
      return;
    }

    setTermsAccepted(false);
  };

  const acceptTerms = () => {
    if (!termsScrolledToEnd) return;

    setTermsAccepted(true);
    setShowTermsModal(false);
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!termsAccepted) {
      openTermsModal();
      return;
    }

    // ✅ Password match check
    if (password !== confirmPassword) {
      return Swal.fire({
        icon: "error",
        title: "Error",
        text: "Password and Confirm Password do not match",
      });
    }
    const digitsOnly = phone.replace(/\D/g, "");

    if (digitsOnly.length < 10) {
      setLoading(false);
      return Swal.fire({
        icon: "error",
        title: "Invalid Phone",
        text: "Please enter a valid phone number",
      });
    }


    setLoading(true);

    try {
      const res = await API.post("/register", {
          api_key: process.env.REACT_APP_API_KEY,
          full_name: fullName,
          email: email,
          company_name: companyName,
          phone: digitsOnly,
          user_type: userType,
          nationality: nationality?.label || "",
          password: password,
          password_confirmation: confirmPassword,
          special_requirements: specialReq,
          sponsor_package: sponsorPackage,
          products_services: products
        });

      if (res.data.code === "1" || res.data.code === 1) {
        sendRegistrationAnalytics();
        // ✅ Success SweetAlert
        await Swal.fire({
          icon: "success",
          title: "Registration Successful",
          text: "You can now login with your credentials",
          showConfirmButton: false,
          timer: 2000
        });

        // ✅ Redirect to Login page
        navigate("/login");
      } else {
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: res.data.msg || "Something went wrong"
        });
      }

    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: err.response?.data?.msg || "Something went wrong. Try again later."
      });
    } finally {
      setLoading(false);
    }
  };

  const customSelectStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "#F7F7F7",
      border: `1.5px solid ${state.isFocused ? "#a07d1a" : "#c9a227"}`,
      borderRadius: "25px",
      minHeight: "50px",
      boxShadow: state.isFocused ? "0 0 0 3px rgba(201,162,39,0.18)" : "none",
      paddingLeft: "30px",
      fontSize: "15px",
      fontWeight: "400",
      color: "#707070",
      "&:hover": { borderColor: "#a07d1a" },
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: "0",
    }),
    input: (provided) => ({
      ...provided,
      margin: "0",
      padding: "0",
      color: "#707070",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#707070",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#707070",
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      paddingRight: "15px",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "#707070",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: "15px",
      fontSize: "14px",
    }),
  };


  return (
    <>
      <PageHelmet pageTitle="Register" />
      <Breadcrumb title="Register" />
      <div className="container-fluid min-vh-100 py-6 d-flex align-items-center bg-lightgrey">
        <div className="container">
          <div className="row g-4 align-items-stretch">

            {/* LEFT SIDE – CONTACT INFO */}
            <div className="col-12 col-lg-5">
              <div className="h-100 bg-white rounded shadow p-4 d-flex flex-column gap-3">
                <h5 className="pink mb-2">Contact Info:</h5>
                <div className="mb-1 fw-semibold">
                  <p className="mb-1 d-flex align-items-center gap-1"><Pin /> EVENT VENUE: EXHIBITION HALL 5 CTICC 2</p>
                  <p className="mb-0 d-flex align-items-center gap-1"><Pin /> ADDRESS: Cape Town, South Africa</p>
                </div>
                <Link className="text-grey d-flex align-items-center gap-1" to="https://profxexpo.com/africa" target="_blank" rel="noreferrer"><Globe /> profxexpo.com/africa</Link>
                <Link className="text-grey d-flex align-items-center gap-1" to="tel:+971588845033"><PhoneCall /> +971 58 884 5033</Link>
                <Link className="text-grey d-flex align-items-center gap-1" to="mailto:info@profxmedia.com"><Mail /> info@profxmedia.com</Link>
                <div className="ratio ratio-16x9 rounded overflow-hidden mt-2">
                  <iframe
                    src="https://maps.google.com/maps?q=Cape%20Town,%20South%20Africa&output=embed"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="CTICC 2 Map"
                  />
                </div>
              </div>
            </div>

            {/* RIGHT SIDE – REGISTER FORM */}
            <div className="col-12 col-lg-7">
              <div className="h-100 bg-white rounded shadow p-4">
                <h4 className="pink mb-4 text-center">Register for PROFX EXPO AFRICA 2026</h4>

                <form onSubmit={handleRegister} className="row g-3">
                  <div className="col-md-6">
                    <input type="text" className="form-control" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
                  </div>

                  <div className="col-md-6">
                    <input type="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  </div>



                  <div className="col-md-6">
                    <div className="phone-no mb-3">
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
                        buttonStyle={{
                          border: "none",
                          backgroundColor: "transparent",
                          borderRadius: "25px 0 0 25px",
                        }}
                        dropdownStyle={{ fontSize: "15px" }}
                        specialLabel=""
                      />

                    </div>
                    {/* <input type="text" className="form-control" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} required /> */}
                  </div>



                  <div className="col-md-6">
                    <Select
                      options={countryOptions}
                      value={nationality}
                      onChange={setNationality}
                      placeholder="Nationality"
                      isSearchable
                      styles={customSelectStyles}
                      classNamePrefix="react-select"
                      required
                    />

                    {/* <input type="text" className="form-control" placeholder="Nationality" value={nationality} onChange={(e) => setNationality(e.target.value)} required /> */}
                  </div>

                  <div className="col-md-6 position-relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      style={{
                        position: "absolute",
                        right: "20px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                      }}
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </span>
                  </div>

                  <div className="col-md-6 position-relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      className="form-control"
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                    <span
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      style={{
                        position: "absolute",
                        right: "20px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                      }}
                    >
                      {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </span>
                  </div>
                  <div className="col-md-6">
                    <input type="text" className="form-control" placeholder="Company Name" value={companyName} onChange={(e) => setCompanyName(e.target.value)} required />
                  </div>

                  <div className="col-md-6">
                    <input type="text" className="form-control" placeholder="Enter The Position" value={specialReq} onChange={(e) => setSpecialReq(e.target.value)} />
                  </div>
                  <div className="col-md-6">
                    <select value={userType} onChange={(e) => setUserType(e.target.value)} required>
                      <option value="">User Type</option>
                      <option value="trader">Trader</option>
                      <option value="visitor">Visitor</option>
                      <option value="investor">Investor</option>
                      <option value="ib">IB</option>
                      <option value="liquidity_provider">Liquidity Provider</option>
                      <option value="influencer">Influencer</option>
                      <option value="media_companies">Media Companies</option>
                      <option value="technology_provider">Technology Provider</option>
                      <option value="payment_solution">Payment Solution</option>
                      <option value="fund_manager">Fund Manager & Institutional Traders</option>
                    </select>

                  </div>
                  <div className="col-md-6">
                    <select value={sponsorPackage} onChange={(e) => setSponsorPackage(e.target.value)}>
                      <option value="">Refferal Source</option>
                      <option value="Facebook">Facebook</option>
                      <option value="Linkdin">Linkdin</option>
                      <option value="Instgram">Instgram</option>
                      <option value="GoogleSearch">Google Search</option>
                      <option value="News">News</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* <div className="col-12">
                    <textarea rows="3" placeholder="Products / Services to Showcase" value={products} onChange={(e) => setProducts(e.target.value)} />
                  </div> */}

                  <div className="col-12">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="terms"
                        checked={termsAccepted}
                        onChange={handleTermsCheckboxChange}
                        required
                      />
                      <label className="form-check-label" htmlFor="terms">
                        I agree to the{" "} <a className="text-decoration-none text-primary" onClick={openTermsModal}>Terms & Conditions</a>
                      </label>
                    </div>
                  </div>

                  <div className="col-12">
                    <button type="submit" className="btn bg-pink text-white w-100" disabled={loading}>
                      {loading ? "Registering..." : "Register"}
                    </button>
                  </div>

                  <div className="col-12 text-center">
                    <small className="text-grey">
                      Already have an account? <Link to="/Login" className="pink">Login</Link>
                    </small>
                  </div>

                </form>
              </div>
            </div>

          </div>
        </div>
      </div>

      {showTermsModal && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.45)" }}
          tabIndex="-1"
          role="dialog"
          aria-modal="true"
          aria-labelledby="termsModalTitle"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content border-0 shadow">
              <div className="modal-header">
                <div>
                  <h5 className="modal-title pink mb-1" id="termsModalTitle">
                    Terms & Conditions
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
                  Last updated: March 2026. If you have any questions about these Terms
                  & Conditions, please contact our support team before registering.
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
                  className="btn bg-pink text-white w-100"
                  onClick={acceptTerms}
                  disabled={!termsScrolledToEnd}
                >
                  Accept Terms & Continue Registration
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
