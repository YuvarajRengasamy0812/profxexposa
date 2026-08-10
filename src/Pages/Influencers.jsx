import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Select from "react-select";
import countryList from "react-select-country-list";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import Pagehelmet from "../Components/Pagehelmet";
import { getApprovedInfluencers, postInfluencerLogin, postInfluencerRegister } from "../api/influencerRegister";
import { buildAssetUrl } from "../utils/assetUrl";
import "./Influencers.css";

const influencerAsset = (fileName) => buildAssetUrl(`/assets/images/influencers/${fileName}`);

const heroImage = influencerAsset("hero-influencers.jpg");
const trophyImage = influencerAsset("top25-trophy.jpg");
const medalImage = influencerAsset("top25-medal.png");
const qrImage = influencerAsset("influencer-qr.png");
const storedReferralKey = "profx_influencer_referral";
const storedInfluencerKey = "profx_influencer_profile";

const benefits = [
  { icon: "fa-ticket", title: "Complimentary 2-Day Expo Pass" },
  { icon: "fa-trophy", title: "Access to ProFX Awards Africa 2026" },
  { icon: "fa-check-circle", title: "Official Influencer Certificate" },
  { icon: "fa-certificate", title: "Official Influencer Medal On Stage" },
  { icon: "fa-users", title: "Networking with Global Brands and Industry Leaders" },
  { icon: "fa-video-camera", title: "Exclusive Content and Interview Opportunities" },
  { icon: "fa-gift", title: "Giveaways, Goodie Bag and Lucky Draws" },
  { icon: "fa-bullhorn", title: "Featured on ProFX Expo Social Media" },
];

const rewardRows = [
  ["100", "Registered Visitors", "US$100", "Cash Reward"],
  ["150", "Registered Visitors", "US$150", "Cash Reward"],
  ["200", "Registered Visitors", "US$200", "Cash Reward"],
  ["250+", "Registered Visitors", "US$250", "Cash Reward Maximum"],
];

const steps = [
  {
    icon: "fa-desktop",
    title: "Register as an Influencer",
    text: "Complete the influencer form and confirm your details.",
  },
  {
    icon: "fa-id-card",
    title: "Complete Your Profile",
    text: "Add your company, role, country and contact information.",
  },
  {
    icon: "fa-link",
    title: "Get Your Referral Link",
    text: "Receive your unique influencer referral link after registration.",
  },
  {
    icon: "fa-share-alt",
    title: "Share and Invite",
    text: "Share with your audience and invite them to register.",
  },
  {
    icon: "fa-gift",
    title: "Earn Rewards",
    text: "Bring more visitors, earn rewards and qualify for the Top 25 awards.",
  },
];

const categories = [
  ["fa-line-chart", "Trader"],
  ["fa-area-chart", "Investor"],
  ["fa-building", "FinTech"],
  ["fa-btc", "Crypto"],
  ["fa-briefcase", "Business and Entrepreneurship"],
  ["fa-camera", "Lifestyle"],
  ["fa-microchip", "Technology"],
  ["fa-graduation-cap", "Education"],
  ["fa-lightbulb-o", "Motivation and Personal Development"],
  ["fa-suitcase", "Women in Business"],
  ["fa-user-plus", "Student Creator"],
  ["fa-newspaper-o", "News and Media"],
];

const initialFormState = {
  fullName: "",
  email: "",
  phone: "",
  country: null,
  companyName: "",
  positionRole: "",
  password: "",
  referralCode: "",
  profilePhoto: null,
};

function ReferralLinkBox({ referral }) {
  if (!referral?.referral_link) {
    return null;
  }

  const copyReferralLink = async () => {
    try {
      await navigator.clipboard.writeText(referral.referral_link);
    } catch (error) {
      console.warn("Unable to copy referral link:", error);
    }
  };

  return (
    <div className="ifx-referral-box">
      <span>Your influencer referral link</span>
      <a href={referral.referral_link} target="_blank" rel="noopener noreferrer">
        {referral.referral_link}
      </a>
      <button type="button" onClick={copyReferralLink} aria-label="Copy referral link">
        <i className="fa fa-copy"></i>
      </button>
    </div>
  );
}

