import { Lock } from "lucide-react";
import React, { useState } from "react";

const Booth = ({
  boothId,
  boothNo,
  subtitle,
  boothType,
  title,
  size,
  x,
  y,
  width,
  height,
  color,
  borderRadius = 6,
  textColor = "#1a1a2e",
  fontSize = 14,
  onClick,
  isReserved = false,
  // 👇 NEW
  reservedInfo = null,
  // {
  //   companyName: "ABC Corp",
  //   logo: "/logos/abc.png",
  //   url: "https://abccorp.com"
  // },
}) => {
  // const [hover, setHover] = useState(false);
  const [hover, setHover] = useState(false);
  const [reservedHover, setReservedHover] = useState(false);


  const tooltipWidth = 160;
  const tooltipHeight = 70;
  const showTooltipBelow = y < 80;

  return (
    <g
      onMouseEnter={() => {
        if (isReserved) setReservedHover(true);
        else setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
        setReservedHover(false);
      }}
      onClick={() => {
        if (!isReserved && onClick) {
          onClick({ boothId, boothNo, boothType, title, size });
        }
      }}
      style={{
        cursor: isReserved ? "pointer" : "pointer",
      }}
    >
      {/* Shadow */}
      <rect
        x={x + 3}
        y={y + 3}
        width={width}
        height={height}
        rx={borderRadius}
        fill="rgba(0,0,0,0.1)"
      />

      {/* Booth body */}
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={borderRadius}
        fill={hover ? "#c19d38" : color}
        stroke={hover ? "#0e5941" : "rgba(0,0,0,0.15)"}
        strokeWidth={hover ? 3 : 1.5}
        style={{ transition: "all 0.2s ease" }}
      />

      {/* Highlight */}
      <rect
        x={x + 2}
        y={y + 3}
        width={width - 4}
        height={height / 4}
        rx={borderRadius + 3}
        fill="rgba(255,255,255,0.2)"
      />

      {/* ===== RESERVED STATE ===== */}
      {isReserved && (
        <>
          {/* Dark overlay */}
          <rect
            x={x}
            y={y}
            width={width}
            height={height}
            rx={borderRadius}
            fill="rgba(0,0,0,0.35)"
          />

          {/* Lock icon */}
          <Lock
            x={x + width / 2 - 8}
            y={y + height / 2 - 16}
            size={16}
            color="#fff"
          />

          {/* Reserved label */}
          <text
            x={x + width / 2}
            y={y + height / 2 + 14}
            textAnchor="middle"
            fontSize={fontSize - 2}
            fill="#fff"
            fontWeight="700"
          >
            RESERVED
          </text>
        </>
      )}

      {/* ===== ACTIVE BOOTH CONTENT ===== */}
      {!isReserved && (
        <>
          {/* Booth No (optional) */}
          {boothNo && (
            <text
              x={x + width / 2}
              y={y + 16}
              textAnchor="middle"
              fontSize={fontSize - 3}
              fill={hover ? "#fff" : "rgba(0,0,0,0.7)"}
              fontWeight="600"
            >
              Booth no: {boothNo}
            </text>
          )}


          {/* Title (supports line breaks) */}
          <text
            x={x + width / 2}
            y={y + height / 2.2}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize={fontSize}
            fill={hover ? "#fff" : textColor}
            fontWeight="700"
          >
            {String(title).split("\n").map((line, index) => (
              <tspan
                key={index}
                x={x + width / 2}
                dy={index === 0 ? "0em" : "1.1em"}
              >
                {line}
              </tspan>
            ))}
          </text>


          {/* Size */}
          {/* Size (optional) */}
          {size && (
            <text
              x={x + width / 2}
              y={y + height - 10}
              textAnchor="middle"
              fontSize={fontSize - 3}
              fill={hover ? "rgba(255,255,255,0.9)" : "rgba(0,0,0,0.6)"}
            >
              {size}
            </text>
          )}
          {/* subtitle (optional) */}
          {subtitle && (
            <text
              x={x + width / 2}
              y={y + height - 40}
              textAnchor="middle"
              fontSize={fontSize}
              fill={hover ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.9)"}
            >
              {subtitle}
            </text>
          )}

        </>
      )}

      {/* ===== TOOLTIP ===== */}
      {hover && !isReserved && (
        <g pointerEvents="none">
          {/* Tooltip box */}
          <rect
            x={x + width / 2 - tooltipWidth / 2}
            y={showTooltipBelow ? y + height + 12 : y - tooltipHeight - 12}
            width={tooltipWidth}
            height={tooltipHeight}
            rx={8}
            fill="#fff"
            stroke="#e0e0e0"
            filter="drop-shadow(0 4px 6px rgba(0,0,0,0.15))"
          />

          {/* Arrow */}
          <polygon
            points={
              showTooltipBelow
                ? `${x + width / 2 - 8},${y + height + 12}
                   ${x + width / 2 + 8},${y + height + 12}
                   ${x + width / 2},${y + height + 4}`
                : `${x + width / 2 - 8},${y - 12}
                   ${x + width / 2 + 8},${y - 12}
                   ${x + width / 2},${y - 4}`
            }
            fill="#fff"
          />

          {/* Tooltip text */}
          {boothNo && (
            <text
              x={x + width / 2}
              y={showTooltipBelow ? y + height + 30 : y - tooltipHeight + 10}
              textAnchor="middle"
              fontSize="12"
              fontWeight="700"
            >
              Booth no: {boothNo}
            </text>
          )}


          <text
            x={x + width / 2}
            y={showTooltipBelow ? y + height + 46 : y - tooltipHeight + 28}
            textAnchor="middle"
            fontSize="12"
          >
            {title}
          </text>

          {size && (
            <text
              x={x + width / 2}
              y={showTooltipBelow ? y + height + 62 : y - tooltipHeight + 42}
              textAnchor="middle"
              fontSize="11"
              fill="#666"
            >
              Size: {size}
            </text>
          )}

        </g>
      )}

      {/* ===== RESERVED TOOLTIP ===== */}
      {isReserved && reservedHover && reservedInfo && (
        <g>
          {/* Tooltip box */}
          <rect
            x={x + width / 2 - tooltipWidth / 2}
            y={showTooltipBelow ? y + height + 12 : y - tooltipHeight - 12}
            width={tooltipWidth}
            height={tooltipHeight}
            rx={8}
            fill="#fff"
            stroke="#e0e0e0"
            filter="drop-shadow(0 4px 6px rgba(0,0,0,0.15))"
          />

          {/* Arrow */}
          <polygon
            points={
              showTooltipBelow
                ? `${x + width / 2 - 8},${y + height + 12}
                   ${x + width / 2 + 8},${y + height + 12}
                   ${x + width / 2},${y + height + 4}`
                : `${x + width / 2 - 8},${y - 12}
                   ${x + width / 2 + 8},${y - 12}
                   ${x + width / 2},${y - 4}`
            }
            fill="#fff"
          />

          {/* Company logo */}
          {/* <image
            href={reservedInfo.logo}
            x={x + width / 2 - 55}
            y={y - 88}
            width={100}
            height={100}
            preserveAspectRatio="xMidYMid meet"
          /> */}
          <a
            href={reservedInfo.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <image
              href={reservedInfo.logo}
              x={x + width / 2 - 50}
              y={y - 88}
              width={100}
              height={100}
              preserveAspectRatio="xMidYMid meet"
              style={{ cursor: "pointer" }}
            />
          </a>


          {/* Company name */}
          <text
            x={x + width / 2}
            y={y - 65}
            fontSize="12"
            fontWeight="700"
            fill="#333"
            textAnchor="middle"
          >
            {reservedInfo.companyName}
          </text>

        </g>
      )}

    </g>
  );
};

export default Booth;
