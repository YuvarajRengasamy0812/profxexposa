import React, { useEffect, useState } from "react";
import { Users } from "lucide-react";
import Booth from "./Booth";
import FloorBorder from "./FloorBorder";
import { createPortal } from "react-dom";
import BoothModal from "./BoothModal";
import axios from "axios";
import { buildAssetUrl } from "../utils/assetUrl";

const FloorPlanAfrica = () => {
  const [selectedBooth, setSelectedBooth] = React.useState(null);
  const [reservedBooths, setReservedBooths] = useState([]);
  const [showTradingTooltip, setShowTradingTooltip] = useState(false);
  const [activeTooltipId, setActiveTooltipId] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/floorplanList`)
      .then((res) => {
        const tickets = res.data.details.tickets.data;

        const reserved = tickets
          .filter((t) => t.boothno)
          .map((t) => ({
            boothNo: String(t.boothno),
            companyName: t.company || "",
            // ✅ Set default placeholder if logo is missing
            logo: t.company_logo || "assets/images/booth-reserved/v-process.png",
            url: t.company_url || "#",
            title: t.boothtitle || "Reserved Booth",
            size: t.boothsize || "",
            // ✅ Optional: you can track approval status
            approved: !!t.company_logo // if logo exists, assume approved
          }));

        setReservedBooths(reserved);
      })
      .catch((err) => {
        console.error("Error fetching floorplan:", err);
      });
  }, []);

  const getReservedInfo = (boothNo) =>
    reservedBooths.find((b) => b.boothNo === String(boothNo));



  // Layout constants based on grid
  const startX = 50;
  const startY = 50;
  const tradingZone = {
    x: startX + 160,
    y: startY + 215,
    width: 320,
    height: 360,
    size: 165,
    circleRadius: 52,
    tooltipWidth: 180,
    tooltipHeight: 58,
  };
  const tradingStageX = tradingZone.x + (tradingZone.width - tradingZone.size) / 2;
  const tradingStageY = tradingZone.y + 50;
  const tradingCornerInset = 10;
  const tradingCornerLong = 42;
  const tradingCornerShort = 14;
  const speakerAudience = {
    startX: startX + 888,
    startY: startY + 245,
    cols: 8,
    rows: 14,
    seatWidth: 18,
    seatHeight: 12,
    seatGapX: 20,
    seatGapY: 21,
    centerGap: 18,
    userSize: 8,
  };

  // Colors matching the reference PDF
  const colors = {
    podcast: "#e74c3c",       // Bright red
    title: "#f39c12",         // Bright amber/orange
    regional: "#27ae60",      // Bright green
    premium: "#ff5845",       // Hot pink
    official: "#8e44ad",      // Bright purple
    exclusive: "#c39bd3",     // Light lavender
    diamond: "#5dade2",       // Bright sky blue
    gold: "#f4d03f",          // Bright gold/yellow
    silver: "#aab7b8",        // Silver gray
    speakerHall: "#a855b7",   // Purple/magenta
    networking: "#5d61c8",    // Dark blue/navy
    backdrop: "#d4d8dc87",    // Light gray
    ledWall: "#e74c3c"        // Red
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
              x={0}
              y={0}
              width={1220}
              height={634}
            />

            {/* ===== TOP ROW ===== */}

            {/* Podcast ProFX Media - top-left */}
            <Booth
              boothId="PODCAST-01"
              boothType="podcast"
              title={"Podcast\nProFX Media"}
              size="3 x 3"
              x={startX + 28}
              y={startY + 40}
              width={82}
              height={82}
              fontSize={10}
              color={colors.podcast}
              textColor="#ffffff"
              onClick={setSelectedBooth}
              activeTooltipId={activeTooltipId}
              setActiveTooltipId={setActiveTooltipId}
            />


            {/* Silver Booths Row - 8 booths */}
            {Array.from({ length: 8 }).map((_, i) => {
              const number = 18 - i;
              const id = `SILVER-${number}`;
              const reservedInfo = getReservedInfo(number);
              return (
                <Booth
                  key={id}
                  boothId={id}
                  boothType="silver"
                  boothNo={number}
                  size="3 x 3"
                  x={startX + 111 + i * 82}
                  y={startY + 40}
                  width={82}
                  height={82}
                  color={colors.silver}
                  title={"Silver\nBooth"}
                  fontSize={12}
                  isReserved={!!reservedInfo}
                  reservedInfo={reservedInfo}
                  onClick={setSelectedBooth}
                  activeTooltipId={activeTooltipId}
                  setActiveTooltipId={setActiveTooltipId}
                />
              );
            })}

            {/* Gold Sponsor */}
            <Booth
              boothId="GOLD-10"
              boothType="gold"
              boothNo="10"
              size="3 x 3"
              x={startX + 767}
              y={startY + 40}
              width={82}
              height={82}
              color={colors.gold}
              title={"Gold\nSponsor"}
              fontSize={14}
              isReserved={!!getReservedInfo("2")}
              reservedInfo={getReservedInfo("2")}
              onClick={setSelectedBooth}
              activeTooltipId={activeTooltipId}
              setActiveTooltipId={setActiveTooltipId}
            /* 🔒 always reserved */

            />

            {/* Gold + Silver vertical stack */}
            {[
              {
                boothId: "GOLD-19",
                boothType: "gold",
                boothNo: 19,
                title: "Gold\nBooth",
                color: colors.gold,
              },
              {
                boothId: "SILVER-20",
                boothType: "silver",
                boothNo: 20,
                title: "Silver\nBooth",
                color: colors.silver,
              },
              {
                boothId: "SILVER-21",
                boothType: "silver",
                boothNo: 21,
                title: "Silver\nBooth",
                color: colors.silver,
              },
              {
                boothId: "SILVER-22",
                boothType: "silver",
                boothNo: 22,
                title: "Silver\nBooth",
                color: colors.silver,
              },
              {
                boothId: "SILVER-23",
                boothType: "silver",
                boothNo: 23,
                title: "Silver\nBooth",
                color: colors.silver,
              },
              {
                boothId: "GOLD-24",
                boothType: "gold",
                boothNo: 24,
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
                  x={startX + 28}
                  y={startY + 200 + i * 82}
                  width={82}
                  height={82}
                  color={booth.color}
                  title={booth.title}
                  fontSize={12}
                  isReserved={!!reservedInfo}
                  reservedInfo={reservedInfo}
                  onClick={setSelectedBooth}
                  activeTooltipId={activeTooltipId}
                  setActiveTooltipId={setActiveTooltipId}
                />
              );
            })}


            {/* ===== SECOND SECTION ===== */}

            {/* Sponsorship blocks based on original layout */}
            {[
              {
                boothId: "PREMIUM-9",
                boothType: "premium",
                boothNo: 9,
                title: "Premium\nSponsorship",
                color: colors.premium,
                x: startX + 700 - 140,
                y: startY + 180,
              },
              {
                boothId: "DIAMOND-8",
                boothType: "diamond",
                boothNo: 8,
                title: "Diamond\nSponsorship",
                color: colors.diamond,
                x: startX + 885 - 140,
                y: startY + 180,
              },
              {
                boothId: "REGIONAL-7",
                boothType: "regional",
                boothNo: 7,
                title: "Regional\nSponsorship",
                color: colors.regional,
                x: startX + 700 - 140,
                y: startY + 333,
              },
              {
                boothId: "DIAMOND-5",
                boothType: "diamond",
                boothNo: 5,
                title: "Diamond\nSponsorship",
                color: colors.diamond,
                x: startX + 885 - 140,
                y: startY + 333,
              },
              {
                boothId: "TITLE-4",
                boothType: "title",
                boothNo: 4,
                title: "Title\nSponsorship",
                color: colors.title,
                x: startX + 700 - 140,
                y: startY + 415,
              },
              {
                boothId: "DIAMOND-3",
                boothType: "diamond",
                boothNo: 3,
                title: "Diamond\nSponsorship",
                color: colors.diamond,
                x: startX + 885 - 140,
                y: startY + 415,
              },
              {
                boothId: "EXCLUSIVE-01",
                boothType: "exclusive",
                boothNo: 2,
                title: "Exclusive\nSponsorship",
                color: colors.exclusive,
                x: startX + 700 - 140,
                y: startY + 570,
              },
              {
                boothId: "OFFICIAL-1",
                boothType: "official",
                boothNo: 1,
                title: "Official\nSponsorship",
                color: colors.official,
                x: startX + 885 - 140,
                y: startY + 570,
              },
            ].map((booth) => {
              const reservedInfo = getReservedInfo(booth.boothNo);

              return (
                <Booth
                  key={booth.boothId}
                  boothId={booth.boothId}
                  boothType={booth.boothType}
                  boothNo={booth.boothNo}
                  size="3 x 4"
                  x={booth.x}
                  y={booth.y}
                  width={120}
                  height={80}
                  color={booth.color}
                  title={booth.title}
                  fontSize={14}
                  isReserved={!!reservedInfo}
                  reservedInfo={reservedInfo}
                  onClick={setSelectedBooth}
                  activeTooltipId={activeTooltipId}
                  setActiveTooltipId={setActiveTooltipId}
                />
              );
            })}


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

              {[
                {
                  x: tradingStageX + tradingCornerInset,
                  y: tradingStageY + tradingCornerInset,
                  horizontalX: tradingStageX + tradingCornerInset,
                  horizontalY: tradingStageY + tradingCornerInset,
                  verticalX: tradingStageX + tradingCornerInset,
                  verticalY: tradingStageY + tradingCornerInset
                },
                {
                  x: tradingStageX + tradingZone.size - tradingCornerInset - tradingCornerLong,
                  y: tradingStageY + tradingCornerInset,
                  horizontalX: tradingStageX + tradingZone.size - tradingCornerInset - tradingCornerLong,
                  horizontalY: tradingStageY + tradingCornerInset,
                  verticalX: tradingStageX + tradingZone.size - tradingCornerInset - tradingCornerShort,
                  verticalY: tradingStageY + tradingCornerInset
                },
                {
                  x: tradingStageX + tradingCornerInset,
                  y: tradingStageY + tradingZone.size - tradingCornerInset - tradingCornerShort,
                  horizontalX: tradingStageX + tradingCornerInset,
                  horizontalY: tradingStageY + tradingZone.size - tradingCornerInset - tradingCornerShort,
                  verticalX: tradingStageX + tradingCornerInset,
                  verticalY: tradingStageY + tradingZone.size - tradingCornerInset - tradingCornerLong
                },
                {
                  x: tradingStageX + tradingZone.size - tradingCornerInset - tradingCornerLong,
                  y: tradingStageY + tradingZone.size - tradingCornerInset - tradingCornerShort,
                  horizontalX: tradingStageX + tradingZone.size - tradingCornerInset - tradingCornerLong,
                  horizontalY: tradingStageY + tradingZone.size - tradingCornerInset - tradingCornerShort,
                  verticalX: tradingStageX + tradingZone.size - tradingCornerInset - tradingCornerShort,
                  verticalY: tradingStageY + tradingZone.size - tradingCornerInset - tradingCornerLong
                },
              ].map((corner, index) => (
                <g key={`trading-corner-${index}`}>
                  <rect
                    x={corner.horizontalX}
                    y={corner.horizontalY}
                    width={tradingCornerLong}
                    height={tradingCornerShort}
                    fill="#d6d8db"
                  />
                  <rect
                    x={corner.verticalX}
                    y={corner.verticalY}
                    width={tradingCornerShort}
                    height={tradingCornerLong}
                    fill="#d6d8db"
                  />
                </g>
              ))}

              <circle
                cx={tradingZone.x + tradingZone.width / 2}
                cy={tradingStageY + tradingZone.size / 2}
                r={tradingZone.circleRadius}
                fill="#b5b7ba"
              />

              <text
                x={tradingZone.x + tradingZone.width / 2}
                y={tradingZone.y + tradingZone.height - 62}
                textAnchor="middle"
                fontSize="16"
                fill="#1f2937"
                fontWeight="700"
              >
                Trading Contest Zone
              </text>

              <text
                x={tradingZone.x + tradingZone.width / 2}
                y={tradingZone.y + tradingZone.height - 28}
                textAnchor="middle"
                fontSize="15"
                fill="#1f2937"
                fontWeight="600"
              >
                14 x 15
              </text>

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
                    points={`
                      ${tradingZone.x + tradingZone.width / 2 - 8},${tradingZone.y - 14}
                      ${tradingZone.x + tradingZone.width / 2 + 8},${tradingZone.y - 14}
                      ${tradingZone.x + tradingZone.width / 2},${tradingZone.y - 6}
                    `}
                    fill="#fff"
                  />

                  <text
                    x={tradingZone.x + tradingZone.width / 2}
                    y={tradingZone.y - tradingZone.tooltipHeight + 8}
                    textAnchor="middle"
                    fontSize="12"
                    fontWeight="700"
                    fill="#111827"
                  >
                    Trading Contest Zone
                  </text>

                  <text
                    x={tradingZone.x + tradingZone.width / 2}
                    y={tradingZone.y - tradingZone.tooltipHeight + 28}
                    textAnchor="middle"
                    fontSize="11"
                    fill="#666"
                  >
                    Size: 14 x 15
                  </text>
                </g>
              )}
            </g>

            {/* Gold + Silver horizontal row */}
            {[
              {
                boothId: "GOLD-25",
                boothType: "gold",
                boothNo: 25,
                title: "Gold\nBooth",
                color: colors.gold,
              },
              {
                boothId: "SILVER-26",
                boothType: "silver",
                boothNo: 26,
                title: "Silver\nBooth",
                color: colors.silver,
              },
              {
                boothId: "SILVER-27",
                boothType: "silver",
                boothNo: 27,
                title: "Silver\nBooth",
                color: colors.silver,
              },
              {
                boothId: "GOLD-28",
                boothType: "gold",
                boothNo: 28,
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
                  x={startX + 180 + i * 82}
                  y={startY + 605}
                  width={82}
                  height={82}
                  color={booth.color}
                  title={booth.title}
                  fontSize={12}
                  isReserved={!!reservedInfo}
                  reservedInfo={reservedInfo}
                  onClick={setSelectedBooth}
                  activeTooltipId={activeTooltipId}
                  setActiveTooltipId={setActiveTooltipId}
                />
              );
            })}

            {/* ===== SPEAKER HALL ===== */}
            <g>
              {/* stages visualization */}
              <g
                transform={`
                    rotate(
                      -180
                      ${startX + 798 + 270 / 2}
                      ${startY + 790 + 80 / 2}
                    )
                  `}
              >

                {/* Stage Steps */}
                <rect
                  x={startX + 840}
                  y={startY + 1450 - 10}
                  width={70}
                  height={40}
                  rx={3}
                  fill="#6c7a89"
                />
                {/* Speaker Stage Container */}
                <rect
                  x={startX + 770}
                  y={startY + 1450}
                  width={220}
                  height={80}
                  rx={4}
                  fill="#6c7a89"
                />

                <text
                  x={startX + 880}
                  y={startY + 1488}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="13"
                  fill="#ffffff"
                  fontWeight="bold"
                  transform={`rotate(180, ${startX + 880}, ${startY + 1478})`}
                >
                  Speaker Stage
                </text>

                <text
                  x={startX + 880}
                  y={startY + 1530}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="10"
                  fill="rgba(255,255,255,0.8)"
                  transform={`rotate(180, ${startX + 880}, ${startY + 1492})`}
                >
                  8 x 4
                </text>

                {/* Left Screen */}
                <rect
                  x={startX + 784}
                  y={startY + 1480}
                  width={42}
                  height={44}
                  rx={3}
                  fill="#ff0000"
                />
                <text
                  x={startX + 805}
                  y={startY + 1494}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="7"
                  fill="#ffffff"
                  fontWeight="600"
                  transform={`rotate(180, ${startX + 805}, ${startY + 1494})`}
                >
                  Wing Led
                </text>
                <text
                  x={startX + 805}
                  y={startY + 1508}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="6"
                  fill="rgba(255,255,255,0.7)"
                  transform={`rotate(180, ${startX + 805}, ${startY + 1508})`}
                >
                  1.5 X 4
                </text>

                {/* Main Screen */}
                <rect
                  x={startX + 850}
                  y={startY + 1480}
                  width={60}
                  height={44}
                  rx={3}
                  fill="#ff0000"
                />
                <text
                  x={startX + 880}
                  y={startY + 1494}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="7"
                  fill="#ffffff"
                  fontWeight="600"
                  transform={`rotate(180, ${startX + 880}, ${startY + 1494})`}
                >
                  Main LED Screen
                </text>
                <text
                  x={startX + 880}
                  y={startY + 1508}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="6"
                  fill="rgba(255,255,255,0.7)"
                  transform={`rotate(180, ${startX + 880}, ${startY + 1508})`}
                >
                  4 x 4
                </text>

                {/* Right Screen */}
                <rect
                  x={startX + 934}
                  y={startY + 1480}
                  width={42}
                  height={44}
                  rx={3}
                  fill="#ff0000"
                />
                <text
                  x={startX + 955}
                  y={startY + 1494}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="7"
                  fill="#ffffff"
                  fontWeight="600"
                  transform={`rotate(180, ${startX + 955}, ${startY + 1494})`}
                >
                  Wing Led
                </text>
                <text
                  x={startX + 955}
                  y={startY + 1508}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="6"
                  fill="rgba(255,255,255,0.7)"
                  transform={`rotate(180, ${startX + 955}, ${startY + 1508})`}
                >
                  1.5 X 4
                </text>
              </g>

              {/* Seating rows visualization */}
              {[...Array(speakerAudience.rows)].map((_, row) =>
                [...Array(speakerAudience.cols)].map((_, col) => {
                  const seatX =
                    speakerAudience.startX +
                    col * speakerAudience.seatGapX +
                    (col >= speakerAudience.cols / 2 ? speakerAudience.centerGap : 0);
                  const seatY = speakerAudience.startY + row * speakerAudience.seatGapY;

                  return (
                    <React.Fragment key={`speaker-seat-${row}-${col}`}>
                      <rect
                        x={seatX}
                        y={seatY}
                        width={speakerAudience.seatWidth}
                        height={speakerAudience.seatHeight}
                        rx={3}
                        fill="rgba(255,255,255,0.1)"
                        stroke="rgba(255,255,255,0.14)"
                        strokeWidth="1"
                      />

                      <Users
                        x={seatX + (speakerAudience.seatWidth - speakerAudience.userSize) / 2}
                        y={seatY + (speakerAudience.seatHeight - speakerAudience.userSize) / 2}
                        size={speakerAudience.userSize}
                        color="#ffffff66"
                      />
                    </React.Fragment>
                  );
                })
              )}

            </g>



            {/* ===== NETWORKING LOUNGE ===== */}
            <Booth
              boothId="SPONSOR-NETWORK"
              boothType="networklounge"
              title={`Networking\nLounge`}
              subtitle="6 x 4"
              size="6 x 4"
              showBottomSize={false}
              x={startX + 892}
              y={startY + 555}
              width={170}
              height={150}
              color={colors.networking}
              textColor="#ffffff"
              fontSize={13}
              onClick={setSelectedBooth}
              activeTooltipId={activeTooltipId}
              setActiveTooltipId={setActiveTooltipId}
            />

            {/* LED Wall Screens */}
            
            {/* LED Exposure Wall - Top LEFT */}
            <g>
              {/* LED Wall Box */}
              <rect
                x={startX + 28}
                y={startY + 125}
                width={23}
                height={70}
                fill={colors.ledWall}
                rx={3}
              />

              {/* LED Exposure Wall text */}
              <text
                x={startX + 55}
                y={startY + 112}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="6"
                fill="#fff"
                fontWeight="600"
                transform={`rotate(-90, ${startX + 69.5}, ${startY + 145})`}
              >
                LED Exposure Wall
              </text>

              {/* Size text */}
              <text
                x={startX + 72}
                y={startY + 140}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="6"
                fill="rgba(255,255,255,0.9)"
                transform={`rotate(-90, ${startX + 69.5}, ${startY + 165})`}
              >
                2 x 3h
              </text>
            </g>

            
            {/* LED Exposure Wall near entrance */}
            <g>
              {/* LED Wall Box */}
              <rect
                x={startX + 842}
                y={startY + 499}
                width={23}
                height={70}
                fill={colors.ledWall}
                rx={3}
              />

              {/* LED Exposure Wall text */}
              <text
                x={startX - 320}
                y={startY + 925}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="6"
                fill="#fff"
                fontWeight="600"
                transform={`rotate(-90, ${startX + 69.5}, ${startY + 145})`}
              >
                LED Exposure Wall
              </text>

              {/* Size text */}
              <text
                x={startX - 299}
                y={startY + 955}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="6"
                fill="rgba(255,255,255,0.9)"
                transform={`rotate(-90, ${startX + 69.5}, ${startY + 165})`}
              >
                2 x 3h
              </text>
            </g>


            {/* LED Exposure Wall near Booth 5 */}
            <g>
              {/* LED Wall Box */}
              <rect
                x={startX + 842}
                y={startY + 262}
                width={23}
                height={70}
                fill={colors.ledWall}
                rx={3}
              />

              {/* LED Exposure Wall text */}
              <text
                x={startX - 320 + 236}
                y={startY + 925}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="6"
                fill="#fff"
                fontWeight="600"
                transform={`rotate(-90, ${startX + 69.5}, ${startY + 145})`}
              >
                LED Exposure Wall
              </text>

              {/* Size text */}
              <text
                x={startX - 299 + 236}
                y={startY + 955}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="6"
                fill="rgba(255,255,255,0.9)"
                transform={`rotate(-90, ${startX + 69.5}, ${startY + 165})`}
              >
                2 x 3h
              </text>
            </g>

            {/* ===== BOTTOM ACCESS / REGISTRATION ===== */}
            <g>
              <rect
                x={startX + 300}
                y={startY + 728}
                width={320}
                height={72}
                rx={4}
                fill="#3f2f9d"
              />
              <text
                x={startX + 460}
                y={startY + 765}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="22"
                fill="#ffffff"
                fontWeight="500"
              >
                Registration Area
              </text>

              <rect
                x={startX + 70}
                y={startY + 700}
                width={108}
                height={22}
                rx={3}
                fill="#8b7d67"
              />
              <text
                x={startX + 124}
                y={startY + 711}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="11"
                fill="#ffffff"
                fontWeight="700"
                letterSpacing="1.5"
              >
                ↓ EXIT ↓
              </text>

              <rect
                x={startX + 690}
                y={startY + 700}
                width={132}
                height={22}
                rx={3}
                fill="#8b7d67"
              />
              <text
                x={startX + 756}
                y={startY + 711}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="11"
                fill="#ffffff"
                fontWeight="700"
                letterSpacing="1"
              >
                ↑ ENTRANCE ↑
              </text>
            </g>


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
            // Mark booth as reserved
            setReservedBooths(prev => ({
              ...prev,
              [selectedBooth.boothId]: true
            }));

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