function InfluencerRegisterModal({ isOpen, onClose, onSuccess, initialReferralCode = "" }) {
  const countryOptions = useMemo(() => countryList().getData(), []);
  const defaultCountry = useMemo(
    () => countryOptions.find((country) => country.value === "AE") || null,
    [countryOptions]
  );
  const [formData, setFormData] = useState({ ...initialFormState, country: defaultCountry });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [successReferral, setSuccessReferral] = useState(null);
  const [photoPreview, setPhotoPreview] = useState("");

  useEffect(() => {
    if (isOpen) {
      setFormData((current) => ({
        ...current,
        country: current.country || defaultCountry,
        referralCode: current.referralCode || initialReferralCode,
      }));
      setError("");
      setSuccessReferral(null);
    }
  }, [defaultCountry, initialReferralCode, isOpen]);

  if (!isOpen) {
    return null;
  }

  const updateField = (field, value) => {
    if (field === "profilePhoto") {
      if (photoPreview) {
        URL.revokeObjectURL(photoPreview);
      }
      setPhotoPreview(value ? URL.createObjectURL(value) : "");
    }

    setFormData((current) => ({ ...current, [field]: value }));
  };

  const handlePhoneChange = (value, country) => {
    updateField("phone", value);

    if (country?.name) {
      const matchedCountry = countryOptions.find((item) => item.label === country.name);
      if (matchedCountry) {
        updateField("country", matchedCountry);
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    const digitsOnly = formData.phone.replace(/\D/g, "");

    if (digitsOnly.length < 8) {
      setError("Please enter a valid phone number.");
      return;
    }

    setIsSubmitting(true);

    try {
      const frontendBase = `${window.location.origin}/africa/Influencers`;
      const payload = new FormData();

      payload.append("full_name", formData.fullName);
      payload.append("email", formData.email);
      payload.append("phone", digitsOnly);
      payload.append("nationality", formData.country?.label || "");
      payload.append("company_name", formData.companyName);
      payload.append("position_role", formData.positionRole);
      payload.append("password", formData.password);
      payload.append("referral_code", formData.referralCode);
      payload.append("frontend_url", frontendBase);

      if (formData.profilePhoto) {
        payload.append("profile_photo", formData.profilePhoto);
      }

      const response = await postInfluencerRegister(payload);

      const data = response?.data || {};

      if (data.code === 1 || data.code === "1") {
        const userProfile = data.data?.influencer || data.data?.profile || {};
        const referral = {
          referral_code: data.data?.referral_code,
          referral_link: data.data?.referral_link,
        };

        localStorage.setItem(storedReferralKey, JSON.stringify(referral));
        localStorage.setItem(storedInfluencerKey, JSON.stringify(userProfile));
        setSuccessReferral(referral);
        onSuccess(referral, userProfile);
        setFormData({ ...initialFormState, country: defaultCountry });
        setPhotoPreview("");
      } else {
        const message = data.msg || "Registration failed. Please try again.";
        setError(message);
        if (String(message).toLowerCase().includes("email")) {
          Swal.fire({
            icon: "warning",
            title: "Email Already Registered",
            text: message,
          });
        }
      }
    } catch (err) {
      const message = err.response?.data?.msg || "Something went wrong. Please try again.";
      setError(message);
      if (err.response?.status === 409 || String(message).toLowerCase().includes("email")) {
        Swal.fire({
          icon: "warning",
          title: "Email Already Registered",
          text: message,
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectStyles = {
    control: (provided, state) => ({
      ...provided,
      minHeight: "58px",
      borderRadius: "29px",
      border: `1.5px solid ${state.isFocused ? "#c19d38" : "#c19d38"}`,
      boxShadow: state.isFocused ? "0 0 0 3px rgba(193,157,56,0.16)" : "none",
      backgroundColor: "#fff",
      color: "#707070",
      paddingLeft: "16px",
      fontSize: "16px",
    }),
    valueContainer: (provided) => ({ ...provided, padding: "0 8px" }),
    input: (provided) => ({ ...provided, color: "#707070" }),
    placeholder: (provided) => ({ ...provided, color: "#707070" }),
    singleValue: (provided) => ({ ...provided, color: "#707070" }),
    indicatorSeparator: () => ({ display: "none" }),
  };

  return (
    <div className="ifx-modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="influencerRegisterTitle">
      <div className="ifx-register-modal">
        <button type="button" className="ifx-modal-close" onClick={onClose} aria-label="Close influencer register form">
          <i className="fa fa-times"></i>
        </button>

        <div className="ifx-modal-head">
          <p className="ifx-kicker">PROFX EXPO AFRICA 2026</p>
          <h2 id="influencerRegisterTitle">Register as Influencer</h2>
          <p>Submit your details to receive your official influencer referral link.</p>
        </div>

        {successReferral?.referral_link ? (
          <div className="ifx-modal-success">
            <i className="fa fa-check-circle"></i>
            <h3>Registration successful</h3>
            <ReferralLinkBox referral={successReferral} />
            <button type="button" className="btn btn1" onClick={onClose}>
              Done
            </button>
          </div>
        ) : (
          <form className="ifx-modal-form" onSubmit={handleSubmit}>
            <label className="ifx-field ifx-photo-field">
              <span>Profile Photo</span>
              <div className="ifx-photo-upload">
                <img src={photoPreview || heroImage} alt="Influencer profile preview" />
                <strong>{formData.profilePhoto?.name || "Upload Photo"}</strong>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(event) => updateField("profilePhoto", event.target.files?.[0] || null)}
                  required
                />
              </div>
            </label>
            <label className="ifx-field">
              <span>Full Name</span>
              <input
                type="text"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={(event) => updateField("fullName", event.target.value)}
                required
              />
            </label>
            <label className="ifx-field">
              <span>Email Address</span>
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(event) => updateField("email", event.target.value)}
                required
              />
            </label>
            <label className="ifx-field">
              <span>Mobile Number</span>
              <PhoneInput
                country="ae"
                value={formData.phone}
                onChange={handlePhoneChange}
                inputProps={{ name: "phone", required: true, placeholder: "Mobile Number" }}
                specialLabel=""
                containerClass="ifx-phone-field"
                inputClass="ifx-phone-input"
                buttonClass="ifx-phone-button"
              />
            </label>
            <label className="ifx-field">
              <span>Country</span>
              <Select
                options={countryOptions}
                value={formData.country}
                onChange={(value) => updateField("country", value)}
                placeholder="Country"
                isSearchable
                styles={selectStyles}
                classNamePrefix="ifx-country"
                required
              />
            </label>
            <label className="ifx-field">
              <span>Company Name</span>
              <input
                type="text"
                placeholder="Company Name"
                value={formData.companyName}
                onChange={(event) => updateField("companyName", event.target.value)}
                required
              />
            </label>
            <label className="ifx-field">
              <span>Position / Role</span>
              <input
                type="text"
                placeholder="Position / Role"
                value={formData.positionRole}
                onChange={(event) => updateField("positionRole", event.target.value)}
                required
              />
            </label>
            <label className="ifx-field">
              <span>Password</span>
              <input
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={(event) => updateField("password", event.target.value)}
                minLength={6}
                required
              />
            </label>
            <label className="ifx-field">
              <span>Referral Code</span>
              <input
                type="text"
                placeholder="Referral Code"
                value={formData.referralCode}
                onChange={(event) => updateField("referralCode", event.target.value)}
              />
            </label>

            {error && <div className="ifx-form-error">{error}</div>}

            <button type="submit" className="btn btn1 ifx-submit-btn" disabled={isSubmitting}>
              {isSubmitting ? "Registering..." : "Register"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

function InfluencerLoginModal({ isOpen, onClose, onSuccess }) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) {
    return null;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const response = await postInfluencerLogin(formData);
      const data = response?.data || {};

      if (data.code === 1 || data.code === "1") {
        const profile = data.data?.influencer || data.data?.profile || {};
        const referralData = {
          referral_code: data.data?.referral_code || profile.referral_code,
          referral_link: data.data?.referral_link || profile.referral_link,
        };

        localStorage.setItem(storedInfluencerKey, JSON.stringify(profile));
        localStorage.setItem(storedReferralKey, JSON.stringify(referralData));
        onSuccess(referralData, profile);
        setFormData({ email: "", password: "" });
        onClose();
      } else {
        setError(data.msg || "Login failed.");
      }
    } catch (err) {
      setError(err.response?.data?.msg || "Login failed.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="ifx-modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="influencerLoginTitle">
      <div className="ifx-register-modal ifx-login-modal">
        <button type="button" className="ifx-modal-close" onClick={onClose} aria-label="Close influencer login form">
          <i className="fa fa-times"></i>
        </button>

        <div className="ifx-modal-head">
          <p className="ifx-kicker">PROFX EXPO AFRICA 2026</p>
          <h2 id="influencerLoginTitle">Influencer Login</h2>
          <p>Login to view your influencer profile and referral link.</p>
        </div>

        <form className="ifx-modal-form ifx-login-form" onSubmit={handleSubmit}>
          <label className="ifx-field">
            <span>Email Address</span>
            <input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(event) => setFormData((current) => ({ ...current, email: event.target.value }))}
              required
            />
          </label>
          <label className="ifx-field">
            <span>Password</span>
            <input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(event) => setFormData((current) => ({ ...current, password: event.target.value }))}
              required
            />
          </label>
          {error && <div className="ifx-form-error">{error}</div>}
          <button type="submit" className="btn btn1 ifx-submit-btn" disabled={isSubmitting}>
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}

function InfluencerProfileMenu({ profile, onLogout }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="ifx-profile-menu">
      <button type="button" className="btn btn1" onClick={() => setIsOpen((current) => !current)}>
        Profile <i className="fa fa-user ms-2"></i>
      </button>
      {isOpen && (
        <div className="ifx-profile-dropdown">
          <div>
            <strong>{profile?.full_name || "Influencer"}</strong>
            <span>{profile?.email || ""}</span>
          </div>
          <Link to="/InfluencerProfile">
            <i className="fa fa-eye"></i> View Profile
          </Link>
          <button type="button" onClick={onLogout}>
            <i className="fa fa-sign-out"></i> Logout
          </button>
        </div>
      )}
    </div>
  );
}

function ApprovedInfluencerSection({ influencers }) {
  return (
    <section className="ifx-list-section">
      <div className="container">
        <div className="ifx-section-heading">
          <span></span>
          <h2>Meet Our Digital Voice Leaders</h2>
          <span></span>
        </div>

        {influencers.length === 0 ? (
          <p className="ifx-empty-list">Approved influencers will appear here.</p>
        ) : (
          <div className="ifx-approved-grid">
            {influencers.map((item) => (
              <article className="ifx-profile-card" key={item.id}>
                <div className="ifx-profile-image">
                  <img src={item.profile_photo_url || heroImage} alt={item.full_name} />
                </div>
                <div className="ifx-profile-body">
                  <h5>{item.full_name}</h5>
                  <p className="ifx-handle">{item.company_name || "Official Influencer"}</p>
                  <p className="ifx-niche">{item.position_role || "Influencer"}</p>
                  <p className="ifx-bio">{item.nationality || "PROFX Expo Africa 2026 Influencer Partner"}</p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function Influencers() {
  const location = useLocation();
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [referral, setReferral] = useState(null);
  const [influencerProfile, setInfluencerProfile] = useState(null);
  const [approvedInfluencers, setApprovedInfluencers] = useState([]);

  const referralFromUrl = useMemo(() => {
    const params = new URLSearchParams(location.search);
    return params.get("ref") || params.get("referral_code") || "";
  }, [location.search]);

  useEffect(() => {
    document.body.classList.add("influencer-header-visible");

    return () => {
      document.body.classList.remove("influencer-header-visible");
    };
  }, []);

  useEffect(() => {
    try {
      const savedReferral = JSON.parse(localStorage.getItem(storedReferralKey));
      if (savedReferral?.referral_link) {
        setReferral(savedReferral);
      }

      const savedProfile = JSON.parse(localStorage.getItem(storedInfluencerKey));
      if (savedProfile?.id || savedProfile?.influencer_id) {
        setInfluencerProfile(savedProfile);
      }
    } catch {
      localStorage.removeItem(storedReferralKey);
      localStorage.removeItem(storedInfluencerKey);
    }
  }, []);

  useEffect(() => {
    getApprovedInfluencers()
      .then((response) => {
        setApprovedInfluencers(response?.data?.details || []);
      })
      .catch(() => {
        setApprovedInfluencers([]);
      });
  }, []);

  const openRegisterModal = () => setIsRegisterOpen(true);
  const handleRegisterSuccess = (newReferral, userProfile) => {
    setReferral(newReferral);
    setInfluencerProfile(userProfile);
  };
  const handleInfluencerLogout = () => {
    localStorage.removeItem(storedInfluencerKey);
    localStorage.removeItem(storedReferralKey);
    setInfluencerProfile(null);
    setReferral(null);
  };
  const isInfluencerRegistered = Boolean(influencerProfile?.id || influencerProfile?.influencer_id);
  const renderPrimaryAction = () => (
    isInfluencerRegistered ? (
      <InfluencerProfileMenu profile={influencerProfile} onLogout={handleInfluencerLogout} />
    ) : (
      <>
        <button type="button" className="btn btn1" onClick={openRegisterModal}>
          Register Now <i className="fa fa-arrow-right ms-2"></i>
        </button>
        <button type="button" className="btn ifx-outline-btn" onClick={() => setIsLoginOpen(true)}>
          Login <i className="fa fa-sign-in ms-2"></i>
        </button>
      </>
    )
  );

  return (
    <div className="influencer-page">
      <Pagehelmet pageTitle="Influencers" />

      <section className="ifx-hero-section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <p className="ifx-kicker">PROFX EXPO AFRICA 2026</p>
              <h1>
                Become an <span>Official Influencer Partner</span>
              </h1>
              <p className="ifx-tagline">Inspire. Influence. Get Rewarded.</p>
              <p className="ifx-lead">
                Africa's Premier Online Trading, FinTech, Crypto, Investment and Financial Services Expo.
              </p>

              <div className="ifx-facts">
                <div className="ifx-fact">
                  <i className="fa fa-calendar"></i>
                  <div>
                    <strong>20-21</strong>
                    <span>August 2026</span>
                  </div>
                </div>
                <div className="ifx-fact">
                  <i className="fa fa-map-marker"></i>
                  <div>
                    <strong>CTICC2 - Hall 5</strong>
                    <span>Cape Town, South Africa</span>
                  </div>
                </div>
              </div>

              <div className="ifx-actions">
                {renderPrimaryAction()}
                <a href="#top25-awards" className="btn ifx-outline-btn">
                  Explore Top 25 Awards
                </a>
              </div>
              <ReferralLinkBox referral={referral} />
            </div>

            <div className="col-lg-6">
              <div className="ifx-hero-image">
                <img src={heroImage} alt="ProFX Expo influencer partners in Cape Town" />
                <div className="ifx-hero-badge">
                  <span>OFFICIAL</span>
                  <strong>INFLUENCER PARTNER</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ApprovedInfluencerSection influencers={approvedInfluencers} />

      <section className="ifx-benefits-section">
        <div className="container">
          <div className="ifx-section-heading">
            <span></span>
            <h2>As an Official Influencer Partner You Will Receive</h2>
            <span></span>
          </div>

          <div className="ifx-benefits-grid">
            {benefits.map((benefit) => (
              <article className="ifx-benefit-card" key={benefit.title}>
                <div className="ifx-icon-box">
                  <i className={`fa ${benefit.icon}`}></i>
                </div>
                <h3>{benefit.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ifx-program-section" id="top25-awards">
        <div className="container">
          <div className="ifx-program-grid">
            <article className="ifx-dark-card">
              <div className="ifx-card-head">
                <div>
                  <span>REFERRAL PROGRAM</span>
                  <h2>Influencer Referral Rewards</h2>
                </div>
                <i className="fa fa-users"></i>
              </div>

              <p>
                Invite your followers using your unique referral link. Every verified registration counts.
              </p>

              <div className="ifx-reward-table">
                {rewardRows.map(([count, label, amount, reward], index) => (
                  <div className={`ifx-reward-row ${index === rewardRows.length - 1 ? "featured" : ""}`} key={count}>
                    <div>
                      <i className="fa fa-users"></i>
                      <span>
                        <strong>{count}</strong>
                        {label}
                      </span>
                    </div>
                    <span>
                      <strong>{amount}</strong>
                      {reward}
                    </span>
                  </div>
                ))}
              </div>

              <div className="ifx-mini-list">
                <span><i className="fa fa-check-circle"></i> Official Influencer Certificate</span>
                <span><i className="fa fa-certificate"></i> Official Influencer Medal On Stage</span>
                <span><i className="fa fa-star"></i> Stage Recognition</span>
              </div>
            </article>

            <div className="ifx-program-right">
              <article className="ifx-top25-card">
                <div className="ifx-top25-copy">
                  <span>QUALIFY FOR</span>
                  <h2><span>TOP 25</span> INFLUENCER AWARDS 2026</h2>
                  <p>
                    Bring <strong>100 or more verified visitors</strong> to the expo to qualify for the Top 25
                    Influencer Awards.
                  </p>
                </div>
                <div className="ifx-trophy-wrap">
                  <img src={trophyImage} alt="Top 25 Influencer Awards 2026 Trophy" />
                </div>
              </article>

              <article className="ifx-voting-card">
                <div className="ifx-section-heading compact">
                  <span></span>
                  <h2>Official Voting Process</h2>
                  <span></span>
                </div>
                <p>The official voting page will be opened only during the event at the venue.</p>

                <div className="ifx-vote-flow">
                  <div>
                    <i className="fa fa-user-plus"></i>
                    <strong>Register</strong>
                    <small>for the event</small>
                  </div>
                  <span className="ifx-flow-arrow"><i className="fa fa-arrow-right"></i></span>
                  <div>
                    <i className="fa fa-check-square-o"></i>
                    <strong>Check-in</strong>
                    <small>at the venue and get your badge</small>
                  </div>
                  <span className="ifx-flow-arrow"><i className="fa fa-arrow-right"></i></span>
                  <div>
                    <i className="fa fa-pencil-square-o"></i>
                    <strong>Vote</strong>
                    <small>for your favourite influencer</small>
                  </div>
                </div>

                <div className="ifx-vote-note">Each verified attendee can vote <strong>only once.</strong></div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="ifx-receive-section">
        <div className="container">
          <article className="ifx-receive-panel">
            <div className="ifx-receive-title">
              <span>TOP 25</span>
              <h2>Influencers Will Receive</h2>
            </div>

            <div className="ifx-receive-list">
              <span><i className="fa fa-check-circle"></i> Official Top 25 Influencer Trophy</span>
              <span><i className="fa fa-check-circle"></i> Official Medal</span>
              <span><i className="fa fa-check-circle"></i> Top 25 Influencer Certificate</span>
              <span><i className="fa fa-check-circle"></i> Stage Recognition</span>
              <span><i className="fa fa-check-circle"></i> Professional Photo Session</span>
              <span><i className="fa fa-check-circle"></i> Media Coverage</span>
              <span><i className="fa fa-check-circle"></i> Featured on ProFX Expo Website and Social Media Channels</span>
            </div>

            <div className="ifx-medal-visual">
              <img src={medalImage} alt="Top 25 Influencer Award Medal" />
              <span>TOP 25 INFLUENCER AWARDS</span>
            </div>
          </article>
        </div>
      </section>

      <section className="ifx-how-section">
        <div className="container">
          <div className="ifx-section-heading">
            <span></span>
            <h2>How to Join</h2>
            <span></span>
          </div>

          <div className="ifx-steps-grid">
            {steps.map((step, index) => (
              <article className="ifx-step-card" key={step.title}>
                <span className="ifx-step-number">{index + 1}</span>
                <div className="ifx-icon-box">
                  <i className={`fa ${step.icon}`}></i>
                </div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ifx-featured-section">
        <div className="container">
          <article className="ifx-featured-panel">
            <div>
              <span className="ifx-panel-label">PERSONAL BRANDING</span>
              <h2>Get Featured on Our <span>Official Website</span></h2>
              <p>Nominate yourself to be listed as an Official ProFX Expo Influencer Partner.</p>

              <div className="ifx-feature-checks">
                <span><i className="fa fa-check"></i> High-Resolution Photo</span>
                <span><i className="fa fa-check"></i> Full Name</span>
                <span><i className="fa fa-check"></i> Social Media Links</span>
                <span><i className="fa fa-check"></i> Category</span>
                <span><i className="fa fa-check"></i> Short Bio Optional</span>
              </div>
            </div>

            <div className="ifx-sample-profile">
              <div className="ifx-sample-top">
                <div className="ifx-avatar">
                  <img src={heroImage} alt="" />
                  <i className="fa fa-check-circle"></i>
                </div>
                <div>
                  <h3>Influencer Name</h3>
                  <p>FinTech Influencer and Educator</p>
                  <div className="ifx-social-row">
                    <span><i className="fa fa-instagram"></i></span>
                    <span><i className="fa fa-linkedin"></i></span>
                    <span><i className="fa fa-twitter"></i></span>
                    <span><i className="fa fa-youtube-play"></i></span>
                  </div>
                </div>
              </div>

              <div className="ifx-profile-meta"><i className="fa fa-map-marker"></i> Cape Town, South Africa</div>
              <div className="ifx-profile-tag"><i className="fa fa-university"></i> FinTech</div>
              <p>
                Passionate about financial education, digital innovation and building stronger communities.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="ifx-categories-section">
        <div className="container">
          <div className="ifx-section-heading">
            <span></span>
            <h2>Choose Your Category</h2>
            <span></span>
          </div>

          <div className="ifx-categories-grid">
            {categories.map(([icon, title]) => (
              <article className="ifx-category-card" key={title}>
                <i className={`fa ${icon}`}></i>
                <span>{title}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ifx-register-section">
        <div className="container">
          <article className="ifx-register-panel">
            <div>
              <span>Be Recognised. Build Your Brand.</span>
              <h2>Stand on the ProFX Stage!</h2>
              <div className="ifx-register-actions">
                {renderPrimaryAction()}
                <ReferralLinkBox referral={referral} />
              </div>
            </div>

            <div className="ifx-qr-card">
              <img src={qrImage} alt="QR code for ProFX Expo Africa influencer registration" />
              <div>
                <strong>SCAN TO REGISTER</strong>
                <span>AS AN INFLUENCER</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <InfluencerRegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        onSuccess={handleRegisterSuccess}
        initialReferralCode={referralFromUrl}
      />
      <InfluencerLoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onSuccess={handleRegisterSuccess}
      />
    </div>
  );
}

export default Influencers;
