/**
 * Organic section bridges — hero wave sits outside photo overflow clip.
 */

/** Hero → story: visible soft wave into warm ivory */
export function FlowWaveHeroBottom() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 z-[4] flex justify-center"
      aria-hidden
    >
      <svg
        className="w-[min(118vw,1680px)] shrink-0 text-paper drop-shadow-[0_-8px_24px_rgba(30,45,120,0.12)]"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        style={{ height: 'clamp(3.25rem, 8.5vw, 5.75rem)' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M0,52 C220,6 460,102 720,38 C980,-12 1240,92 1440,46 L1440,120 L0,120 Z"
        />
      </svg>
    </div>
  )
}

/** Ivory → full-bleed photo: soft scallop */
export function FlowCurveToPhoto() {
  return (
    <div
      className="pointer-events-none absolute bottom-0 left-1/2 z-[2] w-[min(125vw,1800px)] -translate-x-1/2 translate-y-[38%] text-paper md:translate-y-[42%]"
      aria-hidden
    >
      <svg
        className="block w-full"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        style={{ height: 'clamp(3rem, 9vw, 6.5rem)' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M0,0 L1440,0 L1440,58 Q720,102 0,58 Z"
        />
      </svg>
    </div>
  )
}
