import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Users } from "lucide-react";
import Booth from "./Booth";
import FloorBorder from "./FloorBorder";
import BoothModal from "./BoothModal";
import { buildAssetUrl } from "../utils/assetUrl";
import { getFloorplanList } from "../api/floorplan";

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



  // Layout constants based on grid
  const startX = 50;
  const startY = 50;
  const tradingZone = {
    x: startX + 450,
    y: startY + 154,
    width: 209,
    height: 240,
    size: 150,
    circleRadius: 42,
    tooltipWidth: 180,
    tooltipHeight: 58,
  };
  const tradingStageX = tradingZone.x + (tradingZone.width - tradingZone.size) / 2;
  const tradingStageY = tradingZone.y + 18;
  const tradingCornerInset = 8;
  const tradingCornerLong = 30;
  const tradingCornerShort = 10;
  const topRowY = startY + 50;
  const topRowWidth = 60;
  const topRowHeight = 60;
  const topRowFontSize = 9;
  const topRowGap = 60;
  const digitalBoothWidth = topRowWidth;
  const digitalBoothHeight = topRowHeight;
  const digitalBoothFontSize = topRowFontSize - 1;
  const digitalBoothGap = topRowGap;
  const speakerSideBoothWidth = 64;
  const speakerSideBoothHeight = 62;
  const speakerSideBoothFontSize = topRowFontSize;
  const speakerSideBoothGap = 62;
  const speakerHall = {
    x: startX + 29,
    y: topRowY + 163,
    width: 220,
    height: 310,
    stageHeight: 56,
    screenHeight: 28,
  };
  const speakerAudience = {
    startX: speakerHall.x + 22,
    startY: speakerHall.y + 34,
    cols: 8,
    rows: 6,
    seatWidth: 18,
    seatHeight: 12,
    seatGapX: 20,
    seatGapY: 21,
    centerGap: 28,
    sectionGapY: 34,
    userSize: 9,
  };

  // Colors matching the reference PDF
  const colors = {
    title: "#468679",
    regional: "#A7D3AE",
    elite: "#EF7C00",
    official: "#50658C",
    exclusive: "#61C2CF",
    diamond: "#A0D9F7",
    gold: "#f4d03f",
    silver: "#aab7b8",
    speakerHall: "#EBECEC",
    networking: "#9b8ae7",
    cafe: "#9A7440",
    finxcartn: "#F7A83F",
    screen: "#E3000E",
    backdrop: "#D9D9D9",
    ledWall: "#E3000E",
    entrance: "#124A0C",
  };

  return (

    <>
      <div className="py-5">
        {/* Section Title  */}
        <div className="col-lg-6 mx-auto">
          <div className="title-content text-center mb-4">
            <p className="mb-1 pink">
              Floor Plan
            </p>
            <h2 className="mb-1">
              PROFX EXPO<span className="pink"> <b>AFRICA 2026</b></span>
            </h2>
            <p className="m-0">
              Choose from 4 powerful tiers - designed for trend explorers, skill builders, networkers, and deal-closers.
            </p>
          </div>
        </div>
        {/* Floor Plan Container */}
        <div
          className="mx-auto bg-white rounded shadow-xl floor-plan-dubai"
          style={{
            width: "95%",
            maxWidth: "2000px",
            height: "85vh",
            minHeight: "750px",
            paddingTop: "20px",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >

          <svg
            viewBox="0 0 1220 1000"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid meet"
            style={{
              background: "#fff",
              // transform: "scale(1.0)",     // increase size here
              transformOrigin: "center",
            }}
            className="transform-floor"
          >


            {/* Inner fine grid for main floor area */}
            <rect x={startX + 90} y={startY} width="1020" height="900" fill="url(#gridDense)" />

            {/* Floor Border */}
            <FloorBorder
              x={-52}
              y={-26}
              width={1335}
              height={730}
            />



            {/* Top-left row: Silver x5 then Gold */}
            {[
              // {
              //   boothId: "AFRICA-TOP-LEFT-SILVER-18",
              //   boothType: "silver",
              //   boothNo: 34,
              //   title: "Silver\nBooth",
              //   color: colors.silver,
              // },
                  {
                boothId: "AFRICA-DIGITAL-KIOSK-9",
                boothType: "title",
                boothNo: 31,
                title: "Digital\nKiosk",
                color: "#F7A83F",
              },
              // {
              //   boothId: "AFRICA-TOP-LEFT-SILVER-17",
              //   boothType: "silver",
              //   boothNo: 33,
              //   title: "Silver\nBooth",
              //   color: colors.silver,
              // },
                  {
                boothId: "AFRICA-DIGITAL-KIOSK-8",
                boothType: "title",
                boothNo: 30,
                title: "Digital\nKiosk",
                color: "#F7A83F",
              },
              // {
              //   boothId: "AFRICA-TOP-LEFT-SILVER-16",
              //   boothType: "silver",
              //   boothNo: 32,
              //   title: "Silver\nBooth",
              //   color: colors.silver,
              // },
                  {
                boothId: "AFRICA-DIGITAL-KIOSK-7",
                boothType: "title",
                boothNo: 29,
                title: "Digital\nKiosk",
                color: "#F7A83F",
              },
              // {
              //   boothId: "AFRICA-TOP-LEFT-SILVER-15",
              //   boothType: "silver",
              //   boothNo: 31,
              //   title: "Silver\nBooth",
              //   color: colors.silver,
              // },
                  {
                boothId: "AFRICA-DIGITAL-KIOSK-6",
                boothType: "title",
                boothNo: 28,
                title: "Digital\nKiosk",
                color: "#F7A83F",
              },
              // {
              //   boothId: "AFRICA-TOP-LEFT-SILVER-14",
              //   boothType: "silver",
              //   boothNo: 30,
              //   title: "Silver\nBooth",
              //   color: colors.silver,
              // },
                {
                boothId: "AFRICA-DIGITAL-KIOSK-5",
                boothType: "title",
                boothNo: 27,
                title: "Digital\nKiosk",
                color: "#F7A83F",
              },
               {
                boothId: "AFRICA-DIGITAL-KIOSK-4",
                boothType: "title",
                boothNo: 26,
                title: "Digital\nKiosk",
                color: "#F7A83F",
              },
              // {
              //   boothId: "AFRICA-TOP-LEFT-GOLD-10",
              //   boothType: "gold",
              //   boothNo: 29,
              //   title: "Gold\nBooth",
              //   color: colors.gold,
              // },
            ].map((booth, i) => {
              const reservedInfo = getReservedInfo(booth.boothNo);

              return (
                <Booth
                  key={booth.boothId}
                  boothId={booth.boothId}
                  boothType={booth.boothType}
                  boothNo={booth.boothNo}
                  size="3 x 3"
                  x={startX + 27 + i * topRowGap}
                  y={topRowY}
                  width={topRowWidth}
                  height={topRowHeight}
                  color={booth.color}
                  title={booth.title}
                  fontSize={topRowFontSize}
                  isReserved={!!reservedInfo}
                  reservedInfo={reservedInfo}
                  onClick={handleBoothSelect}
                  activeTooltipId={activeTooltipId}
                  setActiveTooltipId={setActiveTooltipId}
                />
              );
            })}


            {/* Top-right row: Gold, Silver, Silver, Silver, Gold */}
            {[
              {
                boothId: "AFRICA-TOP-RIGHT-GOLD-11",
                boothType: "gold",
                boothNo: 16,
                title: "Gold\nBooth",
                color: colors.gold,
              },
              {
                boothId: "AFRICA-TOP-RIGHT-SILVER-12",
                boothType: "silver",
                boothNo: 15,
                title: "Silver\nBooth",
                color: colors.silver,
              },
              {
                boothId: "AFRICA-TOP-RIGHT-SILVER-13",
                boothType: "silver",
                boothNo: 14,
                title: "Silver\nBooth",
                color: colors.silver,
              },
              {
                boothId: "AFRICA-TOP-RIGHT-SILVER-14",
                boothType: "silver",
                boothNo: 13,
                title: "Silver\nBooth",
                color: colors.silver,
              },
              {
                boothId: "AFRICA-TOP-RIGHT-GOLD-15",
                boothType: "gold",
                boothNo: 12,
                title: "Gold\nBooth",
                color: colors.gold,
              },
            ].map((booth, i) => {
              const reservedInfo = getReservedInfo(booth.boothNo);

              return (
                <Booth
                  key={booth.boothId}
                  boothId={booth.boothId}
                  boothType={booth.boothType}
                  boothNo={booth.boothNo}
                  size="3 x 3"
                  x={startX + 480 + i * topRowGap}
                  y={topRowY}
                  width={topRowWidth}
                  height={topRowHeight}
                  color={booth.color}
                  title={booth.title}
                  fontSize={topRowFontSize}
                  isReserved={!!reservedInfo}
                  reservedInfo={reservedInfo}
                  onClick={handleBoothSelect}
                  activeTooltipId={activeTooltipId}
                  setActiveTooltipId={setActiveTooltipId}
                />
              );
            })}

            {/* Digital Kiosk row under top-left row */}
            {[
              {
                boothId: "AFRICA-DIGITAL-KIOSK-1",
                boothType: "title",
                boothNo: 25,
                title: "Digital\nKiosk",
                color: "#F7A83F",
              },
              {
                boothId: "AFRICA-DIGITAL-KIOSK-2",
                boothType: "title",
                boothNo: 24,
                title: "Digital\nKiosk",
                color: "#F7A83F",
              },
              {
                boothId: "AFRICA-DIGITAL-KIOSK-3",
                boothType: "title",
                boothNo: 23,
                title: "Digital\nKiosk",
                color: "#F7A83F",
              },
            ].map((booth, i) => {
              const reservedInfo = getReservedInfo(booth.boothNo);

              return (
                <Booth
                  key={booth.boothId}
                  boothId={booth.boothId}
                  boothType={booth.boothType}
                  boothNo={booth.boothNo}
                  size="2 x 2"
                  x={startX + 27 + i * digitalBoothGap}
                  y={topRowY + 101}
                  width={digitalBoothWidth}
                  height={digitalBoothHeight}
                  color={booth.color}
                  title={booth.title}
                  fontSize={digitalBoothFontSize}
                  isReserved={!!reservedInfo}
                  reservedInfo={reservedInfo}
                  onClick={handleBoothSelect}
                  activeTooltipId={activeTooltipId}
                  setActiveTooltipId={setActiveTooltipId}
                />
              );
            })}

            {/* Speaker Hall below digital kiosks */}
            <g>
              <rect
                x={speakerHall.x}
                y={speakerHall.y}
                width={speakerHall.width}
                height={speakerHall.height}
                rx={12}
                fill={colors.speakerHall}
              />

              {/* Seating rows visualization */}
              {[...Array(speakerAudience.rows)].map((_, row) =>
                [...Array(speakerAudience.cols)].map((_, col) => {
                  const seatX =
                    speakerAudience.startX +
                    col * speakerAudience.seatGapX +
                    (col >= speakerAudience.cols / 2 ? speakerAudience.centerGap : 0);
                  const seatY =
                    speakerAudience.startY +
                    row * speakerAudience.seatGapY +
                    (row >= 3 ? speakerAudience.sectionGapY : 0);

                  return (
                    <React.Fragment key={`speaker-seat-${row}-${col}`}>
                      <rect
                        x={seatX}
                        y={seatY}
                        width={speakerAudience.seatWidth}
                        height={speakerAudience.seatHeight}
                        rx={3}
                        fill="#ffffff"
                        stroke="#cfd3d7"
                        strokeWidth="1"
                      />
                      <Users
                        x={seatX + (speakerAudience.seatWidth - speakerAudience.userSize) / 2}
                        y={seatY + (speakerAudience.seatHeight - speakerAudience.userSize) / 2}
                        size={speakerAudience.userSize}
                        color="#111111"
                        strokeWidth={2.2}
                      />
                    </React.Fragment>
                  );
                })
              )}

              <text
                x={speakerHall.x + speakerHall.width / 2}
                y={speakerHall.y + speakerHall.height - speakerHall.stageHeight - 44}
                textAnchor="middle"
                fontSize="14"
                fill="#1c1f23"
                fontWeight="700"
              >
                Speaker Hall- 15 x 9
              </text>

              <rect
                x={speakerHall.x}
                y={speakerHall.y + speakerHall.height - speakerHall.stageHeight - speakerHall.screenHeight}
                width={speakerHall.width}
                height={speakerHall.stageHeight}
                fill="#1A1918"
              />
              <text
                x={speakerHall.x + speakerHall.width / 2}
                y={speakerHall.y + speakerHall.height - speakerHall.screenHeight - speakerHall.stageHeight / 2}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="12"
                fill="#ffffff"
                fontWeight="700"
              >
                Speaker Stage - 3 x 9
              </text>

              <rect
                x={speakerHall.x}
                y={speakerHall.y + speakerHall.height - speakerHall.screenHeight}
                width={speakerHall.width}
                height={speakerHall.screenHeight}
                fill={colors.screen}
              />
              <text
                x={speakerHall.x + speakerHall.width / 2}
                y={speakerHall.y + speakerHall.height - speakerHall.screenHeight / 2}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="12"
                fill="#ffffff"
                fontWeight="700"
              >
                Screen 7 x 3
              </text>
            </g>

            {/* Right-side vertical stack next to speaker hall */}
            {[
              {
                boothId: "AFRICA-SPEAKER-RIGHT-GOLD-41",
                boothType: "gold",
                boothNo: 22,
                title: "Gold\nBooth",
                color: colors.gold,
              },
              {
                boothId: "AFRICA-SPEAKER-RIGHT-SILVER-42",
                boothType: "silver",
                boothNo: 21,
                title: "Silver\nBooth",
                color: colors.silver,
              },
              {
                boothId: "AFRICA-SPEAKER-RIGHT-SILVER-43",
                boothType: "silver",
                boothNo: 20,
                title: "Silver\nBooth",
                color: colors.silver,
              },
              {
                boothId: "AFRICA-SPEAKER-RIGHT-SILVER-44",
                boothType: "silver",
                boothNo: 19,
                title: "Silver\nBooth",
                color: colors.silver,
              },
              {
                boothId: "AFRICA-SPEAKER-RIGHT-SILVER-45",
                boothType: "silver",
                boothNo: 17,
                title: "Silver\nBooth",
                color: colors.silver,
              },
            ].map((booth, i) => {
              const reservedInfo = getReservedInfo(booth.boothNo);

              return (
                <Booth
                  key={booth.boothId}
                  boothId={booth.boothId}
                  boothType={booth.boothType}
                  boothNo={booth.boothNo}
                  size="3 x 3"
                  x={speakerHall.x + speakerHall.width + 1}
                  y={speakerHall.y + i * speakerSideBoothGap}
                  width={speakerSideBoothWidth}
                  height={speakerSideBoothHeight}
                  color={booth.color}
                  title={booth.title}
                  fontSize={speakerSideBoothFontSize}
                  isReserved={!!reservedInfo}
                  reservedInfo={reservedInfo}
                  onClick={handleBoothSelect}
                  activeTooltipId={activeTooltipId}
                  setActiveTooltipId={setActiveTooltipId}
                />
              );
            })}


            {/* FinXcartn booth - next to right-side vertical stack */}
            {(() => {
              const finxX = speakerHall.x + speakerHall.width + 1 + speakerSideBoothWidth + 28;
              const finxY = topRowY + 104;
              const finxW = 100;
              const finxH = 100;
              const reservedInfo = getReservedInfo(18, "FINXCARTN");
              return (
                <Booth
                  boothId="AFRICA-FINXCARTN"
                  boothType="finxcartn"
                  boothNo={18}
                  size="3 x 5"
                  x={finxX}
                  y={finxY}
                  width={finxW}
                  height={finxH}
                  color={colors.finxcartn}
                  title={"FinXcartn"}
                  fontSize={10}
                  isReserved={!!reservedInfo}
                  reservedInfo={reservedInfo}
                  onClick={handleBoothSelect}
                  activeTooltipId={activeTooltipId}
                  setActiveTooltipId={setActiveTooltipId}
                />
              );
            })()}

            {/* Café Lounge - below FinXcartn */}
            {(() => {
              const cafeX = speakerHall.x + speakerHall.width + 1 + speakerSideBoothWidth + 28;
              const cafeY = topRowY + 104 + 100 + 8;
              const cafeW = 100;
              const cafeH = 75;
              const reservedInfo = getReservedInfo("CAFE");
              return (
                <Booth
                  boothId="AFRICA-CAFE"
                  boothType="cafe"
                  boothNo={null}
                  size="2 x 5"
                  showBoothNo={false}
                  x={cafeX}
                  y={cafeY}
                  width={cafeW}
                  height={cafeH}
                  color={colors.cafe}
                  title={"Café\nLounge"}
                  textColor="#ffffff"
                  fontSize={10}
                  isReserved={!!reservedInfo}
                  reservedInfo={reservedInfo}
                  onClick={handleBoothSelect}
                  activeTooltipId={activeTooltipId}
                  setActiveTooltipId={setActiveTooltipId}
                />
              );
            })()}

            {/* Networking Lounge - below Café */}
            {(() => {
              const netX = speakerHall.x + speakerHall.width + 1 + speakerSideBoothWidth + 28;
              const netY = topRowY + 104 + 100 + 8 + 75;
              const netW = 100;
              const netH = 100;
              const reservedInfo = getReservedInfo("NETWORK");
              return (
                <Booth
                  boothId="AFRICA-NETWORK"
                  boothType="networklounge"
                  title={"Networking\nLounge"}
                  size="5 x 5"
                  showBoothNo={false}
                  x={netX}
                  y={netY}
                  width={netW}
                  height={netH}
                  color={colors.networking}
                  textColor="#ffffff"
                  fontSize={10}
                  isReserved={!!reservedInfo}
                  reservedInfo={reservedInfo}
                  onClick={handleBoothSelect}
                  activeTooltipId={activeTooltipId}
                  setActiveTooltipId={setActiveTooltipId}
                />
              );
            })()}

            {/* ===== TRADING CONTEST ZONE ===== */}
            <g
              onMouseEnter={() => setShowTradingTooltip(true)}
              onMouseLeave={() => setShowTradingTooltip(false)}
              style={{ cursor: "default" }}
            >
              <rect
                x={tradingZone.x}
                y={tradingZone.y}
                width={tradingZone.width}
                height={tradingZone.height}
                fill="#d9d9d9"
                rx={6}
              />

              <rect
                x={tradingStageX}
                y={tradingStageY}
                width={tradingZone.size}
                height={tradingZone.size}
                fill="#e6e7e8"
                stroke="rgba(255,255,255,0.28)"
                strokeWidth="2"
              />

              {/* L-shaped corner brackets */}
              {[
                { hx: tradingStageX + tradingCornerInset, hy: tradingStageY + tradingCornerInset, vx: tradingStageX + tradingCornerInset, vy: tradingStageY + tradingCornerInset },
                { hx: tradingStageX + tradingZone.size - tradingCornerInset - tradingCornerLong, hy: tradingStageY + tradingCornerInset, vx: tradingStageX + tradingZone.size - tradingCornerInset - tradingCornerShort, vy: tradingStageY + tradingCornerInset },
                { hx: tradingStageX + tradingCornerInset, hy: tradingStageY + tradingZone.size - tradingCornerInset - tradingCornerShort, vx: tradingStageX + tradingCornerInset, vy: tradingStageY + tradingZone.size - tradingCornerInset - tradingCornerLong },
                { hx: tradingStageX + tradingZone.size - tradingCornerInset - tradingCornerLong, hy: tradingStageY + tradingZone.size - tradingCornerInset - tradingCornerShort, vx: tradingStageX + tradingZone.size - tradingCornerInset - tradingCornerShort, vy: tradingStageY + tradingZone.size - tradingCornerInset - tradingCornerLong },
              ].map((c, i) => (
                <g key={`tc-${i}`}>
                  <rect x={c.hx} y={c.hy} width={tradingCornerLong} height={tradingCornerShort} fill="#888" />
                  <rect x={c.vx} y={c.vy} width={tradingCornerShort} height={tradingCornerLong} fill="#888" />
                </g>
              ))}

              {/* Center white circle */}
              <circle
                cx={tradingZone.x + tradingZone.width / 2}
                cy={tradingStageY + tradingZone.size / 2}
                r={tradingZone.circleRadius}
                fill="#ffffff"
                stroke="#ddd"
                strokeWidth="1"
              />

              {/* Center logo image - shrunk to 75% of circle so it fits without clipping */}
              <image
                href={buildAssetUrl("assets/images/league/league.png")}
                x={tradingZone.x + tradingZone.width / 2 - tradingZone.circleRadius * 0.75}
                y={tradingStageY + tradingZone.size / 2 - tradingZone.circleRadius * 0.75}
                width={tradingZone.circleRadius * 1.5}
                height={tradingZone.circleRadius * 1.5}
                preserveAspectRatio="xMidYMid meet"
              />

              <text
                x={tradingZone.x + tradingZone.width / 2}
                y={tradingZone.y + tradingZone.height - 44}
                textAnchor="middle"
                fontSize="12"
                fill="#1f2937"
                fontWeight="700"
              >
                Trading Arena
              </text>

              <text
                x={tradingZone.x + tradingZone.width / 2}
                y={tradingZone.y + tradingZone.height - 28}
                textAnchor="middle"
                fontSize="11"
                fill="#1f2937"
                fontWeight="600"
              >
                10 x 12
              </text>

            </g>

            {/* Bottom booth row - Gold | Silver x3 | Gold */}
            {[
              { boothId: "AFRICA-BOT-GOLD-51", boothType: "gold", boothNo: 11, title: "Gold\nBooth", color: colors.gold },
              { boothId: "AFRICA-BOT-SILVER-52", boothType: "silver", boothNo: 10, title: "Silver\nBooth", color: colors.silver },
              { boothId: "AFRICA-BOT-SILVER-53", boothType: "silver", boothNo: 9, title: "Silver\nBooth", color: colors.silver },
              { boothId: "AFRICA-BOT-SILVER-54", boothType: "silver", boothNo: 8, title: "Silver\nBooth", color: colors.silver },
              { boothId: "AFRICA-BOT-GOLD-55", boothType: "gold", boothNo: 7, title: "Gold\nBooth", color: colors.gold },
            ].map((booth, i) => {
              const reservedInfo = getReservedInfo(booth.boothNo);
              return (
                <Booth
                  key={booth.boothId}
                  boothId={booth.boothId}
                  boothType={booth.boothType}
                  boothNo={booth.boothNo}
                  size="3 x 3"
                  x={speakerHall.x + speakerHall.width + 1 + speakerSideBoothWidth + 28 + i * 60}
                  y={topRowY + 104 + 100 + 8 + 60 + 100 + 40}
                  width={60}
                  height={60}
                  color={booth.color}
                  title={booth.title}
                  fontSize={topRowFontSize}
                  isReserved={!!reservedInfo}
                  reservedInfo={reservedInfo}
                  onClick={handleBoothSelect}
                  activeTooltipId={activeTooltipId}
                  setActiveTooltipId={setActiveTooltipId}
                />
              );
            })}

            {/* Diamond + Elite - top row (row 3) */}
            {[
              // { boothId: "AFRICA-RIGHT-DIAMOND-61", boothType: "diamond", boothNo: 4, title: "Diamond\nSponsorship", size: "4 x 3", color: colors.diamond },
              { boothId: "AFRICA-RIGHT-ELITE-62", boothType: "elite", boothNo: 6, title: "Elite\nSponsorship", size: "4 x 3", color: colors.elite },
            ].map((booth, i) => {
              const reservedInfo = getReservedInfo(booth.boothNo);
              return (
                <Booth
                  key={booth.boothId}
                  boothId={booth.boothId}
                  boothType={booth.boothType}
                  boothNo={booth.boothNo}
                  size={booth.size}
                  x={speakerHall.x + speakerHall.width + 1 + speakerSideBoothWidth + 85 + 5 * 60 + 8 + i * 75}
                  y={topRowY + 104}
                  width={75}
                  height={100}
                  color={booth.color}
                  title={booth.title}
                  fontSize={9}
                  isReserved={!!reservedInfo}
                  reservedInfo={reservedInfo}
                  onClick={handleBoothSelect}
                  activeTooltipId={activeTooltipId}
                  setActiveTooltipId={setActiveTooltipId}
                />
              );
            })}

            {/* Diamond + Elite - middle row (row 2) */}
            {[
              // { boothId: "AFRICA-RIGHT-DIAMOND-59", boothType: "diamond", boothNo: 6, title: "Diamond\nSponsorship", size: "4 x 3", color: colors.diamond },
              { boothId: "AFRICA-RIGHT-ELITE-60", boothType: "elite", boothNo: 5, title: "Elite\nSponsorship", size: "4 x 3", color: colors.elite },
            ].map((booth, i) => {
              const reservedInfo = getReservedInfo(booth.boothNo);
              return (
                <Booth
                  key={booth.boothId}
                  boothId={booth.boothId}
                  boothType={booth.boothType}
                  boothNo={booth.boothNo}
                  size={booth.size}
                  x={speakerHall.x + speakerHall.width + 1 + speakerSideBoothWidth + 85 + 5 * 60 + 8 + i * 75}
                  y={topRowY + 238}
                  width={75}
                  height={100}
                  color={booth.color}
                  title={booth.title}
                  fontSize={9}
                  isReserved={!!reservedInfo}
                  reservedInfo={reservedInfo}
                  onClick={handleBoothSelect}
                  activeTooltipId={activeTooltipId}
                  setActiveTooltipId={setActiveTooltipId}
                />
              );
            })}

            {/* Diamond + Exclusive - sticky pair next to bottom gold row */}
            {[
              // { boothId: "AFRICA-BOT-DIAMOND", boothType: "diamond", boothNo: 8, title: "Diamond\nSponsorship", size: "4 x 3", color: colors.diamond },
              { boothId: "AFRICA-BOT-EXCLUSIVE", boothType: "exclusive", boothNo: 4, title: "Exclusive\nSponsorship", size: "3 x 4", color: colors.exclusive },
            ].map((booth, i) => {
              const reservedInfo = getReservedInfo(booth.boothNo);
              return (
                <Booth
                  key={booth.boothId}
                  boothId={booth.boothId}
                  boothType={booth.boothType}
                  boothNo={booth.boothNo}
                  size={booth.size}
                  x={speakerHall.x + speakerHall.width + 1 + speakerSideBoothWidth + 85 + 5 * 60 + 8 + i * 75}
                  y={topRowY + 372}
                  width={75}
                  height={100}
                  color={booth.color}
                  title={booth.title}
                  fontSize={9}
                  isReserved={!!reservedInfo}
                  reservedInfo={reservedInfo}
                  onClick={handleBoothSelect}
                  activeTooltipId={activeTooltipId}
                  setActiveTooltipId={setActiveTooltipId}
                />
              );
            })}

            {/* Official Sponsorship - above Regional */}
            {(() => {
              const reservedInfo = getReservedInfo(3);
              return (
                <Booth
                  boothId="AFRICA-BOT-OFFICIAL"
                  boothType="official"
                  boothNo={3}
                  size="3 x 4"
                  x={speakerHall.x + speakerHall.width + 1 + speakerSideBoothWidth + 28 + 5 * 60 + 8 + 2 * 100}
                  y={topRowY + 74 + 100 + 8 + 60 + 71 - 130 - 8 - 130 - 8}
                  width={75}
                  height={130}
                  color={colors.official}
                  title={"Official\nSponsorship"}
                  textColor="#ffffff"
                  fontSize={9}
                  isReserved={!!reservedInfo}
                  reservedInfo={reservedInfo}
                  onClick={handleBoothSelect}
                  activeTooltipId={activeTooltipId}
                  setActiveTooltipId={setActiveTooltipId}
                />
              );
            })()}

            {/* Regional Sponsorship - above Title */}
            {(() => {
              const reservedInfo = getReservedInfo(2);
              return (
                <Booth
                  boothId="AFRICA-BOT-REGIONAL"
                  boothType="regional"
                  boothNo={2}
                  size="5 x 3"
                  x={speakerHall.x + speakerHall.width + 1 + speakerSideBoothWidth + 28 + 5 * 60 + 8 + 2 * 100}
                  y={topRowY + 90 + 100 + 8 + 60 + 71 - 130 - 8}
                  width={75}
                  height={130}
                  color={colors.regional}
                  title={"Regional\nSponsorship"}
                  textColor="#1a1a1a"
                  fontSize={9}
                  isReserved={!!reservedInfo}
                  reservedInfo={reservedInfo}
                  onClick={handleBoothSelect}
                  activeTooltipId={activeTooltipId}
                  setActiveTooltipId={setActiveTooltipId}
                />
              );
            })()}

            {/* Title Sponsorship - sticky next to Exclusive, taller */}
            {(() => {
              const reservedInfo = getReservedInfo(1);
              return (
                <Booth
                  boothId="AFRICA-BOT-TITLE"
                  boothType="title"
                  boothNo={1}
                  size="5 x 3"
                  x={speakerHall.x + speakerHall.width + 1 + speakerSideBoothWidth + 28 + 5 * 60 + 8 + 2 * 100}
                  y={topRowY + 104 + 100 + 8 + 60 + 71}
                  width={75}
                  height={130}
                  color={colors.title}
                  title={"Title\nSponsorship"}
                  textColor="#ffffff"
                  fontSize={9}
                  isReserved={!!reservedInfo}
                  reservedInfo={reservedInfo}
                  onClick={handleBoothSelect}
                  activeTooltipId={activeTooltipId}
                  setActiveTooltipId={setActiveTooltipId}
                />
              );
            })()}

            {/* Left LED Wall */}
            <rect
              x={speakerHall.x + speakerHall.width + 1 + speakerSideBoothWidth + 55 - 80}
              y={topRowY + 96 + 100 + 8 + 60 + 100 + 40 + 70}
              width={80} height={14} rx={2} fill={colors.ledWall}
            />
            <text
              x={speakerHall.x + speakerHall.width + 1 + speakerSideBoothWidth + 55 - 40}
              y={topRowY + 99 + 100 + 8 + 60 + 100 + 40 + 70 + 7}
              textAnchor="middle" dominantBaseline="middle"
              fontSize="6" fill="#fff" fontWeight="700"
            >LED Exposure Wall</text>

            {/* Right LED Wall */}
            <rect
              x={speakerHall.x + speakerHall.width + 1 + speakerSideBoothWidth + 0 + 5.3 * 60}
              y={topRowY + 94 + 100 + 8 + 60 + 100 + 40 + 70}
              width={80} height={14} rx={2} fill={colors.ledWall}
            />
            <text
              x={speakerHall.x + speakerHall.width + 1 + speakerSideBoothWidth + 0 + 5.3 * 60 + 40}
              y={topRowY + 94 + 100 + 8 + 60 + 100 + 40 + 70 + 7}
              textAnchor="middle" dominantBaseline="middle"
              fontSize="6" fill="#fff" fontWeight="700"
            >LED Exposure Wall</text>

            {/* Vertical LED Wall - left of digital kiosks */}
            <rect
              x={startX + 27 - 18}
              y={topRowY + 50}
              width={14} height={digitalBoothHeight}
              rx={2} fill={colors.ledWall}
            />
            <text
              x={startX + 27 - 18 + 7}
              y={topRowY + 50 + digitalBoothHeight / 2}
              textAnchor="middle" dominantBaseline="middle"
              fontSize="6" fill="#fff" fontWeight="700"
              transform={`rotate(-90,${startX + 27 - 18 + 7},${topRowY + 50 + digitalBoothHeight / 2})`}
            >LED Exposure Wall</text>

            {/* Horizontal LED Wall - right of top-right row last Gold */}
            <rect
              x={startX + 784}
              y={topRowY + topRowHeight - 56}
              width={80} height={14}
              rx={2} fill={colors.ledWall}
            />
            <text
              x={startX + 784 + 40}
              y={topRowY + topRowHeight - 49}
              textAnchor="middle" dominantBaseline="middle"
              fontSize="6" fill="#fff" fontWeight="700"
            >LED Exposure Wall</text>

            {/* LED Wall Screens */}

            {/* Trading zone tooltip - rendered last so it paints above everything */}
            {showTradingTooltip && (
              <g pointerEvents="none">
                <rect
                  x={tradingZone.x + tradingZone.width / 2 - tradingZone.tooltipWidth / 2}
                  y={tradingZone.y - tradingZone.tooltipHeight - 14}
                  width={tradingZone.tooltipWidth}
                  height={tradingZone.tooltipHeight}
                  rx={8}
                  fill="#fff"
                  stroke="#e0e0e0"
                  filter="drop-shadow(0 4px 6px rgba(0,0,0,0.15))"
                />
                <polygon
                  points={`${tradingZone.x + tradingZone.width / 2 - 8},${tradingZone.y - 14} ${tradingZone.x + tradingZone.width / 2 + 8},${tradingZone.y - 14} ${tradingZone.x + tradingZone.width / 2},${tradingZone.y - 6}`}
                  fill="#fff"
                />
                <text x={tradingZone.x + tradingZone.width / 2} y={tradingZone.y - tradingZone.tooltipHeight + 18} textAnchor="middle" fontSize="12" fontWeight="700" fill="#111827">Trading Arena</text>
                <text x={tradingZone.x + tradingZone.width / 2} y={tradingZone.y - tradingZone.tooltipHeight + 36} textAnchor="middle" fontSize="11" fill="#666">Size: 10 x 12</text>
              </g>
            )}

          </svg>
        </div>
        {/* Footer */}
        <div className="text-center mt-4 text-slate-400 text-sm">
          <p>Hover over any booth for details and to reserve • © PROFX EXPO AFRICA 2026</p>
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

            // SweetAlert confirmation
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




