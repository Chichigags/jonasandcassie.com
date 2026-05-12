/**
 * Organic section bridges — soft waves (fill: text-paper = #F5F2EC).
 */

/** Hero → story: gentle wave into warm ivory */
export function FlowWaveHeroBottom() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] flex justify-center text-paper"
      aria-hidden
    >
      <svg
        className="w-[min(118vw,1680px)] shrink-0"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        style={{ height: 'clamp(2.5rem, 6.5vw, 4.75rem)' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M0,48 C240,5 480,88 720,38 C960,-5 1200,72 1440,44 L1440,100 L0,100 Z"
        />
      </svg>
    </div>
  )
}

/** Ivory → full-bleed photo: soft scallop (paper overlaps next band slightly) */
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
