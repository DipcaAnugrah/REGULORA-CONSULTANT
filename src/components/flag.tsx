import type { Locale } from "@/i18n";
// Inline SVG flags: emoji flags don't render on Windows (they show "ID"/"GB").
function star(cx: number, cy: number, r: number, rotate = 0) {
  return Array.from({ length: 10 }, (_, i) => {
    const radius = i % 2 ? r * 0.382 : r;
    const a = ((i * 36 - 90 + rotate) * Math.PI) / 180;
    return `${(cx + radius * Math.cos(a)).toFixed(2)},${(cy + radius * Math.sin(a)).toFixed(2)}`;
  }).join(" ");
}
const cnStars = [
  star(5, 5, 3),
  star(10, 2, 1, 23),
  star(12, 4, 1, 46),
  star(12, 7, 1, 70),
  star(10, 9, 1, 21),
];
export function Flag({ locale }: { locale: Locale }) {
  const common = {
    className: "flag",
    width: 22,
    height: 15,
    "aria-hidden": true,
    focusable: false,
  } as const;
  if (locale === "id")
    return (
      <svg {...common} viewBox="0 0 3 2" preserveAspectRatio="none">
        <rect width="3" height="2" fill="#fff" />
        <rect width="3" height="1" fill="#CE1126" />
      </svg>
    );
  if (locale === "zh")
    return (
      <svg {...common} viewBox="0 0 15 10" preserveAspectRatio="none">
        <rect width="15" height="10" fill="#DE2910" />
        {cnStars.map((points) => (
          <polygon key={points} points={points} fill="#FFDE00" />
        ))}
      </svg>
    );
  // English: Union Jack (simplified, no clip paths so ids never collide).
  return (
    <svg {...common} viewBox="0 0 60 30" preserveAspectRatio="none">
      <rect width="60" height="30" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="2" />
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
    </svg>
  );
}
