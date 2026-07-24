import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
  Award,
  Building2,
  Camera,
  CheckCircle2,
  Copy,
  Link2,
  Edit3,
  Eye,
  LayoutDashboard,
  Mic,
  LockKeyhole,
  Plus,
  Save,
  Trash2,
  Trophy,
  Upload,
  User,
  UsersRound,
  X,
} from "lucide-react";
import PageHelmet from "../Components/Pagehelmet";
import Breadcrumb from "../Components/Breadcrumb";
import { getClientBooths, updateBoothCompanyProfile } from "../api/floorplan";
import {
  deleteClientSpeaker,
  getClientSpeakers,
  submitClientSpeaker,
  updateClientSpeaker,
} from "../api/speakers";
import {
  getClientAwardNominations,
  getClientLeagueReferrals,
  updateClientPassword,
  updateClientProfile,
} from "../api/profile";
import { buildAssetUrl } from "../utils/assetUrl";
import "./Profile.css";

const emptySpeakerForm = {
  name: "",
  designation: "",
  company: "",
  bio: "",
  website: "",
  linkedin: "",
  instagram: "",
  photo: null,
};

const getDataArray = (response) => {
  const data = response?.data || {};
  if (Array.isArray(data.details)) return data.details;
  if (Array.isArray(data?.details?.data)) return data.details.data;
  if (Array.isArray(data.data)) return data.data;
  return [];
};

const normalizeStatus = (status) => String(status || "pending").toLowerCase();

const getStatusLabel = (status) => {
  const value = normalizeStatus(status);
  return value.charAt(0).toUpperCase() + value.slice(1);
};

const getStatusClass = (status) => {
  const value = normalizeStatus(status);
  if (value === "approved" || value === "winner") return "status-pill approved";
  if (value === "rejected") return "status-pill rejected";
  return "status-pill pending";
};

const getSpeakerImage = (speaker) => {
  return speaker?.photo_url || speaker?.image || buildAssetUrl("/assets/images/resources/avatar.png");
};

const getUserName = (user) => user?.full_name || user?.name || "Client";
const getUserCompany = (user) => user?.company_name || user?.company || "";
const getUserId = (user) => user?.id || user?.user_id || "";
const getUserAvatar = (user) => user?.profile_photo_url || user?.avatar || buildAssetUrl("/assets/images/resources/avatar.png");
const buildProfileForm = (currentUser = {}) => ({
  full_name: getUserName(currentUser) === "Client" ? "" : getUserName(currentUser),
  email: currentUser.email || "",
  company_name: getUserCompany(currentUser),
  phone: currentUser.phone || "",
  nationality: currentUser.nationality || "",
  user_type: currentUser.user_type || "",
  sponsor_package: currentUser.sponsor_package || "",
  products_services: currentUser.products_services || "",
  special_requirements: currentUser.special_requirements || "",
  profile_photo: null,
});

const MAX_DESIGN_FILE_SIZE = 10 * 1024 * 1024;
const BOOTH_DESIGN_ACCEPT = "image/*,application/pdf,video/*";

const getFileExtension = (value = "") => {
  const clean = String(value).split("?")[0].split("#")[0];
  return clean.includes(".") ? clean.split(".").pop().toLowerCase() : "";
};

const getDesignFileKind = (value = "", mimeType = "") => {
  if (mimeType.startsWith("image/")) return "image";
  if (mimeType === "application/pdf") return "pdf";
  if (mimeType.startsWith("video/")) return "video";
  const extension = getFileExtension(value);
  if (["jpg", "jpeg", "png", "gif", "webp", "svg"].includes(extension)) return "image";
  if (extension === "pdf") return "pdf";
  if (["mp4", "mov", "avi", "webm", "mkv"].includes(extension)) return "video";
  return "file";
};

const getFileLabel = (value = "") => {
  const clean = String(value).split("?")[0].split("#")[0];
  return decodeURIComponent(clean.split("/").pop() || "Uploaded file");
};

const renderDesignFilePreview = (url, label = "Booth design file", mimeType = "") => {
  if (!url) return <Upload size={18} />;

  const kind = getDesignFileKind(url, mimeType);
  if (kind === "image") return <img src={url} alt={label} />;
  if (kind === "video") return <video src={url} muted controls preload="metadata" />;
  if (kind === "pdf") return <span className="booth-file-type">PDF</span>;

  return <span className="booth-file-type">FILE</span>;
};

const showProfileAlert = (icon, title, text) => Swal.fire({
  icon,
  title,
  text,
  confirmButtonColor: "#c6a133",
});

const showProfileConfirm = (title, text) => Swal.fire({
  icon: "warning",
  title,
  text,
  showCancelButton: true,
  confirmButtonText: "Yes, Delete",
  cancelButtonText: "Cancel",
  confirmButtonColor: "#dc2626",
  cancelButtonColor: "#64748b",
});

