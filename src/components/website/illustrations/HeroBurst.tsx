/** Hero illustration: an open book (the logo shape) with a cap, laptop, phone,
 * robot, chat bubble and code blocks bursting out of it. Pure SVG, no assets. */
export function HeroBurst({ className, idPrefix = "hb" }: { className?: string; idPrefix?: string }) {
  const a = `${idPrefix}-a`;
  const b = `${idPrefix}-b`;
  return (
    <svg
      viewBox="0 0 380 580"
      className={className}
      role="img"
      aria-label="Line illustration: an open book with a graduation cap, laptop, phone, robot and code blocks bursting out of it"
    >
      <defs>
        <pattern id={a} width="5" height="5" patternUnits="userSpaceOnUse">
          <circle cx="2.5" cy="2.5" r="1.15" fill="#111" />
        </pattern>
        <pattern id={b} width="4" height="4" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="0.75" fill="#111" />
        </pattern>
      </defs>
      <g stroke="#111" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <g className="burst-float burst-d1">
          <path d="M122 78 V120 Q190 150 258 120 V78" fill="#fff" />
          <path d="M190 16 L306 62 L190 108 L74 62 Z" fill="#fff" />
          <path d="M190 16 L306 62 L190 108 L74 62 Z" fill={`url(#${b})`} />
          <path d="M190 62 Q250 64 296 68 V118" fill="none" />
          <rect x="289" y="116" width="14" height="22" rx="3" fill="#111" />
        </g>
        <path d="M28 260 L64 390 M48 246 L86 380" fill="none" />
        <path d="M352 246 L316 380 M334 236 L296 368" fill="none" />
        <g className="burst-float burst-d2">
          <g transform="rotate(-14 105 210)">
            <rect x="50" y="168" width="110" height="72" rx="7" fill="#fff" />
            <rect x="60" y="178" width="90" height="52" rx="3" fill={`url(#${b})`} />
            <path d="M40 248 H170 L160 262 H50 Z" fill="#fff" />
            <rect x="76" y="190" width="58" height="26" rx="4" fill="#fff" />
            <text x="105" y="210" textAnchor="middle" fontFamily="Archivo, sans-serif" fontWeight="700" fontSize="17" fill="#111" stroke="none">
              &lt;/&gt;
            </text>
          </g>
        </g>
        <g className="burst-float burst-d3">
          <path d="M248 166 H338 Q350 166 350 178 V214 Q350 226 338 226 H290 L272 244 L274 226 H260 Q248 226 248 214 V178 Q248 166 260 166 Z" fill="#fff" />
          <text x="299" y="204" textAnchor="middle" fontFamily="Archivo, sans-serif" fontWeight="700" fontSize="22" fill="#ff2d46" stroke="none">
            Hi!
          </text>
        </g>
        <path d="M190 168 V150 M172 174 L162 162 M208 174 L218 162" fill="none" />
        <g className="burst-float burst-d1">
          <rect x="156" y="264" width="70" height="58" rx="16" fill="#fff" />
          <path d="M191 264 V246" fill="none" />
          <circle cx="191" cy="240" r="6" fill="#ff2d46" />
          <circle cx="177" cy="290" r="6" fill="#111" />
          <circle cx="205" cy="290" r="6" fill="#111" />
          <path d="M178 308 Q191 316 204 308" fill="none" />
          <path d="M156 286 H146 M226 286 H236" fill="none" />
        </g>
        <g className="burst-float burst-d3" transform="rotate(16 92 318)">
          <rect x="70" y="282" width="46" height="80" rx="9" fill="#fff" />
          <rect x="78" y="296" width="12" height="12" rx="3" fill={`url(#${a})`} />
          <rect x="96" y="296" width="12" height="12" rx="3" fill="#ff2d46" />
          <rect x="78" y="314" width="12" height="12" rx="3" fill="#ff2d46" />
          <rect x="96" y="314" width="12" height="12" rx="3" fill={`url(#${a})`} />
          <path d="M86 350 H100" fill="none" />
        </g>
        <g className="burst-float burst-d2" transform="rotate(-8 300 320)">
          <path d="M254 296 H276 V290 H292 V296 H344 V336 H292 V342 H276 V336 H254 Z" fill="#fff" />
          <path d="M266 316 H330" fill="none" strokeWidth="2.5" />
          <path d="M266 316 H300" fill="none" stroke="#ff2d46" strokeWidth="5" />
        </g>
        <path d="M54 418 L110 398 L84 440 Z" fill="#fff" />
        <path d="M84 440 L90 414 L110 398" fill="none" />
        <circle cx="316" cy="410" r="16" fill={`url(#${a})`} />
        <circle cx="316" cy="410" r="6" fill="#fff" />
        <path d="M316 386 V392 M316 428 V434 M292 410 H298 M334 410 H340 M299 393 L303 397 M329 423 L333 427 M333 393 L329 397 M303 423 L299 427" fill="none" />
        <path d="M150 400 L228 360 L236 374 L158 414 Z" fill="#fff" />
        <path d="M150 400 L142 420 L158 414" fill="#111" />
        <path d="M218 365 L226 379" fill="none" />
        <path d="M30 140 L36 152 M24 150 L42 142 M346 120 L352 132 M340 130 L358 122" fill="none" strokeWidth="2.5" />
        <path d="M120 456 L132 438 M190 444 V422 M262 456 L250 438" fill="none" />
        <circle cx="190" cy="488" r="38" fill="#ff2d46" />
        <path d="M28 458 L190 510 L190 562 L28 510 Z" fill="#fff" />
        <path d="M28 458 L190 510 L190 562 L28 510 Z" fill={`url(#${a})`} />
        <path d="M352 458 L190 510 L190 562 L352 510 Z" fill="#fff" />
        <path d="M214 520 L330 484 M214 534 L330 498 M214 548 L300 521" fill="none" strokeWidth="2" />
        <path d="M28 510 L190 562 L352 510 L352 522 L190 574 L28 522 Z" fill="#111" />
      </g>
    </svg>
  );
}
