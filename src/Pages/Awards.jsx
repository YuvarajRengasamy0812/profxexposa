import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Award, BadgeCheck, Building2, CheckCircle2, Globe2, ListChecks, Mail, Phone, Send, Trophy, UserRound, X } from "lucide-react";
import PageHelmet from "../Components/Pagehelmet";
import { submitAwardNomination } from "../api/awards";
import "./Awards.css";

const awardGroups = [
 
  {
    title: "Forex Broker Awards",
    type: "Company Award Categories",
    items: [
      "Forex Broker of the Year 2026",
      "Most Trusted Forex Broker of the Year 2026",
      "Most Transparent Forex Broker of the Year 2026",
      "Most Reliable Forex Broker of the Year 2026",
      "CFD Broker of the Year 2026",
      "Multi-Asset Broker of the Year 2026",
      "ECN/STP Broker of the Year 2026",
      "Synthetic Indices Broker of the Year 2026",
      "Best Trading Conditions of the Year 2026",
      "Best Trade Execution of the Year 2026",
      "Best Customer Service of the Year 2026",
      "Best Client Trading Experience of the Year 2026",
      "Mobile Trading App of the Year 2026",
      "MT5 Broker of the Year 2026",
      "Most Innovative Broker of the Year 2026",
      "Fastest-Growing Broker of the Year 2026",
      "Emerging Broker of the Year 2026",
      "Best Localised Trading Experience of the Year 2026",
    ],
  },

  {
    title: "Fintech And Market   Awards",
    type: "Company Award Categories",
    items: [
      "Fintech Company of the Year 2026",
      "Trading Platform Provider of the Year 2026",
      "Broker CRM Provider of the Year 2026",
      "Trading Technology Provider of the Year 2026",
      "AI-Powered Trading Solution of the Year 2026",
      "Risk Management and RegTech Solution of the Year 2026",
      "Payment and Mobile Money Solution of the Year 2026",
      "Prop Trading Firm of the Year 2026",
      "Trading Education Provider of the Year 2026",
      "Financial Inclusion Initiative of the Year 2026",
      "Women Empowerment Initiative in Finance of the Year 2026",
    ],
  },
  
  {
    title: "Influencer and Partnership Award",
    type: "Influencer and Partnership",
    items: [
      "African Financial Influencer of the Year 2026",
      "Forex Trading Influencer of the Year 2026",
      "Financial Educator Influencer of the Year 2026",
      "Market Analyst Influencer of the Year 2026",
      "Female Financial Influencer of the Year 2026",
      "Emerging Financial Influencer of the Year 2026",
      "Crypto and Blockchain Influencer of the Year 2026",
      "Stock and Indices Influencer of the Year 2026",
      "YouTube Financial Content Creator of the Year 2026",
      "Short-Form Financial Content Creator of the Year 2026",
      "Trading Community Builder of the Year 2026",
      "Most Responsible and Transparent Finfluencer of the Year 2026",
      "IB and Affiliate Programme of the Year 2026",
      "Institutional Trading Provider of the Year 2026",
      "Liquidity Provider of the Year 2026",
      "White Label Provider of the Year 2026",
    ],
  },
  {
    title: "Company Award ",
    type: "Optional Company Award Categories",
    items: [
      "Copy Trading Broker of the Year 2026",
      "Client Fund Safety Initiative of the Year 2026",
      "KYC and AML Solution of the Year 2026",
      "Cybersecurity Provider for Financial Services of the Year 2026",
      "Market Data and Analytics Provider of the Year 2026",
      "VPS and Trading Hosting Provider of the Year 2026",
      "Cross-Border Payment Provider of the Year 2026",
      "Financial Services Startup of the Year 2026",
      "Brokerage Operations Provider of the Year 2026",
      "Compliance Solution Provider of the Year 2026",
      "Social Trading Platform of the Year 2026",
      "Trading Tools Provider of the Year 2026",
      "Introducing Broker Network of the Year 2026",
      "Regional Forex Broker of the Year 2026",
      "New Trading Platform of the Year 2026",
    ],
  },
  {
    title: "Influencer and Individual Award",
    type: "Optional Influencer and Individual Award Categories",
    items: [
      "Live Trading Content Creator of the Year 2026",
      "Finance Podcast of the Year 2026",
      "Personal Finance Influencer of the Year 2026",
      "Investment Influencer of the Year 2026",
      "Influencer and Financial Brand Collaboration of the Year 2026",
      "Financial Literacy Advocate of the Year 2026",
      "Young Financial Influencer of the Year 2026",
      "Trading Mentor of the Year 2026",
      "Technical Analysis Educator of the Year 2026",
      "Fundamental Analysis Educator of the Year 2026",
      "Fintech Leader of the Year 2026",
      "Trading Educator of the Year 2026",
      "Woman in Fintech of the Year 2026",
      "Entrepreneur of the Year 2026 in Financial Markets",
      "Lifetime Achievement Award of the Year 2026 in African Financial Markets",
    ],
  },
];
const getStoredUser = () => {
  try {
    return JSON.parse(localStorage.getItem("user") || "null");
  } catch {
    return null;
  }
};

