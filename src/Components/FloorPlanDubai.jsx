import React, { useEffect, useState } from "react";
import { Users } from "lucide-react";
import Booth from "./Booth";
import FloorBorder from "./FloorBorder";
import { createPortal } from "react-dom";
import BoothModal from "./BoothModal";
import axios from "axios";

const FloorPlanDubai = () => {
  const [selectedBooth, setSelectedBooth] = React.useState(null);
  const [reservedBooths, setReservedBooths] = useState([]);


  const [booths, setBooths] = useState([]);

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
            logo: t.company_logo || `${process.env.PUBLIC_URL}/assets/images/booth-reserved/v-process.png`,
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
  // Arrow constants
  const dx = -95;
  const dy = 18;
  const up = 60;
  // Speaker Hall
  const hallX = startX + 530;
  const hallY = startY + 475;
  const hallW = 550;
  const hallH = 402;

  // Colors matching the reference PDF
  const colors = {
    official: "#2ecc71",      // Green
    exclusive: "#9b59b6",     // Purple  
    diamond: "#6fd3e7",       // Cyan/Light blue
    gold: "#f5d98e",          // Light gold/beige
    silver: "#d4d8dc",        // Light gray
    standard: "#d97556",      // Orange/coral
    speakerHall: "#a855b7",   // Purple/magenta
    networking: "#2c2f7c",    // Dark blue/navy
    cafe: "#8b5a2b",          // Brown
    cocktail: "#6c7bd9",      // Blue
    photoWall: "#6c7a89",     // Gray
    photoWallStage: "#F1F3F3",     // Gray
    backdrop: "#d4d8dc87",      // Light gray
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
              style={{
                position: "absolute",
                top: startY,
                left: startX,
                width: 80,
                height: 80,
              }}
            />


            {/* ===== ENTRANCE - Top Left ===== */}
            <g>
              <text x={startX - 10} y={startY + 20} fontSize="9" fill="#333" fontWeight="600" transform={`rotate(-90, ${startX + 75}, ${startY + 55})`}>
                ENTRANCE
              </text>

              {/* Top arrow */}
              <path
                d={`
                  M ${startX + 100 + dx} ${startY + 45 + up}
                  L ${startX + 120 + dx} ${startY + 45 + up}
                  M ${startX + 115 + dx} ${startY + 40 + up}
                  L ${startX + 120 + dx} ${startY + 45 + up}
                  L ${startX + 115 + dx} ${startY + 50 + up}
                `}
                stroke="#555"
                strokeWidth="1.5"
                fill="none"
              />

              {/* Bottom arrow */}
              <path
                d={`
                  M ${startX + 100 + dx} ${startY + 45 + dy + up}
                  L ${startX + 120 + dx} ${startY + 45 + dy + up}
                  M ${startX + 115 + dx} ${startY + 40 + dy + up}
                  L ${startX + 120 + dx} ${startY + 45 + dy + up}
                  L ${startX + 115 + dx} ${startY + 50 + dy + up}
                `}
                stroke="#555"
                strokeWidth="1.5"
                fill="none"
              />
            </g>

            {/* ===== TOP ROW ===== */}

            {/* Official Sponsor */}
            <Booth
              boothId="OFFICIAL-01"
              boothType="official"
              boothNo="1"
              size="4 x 3"
              title={"Official\nSponsor"}
              x={startX + 180}
              y={startY + 50}
              width={120}
              height={90}
              fontSize={14}
              color={colors.official}
              isReserved={!!getReservedInfo("1")}
              reservedInfo={getReservedInfo("1")}
              onClick={setSelectedBooth}
            />






            {/* Gold Booths Row - 2 booths */}
            {Array.from({ length: 2 }).map((_, i) => {
              const number = i + 3; // boothNo = 3, 4
              const id = `GOLD-${number}`;

              const reservedInfo = getReservedInfo(number);

              return (
                <Booth
                  key={id}
                  boothId={id}
                  boothType="gold"
                  boothNo={number}
                  size="4 x 3"
                  x={startX + 355 + i * 120}
                  y={startY + 52}
                  width={120}
                  height={72}
                  color={colors.gold}
                  title={"Gold\nBooth"}
                  fontSize={12}

                  /* ✅ CORRECT RESERVE CHECK */
                  isReserved={!!reservedInfo}
                  reservedInfo={reservedInfo}

                  onClick={setSelectedBooth}
                />
              );
            })}


            {/* Silver Booths Row - 5 booths */}
            {Array.from({ length: 5 }).map((_, i) => {
              const number = i + 11;
              const id = `SILVER-${number}`;
              const reservedInfo = getReservedInfo(number);
              return (
                <Booth
                  key={id}
                  boothId={id}
                  boothType="silver"
                  boothNo={number}
                  size="3 x 2"
                  x={startX + 650 + i * 78}
                  y={startY + 52}
                  width={78}
                  height={72}
                  color={colors.silver}
                  title={"Silver\nBooth"}
                  fontSize={12}
                  isReserved={!!reservedInfo}
                  reservedInfo={reservedInfo}

                  onClick={setSelectedBooth}
                />
              );
            })}

            {/* LED Exposure Wall - Top Right */}
            <g>
              {/* LED Wall Box */}
              <rect
                x={startX + 1067}
                y={startY + 100}
                width={23}
                height={70}
                fill={colors.ledWall}
                rx={3}
              />

              {/* LED Exposure Wall text */}
              <text
                x={startX + 1015}
                y={startY + 54}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="6"
                fill="#fff"
                fontWeight="600"
                transform={`rotate(-90, ${startX + 1085}, ${startY + 65})`}
              >
                LED Exposure Wall
              </text>

              {/* Size text */}
              <text
                x={startX + 1035}
                y={startY + 84}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="7"
                fill="rgba(255,255,255,0.9)"
                transform={`rotate(-90, ${startX + 1085}, ${startY + 85})`}
              >
                2.5w × 3h
              </text>
            </g>

            {/* ===== SECOND SECTION ===== */}

            {/* Exclusive Sponsor */}
            <Booth
              boothId="EXCLUSIVE-01"
              boothType="exclusive"
              boothNo="2"
              size="4 x 3"
              x={startX + 180}
              y={startY + 180}
              width={120}
              height={90}
              color={colors.exclusive}
              title={"Exclusive\nSponsor"}
              fontSize={14}
              isReserved={!!getReservedInfo("2")}
              reservedInfo={getReservedInfo("2")}
              onClick={setSelectedBooth}
            /* 🔒 always reserved */

            />


            {/* Photo Wall - Diagonal */}
            <g>
              {/* Photo Wall rectangle */}
              <rect
                x={startX + 0}
                y={startY + 215}
                width={100}
                height={25}
                fill={colors.photoWall}
                rx={4}
                transform={`rotate(45, ${startX + 25}, ${startY + 420})`} // pivot at rect center
              />
              <rect
                x={startX + 10}
                y={startY + 240}
                width={80}
                height={25}
                fill={colors.photoWallStage}       // fill color
                rx={4}                             // rounded corners
                stroke="#000"                      // border color
                strokeWidth={1}                    // border thickness
                transform={`rotate(45, ${startX + 25}, ${startY + 420})`} // pivot at rect center
              />


              {/* Photo Wall text */}
              <text
                x={startX + 48}            // center of rect before rotation
                y={startY + 226}           // center of rect before rotation
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#ffffff"
                fontSize="10"
                fontWeight="600"
                transform={`rotate(45, ${startX + 25}, ${startY + 420})`}
              >
                Photo Wall
              </text>
            </g>

            {/* Diamond Sponsors - 2 horizontal */}
            {Array.from({ length: 2 }).map((_, i) => {
              const num = i + 5; // 5, 6
              const id = `DIAMOND-${num}`;
              const isDiamond5 = id === "DIAMOND-5";
              const reservedInfo = getReservedInfo(num);
              return (
                <Booth
                  key={id}
                  boothId={id}
                  boothType="diamond"
                  boothNo={num}
                  size="4 x 3"
                  x={startX + 355 + i * 120}
                  y={startY + 180}
                  width={120}
                  height={95}
                  color={colors.diamond}
                  title={"Diamond\nBooth"}
                  fontSize={14}

                  isReserved={!!reservedInfo}
                  reservedInfo={reservedInfo}
                  onClick={setSelectedBooth}
                />
              );
            })}


            {/* Silver Booths - 2x2 grid (4 booths) */}
            {[0, 1, 2, 3].map((i) => {
              const boothNumbers = [16, 17, 18, 19];
              const num = boothNumbers[i];
              const id = `SILVER-${num}`;
              const reservedInfo = getReservedInfo(num);
              return (
                <Booth
                  key={id}
                  boothId={id}
                  boothType="silver"
                  boothNo={num}
                  size="3 x 2"
                  x={startX + 650 + (i % 2) * 63}
                  y={startY + 180 + Math.floor(i / 2) * 82}
                  width={63}
                  height={82}
                  color={colors.silver}
                  title={"Silver\nBooth"}
                  fontSize={12}
                  isReserved={!!reservedInfo}
                  reservedInfo={reservedInfo}
                  onClick={setSelectedBooth}
                />
              );
            })}


            {/* Standard Booths - Left 6 */}
            {Array.from({ length: 6 }).map((_, i) => {
              const boothNumbers = [20, 23, 21, 24, 22, 25];
              const num = boothNumbers[i];
              const col = i % 2;              // 2 columns
              const row = Math.floor(i / 2);  // 3 rows
              const id = `STANDARD-${num}`;
              const reservedInfo = getReservedInfo(num);
              return (
                <Booth
                  key={id}
                  boothId={id}
                  boothType="standard"
                  boothNo={num}
                  size="2 x 2"
                  x={startX + 820 + col * 62}
                  y={startY + 180 + row * 55}
                  width={62}
                  height={55}
                  color={colors.standard}
                  title={`Standard\nBooth`}
                  fontSize={10}
                  isReserved={!!reservedInfo}
                  reservedInfo={reservedInfo}
                  onClick={setSelectedBooth}
                />
              );
            })}

            {/* ===== NETWORKING LOUNGE ===== */}
            <Booth
              boothId="SPONSOR-NETWORK"
              boothType="networklounge"
              title={`Networking\nLounge`}
              subtitle="6 x 4"
              size="6 x 4"
              x={startX + 978}
              y={startY + 175}
              width={110}
              height={170}
              color={colors.networking}
              textColor="#ffffff"
              fontSize={13}
              onClick={setSelectedBooth}
            />


            {/* LED Exposure Wall - Second Right */}
            <g>
              {/* LED Wall Box */}
              <rect
                x={startX + 1067}
                y={startY + 350}
                width={23}
                height={70}
                fill={colors.ledWall}
                rx={3}
              />

              {/* LED Exposure Wall text */}
              <text
                x={startX + 1005}
                y={startY + 293}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="6"
                fill="#fff"
                fontWeight="600"
                transform={`rotate(-90, ${startX + 1085}, ${startY + 305})`}
              >
                LED Exposure Wall
              </text>

              {/* Size text */}
              <text
                x={startX + 1025}
                y={startY + 323}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="7"
                fill="rgba(255,255,255,0.9)"
                transform={`rotate(-90, ${startX + 1085}, ${startY + 325})`}
              >
                2.5w × 3h
              </text>
            </g>

            {/* ===== GOLD + SILVER ROW ===== */}



            {/* Gold Booths - 2x2 grid (4 booths) */}
            {[0, 1, 2, 3].map((i) => {
              const boothNumbers = [7, 8, 9, 10];
              const num = boothNumbers[i];
              const id = `GOLD-${num}`;
              const reservedInfo = getReservedInfo(num);


              return (
                <Booth
                  key={id}
                  boothId={id}
                  boothType="gold"
                  boothNo={num}
                  size="4 x 3"
                  x={startX + 355 + (i % 2) * 120}
                  y={startY + 310 + Math.floor(i / 2) * 65}
                  width={120}
                  height={65}
                  color={colors.gold}
                  title={"Gold\nBooth"}
                  fontSize={12}

                  /* 🔒 lock only booth 8 */
                  isReserved={!!reservedInfo}
                  reservedInfo={reservedInfo}
                  onClick={setSelectedBooth}
                />
              );
            })}



            {/* Silver Booths after Diamond - 5 horizontal */}
            {Array.from({ length: 5 }).map((_, i) => {
              const boothNumbers = [26, 27, 28, 29, 30];
              const num = boothNumbers[i];
              const id = `SILVER-${num}`;
              const reservedInfo = getReservedInfo(num);

              return (
                <Booth
                  key={id}
                  boothId={id}
                  boothType="silver"
                  boothNo={num}
                  size="3 x 2"
                  x={startX + 650 + i * 82}
                  y={startY + 410}
                  width={82}
                  height={60}
                  color={colors.silver}
                  title={"Silver\nBooth"}
                  fontSize={11}

                  /* 🔒 lock only booth 8 */
                  isReserved={!!reservedInfo}
                  reservedInfo={reservedInfo}
                  onClick={setSelectedBooth}
                />
              );
            })}



            {/* ===== LEFT SIDE - Cafe, Cocktail, People Icons ===== */}

            {/* Cafe */}
            <Booth
              boothId="SPONSOR-CAFE"
              boothType="cafe"
              title="Café"
              size=""
              x={startX - 15}
              y={startY + 350}
              width={70}
              height={90}
              color={colors.cafe}
              textColor="#ffffff"
              fontSize={13}
              onClick={setSelectedBooth}
            />


            {/* Cafe Tables - Only 2 */}
            {[0, 1].map((i) => (
              <g key={`cafe-table-${i}`}>
                <circle
                  cx={startX + 160 + i * 40}  // horizontal spacing
                  cy={startY + 400}           // same row
                  r={10}
                  fill="#d4a574"
                  stroke="#8b5a2b"
                  strokeWidth={1}
                />
                <circle
                  cx={startX + 160 + i * 40}
                  cy={startY + 400}
                  r={4}
                  fill="#8b4513"
                />
              </g>
            ))}


            {/* Cocktail Lounge */}
            <Booth
              boothId="SPONSOR-COCKTAIL"
              boothType="cocktail"
              title={`Cocktail\nLounge`}
              size=""
              x={startX - 15}
              y={startY + 460}
              width={70}
              height={90}
              color={colors.cocktail}
              textColor="#ffffff"
              fontSize={11}
              onClick={setSelectedBooth}
            />



            {/* Cocktail Lounge Tables */}
            {[0, 1].map((row) => (
              <g key={`cocktail-row-${row}`}>
                {[0, 1].map((col) => (
                  <g key={`cocktail-table-${row}-${col}`}>
                    <circle
                      cx={startX + 160 + col * 40}
                      cy={startY + 600 + row * 40}
                      r={10}
                      fill="#7986cb"
                      stroke="#5b6bc0"
                      strokeWidth="1"
                    />
                    <circle cx={startX + 160 + col * 40} cy={startY + 600 + row * 40} r={4} fill="#3f51b5" />
                  </g>
                ))}
              </g>
            ))}

            {/* ===== EXIT ===== */}
            <g>
              {/* Left-pointing arrows stacked next to EXIT */}
              {/* arrows in front of EXIT — spaced correctly */}
              {[0, 10].map((offset, i) => (
                <path
                  key={i}
                  d={`
                    M ${startX + 315 - 95 - offset} ${startY + 235 + 150}
                    L ${startX + 315 - 95 - offset} ${startY + 210 + 150}

                    M ${startX + 315 - 95 - offset} ${startY + 210 + 150}
                    L ${startX + 310 - 95 - offset} ${startY + 215 + 150}

                    M ${startX + 315 - 95 - offset} ${startY + 210 + 150}
                    L ${startX + 320 - 95 - offset} ${startY + 215 + 150}
                  `}
                  stroke="#555"
                  strokeWidth="1.5"
                  fill="none"
                  transform={`rotate(-90, ${startX + 320}, ${startY + 428})`}
                />
              ))}


              <text x={startX + 228} y={startY + 400} fontSize="9" fill="#333" fontWeight="600" transform={`rotate(-90, ${startX + 330}, ${startY + 440})`}>
                EXIT
              </text>
            </g>



            {/* ===== SPEAKER HALL ===== */}
            <g>
              <path
                d={`
                  M ${hallX} ${hallY}
                  H ${hallX + hallW}
                  V ${hallY + hallH}
                  H ${hallX + 270}
                  L ${hallX + 120} ${hallY + hallH - 140}
                  H ${hallX + 20}
                  V ${hallY}
                  H ${hallX}
                  Z
                `}
                fill={colors.speakerHall}
              />



              {/* Speaker Hall Title */}
              <text
                x={startX + 810}
                y={startY + 620}
                textAnchor="middle"
                fontSize="26"
                fill="#fff"
                fontWeight="bold"
                fontFamily="Inter, system-ui, sans-serif"
              >
                Speaker Hall
              </text>

              <text
                x={startX + 810}
                y={startY + 650}
                textAnchor="middle"
                fontSize="18"
                fill="rgba(255,255,255,0.9)"
                fontFamily="Inter, system-ui, sans-serif"
              >
                16 × 16
              </text>


              {/* Seating rows visualization */}

              {/* users */}
              {[0, 1, 2, 3, 4, 5, 6].map((row) =>
                [0, 1, 2, 3, 4].map((col) => {
                  const seatWidth = 40;
                  const seatHeight = 20;
                  const userSize = 16;

                  const isCenterRow = row === 3; // 🔹 4th row

                  const seatX = startX + 610 + col * 70;
                  const seatY = startY + 510 + row * 32;

                  return (
                    <React.Fragment key={`left-${row}-${col}`}>
                      {/* Seat (always visible) */}
                      <rect
                        x={seatX}
                        y={seatY}
                        width={seatWidth}
                        height={seatHeight}
                        rx={3}
                        fill="rgba(255,255,255,0.06)"
                      />

                      {/* User icon (hidden ONLY in center row) */}
                      {!isCenterRow && (
                        <Users
                          x={seatX + (seatWidth - userSize) / 2}
                          y={seatY + (seatHeight - userSize) / 2}
                          size={userSize}
                          color="#ffffff6b"
                          transform={`
                            rotate(
                              90
                              ${seatX + seatWidth / 2}
                              ${seatY + seatHeight / 2}
                            )
                          `}
                        />
                      )}
                    </React.Fragment>
                  );
                })
              )}

              {/* next users */}
              {[0, 1, 2, 3].map((row) =>
                [0, 1, 2].map((col) => {
                  const seatWidth = 40;
                  const seatHeight = 20;
                  const userSize = 16;

                  const seatX = startX + 780 + col * 70;
                  const seatY = startY + 740 + row * 32;

                  return (
                    <React.Fragment key={`left-${row}-${col}`}>
                      {/* Seat */}
                      <rect
                        x={seatX}
                        y={seatY}
                        width={seatWidth}
                        height={seatHeight}
                        rx={3}
                        fill="rgba(255,255,255,0.06)"
                      />

                      {/* User icon (always visible) */}
                      <Users
                        x={seatX + (seatWidth - userSize) / 2}
                        y={seatY + (seatHeight - userSize) / 2}
                        size={userSize}
                        color="#ffffff6b"
                        transform={`
                          rotate(
                            90
                            ${seatX + seatWidth / 2}
                            ${seatY + seatHeight / 2}
                          )
                        `}
                      />
                    </React.Fragment>
                  );
                })
              )}


              {/* stages visualization */}
              <g
                transform={`
                    rotate(
                      -90
                      ${startX + 798 + 270 / 2}
                      ${startY + 790 + 80 / 2}
                    )
                  `}
              >

                <rect
                  x={startX + 850 + 45 + 152}
                  y={startY + 928 - 50}
                  width={70}
                  height={40}
                  rx={3}
                  fill="#6c7a89"
                />
                {/* Speaker Stage Container */}
                <rect
                  x={startX + 950}
                  y={startY + 890}
                  width={290}
                  height={80}
                  rx={4}
                  fill="#6c7a89"
                />

                <text
                  x={startX + 1082}
                  y={startY + 910}
                  textAnchor="middle"
                  fontSize="13"
                  fill="#ffffff"
                  fontWeight="bold"
                >
                  Speaker Stage
                </text>

                <text
                  x={startX + 1082}
                  y={startY + 922}
                  textAnchor="middle"
                  fontSize="10"
                  fill="rgba(255,255,255,0.8)"
                >
                  9 x 3
                </text>

                {/* Left Screen */}
                <rect
                  x={startX + 765 + 45 + 152}
                  y={startY + 928 - 2}
                  width={70}
                  height={40}
                  rx={3}
                  fill="#1a1a3e"
                />
                <text
                  x={startX + 800 + 45 + 152}
                  y={startY + 944 - 2}
                  textAnchor="middle"
                  fontSize="7"
                  fill="#ffffff"
                  fontWeight="600"
                >
                  Side Screen
                </text>
                <text
                  x={startX + 800 + 45 + 152}
                  y={startY + 955 - 2}
                  textAnchor="middle"
                  fontSize="6"
                  fill="rgba(255,255,255,0.7)"
                >
                  1.5 w X 2.5 h
                </text>

                {/* Main Screen */}
                <rect
                  x={startX + 855 + 45 + 152}
                  y={startY + 928 - 2}
                  width={70}
                  height={40}
                  rx={3}
                  fill="#1a1a3e"
                />
                <text
                  x={startX + 890 + 45 + 152}
                  y={startY + 944 - 2}
                  textAnchor="middle"
                  fontSize="7"
                  fill="#ffffff"
                  fontWeight="600"
                >
                  Main Screen
                </text>
                <text
                  x={startX + 890 + 45 + 152}
                  y={startY + 955 - 2}
                  textAnchor="middle"
                  fontSize="6"
                  fill="rgba(255,255,255,0.7)"
                >
                  5 w x 2.5 h
                </text>

                {/* Right Screen */}
                <rect
                  x={startX + 945 + 45 + 152}
                  y={startY + 928 - 2}
                  width={70}
                  height={40}
                  rx={3}
                  fill="#1a1a3e"
                />
                <text
                  x={startX + 980 + 45 + 152}
                  y={startY + 944 - 2}
                  textAnchor="middle"
                  fontSize="7"
                  fill="#ffffff"
                  fontWeight="600"
                >
                  Side Screen
                </text>
                <text
                  x={startX + 980 + 45 + 152}
                  y={startY + 955 - 2}
                  textAnchor="middle"
                  fontSize="6"
                  fill="rgba(255,255,255,0.7)"
                >
                  1.5 w X 2.5 h
                </text>
              </g>

            </g>

            {/* ===== LEGEND ===== */}
            <g transform={`translate(${startX + 140}, ${startY + 700})`}>
              <text x={0} y={0} fontSize="13" fontWeight="bold" fill="#1e293b">Booth Legend</text>

              {[
                { color: colors.official, label: "Official:", count: "01" },
                { color: colors.exclusive, label: "Exclusive:", count: "01" },
                { color: colors.diamond, label: "Diamond:", count: "02" },
                { color: colors.gold, label: "Gold Booth:", count: "06" },
                { color: colors.silver, label: "Silver Booth:", count: "15" },
                { color: colors.standard, label: "Standard:", count: "09" },
              ].map((item, i) => (
                <g key={`legend-${i}`} transform={`translate(0, ${22 + i * 20})`}>
                  <rect x={0} y={0} width={14} height={14} rx={2} fill={item.color} stroke="#94a3b8" strokeWidth="0.5" />
                  <text x={22} y={11} fontSize="11" fill="#475569">{item.label}</text>
                  <text x={100} y={11} fontSize="11" fill="#1e293b" fontWeight="600">{item.count}</text>
                </g>
              ))}
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

export default FloorPlanDubai;
