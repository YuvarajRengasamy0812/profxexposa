import React, { useEffect, useRef, useState } from "react";
import Breadcrumb from "../Components/Breadcrumb";
import Pagehelmet from "../Components/Pagehelmet";
import LetsDoIt from "../Components/LetsDoIt";
import { buildAssetUrl } from "../utils/assetUrl";

const ENROLL_URL = "https://profxleague.com/championship";
const GOLD = "linear-gradient(135deg, #c19d38, #e8c96b)";
const GREEN = "linear-gradient(135deg, #0e5941, #15831d)";

const BULL = buildAssetUrl("/assets/images/league/team-bull.avif");
const BEAR = buildAssetUrl("/assets/images/league/team-bear.avif");
const VS = buildAssetUrl("/assets/images/league/game-vs1.svg");
const FREE = buildAssetUrl("/assets/images/league/club_free.png");

const rounds = [
  { num: 1, name: "Volatility Vault Qualifier", start: "2026-03-09T00:00:00", end: "2026-03-13T23:59:59" },
  { num: 2, name: "Trend Triumph Qualifier", start: "2026-03-16T00:00:00", end: "2026-03-20T23:59:59" },
  { num: 3, name: "Precision Power Qualifier", start: "2026-03-23T00:00:00", end: "2026-03-27T23:59:59" },
  { num: 4, name: "Momentum Mastery Qualifier", start: "2026-03-30T00:00:00", end: "2026-04-03T23:59:59" },
];
const grandFinal = {
  num: 5, name: "Grand Final Showdown",
  start: "2026-04-06T00:00:00", end: "2026-04-10T23:59:59",
};

const statItems = [
  { icon: "fa-trophy", label: "Total Prize Pool", target: 25000, prefix: "$", suffix: "" },
  { icon: "fa-users", label: "Total Winners", target: 50, prefix: "", suffix: " Traders" },
  { icon: "fa-calendar", label: "Qualifier Rounds", target: 4, prefix: "", suffix: " Rounds" },
  { icon: "fa-tag", label: "Entry Fee", target: -1, prefix: "", suffix: "FREE" },
];

const prizes = [
  { trophy: "#daa520", rank: "Champion", winners: 1, prize: "$5,000" },
  { trophy: "#c0c0c0", rank: "2nd Place", winners: 1, prize: "$3,000" },
  { trophy: "#cd7f32", rank: "3rd Place", winners: 1, prize: "$2,000" },
  { trophy: null, rank: "4th Place", winners: 1, prize: "$1,500" },
  { trophy: null, rank: "5th Place", winners: 1, prize: "$1,200" },
  { trophy: null, rank: "6th Place", winners: 1, prize: "$1,000" },
  { trophy: null, rank: "7th Place", winners: 1, prize: "$900" },
  { trophy: null, rank: "8th Place", winners: 1, prize: "$800" },
  { trophy: null, rank: "9th Place", winners: 1, prize: "$800" },
  { trophy: null, rank: "10th Place", winners: 1, prize: "$800" },
  { trophy: null, rank: "11th – 15th", winners: "Each", prize: "$400" },
  { trophy: null, rank: "16th – 20th", winners: "Each", prize: "$300" },
  { trophy: null, rank: "21st – 25th", winners: "Each", prize: "$250" },
];

/* ── Countdown hook ──────────────────────────────────────── */
function useCountdown(startISO, endISO) {
  const [state, setState] = useState({ mode: "countdown", d: 0, h: 0, m: 0, s: 0 });
  useEffect(() => {
    function tick() {
      const now = Date.now();
      const start = new Date(startISO).getTime();
      const end = new Date(endISO).getTime();
      if (now > end) { setState({ mode: "completed" }); return; }
      if (now >= start) { setState({ mode: "started" }); return; }
      const diff = start - now;
      setState({
        mode: "countdown",
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff / 3600000) % 24),
        m: Math.floor((diff / 60000) % 60),
        s: Math.floor((diff / 1000) % 60),
      });
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [startISO, endISO]);
  return state;
}

function pad(n) { return String(n).padStart(2, "0"); }

