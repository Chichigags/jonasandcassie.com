/**
 * Closing — lake image graded to match hero warmth; soft landing.
 */
export function LakeFooter() {
  return (
    <footer
      id="lake-footer"
      className="relative isolate mt-14 w-full overflow-hidden bg-paper md:mt-20"
    >
      <div className="relative h-[42svh] min-h-[280px] w-full md:h-[48svh]">
        <img
          src="/images/footer-lake.png"
          alt="Calm lake at golden hour, soft clouds over a faint mountain horizon"
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            objectPosition: 'center bottom',
            filter: 'saturate(0.93) contrast(0.94) brightness(1.02)',
          }}
          loading="lazy"
          decoding="async"
        />

        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(245,242,236,0.1) 0%, transparent 40%, rgba(245,242,236,0.06) 100%)',
          }}
          aria-hidden
        />

        <div className="absolute inset-0 flex -translate-y-2 items-center justify-center px-4 md:-translate-y-3">
          <div className="text-center">
            <p className="font-script text-[2.35rem] leading-none text-ocean [text-shadow:0_1px_22px_rgba(252,253,255,0.95),0_0_1px_rgba(252,253,255,0.9)] md:text-[3rem]">
              See you by the water.
            </p>
            <p className="mt-4 font-display text-[1.12rem] font-semibold leading-none text-ocean [text-shadow:0_1px_16px_rgba(252,253,255,0.92)] md:text-[1.38rem]">
              Jonas &amp; Cassie
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
