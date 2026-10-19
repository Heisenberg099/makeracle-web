/**
 * A student in school uniform pushing to the right, hands at the right edge
 * of the drawing. `stride` (-1…1) swings the legs so scroll can drive a walk cycle.
 * viewBox is 230×300; the hands sit at x≈222.
 */
export function PushingStudent({ stride = 0, className }: { stride?: number; className?: string }) {
  const swing = stride * 16; // degrees
  const bob = Math.abs(stride) * -3;
  return (
    <svg
      viewBox="0 0 230 300"
      className={className}
      role="img"
      aria-label="A student in school uniform pushing the black panel open"
    >
      <defs>
        <pattern id="ps-dots" width="4" height="4" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="0.8" fill="#111" />
        </pattern>
      </defs>
      <g strokeLinecap="round" strokeLinejoin="round">
        {/* speed lines */}
        <path d="M10 120 H44 M4 150 H34 M16 180 H46" stroke="#111" strokeWidth="2.5" fill="none" opacity={0.4 + Math.abs(stride) * 0.6} />

        {/* back leg */}
        <g transform={`rotate(${swing} 100 188)`}>
          <path d="M96 188 L72 226 L48 258" stroke="#111" strokeWidth="15" fill="none" />
          <path d="M96 188 L72 226 L48 258" stroke="#fff" strokeWidth="9" fill="none" />
          <path d="M50 248 L60 256 L52 266 L40 258 Z" fill="url(#ps-dots)" stroke="#111" strokeWidth="2.5" />
          <path d="M30 262 L52 272 L48 282 L22 272 Q20 264 30 262 Z" fill="#fff" stroke="#111" strokeWidth="3" />
          <path d="M30 270 L44 274" stroke="var(--red)" strokeWidth="3" fill="none" />
        </g>

        {/* front leg */}
        <g transform={`rotate(${-swing} 122 190)`}>
          <path d="M120 192 L142 228 L132 264" stroke="#111" strokeWidth="15" fill="none" />
          <path d="M120 192 L142 228 L132 264" stroke="#fff" strokeWidth="9" fill="none" />
          <path d="M126 254 H140 V266 H126 Z" fill="url(#ps-dots)" stroke="#111" strokeWidth="2.5" />
          <path d="M118 266 H150 Q160 266 160 276 V280 H116 Z" fill="#fff" stroke="#111" strokeWidth="3" />
          <path d="M124 274 Q136 270 146 276" stroke="var(--red)" strokeWidth="3" fill="none" />
        </g>

        <g transform={`translate(0 ${bob})`}>
          {/* shorts */}
          <path d="M98 162 L134 170 L132 198 L114 202 L106 188 L92 200 L76 190 Z" fill="#fff" stroke="#111" strokeWidth="3" />
          <path d="M98 162 L134 170 L132 198 L114 202 L106 188 L92 200 L76 190 Z" fill="url(#ps-dots)" stroke="#111" strokeWidth="3" />
          {/* backpack */}
          <g transform="rotate(24 100 117)">
            <rect x="80" y="86" width="40" height="62" rx="11" fill="var(--red)" stroke="#111" strokeWidth="3" />
            <path d="M84 104 L108 112" stroke="#111" strokeWidth="2.5" fill="none" />
          </g>
          {/* shirt + tie */}
          <path d="M128 82 L164 80 L136 172 L98 164 Z" fill="#fff" stroke="#111" strokeWidth="3" />
          <path d="M150 86 L130 146" stroke="var(--red)" strokeWidth="6" fill="none" />
          {/* arms */}
          <path d="M150 92 L180 82 L210 70" stroke="#111" strokeWidth="15" fill="none" />
          <path d="M150 92 L180 82 L210 70" stroke="#fff" strokeWidth="9" fill="none" />
          <path d="M144 112 L178 100 L210 88" stroke="#111" strokeWidth="15" fill="none" />
          <path d="M144 112 L178 100 L210 88" stroke="#fff" strokeWidth="9" fill="none" />
          <path d="M210 60 L222 62 L222 80 L210 78 Z" fill="#fff" stroke="#111" strokeWidth="2.5" />
          <path d="M210 80 L222 82 L222 98 L210 96 Z" fill="#fff" stroke="#111" strokeWidth="2.5" />
          {/* head + cap */}
          <circle cx="152" cy="58" r="23" fill="#fff" stroke="#111" strokeWidth="3" />
          <path d="M129 58 Q128 30 154 32 Q176 34 176 54 Z" fill="#fff" stroke="#111" strokeWidth="3" />
          <path d="M129 58 Q128 30 154 32 Q176 34 176 54 Z" fill="url(#ps-dots)" stroke="#111" strokeWidth="3" />
          <path d="M172 50 L196 56 L174 60 Z" fill="#111" stroke="#111" strokeWidth="2.5" />
          {/* face: determined */}
          <path d="M162 62 L170 60" stroke="#111" strokeWidth="3" fill="none" />
          <path d="M164 74 Q170 72 172 76" stroke="#111" strokeWidth="2.5" fill="none" />
          <path d="M136 64 Q140 70 144 66" stroke="#111" strokeWidth="2.5" fill="none" />
          {/* sweat drops */}
          <path d="M120 50 Q116 58 120 60 Q124 58 120 50 Z" fill="#fff" stroke="#111" strokeWidth="2" />
          <path d="M114 66 Q110 72 114 74 Q118 72 114 66 Z" fill="#fff" stroke="#111" strokeWidth="2" />
        </g>
      </g>
    </svg>
  );
}