function CountdownDisplay({ startISO, endISO }) {
  const s = useCountdown(startISO, endISO);
  if (s.mode === "completed") return (
    <span className="league-status-completed">
      <i className="fa fa-check-circle me-1"></i>Completed
    </span>
  );
  if (s.mode === "started") return (
    <span className="league-status-started">
      <i className="fa fa-circle me-1" style={{ fontSize: "0.6rem" }}></i>Live Now
    </span>
  );
  return (
    <div className="league-countdown">
      {[{ v: s.d, l: "Days" }, { v: s.h, l: "Hrs" }, { v: s.m, l: "Min" }, { v: s.s, l: "Sec" }].map(({ v, l }) => (
        <div key={l} className="time-box">
          <span>{pad(v)}</span>
          <small>{l}</small>
        </div>
      ))}
    </div>
  );
}

/* ── Stat count-up hook ──────────────────────────────────── */
function useCountUp(target, duration, started) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started || target <= 0) return;
    let cur = 0;
    const step = target / (duration / 16);
    const t = setInterval(() => {
      cur += step;
      if (cur >= target) { setCount(target); clearInterval(t); }
      else setCount(Math.floor(cur));
    }, 16);
    return () => clearInterval(t);
  }, [target, duration, started]);
  return count;
}

function StatCard({ item, started }) {
  const [hov, setHov] = useState(false);
  const count = useCountUp(item.target, 1800, started);
  const display = item.suffix === "FREE" ? "FREE" : `${item.prefix}${count.toLocaleString()}${item.suffix}`;
  return (
    <div className="col-lg-3 col-md-6">
      <div
        className="text-center h-100 rounded-4 p-4 p-lg-5"
        style={{
          background: "#fff",
          border: hov ? "1px solid rgba(193,157,56,0.4)" : "1px solid rgba(0,0,0,0.07)",
          boxShadow: hov ? "0 20px 48px rgba(193,157,56,0.18)" : "0 2px 16px rgba(0,0,0,0.06)",
          transform: hov ? "translateY(-7px)" : "translateY(0)",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      >
        <div
          className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
          style={{
            width: 68, height: 68, background: GOLD,
            boxShadow: hov ? "0 10px 28px rgba(193,157,56,0.5)" : "0 6px 18px rgba(193,157,56,0.25)",
            transition: "box-shadow 0.3s",
          }}
        >
          <i className={`fa ${item.icon} text-white`} style={{ fontSize: "1.5rem" }}></i>
        </div>
        <div
          className="fw-bold mb-1"
          style={{
            fontSize: item.suffix === "FREE" ? "2.1rem" : "2.5rem",
            lineHeight: 1.1,
            background: GOLD,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {display}
        </div>
        <p className="fw-semibold mb-0" style={{ color: "#333", fontSize: "0.88rem" }}>{item.label}</p>
      </div>
    </div>
  );
}

/* ── Tournament Card ─────────────────────────────────────── */
function TournamentCard({ round, isFinal }) {
  const dateLabel = (() => {
    const s = new Date(round.start), e = new Date(round.end);
    const mo = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${mo[s.getMonth()]} ${s.getDate()} – ${mo[e.getMonth()]} ${e.getDate()}`;
  })();

  return (
    <div className={`tournament-card style2${isFinal ? " final-round" : ""}`}>

      {/* Bull team hex panel */}
      <div className="tournament-card-img">
        <img src={BULL} alt="Bulls" />
      </div>

      {/* VS graphic (visible on tablet) */}
      <div className="tournament-card-versus">
        <img src={VS} alt="VS" style={{ width: 60 }} />
      </div>

      {/* Center details panel */}
      <div className="tournament-card-content">
        <div className="tournament-card-details">

          {/* Left - round label + name */}
          <div className="card-title-wrap text-md-end">
            <h6 className="tournament-card-subtitle">
              {isFinal ? "Round 5" : `Round ${round.num}`}
            </h6>
            <h3 className="tournament-card-title">{round.name}</h3>
          </div>

          {/* Center - countdown (exact original wrapper structure) */}
          <div className="tournament-details">
            <div className="lg-tournament-details">
              <div className="tournament-card-date-wrap">
                <CountdownDisplay startISO={round.start} endISO={round.end} />
              </div>
            </div>
          </div>

          {/* Right - date label + button */}
          <div className="card-title-wrap text-center">
            <span className="tournament-card-subtitle">{dateLabel}</span>
            <div className="btn-wrap justify-content-center align-items-center pt-2">
              <a href={ENROLL_URL} target="_blank" rel="noopener noreferrer" className="th-btn btn-sm">
                More Info
              </a>
            </div>
          </div>
        </div>

        {/* Bottom tag */}
        <div className="tournament-card-meta">
          <span className="tournament-card-tag gradient-border px-4 py-1 fw-bold" style={{ fontSize: "0.78rem", color: "#1a1a1a" }}>
            Top 50 &rarr; Final
          </span>
        </div>
      </div>

      {/* Bear team hex panel */}
      <div className="tournament-card-img">
        <img src={BEAR} alt="Bears" />
      </div>
    </div>
  );
}

/* ── Checklist item ──────────────────────────────────────── */
function CheckItem({ text }) {
  return (
    <li>
      <i className="fa fa-check-circle"></i>
      {text}
    </li>
  );
}

function RulesCard({ icon, title, items, gold, children }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      className="h-100 rounded-4 p-4 p-lg-5"
      style={{
        background: "#fff",
        border: hov ? `1px solid ${gold ? "rgba(193,157,56,0.35)" : "rgba(14,89,65,0.25)"}` : "1px solid rgba(0,0,0,0.07)",
        boxShadow: hov ? `0 12px 36px ${gold ? "rgba(193,157,56,0.14)" : "rgba(14,89,65,0.12)"}` : "0 2px 16px rgba(0,0,0,0.05)",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
    >
      <div className="d-flex align-items-center gap-3 mb-4">
        <div
          className="d-inline-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
          style={{
            width: 52, height: 52,
            background: gold ? GOLD : GREEN,
            boxShadow: `0 6px 18px ${gold ? "rgba(193,157,56,0.3)" : "rgba(14,89,65,0.25)"}`,
          }}
        >
          <i className={`fa ${icon} text-white`} style={{ fontSize: "1.1rem" }}></i>
        </div>
        <h5 className="fw-bold mb-0" style={{ color: "#1a1a1a" }}>{title}</h5>
      </div>
      {children || (
        <div className="checklist">
          <ul>
            {items.map((r, i) => <CheckItem key={i} text={r} />)}
          </ul>
        </div>
      )}
    </div>
  );
}

/* ── Main Page ───────────────────────────────────────────── */
export default function League() {
  const statsRef = useRef(null);
  const [statsStarted, setStatsStarted] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStatsStarted(true); }, { threshold: 0.2 });
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div>
      <Pagehelmet pageTitle="ProFX League" />
      <Breadcrumb title="ProFX League" />

      {/* ── Intro ─────────────────────────────────────────── */}
      <section className="py-8 py-md-10" style={{ background: "linear-gradient(135deg, #fdfdfd, #f6f5ea)", position: "relative", overflow: "hidden" }}>
        <div className="glow-1"></div>
        <div className="glow-2"></div>
        <div className="container position-relative">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="league-sub-title">PROFX EXPO AFRICA 2026 - FX TRADING CHAMPIONSHIP</span>
              <h2 className="mb-3">
                World's Largest Free &amp; Online{" "}
                <span className="pink">Trading Championship 2026</span>
              </h2>
              <p className="text-grey fs-5 mb-5">
                ProFX League – FX Championship 2026. Compete, qualify, and win your share of USD&nbsp;$25,000 in prizes. Entry is completely free - open to all traders globally.
              </p>
              <div className="btn-wrap">
                <a
                  href={ENROLL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="th-btn"
                >
                  Enroll Now - It's Free
                </a>
              </div>
            </div>

            <div className="col-lg-6">
              <div
                className="rounded-4 p-4 p-md-5"
                style={{ background: GREEN, boxShadow: "0 16px 48px rgba(14,89,65,0.22)", transition: "box-shadow 0.3s" }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = "0 24px 64px rgba(14,89,65,0.32)"}
                onMouseLeave={e => e.currentTarget.style.boxShadow = "0 16px 48px rgba(14,89,65,0.22)"}
              >
                <h5 className="text-white fw-bold mb-1">ProFX League – FX Championship 2026</h5>
                <p className="mb-4" style={{ color: "#e8c96b", fontSize: "0.83rem" }}>World's Largest Free Online Trading Championship</p>

                <ul className="cfx-stats">
                  <li><strong>$25,000</strong> Prize Pool</li>
                  <li><strong>50</strong> Winners</li>
                  <li><strong>FREE</strong> Entry</li>
                  <li><strong>4</strong> Qualifier Rounds</li>
                  <li><strong>MT5</strong> Platform</li>
                  <li><strong>Mar – Apr 2026</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Rules & Structure ─────────────────────────────── */}
      <section className="py-8 py-md-10" style={{ background: "#f9f9f5" }}>
        <div className="container">
          <div className="title-content text-center mb-5">
            <span className="league-sub-title">KNOW BEFORE YOU TRADE</span>
            <h2 className="mb-0">Rules &amp; <span className="pink">Championship Structure</span></h2>
          </div>
          <div className="row g-4">
            <div className="col-lg-6">
              <RulesCard icon="fa-gavel" title="Trading Rules & Compliance" gold={false} items={[
                "Account Type: Championship / Demo Account",
                "Instruments: FX, Gold, Indices (Sponsor-approved)",
                "Leverage: Defined by platform sponsor",
                "No EA abuse, arbitrage, latency trading, or hedging manipulation",
                "ProFX League Committee decision is final",
              ]} />
            </div>
            <div className="col-lg-6">
              <RulesCard icon="fa-sitemap" title="Championship Structure" gold={true} items={[
                "4 Weekly Qualifier Rounds (Monday–Friday)",
                "1 Grand Final Round",
                "Highest Profit Makers qualify",
                "Transparent, performance-based system",
              ]} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Trading Schedule ──────────────────────────────── */}
      <section className="py-8 py-md-10" style={{ background: "#fff" }}>
        <div className="container">
          <div className="title-content text-center mb-2">
            <span className="league-sub-title">TRADING SCHEDULE</span>
            <h2 className="mb-1">ProFX League – FX Championship <span className="pink">2026!</span></h2>
            <p className="text-grey mb-4">4 Weekly Qualifier Rounds + 1 Grand Final. Top 50 from each round advance.</p>
            <div className="btn-wrap justify-content-center mb-6">
              <a href={ENROLL_URL} target="_blank" rel="noopener noreferrer" className="th-btn">
                Enroll Now
              </a>
            </div>
          </div>

          {/* Divider - Weekly */}
          <div className="d-flex align-items-center gap-3 mb-4">
            <div style={{ flex: 1, height: 1, background: "rgba(14,89,65,0.15)" }}></div>
            <span className="fw-bold px-3" style={{ color: "#0e5941", fontSize: "0.78rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>Weekly Qualifier Rounds</span>
            <div style={{ flex: 1, height: 1, background: "rgba(14,89,65,0.15)" }}></div>
          </div>

          <div className="d-flex flex-column gap-4 mb-6">
            {rounds.map(r => <TournamentCard key={r.num} round={r} isFinal={false} />)}
          </div>

          {/* Divider - Final */}
          <div className="d-flex align-items-center gap-3 mb-4">
            <div style={{ flex: 1, height: 1, background: "rgba(193,157,56,0.3)" }}></div>
            <span className="fw-bold px-3" style={{ color: "#c19d38", fontSize: "0.78rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>Grand Finale</span>
            <div style={{ flex: 1, height: 1, background: "rgba(193,157,56,0.3)" }}></div>
          </div>

          <TournamentCard round={grandFinal} isFinal={true} />
        </div>
      </section>

      {/* ── Re-Entry & Final Format ───────────────────────── */}
      <section className="py-8 py-md-10" style={{ background: "#f9f9f5" }}>
        <div className="container">
          <div className="title-content text-center mb-5">
            <span className="league-sub-title">QUALIFICATION</span>
            <h2 className="mb-0">Re-Entry &amp; <span className="pink">Final Round Format</span></h2>
          </div>

          <div className="row g-4 align-items-center">
            <div className="col-lg-4 col-md-6">
              <RulesCard icon="fa-refresh" title="Re-Entry & Qualification Rules" gold={false} items={[
                "Re-entry allowed if trader does not qualify",
                "Multiple rounds allowed until qualification",
                "Top 50 qualify directly to Final Round",
                "Qualified traders cannot re-enter other rounds",
                "Each trader can qualify only once",
              ]} />
            </div>

            <div className="col-lg-4 d-none d-lg-flex justify-content-center">
              <img
                src={FREE}
                alt="ProFX League Free Entry"
                className="img-fluid"
                style={{ maxWidth: 280, filter: "drop-shadow(0 8px 32px rgba(14,89,65,0.25))", transition: "transform 0.3s, filter 0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-8px) scale(1.03)"; e.currentTarget.style.filter = "drop-shadow(0 20px 48px rgba(14,89,65,0.4))"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.filter = "drop-shadow(0 8px 32px rgba(14,89,65,0.25))"; }}
              />
            </div>

            <div className="col-lg-4 col-md-6">
              <RulesCard icon="fa-flag-checkered" title="Final Round Format" gold={true} items={[
                "Total Finalists: 200 traders",
                "50 traders from each qualifying round",
                "Trading on Official Sponsor Platform",
                "Top 25 traders declared winners",
                "Ranking based on profit %, drawdown & compliance",
              ]} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Prize Pool ────────────────────────────────────── */}
      <section className="py-8 py-md-10" style={{ background: "#fff" }}>
        <div className="container">
          <div className="title-content text-center mb-5">
            <span className="league-sub-title"># PRIZE POOL</span>
            <h2 className="mb-1">Prize Pool Breakdown <span className="pink">USD $25,000</span></h2>
            <p className="text-grey m-0">Top 25 traders win. Rankings based on profit %, drawdown &amp; compliance.</p>
          </div>

          <div className="col-lg-8 mx-auto">
            <div className="table-responsive">
              <table className="tournament-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Rank</th>
                    <th>Winners</th>
                    <th>Prize (USD)</th>
                  </tr>
                </thead>
                <tbody>
                  {prizes.map((row, i) => (
                    <tr
                      key={i}
                      className={i === 0 ? "top1" : i === 1 ? "top2" : i === 2 ? "top3" : ""}
                    >
                      <th>{i + 1}</th>
                      <td>
                        <div className="d-flex align-items-center gap-2">
                          {row.trophy ? (
                            <svg width="18" height="18" viewBox="0 0 16 16">
                              <path fill={row.trophy} d="M11.7 8c4.2-0.3 4.3-2.7 4.3-5h-3v-3h-10v3h-3c0 2.3 0.1 4.7 4.3 5 0.9 1.4 2.1 2 2.7 2v4c-3 0-3 2-3 2h8c0 0 0-2-3-2v-4c0.6 0 1.8-0.6 2.7-2zM13 4h2c-0.1 1.6-0.4 2.7-2.7 2.9 0.3-0.8 0.6-1.7 0.7-2.9zM1 4h2c0.1 1.2 0.4 2.1 0.7 2.9-2.2-0.2-2.6-1.3-2.7-2.9zM4.5 6.1c-0.5-1.7-0.5-3.1-0.5-3.1v-2h1v2c0 0 0 1.7 0.4 3.1 0.5 1.7 1.6 2.9 1.6 2.9s-1.8-0.2-2.5-2.9z" />
                            </svg>
                          ) : (
                            <i className="fa fa-star-o" style={{ color: "#bbb", fontSize: "0.9rem" }}></i>
                          )}
                          {row.rank}
                        </div>
                      </td>
                      <td>{row.winners}</td>
                      <td><span className="prize-amount">{row.prize}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="text-center mt-5">
              <div className="btn-wrap justify-content-center">
                <a href={ENROLL_URL} target="_blank" rel="noopener noreferrer" className="th-btn">
                  Enroll in Championship &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────── */}
      <section ref={statsRef} className="py-8 py-md-10" style={{ background: "#fff" }}>
        <div className="container">
          <div className="title-content text-center mb-5">
            <span className="league-sub-title">BY THE NUMBERS</span>
            <h2 className="mb-0">Championship <span className="pink">At a Glance</span></h2>
          </div>
          <div className="row g-4">
            {statItems.map((item, i) => <StatCard key={i} item={item} started={statsStarted} />)}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="ticket position-relative">
        <div className="overlay"></div>
        <div className="container">
          <div className="ticket-inner w-lg-75 mx-auto text-center position-relative text-white">
            <div className="ticket-title">
              <h5 className="text-white mb-1">DON'T MISS YOUR CHANCE</h5>
              <h1 className="text-white mb-2">
                READY TO COMPETE?{" "}
                <span className="pink">ENROLL IN THE CHAMPIONSHIP NOW!</span>
              </h1>
            </div>
            <div className="ticket-info">
              <p><b>ProFX League – FX Championship 2026</b> is completely free to enter! Compete against the world's best traders and win your share of USD&nbsp;$25,000.</p>
              <div className="ticket-button">
                <a href={ENROLL_URL} target="_blank" rel="noopener noreferrer" className="btn">
                  Enroll Now - It's Free!
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