const Profile = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("dashboard");
  const [avatar, setAvatar] = useState(buildAssetUrl("/assets/images/resources/avatar.png"));
  const [user, setUser] = useState(null);
  const [booths, setBooths] = useState([]);
  const [speakers, setSpeakers] = useState([]);
  const [awards, setAwards] = useState([]);
  const [leagueReferrals, setLeagueReferrals] = useState([]);
  const [boothForms, setBoothForms] = useState({});
  const [editingBoothId, setEditingBoothId] = useState(null);
  const [viewBooth, setViewBooth] = useState(null);
  const [speakerForm, setSpeakerForm] = useState(emptySpeakerForm);
  const [speakerPhotoPreview, setSpeakerPhotoPreview] = useState("");
  const [editingSpeakerId, setEditingSpeakerId] = useState(null);
  const [viewSpeaker, setViewSpeaker] = useState(null);
  const [speakerModalOpen, setSpeakerModalOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [passwordModalOpen, setPasswordModalOpen] = useState(false);
  const [profileForm, setProfileForm] = useState({});
  const [profilePhotoPreview, setProfilePhotoPreview] = useState("");
  const [passwordForm, setPasswordForm] = useState({ current_password: "", password: "", password_confirmation: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (!stored) {
      navigate("/Login");
      return;
    }

    try {
      const parsedUser = JSON.parse(stored);
      setUser(parsedUser);
      setAvatar(getUserAvatar(parsedUser));
      setProfilePhotoPreview(getUserAvatar(parsedUser));
      setProfileForm(buildProfileForm(parsedUser));
      setSpeakerForm((current) => ({
        ...current,
        name: getUserName(parsedUser),
        company: getUserCompany(parsedUser),
      }));
    } catch (error) {
      localStorage.removeItem("user");
      navigate("/Login");
    }
  }, [navigate]);

  const loadClientData = useCallback(async (email, companyName = "", userId = "") => {
    if (!email) return;

    setLoading(true);
    setMessage("");

    try {
      const [boothRes, speakerRes, awardRes, leagueRes] = await Promise.all([
        getClientBooths(email),
        getClientSpeakers(email),
        getClientAwardNominations({ email, userId }),
        getClientLeagueReferrals({ email, userId }),
      ]);

      const boothItems = getDataArray(boothRes);
      const speakerItems = getDataArray(speakerRes);
      const awardItems = getDataArray(awardRes);
      const leagueItems = getDataArray(leagueRes);
      const nextForms = {};

      boothItems.forEach((booth) => {
        nextForms[booth.id] = {
          company_profile_name: booth.company_profile_name || booth.company || companyName || "",
          company: booth.company || companyName || "",
          company_url: booth.company_url || "",
          company_details: booth.company_details || "",
          booth_design: booth.booth_design || "",
          booth_design_image: null,
          company_logo: null,
        };
      });

      setBooths(boothItems);
      setSpeakers(speakerItems);
      setAwards(awardItems);
      setLeagueReferrals(leagueItems);
      setBoothForms(nextForms);
    } catch (error) {
      setMessage(error?.response?.data?.msg || "Unable to load your booth and speaker details.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (user?.email) {
      loadClientData(user.email, getUserCompany(user), getUserId(user));
    }
  }, [loadClientData, user]);

  const tabs = useMemo(
    () => [
      { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
      { id: "profile", label: "My Profile", icon: User },
      { id: "booth", label: "My Booth", icon: Building2 },
      { id: "speakers", label: "Speakers", icon: Mic },
      { id: "awards", label: "Awards", icon: Award },
      { id: "league", label: "League", icon: Trophy },
    ],
    []
  );

  const stats = useMemo(() => {
    const speakerPending = speakers.filter((speaker) => normalizeStatus(speaker.status) === "pending").length;
    const speakerApproved = speakers.filter((speaker) => normalizeStatus(speaker.status) === "approved").length;
    const speakerRejected = speakers.filter((speaker) => normalizeStatus(speaker.status) === "rejected").length;
    const boothPending = booths.filter((booth) => normalizeStatus(booth.status) !== "approved").length;
    const boothApproved = booths.filter((booth) => normalizeStatus(booth.status) === "approved").length;
    const awardPending = awards.filter((award) => normalizeStatus(award.status) === "pending").length;
    const awardWinner = awards.filter((award) => normalizeStatus(award.status) === "winner").length;

    return {
      boothCount: booths.length,
      speakerCount: speakers.length,
      speakerApproved,
      speakerPending,
      speakerRejected,
      boothPending,
      boothApproved,
      awardCount: awards.length,
      awardPending,
      awardWinner,
      leagueReferralCount: leagueReferrals.length,
      pendingTotal: speakerPending + boothPending + awardPending,
    };
  }, [booths, speakers, awards, leagueReferrals]);

  const resetSpeakerForm = () => {
    setEditingSpeakerId(null);
    setSpeakerPhotoPreview("");
    setSpeakerForm({
      ...emptySpeakerForm,
      name: getUserName(user),
      company: getUserCompany(user),
    });
  };

  const openCreateSpeaker = () => {
    resetSpeakerForm();
    setSpeakerModalOpen(true);
  };

  const openEditSpeaker = (speaker) => {
    setEditingSpeakerId(speaker.id);
    setSpeakerPhotoPreview(getSpeakerImage(speaker));
    setSpeakerForm({
      name: speaker.name || "",
      designation: speaker.designation || "",
      company: speaker.company || "",
      bio: speaker.bio || "",
      website: speaker.website || "",
      linkedin: speaker.linkedin || "",
      instagram: speaker.instagram || "",
      photo: null,
    });
    setSpeakerModalOpen(true);
  };

  const closeSpeakerModal = () => {
    setSpeakerModalOpen(false);
    resetSpeakerForm();
  };


  const openProfileModal = () => {
    setProfileForm(buildProfileForm(user));
    setProfilePhotoPreview(getUserAvatar(user));
    setProfileModalOpen(true);
  };

  const closeProfileModal = () => {
    setProfileModalOpen(false);
    setProfileForm(buildProfileForm(user));
    setProfilePhotoPreview(getUserAvatar(user));
  };

  const openPasswordModal = () => {
    setPasswordForm({ current_password: "", password: "", password_confirmation: "" });
    setPasswordModalOpen(true);
  };

  const closePasswordModal = () => {
    setPasswordModalOpen(false);
    setPasswordForm({ current_password: "", password: "", password_confirmation: "" });
  };

  const handleProfileFieldChange = (field, value) => {
    if (field === "profile_photo") {
      setProfilePhotoPreview(value ? URL.createObjectURL(value) : getUserAvatar(user));
    }

    setProfileForm((current) => ({ ...current, [field]: value }));
  };

  const handleProfileSubmit = async (event) => {
    event.preventDefault();
    const payload = new FormData();

    payload.append("user_id", getUserId(user));
    payload.append("full_name", profileForm.full_name || "");
    payload.append("email", profileForm.email || "");
    payload.append("company_name", profileForm.company_name || "");
    payload.append("phone", profileForm.phone || "");
    payload.append("nationality", profileForm.nationality || "");
    payload.append("user_type", profileForm.user_type || "");
    payload.append("sponsor_package", profileForm.sponsor_package || "");
    payload.append("products_services", profileForm.products_services || "");
    payload.append("special_requirements", profileForm.special_requirements || "");

    if (profileForm.profile_photo) {
      payload.append("profile_photo", profileForm.profile_photo);
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await updateClientProfile(payload);
      const updatedUser = response?.data?.data || {};
      localStorage.setItem("user", JSON.stringify(updatedUser));
      window.dispatchEvent(new CustomEvent("userProfileUpdated", { detail: updatedUser }));
      setUser(updatedUser);
      setAvatar(getUserAvatar(updatedUser));
      setProfilePhotoPreview(getUserAvatar(updatedUser));
      setProfileForm(buildProfileForm(updatedUser));
      setProfileModalOpen(false);
      setMessage("Profile updated successfully.");
      await loadClientData(updatedUser.email, getUserCompany(updatedUser), getUserId(updatedUser));
      showProfileAlert("success", "Updated", "Profile updated successfully.");
    } catch (error) {
      const errorText = error?.response?.data?.message || error?.response?.data?.msg || "Profile update failed.";
      setMessage(errorText);
      showProfileAlert("error", "Update Failed", errorText);
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordSubmit = async (event) => {
    event.preventDefault();

    if (passwordForm.password !== passwordForm.password_confirmation) {
      showProfileAlert("error", "Password Mismatch", "New password and confirm password must match.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      await updateClientPassword({
        user_id: getUserId(user),
        current_password: passwordForm.current_password,
        password: passwordForm.password,
        password_confirmation: passwordForm.password_confirmation,
      });
      closePasswordModal();
      setMessage("Password updated successfully.");
      showProfileAlert("success", "Updated", "Password updated successfully.");
    } catch (error) {
      const errorText = error?.response?.data?.message || error?.response?.data?.msg || "Password update failed.";
      setMessage(errorText);
      showProfileAlert("error", "Password Failed", errorText);
    } finally {
      setLoading(false);
    }
  };

  const handleBoothFieldChange = (boothId, field, value) => {
    setBoothForms((current) => ({
      ...current,
      [boothId]: {
        ...(current[boothId] || {}),
        [field]: value,
      },
    }));
  };

  const handleBoothDesignFileChange = (boothId, file) => {
    if (!file) {
      handleBoothFieldChange(boothId, "booth_design_image", null);
      return;
    }

    const allowed = file.type.startsWith("image/") || file.type === "application/pdf" || file.type.startsWith("video/");

    if (!allowed) {
      showProfileAlert("error", "Invalid File", "Please upload an image, PDF, or video file.");
      return;
    }

    if (file.size > MAX_DESIGN_FILE_SIZE) {
      showProfileAlert("error", "File Too Large", "Booth design file must be 10MB or below.");
      return;
    }

    handleBoothFieldChange(boothId, "booth_design_image", file);
  };

  const handleBoothSubmit = async (event, booth) => {
    event.preventDefault();
    const form = boothForms[booth.id] || {};
    const payload = new FormData();

    payload.append("email", user.email);
    payload.append("company_profile_name", form.company_profile_name || "");
    payload.append("company", form.company || "");
    payload.append("company_url", form.company_url || "");
    payload.append("company_details", form.company_details || "");
    payload.append("booth_design", form.booth_design || "");

    if (form.company_logo) {
      payload.append("company_logo", form.company_logo);
    }

    if (form.booth_design_image) {
      payload.append("booth_design_image", form.booth_design_image);
    }

    setLoading(true);
    setMessage("");

    try {
      await updateBoothCompanyProfile(booth.id, payload);
      const successText = "Booth company profile submitted. Admin approval pending.";
      setMessage(successText);
      setEditingBoothId(null);
      await loadClientData(user.email, getUserCompany(user), getUserId(user));
      showProfileAlert("success", "Submitted", successText);
    } catch (error) {
      const errorText = error?.response?.data?.message || error?.response?.data?.msg || "Booth update failed.";
      setMessage(errorText);
      showProfileAlert("error", "Update Failed", errorText);
    } finally {
      setLoading(false);
    }
  };

  const handleBoothDelete = async (booth) => {
    const confirmed = await showProfileConfirm("Delete Booth Details?", `Delete company profile details for Booth ${booth.boothno || booth.id}?`);
    if (!confirmed.isConfirmed) return;

    const payload = new FormData();
    payload.append("email", user.email);
    payload.append("company_profile_name", "");
    payload.append("company", "");
    payload.append("company_url", "");
    payload.append("company_details", "");
    payload.append("booth_design", "");

    setLoading(true);
    setMessage("");

    try {
      await updateBoothCompanyProfile(booth.id, payload);
      const successText = "Booth company profile details deleted. Admin approval pending.";
      setEditingBoothId(null);
      setMessage(successText);
      await loadClientData(user.email, getUserCompany(user), getUserId(user));
      showProfileAlert("success", "Deleted", successText);
    } catch (error) {
      const errorText = error?.response?.data?.message || error?.response?.data?.msg || "Booth delete failed.";
      setMessage(errorText);
      showProfileAlert("error", "Delete Failed", errorText);
    } finally {
      setLoading(false);
    }
  };
  const handleSpeakerChange = (field, value) => {
    if (field === "photo") {
      setSpeakerPhotoPreview(value ? URL.createObjectURL(value) : "");
    }

    setSpeakerForm((current) => ({ ...current, [field]: value }));
  };

  const buildSpeakerPayload = () => {
    const payload = new FormData();

    payload.append("user_id", getUserId(user));
    payload.append("email", user.email);
    payload.append("name", speakerForm.name || "");
    payload.append("designation", speakerForm.designation || "");
    payload.append("company", speakerForm.company || "");
    payload.append("bio", speakerForm.bio || "");
    payload.append("website", speakerForm.website || "");
    payload.append("linkedin", speakerForm.linkedin || "");
    payload.append("instagram", speakerForm.instagram || "");

    if (speakerForm.photo) {
      payload.append("photo", speakerForm.photo);
    }

    return payload;
  };

  const handleSpeakerSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      if (editingSpeakerId) {
        await updateClientSpeaker(editingSpeakerId, buildSpeakerPayload());
        setMessage("Speaker profile updated. Admin approval pending.");
        showProfileAlert("success", "Updated", "Speaker profile updated. Admin approval pending.");
      } else {
        await submitClientSpeaker(buildSpeakerPayload());
        setMessage("Speaker profile submitted. Admin approval pending.");
        showProfileAlert("success", "Submitted", "Speaker profile submitted. Admin approval pending.");
      }

      setSpeakerModalOpen(false);
      resetSpeakerForm();
      await loadClientData(user.email, getUserCompany(user), getUserId(user));
    } catch (error) {
      const errorText = error?.response?.data?.message || error?.response?.data?.msg || "Speaker submit failed.";
      setMessage(errorText);
      showProfileAlert("error", "Submit Failed", errorText);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteSpeaker = async (speaker) => {
    const confirmed = await showProfileConfirm("Delete Speaker?", `Delete speaker profile for ${speaker.name}?`);
    if (!confirmed.isConfirmed) return;

    setLoading(true);
    setMessage("");

    try {
      await deleteClientSpeaker(speaker.id, user.email);
      const successText = "Speaker profile deleted successfully.";
      setMessage(successText);
      await loadClientData(user.email, getUserCompany(user), getUserId(user));
      showProfileAlert("success", "Deleted", successText);
    } catch (error) {
      const errorText = error?.response?.data?.message || error?.response?.data?.msg || "Speaker delete failed.";
      setMessage(errorText);
      showProfileAlert("error", "Delete Failed", errorText);
    } finally {
      setLoading(false);
    }
  };

  const copyProfileValue = async (label, value) => {
    const text = String(value || "").trim();

    if (!text || text === "-") {
      showProfileAlert("info", "No Data", `${label} is not available yet.`);
      return;
    }

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }

      showProfileAlert("success", "Copied", `${label} copied successfully.`);
    } catch (error) {
      showProfileAlert("error", "Copy Failed", `Unable to copy ${label}.`);
    }
  };
  const renderProfile = () => {
    const fallbackReferralCode = getUserId(user) ? `PFX${String(getUserId(user)).padStart(6, "0")}` : "";
    const referralCode = user?.referral_code || fallbackReferralCode;
    const referralLink = user?.referral_link || (referralCode ? `${window.location.origin}/africa/LeagueEnroll?ref=${encodeURIComponent(referralCode)}` : "");
    const profileItems = [
      { label: "Full Name", value: getUserName(user) },
      { label: "Email Address", value: user?.email || "-" },
      { label: "Company", value: getUserCompany(user) || "-" },
      { label: "Phone", value: user?.phone || "-" },
      { label: "Nationality", value: user?.nationality || "-" },
      { label: "Account Type", value: user?.sponsor_package || user?.user_type || "-" },
      { label: "Products / Services", value: user?.products_services || "-" },
      { label: "Special Requirements", value: user?.special_requirements || "-", wide: true },
    ];

    return (
      <section className="crm-panel profile-modern-panel">
        <div className="crm-section-head profile-modern-head">
          <div>
            <span>Account</span>
            <h2>Profile Overview</h2>
            <p>Manage your company profile, account details, and referral access.</p>
          </div>
          <div className="crm-section-actions">
            <button type="button" className="crm-ghost-button" onClick={openProfileModal}>
              <Edit3 size={16} /> Edit Profile
            </button>
            <button type="button" className="crm-gold-button" onClick={openPasswordModal}>
              <LockKeyhole size={16} /> Password
            </button>
          </div>
        </div>
  <div className="profile-referral-card">
          <div className="profile-referral-intro">
            <div className="profile-referral-icon"><Link2 size={22} /></div>
            <div>
              <span>Referral Access</span>
              <h3>Your PROFX League Referral</h3>
              <p>Share this link with users. Their league enrollments will be tracked under your account.</p>
            </div>
          </div>

          <div className="profile-referral-fields">
            <div className="profile-copy-field">
              <span>Referral Code</span>
              <strong>{referralCode || "Not generated yet"}</strong>
              <button type="button" onClick={() => copyProfileValue("Referral code", referralCode)} title="Copy referral code">
                <Copy size={16} /> Copy
              </button>
            </div>
            <div className="profile-copy-field wide">
              <span>Referral Link</span>
              <strong>{referralLink || "Not generated yet"}</strong>
              <button type="button" onClick={() => copyProfileValue("Referral link", referralLink)} title="Copy referral link">
                <Copy size={16} /> Copy
              </button>
            </div>
          </div>
        </div>
        <div className="profile-modern-grid">
          {profileItems.map((item) => (
            <article key={item.label} className={`profile-info-card${item.wide ? " wide" : ""}`}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </article>
          ))}
        </div>

      
      </section>
    );
  };
  const renderDashboard = () => {
    const latestSpeaker = speakers[0];
    const latestBooth = booths[0];

    return (
      <div className="crm-dashboard-grid">
        <article className="stat-card accent-green">
          <Building2 size={22} />
          <span>Booked Booths</span>
          <strong>{stats.boothCount}</strong>
          <small>{stats.boothApproved} approved</small>
        </article>
        <article className="stat-card accent-gold">
          <Mic size={22} />
          <span>Speakers</span>
          <strong>{stats.speakerCount}</strong>
          <small>{stats.speakerApproved} live after approval</small>
        </article>
        <article className="stat-card accent-blue">
          <CheckCircle2 size={22} />
          <span>Approved</span>
          <strong>{stats.speakerApproved + stats.boothApproved}</strong>
          <small>Booth and speaker approvals</small>
        </article>
        <article className="stat-card accent-red">
          <LayoutDashboard size={22} />
          <span>Pending</span>
          <strong>{stats.pendingTotal}</strong>
          <small>Waiting for admin review</small>
        </article>

        <section className="crm-panel dashboard-profile-panel">
          <div className="crm-section-head">
            <div>
              <span>Client CRM</span>
              <h2>Account Details</h2>
            </div>
            <button type="button" onClick={() => setActiveTab("profile")}>View Profile</button>
          </div>
          <div className="detail-list">
            <div><span>Name</span><strong>{getUserName(user)}</strong></div>
            <div><span>Email</span><strong>{user?.email || "-"}</strong></div>
            <div><span>Company</span><strong>{getUserCompany(user) || "-"}</strong></div>
            <div><span>Package</span><strong>{user?.sponsor_package || user?.user_type || "-"}</strong></div>
          </div>
        </section>

        <section className="crm-panel dashboard-activity-panel">
          <div className="crm-section-head">
            <div>
              <span>Recent</span>
              <h2>Current Status</h2>
            </div>
          </div>
          <div className="activity-list">
            <div>
              <span className="activity-dot" />
              <div>
                <strong>{latestBooth ? `Booth ${latestBooth.boothno || latestBooth.id}` : "No booth booked"}</strong>
                <p>{latestBooth ? `${latestBooth.boothtitle || "Booth"} - ${getStatusLabel(latestBooth.status)}` : "Book a booth from the floor plan."}</p>
              </div>
            </div>
            <div>
              <span className="activity-dot" />
              <div>
                <strong>{latestSpeaker ? latestSpeaker.name : "No speaker submitted"}</strong>
                <p>{latestSpeaker ? `Speaker status: ${getStatusLabel(latestSpeaker.status)}` : "Create a speaker profile for admin approval."}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };

  const renderBooth = () => (
    <section className="crm-panel">
      <div className="crm-section-head">
        <div>
          <span>Company Booth</span>
          <h2>My Booth</h2>
        </div>
        <Link to="/Floorplan" className="crm-primary-link">View Floor Plan</Link>
      </div>

      {loading && <p className="crm-muted">Loading booth details...</p>}

      {!loading && booths.length === 0 && (
        <div className="crm-empty-state">
          <Building2 size={48} />
          <h3>No Booth Booked Yet</h3>
          <p>Your booked booth will appear here after reservation.</p>
          <Link to="/Floorplan">Book Booth</Link>
        </div>
      )}

      <div className="booth-card-grid compact-cards">
        {booths.map((booth) => {
          const form = boothForms[booth.id] || {};
          const logoPreview = booth.company_logo_url;

          return (
            <article key={booth.id} className="booth-card booth-small-card">
              <div className="booth-small-top">
                <div>
                  <span>Booth {booth.boothno || booth.id}</span>
                  <h3>{booth.boothtitle || "Booked Booth"}</h3>
                  <p>{booth.boothsize || "-"}</p>
                </div>
                <span className={getStatusClass(booth.status)}>{getStatusLabel(booth.status)}</span>
              </div>

              <div className="booth-small-logo">
                {logoPreview ? <img src={logoPreview} alt="Company logo" /> : <Building2 size={28} />}
              </div>

              <div className="booth-small-copy">
                <strong>{form.company_profile_name || form.company || getUserCompany(user) || "Company name"}</strong>
                <p>{form.company_url || "Website not added"}</p>
              </div>

              <div className="speaker-actions booth-card-actions">
                <button type="button" title="View" onClick={() => setViewBooth(booth)}><Eye size={16} /></button>
                <button type="button" title="Edit" onClick={() => setEditingBoothId(booth.id)}><Edit3 size={16} /></button>
                <button type="button" title="Delete" onClick={() => handleBoothDelete(booth)}><Trash2 size={16} /></button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
  const renderSpeakers = () => (
    <section className="crm-panel">
      <div className="crm-section-head">
        <div>
          <span>Speaker CRM</span>
          <h2>Submitted Speakers</h2>
        </div>
        <button type="button" className="crm-gold-button" onClick={openCreateSpeaker}>
          <Plus size={16} /> Add Speaker
        </button>
      </div>

      {speakers.length === 0 ? (
        <div className="crm-empty-state">
          <Mic size={48} />
          <h3>No Speaker Profiles</h3>
          <p>Add your speaker details. It will show on the website after admin approval.</p>
          <button type="button" onClick={openCreateSpeaker}>Add Speaker</button>
        </div>
      ) : (
        <div className="speaker-card-grid">
          {speakers.map((speaker) => (
            <article key={speaker.id} className="speaker-card">
              <img src={getSpeakerImage(speaker)} alt={speaker.name} />
              <div className="speaker-card-body">
                <div className="speaker-title-row">
                  <div>
                    <h3>{speaker.name}</h3>
                    <p>{speaker.designation || "Speaker"}</p>
                  </div>
                  <span className={getStatusClass(speaker.status)}>{getStatusLabel(speaker.status)}</span>
                </div>
                <strong>{speaker.company || "-"}</strong>
                <p className="speaker-bio">{speaker.bio || "No bio added yet."}</p>
                {speaker.admin_message && <small className="admin-note">{speaker.admin_message}</small>}
              </div>
              <div className="speaker-actions">
                <button type="button" title="View" onClick={() => setViewSpeaker(speaker)}><Eye size={16} /></button>
                <button type="button" title="Edit" onClick={() => openEditSpeaker(speaker)}><Edit3 size={16} /></button>
                <button type="button" title="Delete" onClick={() => handleDeleteSpeaker(speaker)}><Trash2 size={16} /></button>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
  const renderAwards = () => (
    <section className="crm-panel">
      <div className="crm-section-head">
        <div>
          <span>Awards CRM</span>
          <h2>My Award Nominations</h2>
        </div>
        <Link to="/Awards" className="crm-primary-link">Nominate Award</Link>
      </div>

      {awards.length === 0 ? (
        <div className="crm-empty-state">
          <Award size={48} />
          <h3>No Award Nominations</h3>
          <p>Your submitted awards will appear here with admin status.</p>
          <Link to="/Awards">Start Nomination</Link>
        </div>
      ) : (
        <div className="profile-mini-card-grid">
          {awards.map((award) => {
            const status = normalizeStatus(award.status);
            const submittedDate = award.submitted_at || award.created_at || "-";

            return (
              <article key={award.id || `${award.award_title}-${submittedDate}`} className={`profile-mini-card award-status-${status}`}>
                <div className="profile-mini-card-top">
                  <span>{award.category || "Award"}</span>
                  <strong className={getStatusClass(award.status)}>{getStatusLabel(award.status)}</strong>
                </div>
                <h3>{award.award_title || "Award Nomination"}</h3>
                <p>{award.reason || award.nomination_details || "Nomination submitted for admin review."}</p>
                <div className="profile-mini-meta">
                  <div><span>Nominee</span><strong>{award.name || getUserName(user)}</strong></div>
                  <div><span>Company</span><strong>{award.company || getUserCompany(user) || "-"}</strong></div>
                  <div><span>Submitted</span><strong>{submittedDate}</strong></div>
                  <div><span>Result</span><strong>{award.winner_status ? getStatusLabel(award.winner_status) : getStatusLabel(award.status)}</strong></div>
                </div>
                {(award.winner_note || award.status_note) && <small className="admin-note">{award.winner_note || award.status_note}</small>}
              </article>
            );
          })}
        </div>
      )}
    </section>
  );

  const renderLeague = () => {
    const fallbackReferralCode = getUserId(user) ? `PFX${String(getUserId(user)).padStart(6, "0")}` : "";
    const referralCode = user?.referral_code || fallbackReferralCode;
    const referralLink = user?.referral_link || (referralCode ? `${window.location.origin}/africa/LeagueEnroll?ref=${encodeURIComponent(referralCode)}` : "");

    return (
      <section className="crm-panel">
        <div className="crm-section-head">
          <div>
            <span>League Referral CRM</span>
            <h2>Referral Registrations</h2>
          </div>
          <Link to="/LeagueEnroll" className="crm-primary-link">League Enroll</Link>
        </div>

        <div className="profile-referral-card league-referral-summary">
          <div className="profile-referral-intro">
            <div className="profile-referral-icon"><Trophy size={22} /></div>
            <div>
              <span>Referral Tracking</span>
              <h3>Your league referral code and link</h3>
              <p>Users who enroll through this code or link will show below.</p>
            </div>
          </div>
          <div className="profile-referral-fields">
            <div className="profile-copy-field">
              <span>Referral Code</span>
              <strong>{referralCode || "Not generated yet"}</strong>
              <button type="button" onClick={() => copyProfileValue("Referral code", referralCode)} title="Copy referral code">
                <Copy size={16} /> Copy
              </button>
            </div>
            <div className="profile-copy-field wide">
              <span>Referral Link</span>
              <strong>{referralLink || "Not generated yet"}</strong>
              <button type="button" onClick={() => copyProfileValue("Referral link", referralLink)} title="Copy referral link">
                <Copy size={16} /> Copy
              </button>
            </div>
          </div>
        </div>

        {leagueReferrals.length === 0 ? (
          <div className="crm-empty-state">
            <UsersRound size={48} />
            <h3>No Referral Users Yet</h3>
            <p>League users registered with your referral code or link will appear here.</p>
          </div>
        ) : (
          <div className="profile-mini-card-grid league-card-grid">
            {leagueReferrals.map((item) => {
              const leagueId = item.league_id || `PFXL-${String(item.id || "").padStart(5, "0")}`;
              return (
                <article key={item.id || item.email} className="profile-mini-card league-user-card">
                  <div className="profile-mini-card-top">
                    <span>{leagueId}</span>
                    <strong>{item.role || "League User"}</strong>
                  </div>
                  <h3>{item.name || item.full_name || "League User"}</h3>
                  <p>{item.email || "-"}</p>
                  <div className="profile-mini-meta">
                    <div><span>Company</span><strong>{item.company || item.company_name || "-"}</strong></div>
                    <div><span>Phone</span><strong>{item.phone || "-"}</strong></div>
                    <div><span>Country</span><strong>{item.country || "-"}</strong></div>
                    <div><span>Joined</span><strong>{item.created_at || "-"}</strong></div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>
    );
  };

  if (!user) return null;

  return (
    <>
      <PageHelmet pageTitle="My Profile" />
      <Breadcrumb title="My Profile" />
      <div className="client-crm-page">
        <div className="client-crm-shell">
          <aside className="client-crm-sidebar">
            <div className="crm-profile-mini">
              <div className="crm-avatar-wrap">
                <img src={avatar} alt="Profile" />
                <button type="button" className="crm-avatar-edit" onClick={openProfileModal} title="Edit profile photo">
                  <Camera size={15} />
                </button>
              </div>
              <h1>{getUserName(user)}</h1>
              <p>{user.email}</p>
              <span>{user.user_type || user.sponsor_package || "client"}</span>
            </div>

            <nav className="crm-sidebar-nav">
              {tabs.map(({ id, label, icon: Icon }) => (
                <button key={id} type="button" className={activeTab === id ? "active" : ""} onClick={() => setActiveTab(id)}>
                  <Icon size={18} />
                  <span>{label}</span>
                </button>
              ))}
            </nav>

            <div className="crm-sidebar-counts">
              <div><span>Booths</span><strong>{stats.boothCount}</strong></div>
              <div><span>Speakers</span><strong>{stats.speakerCount}</strong></div>
              <div><span>Awards</span><strong>{stats.awardCount}</strong></div>
              <div><span>League</span><strong>{stats.leagueReferralCount}</strong></div>
              <div><span>Pending</span><strong>{stats.pendingTotal}</strong></div>
            </div>
          </aside>

          <main className="client-crm-main">
            <div className="crm-topbar">
              <div>
                <span>PROFX EXPO AFRICA 2026</span>
                <h2>{tabs.find((tab) => tab.id === activeTab)?.label}</h2>
              </div>
              <div className="crm-topbar-actions">
                <Link to="/Floorplan">Floor Plan</Link>
                <button type="button" onClick={openCreateSpeaker}>Add Speaker</button>
              </div>
            </div>

            {message && <div className="crm-alert">{message}</div>}

            {activeTab === "dashboard" && renderDashboard()}
            {activeTab === "profile" && renderProfile()}
            {activeTab === "booth" && renderBooth()}
            {activeTab === "speakers" && renderSpeakers()}
            {activeTab === "awards" && renderAwards()}
            {activeTab === "league" && renderLeague()}
          </main>
        </div>
      </div>

      {profileModalOpen && (
        <div className="crm-modal-backdrop" onMouseDown={closeProfileModal}>
          <form className="crm-modal crm-modal-lg" onMouseDown={(event) => event.stopPropagation()} onSubmit={handleProfileSubmit}>
            <div className="crm-modal-head">
              <div>
                <span>Edit Profile</span>
                <h3>Update Account Details</h3>
              </div>
              <button type="button" onClick={closeProfileModal} title="Close"><X size={18} /></button>
            </div>

            <div className="profile-edit-layout">
              <div className="speaker-photo-upload profile-photo-upload">
                <img src={profilePhotoPreview || getUserAvatar(user)} alt="Profile preview" />
                <label>
                  <Upload size={16} />
                  <span>{profileForm.profile_photo?.name || "Profile Photo"}</span>
                  <input hidden type="file" accept="image/*" onChange={(e) => handleProfileFieldChange("profile_photo", e.target.files?.[0] || null)} />
                </label>
              </div>

              <div className="crm-form-grid compact">
                <input required placeholder="Full Name" value={profileForm.full_name || ""} onChange={(e) => handleProfileFieldChange("full_name", e.target.value)} />
                <input required type="email" placeholder="Email" value={profileForm.email || ""} onChange={(e) => handleProfileFieldChange("email", e.target.value)} />
                <input placeholder="Company" value={profileForm.company_name || ""} onChange={(e) => handleProfileFieldChange("company_name", e.target.value)} />
                <input placeholder="Phone" value={profileForm.phone || ""} onChange={(e) => handleProfileFieldChange("phone", e.target.value)} />
                <input placeholder="Nationality" value={profileForm.nationality || ""} onChange={(e) => handleProfileFieldChange("nationality", e.target.value)} />
                <input placeholder="User Type" value={profileForm.user_type || ""} onChange={(e) => handleProfileFieldChange("user_type", e.target.value)} />
                <input placeholder="Sponsor Package" value={profileForm.sponsor_package || ""} onChange={(e) => handleProfileFieldChange("sponsor_package", e.target.value)} />
                <input placeholder="Products / Services" value={profileForm.products_services || ""} onChange={(e) => handleProfileFieldChange("products_services", e.target.value)} />
                <textarea placeholder="Special Requirements" rows={5} value={profileForm.special_requirements || ""} onChange={(e) => handleProfileFieldChange("special_requirements", e.target.value)} />
              </div>
            </div>

            <div className="crm-modal-actions">
              <button type="button" className="crm-ghost-button" onClick={closeProfileModal}>Cancel</button>
              <button type="submit" className="crm-gold-button" disabled={loading}>
                <Save size={16} /> Save Profile
              </button>
            </div>
          </form>
        </div>
      )}

      {passwordModalOpen && (
        <div className="crm-modal-backdrop" onMouseDown={closePasswordModal}>
          <form className="crm-modal crm-modal-md" onMouseDown={(event) => event.stopPropagation()} onSubmit={handlePasswordSubmit}>
            <div className="crm-modal-head">
              <div>
                <span>Password</span>
                <h3>Update Password</h3>
              </div>
              <button type="button" onClick={closePasswordModal} title="Close"><X size={18} /></button>
            </div>

            <div className="crm-form-grid password-form">
              <input required type="password" placeholder="Current Password" value={passwordForm.current_password} onChange={(e) => setPasswordForm((current) => ({ ...current, current_password: e.target.value }))} />
              <input required minLength={6} type="password" placeholder="New Password" value={passwordForm.password} onChange={(e) => setPasswordForm((current) => ({ ...current, password: e.target.value }))} />
              <input required minLength={6} type="password" placeholder="Confirm New Password" value={passwordForm.password_confirmation} onChange={(e) => setPasswordForm((current) => ({ ...current, password_confirmation: e.target.value }))} />
            </div>

            <div className="crm-modal-actions">
              <button type="button" className="crm-ghost-button" onClick={closePasswordModal}>Cancel</button>
              <button type="submit" className="crm-gold-button" disabled={loading}>
                <LockKeyhole size={16} /> Update Password
              </button>
            </div>
          </form>
        </div>
      )}
      {viewBooth && (() => {
        const form = boothForms[viewBooth.id] || {};
        const logoPreview = viewBooth.company_logo_url;
        const boothDesignFile = viewBooth.booth_design_image_url;
        return (
          <div className="crm-modal-backdrop" onMouseDown={() => setViewBooth(null)}>
            <div className="crm-modal crm-modal-md" onMouseDown={(event) => event.stopPropagation()}>
              <div className="crm-modal-head gradient">
                <div>
                  <span>Booth Details</span>
                  <h3>Booth {viewBooth.boothno || viewBooth.id}</h3>
                </div>
                <button type="button" onClick={() => setViewBooth(null)} title="Close"><X size={18} /></button>
              </div>
              <div className="booth-view-modal">
                <div className="booth-view-logo">
                  {logoPreview ? <img src={logoPreview} alt="Company logo" /> : <Building2 size={40} />}
                </div>
                <div className="booth-view-content">
                  <span className={getStatusClass(viewBooth.status)}>{getStatusLabel(viewBooth.status)}</span>
                  <h3>{viewBooth.boothtitle || "Booked Booth"}</h3>
                  <p>Size: {viewBooth.boothsize || "-"}</p>
                  <div className="detail-list compact-list">
                    <div><span>Company Name</span><strong>{form.company_profile_name || form.company || "-"}</strong></div>
                    <div><span>Registered Company</span><strong>{form.company || "-"}</strong></div>
                    <div><span>Website</span><strong>{form.company_url || "-"}</strong></div>
                    <div><span>Booth Design</span><strong>{form.booth_design || viewBooth.booth_design || "-"}</strong></div>
                    <div><span>Booth No</span><strong>{viewBooth.boothno || viewBooth.id}</strong></div>
                  </div>
                  {boothDesignFile && (
                    <a className="booth-design-view-file" href={boothDesignFile} target="_blank" rel="noreferrer">
                      {renderDesignFilePreview(boothDesignFile, "Booth design file")}
                      <span>
                        <small>Booth Design Image</small>
                        <strong>{getFileLabel(boothDesignFile)}</strong>
                      </span>
                    </a>
                  )}
                  <p className="speaker-view-bio">{form.company_details || "No company details added yet."}</p>
                </div>
              </div>
              <div className="crm-modal-actions">
                <button type="button" className="crm-ghost-button" onClick={() => { setEditingBoothId(viewBooth.id); setViewBooth(null); }}>
                  <Edit3 size={16} /> Edit
                </button>
                <button type="button" className="crm-danger-button" onClick={() => { const current = viewBooth; setViewBooth(null); handleBoothDelete(current); }}>
                  <Trash2 size={16} /> Delete
                </button>
              </div>
            </div>
          </div>
        );
      })()}

      {editingBoothId && (() => {
        const booth = booths.find((item) => item.id === editingBoothId);
        if (!booth) return null;
        const form = boothForms[booth.id] || {};
        const logoPreview = form.company_logo ? URL.createObjectURL(form.company_logo) : booth.company_logo_url;
        const boothDesignPreview = form.booth_design_image ? URL.createObjectURL(form.booth_design_image) : booth.booth_design_image_url;
        return (
          <div className="crm-modal-backdrop" onMouseDown={() => setEditingBoothId(null)}>
            <form className="crm-modal crm-modal-lg" onMouseDown={(event) => event.stopPropagation()} onSubmit={(event) => handleBoothSubmit(event, booth)}>
              <div className="crm-modal-head">
                <div>
                  <span>Edit Booth</span>
                  <h3>Booth {booth.boothno || booth.id} Company Details</h3>
                </div>
                <button type="button" onClick={() => setEditingBoothId(null)} title="Close"><X size={18} /></button>
              </div>
              <div className="booth-edit-modal">
                <div className="speaker-photo-upload booth-logo-upload">
                  <div className="booth-edit-logo-preview">
                    {logoPreview ? <img src={logoPreview} alt="Company logo" /> : <Building2 size={40} />}
                  </div>
                  <label>
                    <Upload size={16} />
                    <span>{form.company_logo?.name || "Company Logo"}</span>
                    <input hidden type="file" accept="image/*" onChange={(e) => handleBoothFieldChange(booth.id, "company_logo", e.target.files?.[0] || null)} />
                  </label>
                </div>

                <div className="crm-form-grid compact">
                  <input placeholder="Display Company Name" value={form.company_profile_name || ""} onChange={(e) => handleBoothFieldChange(booth.id, "company_profile_name", e.target.value)} />
                  <input placeholder="Registered Company" value={form.company || ""} onChange={(e) => handleBoothFieldChange(booth.id, "company", e.target.value)} />
                  <input placeholder="Company Website" value={form.company_url || ""} onChange={(e) => handleBoothFieldChange(booth.id, "company_url", e.target.value)} />
                  <input value={`Booth ${booth.boothno || booth.id} - ${booth.boothtitle || "Booked Booth"}`} readOnly />
                  <label className="crm-field-label">
                    <span>Booth Design</span>
                    <select value={form.booth_design || ""} onChange={(e) => handleBoothFieldChange(booth.id, "booth_design", e.target.value)}>
                      <option value="">Select Booth Design</option>
                      <option value="Standard Design">Standard Design</option>
                      <option value="Premium Design">Premium Design</option>
                      <option value="Custom Design">Custom Design</option>
                    </select>
                  </label>
                  <label className="crm-field-label booth-design-upload">
                    <span>Booth Design Image</span>
                    <div className="booth-design-file">
                      {renderDesignFilePreview(boothDesignPreview, "Booth design preview", form.booth_design_image?.type || "")}
                      <strong>{form.booth_design_image?.name || (booth.booth_design_image_url ? getFileLabel(booth.booth_design_image_url) : "Upload Design Image")}</strong>
                    </div>
                    <input hidden type="file" accept={BOOTH_DESIGN_ACCEPT} onChange={(e) => handleBoothDesignFileChange(booth.id, e.target.files?.[0] || null)} />
                  </label>
                  <textarea placeholder="Company Details" rows={5} value={form.company_details || ""} onChange={(e) => handleBoothFieldChange(booth.id, "company_details", e.target.value)} />
                </div>
              </div>
              <div className="crm-modal-actions">
                <button type="button" className="crm-ghost-button" onClick={() => setEditingBoothId(null)}>Cancel</button>
                <button type="submit" className="crm-gold-button" disabled={loading}>
                  <Save size={16} /> Submit to Admin
                </button>
              </div>
            </form>
          </div>
        );
      })()}
      {speakerModalOpen && (
        <div className="crm-modal-backdrop" onMouseDown={closeSpeakerModal}>
          <form className="crm-modal crm-modal-lg" onMouseDown={(event) => event.stopPropagation()} onSubmit={handleSpeakerSubmit}>
            <div className="crm-modal-head">
              <div>
                <span>{editingSpeakerId ? "Edit Speaker" : "New Speaker"}</span>
                <h3>{editingSpeakerId ? "Update Speaker Profile" : "Add Speaker Profile"}</h3>
              </div>
              <button type="button" onClick={closeSpeakerModal} title="Close"><X size={18} /></button>
            </div>

            <div className="speaker-modal-layout">
              <div className="speaker-photo-upload">
                <img src={speakerPhotoPreview || buildAssetUrl("/assets/images/resources/avatar.png")} alt="Speaker preview" />
                <label>
                  <Upload size={16} />
                  <span>{speakerForm.photo?.name || "Upload Photo"}</span>
                  <input hidden type="file" accept="image/*" onChange={(e) => handleSpeakerChange("photo", e.target.files?.[0] || null)} />
                </label>
              </div>

              <div className="crm-form-grid compact">
                <input required placeholder="Speaker Name" value={speakerForm.name} onChange={(e) => handleSpeakerChange("name", e.target.value)} />
                <input placeholder="Designation" value={speakerForm.designation} onChange={(e) => handleSpeakerChange("designation", e.target.value)} />
                <input placeholder="Company" value={speakerForm.company} onChange={(e) => handleSpeakerChange("company", e.target.value)} />
                <input placeholder="Website" value={speakerForm.website} onChange={(e) => handleSpeakerChange("website", e.target.value)} />
                <input placeholder="LinkedIn URL" value={speakerForm.linkedin} onChange={(e) => handleSpeakerChange("linkedin", e.target.value)} />
                <input placeholder="Instagram URL" value={speakerForm.instagram} onChange={(e) => handleSpeakerChange("instagram", e.target.value)} />
                <textarea placeholder="Speaker Bio" rows={5} value={speakerForm.bio} onChange={(e) => handleSpeakerChange("bio", e.target.value)} />
              </div>
            </div>

            <div className="crm-modal-actions">
              <button type="button" className="crm-ghost-button" onClick={closeSpeakerModal}>Cancel</button>
              <button type="submit" className="crm-gold-button" disabled={loading}>
                <Mic size={16} /> {editingSpeakerId ? "Update Speaker" : "Submit Speaker"}
              </button>
            </div>
          </form>
        </div>
      )}

      {viewSpeaker && (
        <div className="crm-modal-backdrop" onMouseDown={() => setViewSpeaker(null)}>
          <div className="crm-modal crm-modal-md" onMouseDown={(event) => event.stopPropagation()}>
            <div className="crm-modal-head gradient">
              <div>
                <span>Speaker Details</span>
                <h3>{viewSpeaker.name}</h3>
              </div>
              <button type="button" onClick={() => setViewSpeaker(null)} title="Close"><X size={18} /></button>
            </div>
            <div className="speaker-view">
              <img src={getSpeakerImage(viewSpeaker)} alt={viewSpeaker.name} />
              <div>
                <span className={getStatusClass(viewSpeaker.status)}>{getStatusLabel(viewSpeaker.status)}</span>
                <h3>{viewSpeaker.name}</h3>
                <p>{viewSpeaker.designation || "-"} {viewSpeaker.company ? `at ${viewSpeaker.company}` : ""}</p>
                <div className="detail-list compact-list">
                  <div><span>Company</span><strong>{viewSpeaker.company || "-"}</strong></div>
                  <div><span>Message</span><strong>{viewSpeaker.admin_message || "-"}</strong></div>
                </div>
                <p className="speaker-view-bio">{viewSpeaker.bio || "No bio added yet."}</p>
                <div className="speaker-link-row">
                  {viewSpeaker.website && <a href={viewSpeaker.website} target="_blank" rel="noreferrer">Website</a>}
                  {viewSpeaker.linkedin && <a href={viewSpeaker.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}
                  {viewSpeaker.instagram && <a href={viewSpeaker.instagram} target="_blank" rel="noreferrer">Instagram</a>}
                </div>
              </div>
            </div>
            <div className="crm-modal-actions">
              <button type="button" className="crm-ghost-button" onClick={() => { openEditSpeaker(viewSpeaker); setViewSpeaker(null); }}>
                <Edit3 size={16} /> Edit
              </button>
              <button type="button" className="crm-danger-button" onClick={() => { const current = viewSpeaker; setViewSpeaker(null); handleDeleteSpeaker(current); }}>
                <Trash2 size={16} /> Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;













