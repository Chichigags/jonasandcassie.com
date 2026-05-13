/**
 * Closing — lake band; minimal top fade into paper only.
 */
export function LakeFooter() {
  return (
    <footer
      id="lake-footer"
      className="relative isolate -mt-8 w-full overflow-hidden md:-mt-10"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-24 bg-gradient-to-b from-paper via-paper/70 to-transparent md:h-32" aria-hidden />

      <div className="relative h-[42svh] min-h-[280px] w-full md:h-[48svh]">
        <img
          src="/images/footer-lake.png"
          alt="Calm lake at golden hour, soft clouds over a faint mountain horizon"
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            objectPosition: 'center bottom',
            filter: 'saturate(0.94) contrast(0.94) brightness(1.02)',
          }}
          loading="lazy"
          decoding="async"
        />

        <div className="absolute inset-0 z-[2] flex items-center justify-center px-4 py-10 md:py-14">
          <div className="max-w-lg text-center">
            <p className="font-script text-[2.35rem] leading-none text-ocean md:text-[3rem]">
              See you by the water.
            </p>
            <p className="mt-8 font-sans text-[0.88rem] font-normal tracking-[0.04em] text-stone-700 md:mt-10 md:text-[0.95rem]">
              Jonas &amp; Cassie
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
