const GLYPHS = {
  flights: ["M6 18L25 7L17 26L14 17L6 18Z", "M14 17L25 7"],
  hotels: [
    "M8 25V12L16 6L24 12V25",
    "M8 25H24",
    "M13 25V19H19V25",
    "M12 15.5H13M19 15.5H20",
  ],
  visas: ["M9 6H23V26H9Z", "M12 11H20", "M12 15H20", "M12 19H16"],
  study: [
    "M6 13L16 8L26 13L16 18L6 13Z",
    "M11 15.5V21C11 22.5 13 24 16 24C19 24 21 22.5 21 21V15.5",
    "M26 13V19",
  ],
  immigration: [
    "M16 6C11.5 6 8 9.6 8 13.8C8 19.3 16 27 16 27C16 27 24 19.3 24 13.8C24 9.6 20.5 6 16 6Z",
    "M16 17C18 17 19.5 15.4 19.5 13.5C19.5 11.6 18 10 16 10C14 10 12.5 11.6 12.5 13.5C12.5 15.4 14 17 16 17Z",
  ],
  groups: [
    "M12 15C14 15 15.5 13.4 15.5 11.5C15.5 9.6 14 8 12 8C10 8 8.5 9.6 8.5 11.5C8.5 13.4 10 15 12 15Z",
    "M6 24C6 19.5 8.5 17 12 17C15.5 17 18 19.5 18 24",
    "M20.5 15C22.2 15 23.5 13.6 23.5 12C23.5 10.4 22.2 9 20.5 9",
    "M19.5 17.3C22.3 17.7 24 19.9 24 24",
  ],
  medical: ["M16 8V24", "M8 16H24"],
  investment: ["M7 22L13 15L18 19L25 9", "M19 9H25V15"],
  transfers: [
    "M6 19L8.5 12.5C9 11.5 10 11 11 11H19C20 11 21 11.5 21.5 12.5L24 19",
    "M5 19H25V22H5Z",
    "M9 22C9 23.1 8.1 24 7 24C5.9 24 5 23.1 5 22",
    "M25 22C25 23.1 24.1 24 23 24C21.9 24 21 23.1 21 22",
  ],
  insurance: [
    "M16 6L25 9.5V15C25 20.5 21.2 24.8 16 26.5C10.8 24.8 7 20.5 7 15V9.5L16 6Z",
    "M12.5 16L15 18.5L20 13",
  ],
  translation: ["M6 7H17V15H11L8 18V15H6Z", "M14 20H25V12H21"],
} as const;

export type ServiceIconName = keyof typeof GLYPHS;

export default function ServiceIcon({
  name,
  className,
}: {
  name: ServiceIconName;
  className?: string;
}) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <circle
        cx="16"
        cy="16"
        r="15"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="1.5 3"
        opacity="0.35"
      />
      <g
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        {GLYPHS[name].map((d, i) => (
          <path key={i} d={d} />
        ))}
      </g>
    </svg>
  );
}
