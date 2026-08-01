import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Users } from "lucide-react";
import Booth from "./Booth";
import FloorBorder from "./FloorBorder";
import BoothModal from "./BoothModal";
import { buildAssetUrl } from "../utils/assetUrl";
import { getFloorplanList } from "../api/floorplan";

const colors = {
  title: "#3f7c71",
  regional: "#b9f5bd",
  elite: "#f58a00",
  official: "#465879",
  exclusive: "#70cedb",
  gold: "#d2b060",
  silver: "#bfc1c1",
  speakerHall: "#e8ecec",
  networking: "#cbc5ec",
  cafe: "#9a7440",
  kiosk: "#ffab32",
  screen: "#e5261d",
  ledWall: "#e5261d",
  trading: "#d7dada",
};

const boothStroke = {
  borderRadius: 0,
  strokeColor: "rgba(0,0,0,0.35)",
  strokeWidth: 1,
  showShadow: false,
  showHighlight: false,
};

const topBooths = [
  { boothNo: 18, type: "gold", title: "Booth 18\nGold\nBooth", color: colors.gold, x: 353, y: 164 },
  { boothNo: 17, type: "gold", title: "Booth 17\nGold\nBooth", color: colors.gold, x: 510, y: 164 },
  { boothNo: 16, type: "silver", title: "Booth 16\nSilver\nBooth", color: colors.silver, x: 578, y: 164 },
  { boothNo: 15, type: "silver", title: "Booth 15\nSilver\nBooth", color: colors.silver, x: 646, y: 164 },
  { boothNo: 14, type: "silver", title: "Booth 14\nSilver\nBooth", color: colors.silver, x: 714, y: 164 },
  { boothNo: 13, type: "gold", title: "Booth 13\nGold\nBooth", color: colors.gold, x: 781, y: 164 },
  { boothNo: 12, type: "gold", title: "Booth 12\nGold\nBooth", color: colors.gold, x: 913, y: 164 },
  { boothNo: 11, type: "silver", title: "Booth 11\nSilver\nBooth", color: colors.silver, x: 980, y: 164 },
  { boothNo: 10, type: "silver", title: "Booth 10\nSilver\nBooth", color: colors.silver, x: 1048, y: 164 },
  { boothNo: 9, type: "silver", title: "Booth 09\nSilver\nBooth", color: colors.silver, x: 1116, y: 164 },
  { boothNo: 8, type: "gold", title: "Booth 08\nGold\nBooth", color: colors.gold, x: 1182, y: 164 },
];

const sideBooths = [
  { boothNo: 19, type: "silver", title: "Booth 19\nSilver\nBooth", color: colors.silver, y: 231 },
  { boothNo: 20, type: "silver", title: "Booth 20\nSilver\nBooth", color: colors.silver, y: 296 },
  { boothNo: 21, type: "silver", title: "Booth 21\nSilver\nBooth", color: colors.silver, y: 361 },
  { boothNo: 22, type: "silver", title: "Booth 22\nSilver\nBooth", color: colors.silver, y: 427 },
  { boothNo: 23, type: "gold", title: "Booth 23\nGold\nBooth", color: colors.gold, y: 502 },
];

const featureBooths = [
  { boothNo: 5, type: "exclusive", title: "Booth 05\nExclusive\nSponsorship", size: "3 x 4", color: colors.exclusive, x: 822, y: 590, width: 90, height: 68, fontSize: 7.2 },
  { boothNo: 6, type: "elite", title: "Booth 06\nElite\nSponsorship", size: "4 x 3", color: colors.elite, x: 822, y: 455, width: 90, height: 69, fontSize: 7.2 },
  { boothNo: 7, type: "finxcart", title: "Booth 07\nFinXcart", size: "4 x 3", color: colors.kiosk, x: 979, y: 388, width: 90, height: 67, fontSize: 7.2 },
  { boothNo: 4, type: "elite", title: "Booth 04\nElite\nSponsorship", size: "4 x 3", color: colors.elite, x: 979, y: 455, width: 90, height: 69, fontSize: 7.2 },
  { boothNo: 3, type: "official", title: "Booth 03\nOfficial\nSponsorship", size: "3 x 4", color: colors.official, x: 979, y: 589, width: 90, height: 69, fontSize: 7.2, textColor: "#ffffff" },
  { boothNo: 2, type: "regional", title: "Booth 02\nRegional\nSponsorship", size: "5 x 3", color: colors.regional, x: 1136, y: 454, width: 113, height: 67, fontSize: 7.4 },
  { boothNo: 1, type: "title", title: "Booth 01\nTitle\nSponsorship", size: "5 x 3", color: colors.title, x: 1136, y: 589, width: 113, height: 69, fontSize: 7.4, textColor: "#ffffff" },
];

