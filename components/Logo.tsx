/**
 * Wei Chen monogram — "Wei as signal".
 * A continuous sine wave forming a W nested inside a C.
 * Drawn in `currentColor` so it inks on paper and knocks out to white
 * on the red poster / dark surfaces automatically.
 */
export default function Logo({
  size = 44,
  title = "Wei Chen monogram",
  className,
}: {
  size?: number;
  title?: string;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      role="img"
      aria-label={title}
      className={className}
    >
      <g
        stroke="currentColor"
        strokeWidth={6.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* C — the ring, open at the right where the signal exits */}
        <path d="M 88.1 28 A 44 44 0 1 0 88.1 72" />
        {/* W — the signal, a sine wave nested inside the C */}
        <path
          d="M 13 35
             C 22 35, 22 71, 31 71
             C 40.5 71, 40.5 27, 50 27
             C 59.5 27, 59.5 71, 69 71
             C 78 71, 78 35, 87 35"
        />
      </g>
    </svg>
  );
}