const getUserName = (user) => user?.full_name || user?.name || "";
const getUserId = (user) => user?.id || user?.user_id || "";
const getUserCompany = (user) => user?.company_name || user?.company || "";

export default function Awards() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(false);
  const user = useMemo(getStoredUser, [selected]);
  const [form, setForm] = useState({
    nominee_name: "",
    nominee_email: "",
    company_name: "",
    phone: "",
    website: "",
    reason: "",
  });

  const openNomination = (groupTitle, awardTitle) => {
    const currentUser = getStoredUser();

    if (!currentUser) {
      Swal.fire({
        icon: "info",
        title: "Register Required",
        text: "Please register first, then submit your award nomination.",
        confirmButtonText: "Register Now",
        confirmButtonColor: "#c9a227",
      }).then(() => {
        navigate(`/Register?redirect=${encodeURIComponent("/Awards")}`);
      });
      return;
    }

    setSelected({ category: groupTitle, award: awardTitle });
    setForm({
      nominee_name: getUserName(currentUser),
      nominee_email: currentUser.email || "",
      company_name: getUserCompany(currentUser),
      phone: currentUser.phone || "",
      website: "",
      reason: "",
    });
  };

  const closeModal = () => {
    setSelected(null);
    setLoading(false);
  };

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleCategoryChange = (value) => {
    const group = awardGroups.find((item) => item.title === value);
    setSelected({
      category: value,
      award: group?.items?.[0] || "",
    });
  };

  const handleAwardChange = (value) => {
    setSelected((prev) => ({
      ...prev,
      award: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selected || !user) {
      return;
    }

    setLoading(true);
    try {
      const payload = {
        user_id: getUserId(user),
        name: form.nominee_name,
        email: form.nominee_email,
        company: form.company_name,
        phone: form.phone,
        website: form.website,
        category: selected.category,
        award_title: selected.award,
        reason: form.reason,
      };

      const response = await submitAwardNomination(payload);

      if (response?.data?.code === 1 || response?.data?.code === "1") {
        closeModal();
        await Swal.fire({
          icon: "success",
          title: "Nomination Submitted",
          text: "Your award nomination has been sent to admin for review.",
          confirmButtonColor: "#c9a227",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Submission Failed",
          text: response?.data?.msg || "Please try again.",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: error.response?.data?.msg || "Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PageHelmet pageTitle="Awards" />
      <main className="awards-page">
        <section className="awards-hero">
          <div className="awards-hero-inner">
            <span className="awards-kicker"><Trophy size={16} /> PROFX EXPO AFRICA 2026</span>
            <h1>PROFX EXPO AFRICA 2026 Award Categories</h1>
            <p>Nominate leading companies, influencers, educators, fintech innovators, and market leaders across Africa's financial industry.</p>
          </div>
        </section>

        <section className="awards-grid-section">
          <div className="awards-bg-word">nominate</div>
          <div className="container">
            <div className="awards-grid">
              {awardGroups.map((group) => (
                <article className="award-card" key={group.title}>
                  <div className="award-card-head">
                    <Award size={28} />
                    <div>
                      <span className="award-card-type">{group.type}</span>
                      <h2>{group.title}</h2>
                    </div>
                  </div>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>
                        <button type="button" onClick={() => openNomination(group.title, item)}>
                          <CheckCircle2 size={15} />
                          <span>{item}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                  <button className="award-nominate-btn" type="button" onClick={() => openNomination(group.title, group.items[0])}>
                    Nominate
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="awards-guide-band">
          <div className="container awards-guide-inner">
            <div>
              <span className="awards-kicker"><BadgeCheck size={16} /> Awards Guide</span>
              <h2>Nominate the brands shaping the financial future.</h2>
            </div>
            <button className="award-nominate-btn" type="button" onClick={() => openNomination("Broker and Trading Excellence Awards", "Forex Broker of the Year 2026")}>
              Start Nomination
            </button>
          </div>
        </section>
      </main>

      {selected && (
        <div className="award-modal-backdrop" role="presentation" onMouseDown={closeModal}>
          <div className="award-modal" role="dialog" aria-modal="true" aria-labelledby="award-modal-title" onMouseDown={(event) => event.stopPropagation()}>
            <button className="award-modal-close" type="button" onClick={closeModal} aria-label="Close nomination form">
              <X size={22} />
            </button>
            <span className="awards-kicker"><Trophy size={15} /> Nomination</span>
            <h2 id="award-modal-title">Submit Award Nomination</h2>
            <p>Registered user details are filled automatically. Edit any field and choose the award category.</p>

            <form className="award-form" onSubmit={handleSubmit}>
<label className="award-field">
                <span><ListChecks size={15} /> Category</span>
                <select required value={selected.category} onChange={(e) => handleCategoryChange(e.target.value)}>
                  {awardGroups.map((group) => (
                    <option value={group.title} key={group.title}>{group.title}</option>
                  ))}
                </select>
              </label>

              <label className="award-field">
                <span><Award size={15} /> Award</span>
                <select required value={selected.award} onChange={(e) => handleAwardChange(e.target.value)}>
                  {(awardGroups.find((group) => group.title === selected.category)?.items || []).map((item) => (
                    <option value={item} key={item}>{item}</option>
                  ))}
                </select>
              </label>

              <label className="award-field">
                <span><UserRound size={15} /> Nominee Name</span>
                <input required value={form.nominee_name} onChange={(e) => handleChange("nominee_name", e.target.value)} placeholder="Enter nominee name" />
              </label>

              <label className="award-field">
                <span><Mail size={15} /> Email Address</span>
                <input required type="email" value={form.nominee_email} onChange={(e) => handleChange("nominee_email", e.target.value)} placeholder="Enter email address" />
              </label>

              <label className="award-field">
                <span><Building2 size={15} /> Company Name</span>
                <input required value={form.company_name} onChange={(e) => handleChange("company_name", e.target.value)} placeholder="Enter company name" />
              </label>

              <label className="award-field">
                <span><Phone size={15} /> Phone Number</span>
                <input required value={form.phone} onChange={(e) => handleChange("phone", e.target.value)} placeholder="Enter phone number" />
              </label>

              <label className="award-field award-form-wide">
                <span><Globe2 size={15} /> Company Website</span>
                <input value={form.website} onChange={(e) => handleChange("website", e.target.value)} placeholder="https://example.com" />
              </label>

              <label className="award-field award-textarea award-form-wide">
                <span><BadgeCheck size={15} /> Nomination Details</span>
                <textarea required value={form.reason} onChange={(e) => handleChange("reason", e.target.value)} placeholder="Write why this nominee should win this award." rows={6} />
              </label>

              <button className="award-submit-btn" type="submit" disabled={loading}>
                <Send size={17} /> {loading ? "Submitting..." : "Submit Nomination"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