const kiosks = [
  { boothNo: 24, x: 979, y: 297 },
  { boothNo: 25, x: 1024, y: 297 },
];

const FloorPlanAfrica = () => {
  const navigate = useNavigate();
  const [selectedBooth, setSelectedBooth] = React.useState(null);
  const [reservedBooths, setReservedBooths] = useState([]);
  const [showTradingTooltip, setShowTradingTooltip] = useState(false);
  const [activeTooltipId, setActiveTooltipId] = useState(null);

  useEffect(() => {
    let ignore = false;

    const getTickets = (data) => {
      const tickets =
        data?.details?.tickets?.data ||
        data?.tickets?.data ||
        data?.details?.data ||
        data?.data ||
        [];

      return Array.isArray(tickets) ? tickets : [];
    };

    const getLogo = (logo) => {
      if (!logo) {
        return buildAssetUrl("/assets/images/booth-reserved/v-process.png");
      }

      return logo;
    };

    const getLastPage = (data) => {
      const lastPage =
        data?.details?.tickets?.last_page ||
        data?.tickets?.last_page ||
        data?.details?.last_page ||
        data?.last_page ||
        1;

      return Number(lastPage) || 1;
    };

    const fetchAllFloorplanTickets = async () => {
      const firstPage = await getFloorplanList();
      const tickets = [...getTickets(firstPage?.data)];
      const lastPage = getLastPage(firstPage?.data);

      for (let page = 2; page <= lastPage; page += 1) {
        const nextPage = await getFloorplanList({ page });
        tickets.push(...getTickets(nextPage?.data));
      }

      return tickets;
    };

    fetchAllFloorplanTickets()
      .then((tickets) => {
        if (ignore) {
          return;
        }

        const reserved = tickets
          .filter((t) => t.boothno && String(t.status || "pending").toLowerCase() !== "rejected")
          .map((t) => {
            const approved = t.is_company_profile_approved === true || t.status === "approved";
            return {
              boothNo: String(t.boothno),
              companyName: approved ? (t.public_company_name || t.company_profile_name || t.company || t.company_name || "") : "",
              logo: approved ? getLogo(t.company_logo) : null,
              url: approved ? (t.public_company_url || t.company_url || "#") : "#",
              title: t.boothtitle || "Reserved Booth",
              size: t.boothsize || "",
              approved,
            };
          });

        setReservedBooths(reserved);
      })
      .catch((err) => {
        console.error("Error fetching floorplan:", err);
      });

    return () => {
      ignore = true;
    };
  }, []);

  const getReservedInfo = (...boothNos) => {
    const boothNoSet = new Set(boothNos.map((boothNo) => String(boothNo)));
    return reservedBooths.find((b) => boothNoSet.has(b.boothNo));
  };

  const handleBoothSelect = React.useCallback((booth) => {
    if (!localStorage.getItem("user")) {
      navigate("/Register", { state: { from: "/Floorplan", booth } });
      return;
    }

    setSelectedBooth(booth);
  }, [navigate]);

  const renderBooth = (booth) => {
    const reservedInfo = getReservedInfo(booth.boothNo);

    return (
      <Booth
        key={booth.boothId || `AFRICA-${booth.boothNo}`}
        boothId={booth.boothId || `AFRICA-${booth.boothNo}`}
        boothNo={booth.boothNo}
        boothType={booth.type}
        title={booth.title}
        size={booth.size || "3 x 3"}
        x={booth.x}
        y={booth.y}
        width={booth.width || 69}
        height={booth.height || 66}
        color={booth.color}
        textColor={booth.textColor || "#111111"}
        fontSize={booth.fontSize || 7.2}
        showBoothNo={false}
        isReserved={!!reservedInfo}
        reservedInfo={reservedInfo}
        onClick={handleBoothSelect}
        activeTooltipId={activeTooltipId}
        setActiveTooltipId={setActiveTooltipId}
        {...boothStroke}
      />
    );
  };

  const renderSeatBlock = ({ x, y, cols, rows, gapX = 13, gapY = 15, size = 9, prefix }) => (
    <g>
      {[...Array(rows)].map((_, row) =>
        [...Array(cols)].map((__, col) => (
          <Users
            key={`${prefix}-${row}-${col}`}
            x={x + col * gapX}
            y={y + row * gapY}
            size={size}
            color="#70777a"
            strokeWidth={2.2}
          />
        ))
      )}
    </g>
  );

  const renderExit = (x, label) => (
    <g key={label}>
      <path d={`M${x - 24} 39 Q${x} 15 ${x + 24} 39`} fill="none" stroke="#cbd0d2" strokeWidth="1" />
      <line x1={x} y1="43" x2={x} y2="62" stroke="#b8dcea" strokeWidth="3" />
      <polygon points={`${x},34 ${x - 7},45 ${x + 7},45`} fill="#b8dcea" />
      <text x={x} y="69" textAnchor="middle" fontSize="10" fill="#5f6368" fontWeight="700">EXIT</text>
    </g>
  );

  const renderUtility = (x, y, key) => (
    <g key={key}>
      <rect x={x} y={y} width="12" height="19" rx="3" fill="#ffffff" stroke="#111" strokeWidth="1.5" />
      <path d={`M${x + 7} ${y + 3} L${x + 3} ${y + 11} H${x + 7} L${x + 5} ${y + 17} L${x + 11} ${y + 8} H${x + 7} Z`} fill="#00a859" />
      <rect x={x + 18} y={y - 1} width="13" height="20" rx="5" fill="#ffffff" stroke="#111" strokeWidth="1.5" />
      <ellipse cx={x + 24.5} cy={y + 7} rx="5" ry="4" fill="#79c9e7" />
    </g>
  );

  return (
    <>
      <div className="py-5">
        <div className="col-lg-6 mx-auto">
          <div className="title-content text-center mb-4">
            <p className="mb-1 pink">Floor Plan</p>
            <h2 className="mb-1">
              PROFX EXPO<span className="pink"> <b>AFRICA 2026</b></span>
            </h2>
            <p className="m-0">
              Choose from 4 powerful tiers - designed for trend explorers, skill builders, networkers, and deal-closers.
            </p>
          </div>
        </div>

        <div
          className="mx-auto bg-white rounded shadow-xl floor-plan-dubai"
          style={{
            width: "88%",
            maxWidth: "1450px",
            height: "68vh",
            minHeight: "0",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            viewBox="95 0 1525 760"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid meet"
            className="transform-floor"
            style={{ background: "#ffffff", display: "block" }}
          >

            <FloorBorder x="18" y="3" width="1555" height="744" opacity="0.25" pointerEvents="none" />

            <rect x="150" y="96" width="1200" height="630" fill="#ffffff" opacity="0.94" />
            <rect x="150" y="96" width="1200" height="630" fill="none" stroke="#cfd3d4" strokeWidth="1.4" />

            <g opacity="0.78">
              <line x1="68" y1="96" x2="68" y2="724" stroke="#8d8d8d" strokeWidth="1" />
              <polygon points="68,92 63,107 73,107" fill="#8d8d8d" />
              <polygon points="68,728 63,713 73,713" fill="#8d8d8d" />
              <line x1="151" y1="790" x2="1349" y2="790" stroke="#8d8d8d" strokeWidth="1" transform="translate(0 -1)" />
              <polygon points="151,789 166,784 166,794" fill="#8d8d8d" />
              <polygon points="1349,789 1334,784 1334,794" fill="#8d8d8d" />
            </g>

            <g>
              <rect x="150" y="96" width="203" height="630" fill={colors.speakerHall} stroke="#111" strokeWidth="1.4" />
              <rect x="150" y="97" width="31" height="31" fill={colors.screen} />
              <rect x="181" y="97" width="137" height="31" fill={colors.screen} />
              <rect x="318" y="97" width="32" height="31" fill={colors.screen} />
              <rect x="150" y="128" width="203" height="34" fill="#101112" />
              <text x="165.5" y="114" textAnchor="middle" fontSize="5.5" fill="#fff" fontWeight="700">
                <tspan x="165.5" dy="0">Wing</tspan><tspan x="165.5" dy="6">Screen</tspan><tspan x="165.5" dy="6">1.5 x 3</tspan>
              </text>
              <text x="249.5" y="114" textAnchor="middle" fontSize="7" fill="#fff" fontWeight="700">Screen 6 x 3</text>
              <text x="334" y="114" textAnchor="middle" fontSize="5.5" fill="#fff" fontWeight="700">
                <tspan x="334" dy="0">Wing</tspan><tspan x="334" dy="6">Screen</tspan><tspan x="334" dy="6">1.5 x 3</tspan>
              </text>
              <text x="251" y="146" textAnchor="middle" fontSize="7.5" fill="#ffffff" fontWeight="700">Speaker Stage - 3 x 9</text>
              <text x="252" y="184" textAnchor="middle" fontSize="8" fill="#111" fontWeight="700">Speaker Hall- 15 x 9</text>

              {renderSeatBlock({ x: 170, y: 201, cols: 6, rows: 8, prefix: "speaker-a" })}
              {renderSeatBlock({ x: 263, y: 201, cols: 6, rows: 8, prefix: "speaker-b" })}
              {renderSeatBlock({ x: 170, y: 315, cols: 6, rows: 8, prefix: "speaker-c" })}
              {renderSeatBlock({ x: 263, y: 315, cols: 6, rows: 8, prefix: "speaker-d" })}
              {renderSeatBlock({ x: 170, y: 435, cols: 6, rows: 7, prefix: "speaker-e" })}
              {renderSeatBlock({ x: 263, y: 435, cols: 6, rows: 7, prefix: "speaker-f" })}
              {renderSeatBlock({ x: 170, y: 548, cols: 6, rows: 6, prefix: "speaker-g" })}
              {renderSeatBlock({ x: 263, y: 548, cols: 6, rows: 6, prefix: "speaker-h" })}
            </g>

            {topBooths.map(renderBooth)}
            {sideBooths.map((booth) => renderBooth({ ...booth, x: 353, width: 67, height: 65, fontSize: 7.1 }))}
            {kiosks.map((booth) => renderBooth({
              boothNo: booth.boothNo,
              type: "digital-kiosk",
              title: "Digital\nKiosk",
              size: "2 x 2",
              color: colors.kiosk,
              x: booth.x,
              y: booth.y,
              width: 45,
              height: 55,
              fontSize: 7,
            }))}
            {featureBooths.map(renderBooth)}

            <g
              onMouseEnter={() => setShowTradingTooltip(true)}
              onMouseLeave={() => setShowTradingTooltip(false)}
              style={{ cursor: "default" }}
            >
              <rect x="486" y="297" width="270" height="359" fill={colors.trading} />
              {renderSeatBlock({ x: 512, y: 355, cols: 3, rows: 5, gapX: 18, gapY: 15, size: 13, prefix: "trade-left-top" })}
              {renderSeatBlock({ x: 684, y: 355, cols: 3, rows: 5, gapX: 18, gapY: 15, size: 13, prefix: "trade-right-top" })}
              {renderSeatBlock({ x: 512, y: 448, cols: 3, rows: 5, gapX: 18, gapY: 15, size: 13, prefix: "trade-left-mid" })}
              {renderSeatBlock({ x: 684, y: 448, cols: 3, rows: 5, gapX: 18, gapY: 15, size: 13, prefix: "trade-right-mid" })}
              {renderSeatBlock({ x: 512, y: 538, cols: 3, rows: 4, gapX: 18, gapY: 15, size: 13, prefix: "trade-left-bot" })}
              {renderSeatBlock({ x: 592, y: 355, cols: 5, rows: 4, gapX: 14, gapY: 14, size: 13, prefix: "trade-top-center" })}
              {renderSeatBlock({ x: 592, y: 552, cols: 5, rows: 3, gapX: 14, gapY: 15, size: 13, prefix: "trade-bottom-center" })}
              {renderSeatBlock({ x: 684, y: 538, cols: 3, rows: 4, gapX: 18, gapY: 15, size: 13, prefix: "trade-right-bot" })}
              <rect x="571" y="417" width="104" height="96" fill="#8b8f90" />
              <rect x="582" y="428" width="82" height="74" fill={colors.trading} />
              <circle cx="623" cy="469" r="34" fill="#ffffff" />
              <image
                href={buildAssetUrl("assets/images/league/league.png")}
                x="596"
                y="448"
                width="54"
                height="32"
                preserveAspectRatio="xMidYMid meet"
              />
              <text x="623" y="489" textAnchor="middle" fontSize="7.5" fill="#111" fontWeight="800">Trading Arena</text>
              <text x="623" y="501" textAnchor="middle" fontSize="7" fill="#111" fontWeight="700">12 X 16</text>
            </g>

            {renderBooth({
              boothId: "AFRICA-NETWORK",
              boothNo: "NETWORK",
              type: "networklounge",
              title: "Network\nLounge",
              size: "7 x 4",
              color: colors.networking,
              x: 822,
              y: 297,
              width: 90,
              height: 157,
              fontSize: 10,
            })}
            {renderBooth({
              boothId: "AFRICA-CAFE",
              boothNo: "CAFE",
              type: "cafe",
              title: "Cafe Lounge",
              size: "4 x 5",
              color: colors.cafe,
              x: 1136,
              y: 297,
              width: 113,
              height: 91,
              fontSize: 12,
              textColor: "#ffffff",
            })}

            <g>
              <rect x="445" y="99" width="68" height="16" fill={colors.ledWall} />
              <text x="479" y="109" textAnchor="middle" fontSize="5.6" fill="#fff" fontWeight="700">LED Exposure Wall</text>
              <rect x="408" y="704" width="68" height="16" fill={colors.ledWall} />
              <text x="442" y="714" textAnchor="middle" fontSize="5.6" fill="#fff" fontWeight="700">LED Exposure Wall</text>
              <rect x="913" y="707" width="68" height="16" fill={colors.ledWall} />
              <text x="947" y="717" textAnchor="middle" fontSize="5.6" fill="#fff" fontWeight="700">LED Exposure Wall</text>
              <rect x="1297" y="237" width="16" height="67" fill={colors.ledWall} />
              <text
                x="1305"
                y="270.5"
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="5.6"
                fill="#fff"
                fontWeight="700"
                transform="rotate(-90 1305 270.5)"
              >LED Exposure Wall</text>
            </g>

            <g>
              <rect x="1234" y="566" width="106" height="130" fill="#f1efd9" opacity="0.65" stroke="#e0dcc7" />
              <text x="1299" y="636" textAnchor="middle" fontSize="11" fill="#777" fontWeight="800" transform="rotate(-90 1299 636)">ENTRANCE</text>
              <text x="1390" y="636" textAnchor="middle" fontSize="12" fill="#111" fontWeight="800" transform="rotate(-90 1390 636)">ENTRANCE GATE</text>
              <polygon points="1389,588 1383,602 1395,602" fill="#111" />
              <text x="1512" y="627" textAnchor="middle" fontSize="13" fill="#8f8f8f" fontWeight="800">
                <tspan x="1512" dy="0">HALL</tspan><tspan x="1512" dy="16">ENTRANCE</tspan>
              </text>
              <polygon points="1351,627 1364,620 1364,634" fill="#c4eaf4" />
            </g>

            <g>
              {[598, 646, 694, 842, 890, 938].map((x, index) => renderExit(x, `exit-${index}`))}
              <path d="M566 13 H965 V96" fill="none" stroke="#d7dbdc" strokeWidth="1" />
              <path d="M566 13 V96" fill="none" stroke="#d7dbdc" strokeWidth="1" />
              <path d="M628 13 V96" fill="none" stroke="#d7dbdc" strokeWidth="1" />
              <path d="M750 13 V96" fill="none" stroke="#d7dbdc" strokeWidth="1" />
              <path d="M826 13 V96" fill="none" stroke="#d7dbdc" strokeWidth="1" />
              <path d="M965 13 V96" fill="none" stroke="#d7dbdc" strokeWidth="1" />
            </g>

            {renderUtility(515, 107, "util-top")}
            {renderUtility(1115, 698, "util-bottom")}
            {renderUtility(1308, 498, "util-right")}



            {showTradingTooltip && (
              <g pointerEvents="none">
                <rect x="535" y="225" width="176" height="58" rx="8" fill="#fff" stroke="#e0e0e0" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.15))" />
                <polygon points="615,283 631,283 623,292" fill="#fff" />
                <text x="623" y="246" textAnchor="middle" fontSize="12" fontWeight="700" fill="#111827">Trading Arena</text>
                <text x="623" y="264" textAnchor="middle" fontSize="11" fill="#666">Size: 12 x 16</text>
              </g>
            )}
          </svg>
        </div>

        <div className="text-center mt-4 text-slate-400 text-sm">
          <p>Hover over any booth for details and to reserve - PROFX EXPO AFRICA 2026</p>
        </div>
      </div>

      {selectedBooth && (
        <BoothModal
          booth={selectedBooth}
          onClose={() => setSelectedBooth(null)}
          onReserve={({ name, company, phone }) => {
            setReservedBooths((prev) => [
              ...prev,
              {
                boothNo: String(selectedBooth.boothNo || selectedBooth.boothId),
                companyName: company || name || "Reserved",
                logo: buildAssetUrl("/assets/images/booth-reserved/v-process.png"),
                url: "#",
                title: selectedBooth.title || "Reserved Booth",
                size: selectedBooth.size || "",
                approved: false,
              },
            ]);

            import("sweetalert2").then((Swal) => {
              Swal.default.fire({
                title: "Reservation Submitted!",
                html: `
                  Name: ${name}<br/>
                  Company: ${company}<br/>
                  Phone: ${phone}<br/>
                  Please wait for approval.
                `,
                icon: "info",
                confirmButtonText: "Ok",
              });
            });
          }}
        />
      )}
    </>
  );
};

export default FloorPlanAfrica;
