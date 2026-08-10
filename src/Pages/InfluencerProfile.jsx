import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Pagehelmet from "../Components/Pagehelmet";
import { getInfluencerProfile, getInfluencerReferrals, updateInfluencerPassword } from "../api/influencerRegister";
import { buildAssetUrl } from "../utils/assetUrl";
import "./Influencers.css";

const storedInfluencerKey = "profx_influencer_profile";
const storedReferralKey = "profx_influencer_referral";
const fallbackAvatar = buildAssetUrl("/assets/images/resources/avatar.png");

const getUserId = (profile) => profile?.influencer_id || profile?.id;
const getStatus = (profile) => String(profile?.status || "pending").toLowerCase();

function InfluencerProfile() {
  const [profile, setProfile] = useState(null);
  const [referrals, setReferrals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [passwordForm, setPasswordForm] = useState({ currentPassword: "", password: "", confirmPassword: "" });
  const [passwordMessage, setPasswordMessage] = useState("");

  const status = getStatus(profile);
  const profileId = getUserId(profile);

  const profileItems = useMemo(() => [
    ["Full Name", profile?.full_name],
    ["Email", profile?.email],
    ["Mobile Number", profile?.phone],
    ["Country", profile?.nationality],
    ["Company Name", profile?.company_name],
    ["Position / Role", profile?.position_role],
    ["Submitted Referral", profile?.submitted_referral_code],
  ], [profile]);

  useEffect(() => {
    document.body.classList.add("influencer-header-visible");

    return () => {
      document.body.classList.remove("influencer-header-visible");
    };
  }, []);

  useEffect(() => {
    const storedProfile = JSON.parse(localStorage.getItem(storedInfluencerKey) || "null");

    if (!storedProfile?.email && !getUserId(storedProfile)) {
      setLoading(false);
      setMessage("Please register as an influencer first.");
      return;
    }

    setProfile(storedProfile);

    const lookup = { email: storedProfile.email, userId: getUserId(storedProfile) };

    Promise.allSettled([
      getInfluencerProfile(lookup),
      getInfluencerReferrals(lookup),
    ]).then(([profileResult, referralsResult]) => {
      if (profileResult.status === "fulfilled") {
        const latestProfile = profileResult.value?.data?.data;
        if (latestProfile) {
          setProfile(latestProfile);
          localStorage.setItem(storedInfluencerKey, JSON.stringify(latestProfile));

          if (latestProfile.referral_link || latestProfile.referral_code) {
            localStorage.setItem(storedReferralKey, JSON.stringify({
              referral_code: latestProfile.referral_code,
              referral_link: latestProfile.referral_link,
            }));
          }
        }
      }

      if (referralsResult.status === "fulfilled") {
        setReferrals(referralsResult.value?.data?.details || []);
      }
    }).finally(() => setLoading(false));
  }, []);

  const copyValue = async (value) => {
    if (!value) return;
    await navigator.clipboard.writeText(value);
  };

  const handlePasswordSubmit = async (event) => {
    event.preventDefault();
    setPasswordMessage("");

    if (passwordForm.password !== passwordForm.confirmPassword) {
      setPasswordMessage("New password and confirm password must match.");
      return;
    }

    try {
      const response = await updateInfluencerPassword({
        influencer_id: profileId,
        email: profile?.email,
        current_password: passwordForm.currentPassword,
        password: passwordForm.password,
        password_confirmation: passwordForm.confirmPassword,
      });

      if (response?.data?.code === 1 || response?.data?.code === "1") {
        setPasswordForm({ currentPassword: "", password: "", confirmPassword: "" });
        setPasswordMessage("Password updated successfully.");
      } else {
        setPasswordMessage(response?.data?.msg || "Password update failed.");
      }
    } catch (error) {
      setPasswordMessage(error?.response?.data?.msg || "Password update failed.");
    }
  };

  if (loading) {
    return (
      <main className="influencer-page ifx-profile-page">
        <Pagehelmet pageTitle="Influencer Profile" />
        <section className="ifx-profile-shell">
          <div className="container"><p className="ifx-profile-message">Loading profile...</p></div>
        </section>
      </main>
    );
  }

  if (!profileId && message) {
    return (
      <main className="influencer-page ifx-profile-page">
        <Pagehelmet pageTitle="Influencer Profile" />
        <section className="ifx-profile-shell">
          <div className="container">
            <article className="ifx-profile-panel">
              <h1>Influencer Profile</h1>
              <p>{message}</p>
              <Link to="/Influencers" className="btn btn1">Register Now</Link>
            </article>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="influencer-page ifx-profile-page">
      <Pagehelmet pageTitle="Influencer Profile" />
      <section className="ifx-profile-shell">
        <div className="container">
          <article className="ifx-profile-panel">
            <div className="ifx-profile-hero">
              <img src={profile?.profile_photo_url || fallbackAvatar} alt={profile?.full_name || "Influencer profile"} />
              <div>
                <span className={`ifx-status-pill ${status}`}>{status}</span>
                <h1>{profile?.full_name || "Influencer Profile"}</h1>
                <p>{profile?.approval_message || "Admin approval status will be updated here."}</p>
              </div>
            </div>

            <div className="ifx-profile-grid">
              {profileItems.map(([label, value]) => (
                <div className="ifx-profile-item" key={label}>
                  <span>{label}</span>
                  <strong>{value || "-"}</strong>
                </div>
              ))}
            </div>

            <div className="ifx-profile-referral">
              <div>
                <span>Referral Code</span>
                <strong>{profile?.referral_code || "-"}</strong>
                <button type="button" onClick={() => copyValue(profile?.referral_code)}><i className="fa fa-copy"></i></button>
              </div>
              <div>
                <span>Referral Link</span>
                <strong>{profile?.referral_link || "-"}</strong>
                <button type="button" onClick={() => copyValue(profile?.referral_link)}><i className="fa fa-copy"></i></button>
              </div>
            </div>
          </article>

          <article className="ifx-profile-panel">
            <div className="ifx-section-heading compact">
              <span></span>
              <h2>Referred Users</h2>
              <span></span>
            </div>

            <div className="ifx-referral-user-grid">
              {referrals.length === 0 ? (
                <p className="ifx-profile-message">No referred users yet.</p>
              ) : referrals.map((item) => (
                <div className="ifx-referral-user-card" key={item.id || item.email}>
                  <strong>{item.full_name}</strong>
                  <span>{item.email}</span>
                  <small>{item.company_name || "-"} | {item.nationality || "-"}</small>
                  <em className={`ifx-status-pill ${getStatus(item)}`}>{getStatus(item)}</em>
                </div>
              ))}
            </div>
          </article>

          <article className="ifx-profile-panel">
            <div className="ifx-section-heading compact">
              <span></span>
              <h2>Password Reset</h2>
              <span></span>
            </div>

            <form className="ifx-password-form" onSubmit={handlePasswordSubmit}>
              <label>
                <span>Current Password</span>
                <input
                  type="password"
                  value={passwordForm.currentPassword}
                  onChange={(event) => setPasswordForm((current) => ({ ...current, currentPassword: event.target.value }))}
                  required
                />
              </label>
              <label>
                <span>New Password</span>
                <input
                  type="password"
                  minLength={6}
                  value={passwordForm.password}
                  onChange={(event) => setPasswordForm((current) => ({ ...current, password: event.target.value }))}
                  required
                />
              </label>
              <label>
                <span>Confirm Password</span>
                <input
                  type="password"
                  minLength={6}
                  value={passwordForm.confirmPassword}
                  onChange={(event) => setPasswordForm((current) => ({ ...current, confirmPassword: event.target.value }))}
                  required
                />
              </label>
              <button type="submit" className="btn btn1">Update Password</button>
            </form>
            {passwordMessage && <p className="ifx-profile-message">{passwordMessage}</p>}
          </article>
        </div>
      </section>
    </main>
  );
}

export default InfluencerProfile;
