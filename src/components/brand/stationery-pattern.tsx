import React from "react";

/**
 * Evenly Spaced, Seamless Repeating NBS Red Line-Art Stationery Pattern
 * Every item is uniformly distributed across the horizontal and vertical strips with no empty gaps.
 */
export function StationeryHeaderPattern({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden select-none pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 124"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full opacity-95"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Seamless 600px horizontal repeating unit so items are evenly spaced from 0 to 1200 */}
          <g id="nbs-stationery-row" stroke="#E4002B" strokeWidth="2.2">
            {/* 1. Technical Ruler (x: 16..44) */}
            <g>
              <rect x="16" y="14" width="28" height="94" rx="2" fill="white" />
              <line x1="16" y1="28" x2="28" y2="28" />
              <line x1="16" y1="40" x2="24" y2="40" />
              <line x1="16" y1="52" x2="30" y2="52" />
              <line x1="16" y1="64" x2="24" y2="64" />
              <line x1="16" y1="76" x2="28" y2="76" />
              <line x1="16" y1="88" x2="24" y2="88" />
              <line x1="16" y1="100" x2="28" y2="100" />
            </g>

            {/* 2. Capped Marker Pen (x: 64..96) */}
            <g>
              <rect x="64" y="20" width="24" height="86" rx="2" fill="white" />
              <path d="M88 26H95V58H88" />
              <line x1="64" y1="48" x2="88" y2="48" />
              <line x1="68" y1="106" x2="84" y2="106" />
            </g>

            {/* 3. Chisel Highlighter (x: 114..152) */}
            <g>
              <path d="M118 24H148L152 80L140 94H126L114 80L118 24Z" fill="white" />
              <line x1="122" y1="94" x2="144" y2="94" />
              <path d="M129 94V106L138 102V94" />
            </g>

            {/* 4. Drafting Compass (x: 170..226) */}
            <g>
              <rect x="193" y="14" width="10" height="12" rx="1" fill="white" />
              <circle cx="198" cy="32" r="7" fill="white" />
              <path d="M193 37L170 106L176 108L197 44" />
              <path d="M203 37L226 106L220 108L199 44" />
              <circle cx="178" cy="92" r="3" fill="white" />
            </g>

            {/* 5. Fountain Pen (x: 244..264) */}
            <g>
              <path d="M244 30C244 22 264 22 264 30V80H244V30Z" fill="white" />
              <path d="M244 80L254 108L264 80" />
              <line x1="254" y1="90" x2="254" y2="108" />
              <circle cx="254" cy="90" r="2" fill="#E4002B" />
            </g>

            {/* 6. Sharpened Pencil (x: 284..306) */}
            <g>
              <rect x="284" y="36" width="22" height="52" fill="white" />
              <line x1="284" y1="46" x2="306" y2="46" />
              <line x1="291" y1="46" x2="291" y2="88" />
              <line x1="299" y1="46" x2="299" y2="88" />
              <path d="M284 88L295 108L306 88" />
            </g>

            {/* 7. Scissors + Top Pushpins (x: 326..390) */}
            <g>
              <circle cx="340" cy="38" r="13" fill="white" />
              <circle cx="340" cy="38" r="6" />
              <circle cx="376" cy="38" r="13" fill="white" />
              <circle cx="376" cy="38" r="6" />
              <path d="M348 48L368 104" />
              <path d="M368 48L348 104" />
            </g>

            {/* 8. Protractor & Set Square Triangle (x: 404..468) */}
            <g>
              <path d="M404 104 A 62 62 0 0 1 466 24 L 466 104 Z" fill="white" />
              <path d="M424 90 A 38 38 0 0 1 454 48 L 454 90 Z" />
            </g>

            {/* 9. Spiral Notebook (x: 486..584) */}
            <g>
              <rect x="486" y="20" width="98" height="88" rx="2" fill="white" />
              <rect x="496" y="13" width="6" height="12" rx="1" fill="white" />
              <rect x="512" y="13" width="6" height="12" rx="1" fill="white" />
              <rect x="528" y="13" width="6" height="12" rx="1" fill="white" />
              <rect x="544" y="13" width="6" height="12" rx="1" fill="white" />
              <rect x="560" y="13" width="6" height="12" rx="1" fill="white" />
              <rect x="574" y="13" width="6" height="12" rx="1" fill="white" />
              <line x1="486" y1="36" x2="584" y2="36" />
              <line x1="486" y1="48" x2="584" y2="48" />
              <line x1="486" y1="60" x2="584" y2="60" />
              <line x1="486" y1="72" x2="584" y2="72" />
              <line x1="486" y1="84" x2="584" y2="84" />
              <line x1="486" y1="96" x2="584" y2="96" />
            </g>
          </g>
        </defs>

        {/* Render two seamless 600px tiles side-by-side (0..600 and 600..1200) */}
        <use href="#nbs-stationery-row" x="0" y="0" />
        <use href="#nbs-stationery-row" x="600" y="0" />

        {/* Baseline */}
        <line x1="0" y1="116" x2="1200" y2="116" stroke="#E4002B" strokeWidth="2.5" />
      </svg>
    </div>
  );
}

/**
 * Evenly Spaced Vertical Stationery Sidebar Strip
 */
export function StationeryVerticalStrip({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden select-none pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 110 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <line x1="108" y1="0" x2="108" y2="220" stroke="#E4002B" strokeWidth="2.5" />
        {/* Top Row: Marker, Highlighter, Pencil */}
        <g stroke="#E4002B" strokeWidth="2">
          <rect x="12" y="14" width="20" height="82" rx="2" fill="white" />
          <path d="M32 20H38V48H32" />
          <line x1="12" y1="40" x2="32" y2="40" />

          <path d="M50 20H72L75 72L66 84H56L47 72L50 20Z" fill="white" />
          <path d="M58 84V94L65 91V84" />

          <rect x="84" y="24" width="14" height="54" fill="white" />
          <line x1="84" y1="34" x2="98" y2="34" />
          <path d="M84 78L91 94L98 78" />
        </g>

        {/* Bottom Row: Horizontal Pens & Utility Cutter */}
        <g stroke="#E4002B" strokeWidth="2">
          <rect x="10" y="114" width="88" height="12" rx="6" fill="white" />
          <rect x="10" y="138" width="88" height="10" rx="5" fill="white" />
          <rect x="10" y="160" width="88" height="10" rx="5" fill="white" />
          <path d="M10 184H78L94 200H10V184Z" fill="white" />
          <rect x="20" y="187" width="40" height="8" rx="2" />
        </g>
      </svg>
    </div>
  );
}
