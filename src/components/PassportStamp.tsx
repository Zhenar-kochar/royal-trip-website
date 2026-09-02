const STAR_POINTS =
  "0,-7 1.76,-2.43 6.66,-2.16 2.85,0.93 4.11,5.66 0,3 -4.11,5.66 -2.85,0.93 -6.66,-2.16 -1.76,-2.43";

export default function PassportStamp({
  className,
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 240 240"
      className={className}
      role="img"
      aria-label="Passport stamp reading First Class Service Everytime"
    >
      <g className="stamp-land">
        <circle cx="120" cy="120" r="115" fill="var(--maroon-tint)" />

        <circle
          cx="120"
          cy="120"
          r="106"
          fill="none"
          stroke="var(--maroon)"
          strokeWidth="1.5"
          strokeDasharray="3 4"
        />
        <circle
          cx="120"
          cy="120"
          r="92"
          fill="none"
          stroke="var(--maroon)"
          strokeWidth="1"
          strokeDasharray="1.5 4"
        />
      </g>

      <g className="stamp-land stamp-land-delay">
        <path
          id="stamp-tagline-curve"
          d="M 40,120 A 80,80 0 0 1 200,120"
          fill="none"
        />
        <text
          fill="var(--maroon)"
          fontSize="9.5"
          fontWeight="600"
          letterSpacing="2"
        >
          <textPath
            href="#stamp-tagline-curve"
            startOffset="50%"
            textAnchor="middle"
          >
            FIRST CLASS SERVICE EVERYTIME
          </textPath>
        </text>
      </g>

      <g className="stamp-fade-up">
        <path
          d="M 78,158 Q 132,112 172,92"
          fill="none"
          stroke="var(--maroon)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="0.5 6"
        />
        <circle cx="78" cy="158" r="4" fill="var(--maroon)" />
      </g>

      <g transform="translate(172,92)">
        <g className="stamp-pop">
          <polygon points={STAR_POINTS} fill="var(--maroon)" />
        </g>
      </g>
    </svg>
  );
}
