import { Lock } from "lucide-react";
import React, { useEffect, useRef } from "react";

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
  showBoothNo = true,
  showBottomSize = true,
  showShadow = true,
  showHighlight = true,
  onClick,
  isReserved = false,
  activeTooltipId = null,
  setActiveTooltipId,
  // 👇 NEW
  reservedInfo = null,
  // {
  //   companyName: "ABC Corp",
  //   logo: "/logos/abc.png",
  //   url: "https://abccorp.com"
  // },
}) => {
  const boothGroupRef = useRef(null);


  const tooltipWidth = 160;
  const tooltipHeight = 70;
  const tooltipOffset = 12;
  const arrowHeight = 8;
  const showTooltipBelow = y <= tooltipHeight + tooltipOffset + arrowHeight;
  const tooltipX = x + width / 2 - tooltipWidth / 2;
  const tooltipY = showTooltipBelow
    ? y + height + tooltipOffset
    : y - tooltipHeight - tooltipOffset;
  const arrowBaseY = showTooltipBelow ? y + height + tooltipOffset : y - tooltipOffset;
  const arrowTipY = showTooltipBelow ? y + height + 4 : y - 4;

  const isPodcast = boothType === "podcast";
  const isTooltipVisible = activeTooltipId === boothId;
  const reservedCompanyName = reservedInfo?.companyName || "Reserved";
  const reservedBoothNo = reservedInfo?.boothNo || boothNo;
  const reservedTooltipLabel = reservedBoothNo
    ? `${reservedCompanyName} - Booth no: ${reservedBoothNo}`
    : reservedCompanyName;
  const reservedTooltipFontSize = reservedTooltipLabel.length > 24 ? 10 : 12;

  useEffect(() => {
    if (!isTooltipVisible || !boothGroupRef.current?.parentNode) return;

    // SVG stacking follows DOM order, so move the active booth to the end.
    boothGroupRef.current.parentNode.appendChild(boothGroupRef.current);
  }, [isTooltipVisible]);

  const gradientId = `hover-gold-${boothId}`;

  return (
    <g
      ref={boothGroupRef}
      onMouseEnter={() => {
        setActiveTooltipId?.(boothId);
      }}
      onMouseLeave={() => {
        setActiveTooltipId?.((currentId) => (currentId === boothId ? null : currentId));
      }}
      onClick={() => {
        if (!isReserved && !isPodcast && onClick) {
          onClick({ boothId, boothNo, boothType, title, size });
        }
      }}
      style={{
        cursor: isPodcast ? "default" : "pointer",
      }}
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFE066" />
          <stop offset="50%" stopColor="#F4A800" />
          <stop offset="100%" stopColor="#C8750A" />
        </linearGradient>
      </defs>

      {/* Shadow */}
      {showShadow && (
        <rect
          x={x + 3}
          y={y + 3}
          width={width}
          height={height}
          rx={borderRadius}
          fill="rgba(0,0,0,0.1)"
        />
      )}

      {/* Booth body */}
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={borderRadius}
        fill={isTooltipVisible ? `url(#${gradientId})` : color}
        stroke="rgba(0,0,0,0.15)"
        strokeWidth={1.5}
        style={{ transition: "all 0.2s ease" }}
      />

      {/* Highlight */}
      {showHighlight && (
        <rect
          x={x + 2}
          y={y + 3}
          width={width - 4}
          height={height / 4}
          rx={borderRadius + 3}
          fill="rgba(255,255,255,0.2)"
        />
      )}

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
          {showBoothNo && boothNo && (
            <text
              x={x + width / 2}
              y={y + 16}
              textAnchor="middle"
              fontSize={fontSize - 3}
              fill={isTooltipVisible ? "#1a1a1a" : "rgba(0,0,0,0.7)"}
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
            fill={isTooltipVisible ? "#1a1a1a" : textColor}
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
          {size && showBottomSize && (
            <text
              x={x + width / 2}
              y={y + height - 10}
              textAnchor="middle"
              fontSize={fontSize - 3}
              fill={isTooltipVisible ? "rgba(0,0,0,0.75)" : "rgba(0,0,0,0.6)"}
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
              fill="rgba(255,255,255,0.9)"
            >
              {subtitle}
            </text>
          )}

        </>
      )}

      {/* ===== TOOLTIP ===== */}
      {isTooltipVisible && !isReserved && isPodcast && (
        <g pointerEvents="none">
          <rect
            x={tooltipX}
            y={tooltipY}
            width={tooltipWidth}
            height={tooltipHeight}
            rx={8}
            fill="#fff"
            stroke="#e0e0e0"
            filter="drop-shadow(0 4px 6px rgba(0,0,0,0.15))"
          />
          <polygon
            points={
              showTooltipBelow
                ? `${x + width / 2 - 8},${arrowBaseY}
                   ${x + width / 2 + 8},${arrowBaseY}
                   ${x + width / 2},${arrowTipY}`
                : `${x + width / 2 - 8},${arrowBaseY}
                   ${x + width / 2 + 8},${arrowBaseY}
                   ${x + width / 2},${arrowTipY}`
            }
            fill="#fff"
          />
          <text
            x={x + width / 2}
            y={tooltipY + 18}
            textAnchor="middle"
            fontSize="12"
            fontWeight="700"
          >
            ProFX Media
          </text>
          <text
            x={x + width / 2}
            y={tooltipY + 32}
            textAnchor="middle"
            fontSize="11"
            fill="#666"
          >
            <tspan x={x + width / 2} dy="0">Podcast Included</tspan>
            <tspan x={x + width / 2} dy="1.3em">in package</tspan>
          </text>
        </g>
      )}

      {isTooltipVisible && !isReserved && !isPodcast && (
        <g pointerEvents="none">
          {/* Tooltip box */}
          <rect
            x={tooltipX}
            y={tooltipY}
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
                ? `${x + width / 2 - 8},${arrowBaseY}
                   ${x + width / 2 + 8},${arrowBaseY}
                   ${x + width / 2},${arrowTipY}`
                : `${x + width / 2 - 8},${arrowBaseY}
                   ${x + width / 2 + 8},${arrowBaseY}
                   ${x + width / 2},${arrowTipY}`
            }
            fill="#fff"
          />

          {/* Tooltip text */}
          {boothNo && (
            <text
              x={x + width / 2}
              y={tooltipY + 18}
              textAnchor="middle"
              fontSize="12"
              fontWeight="700"
            >
              Booth no: {boothNo}
            </text>
          )}

          <text
            x={x + width / 2}
            y={tooltipY + 34}
            textAnchor="middle"
            fontSize="12"
          >
            {title}
          </text>

          {size && (
            <text
              x={x + width / 2}
              y={tooltipY + 50}
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
      {isReserved && isTooltipVisible && reservedInfo && (
        <g>
          {/* Tooltip box */}
          <rect
            x={tooltipX}
            y={tooltipY}
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
                ? `${x + width / 2 - 8},${arrowBaseY}
                   ${x + width / 2 + 8},${arrowBaseY}
                   ${x + width / 2},${arrowTipY}`
                : `${x + width / 2 - 8},${arrowBaseY}
                   ${x + width / 2 + 8},${arrowBaseY}
                   ${x + width / 2},${arrowTipY}`
            }
            fill="#fff"
          />

          {/* Company logo */}          {reservedInfo.approved ? (
            <>
              <a
                href={reservedInfo.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <image
                  href={reservedInfo.logo}
                  x={x + width / 2 - 50}
                  y={tooltipY + 6}
                  width={100}
                  height={42}
                  preserveAspectRatio="xMidYMid meet"
                  style={{ cursor: "pointer" }}
                />
              </a>

              <text
                x={x + width / 2}
                y={tooltipY + 60}
                fontSize={reservedTooltipFontSize}
                fontWeight="700"
                fill="#333"
                textAnchor="middle"
              >
                {reservedTooltipLabel}
              </text>
            </>
          ) : (
            <>
              <Lock
                x={x + width / 2 - 12}
                y={tooltipY + 12}
                size={24}
                color="#c19d38"
              />
              <text
                x={x + width / 2}
                y={tooltipY + 54}
                fontSize="12"
                fontWeight="700"
                fill="#333"
                textAnchor="middle"
              >
                RESERVED
              </text>
            </>
          )}

        </g>
      )}

    </g>
  );
};

export default Booth;

