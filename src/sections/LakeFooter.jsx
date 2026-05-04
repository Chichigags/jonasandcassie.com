/**
 * Closing card. Calm sunset-over-lake photograph fills the section. The
 * sky portion at the top stays light, so the closing line and date sit
 * on it with no heavy overlay.
 */
export function LakeFooter() {
  return (
    <footer
      id="lake-footer"
      className="relative isolate w-full overflow-hidden bg-paper"
    >
      <div className="relative h-[42svh] min-h-[280px] w-full md:h-[48svh]">
        <img
          src="/images/footer-lake.png"
          alt="Calm lake at golden hour, soft clouds over a faint mountain horizon"
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            objectPosition: 'center bottom',
            filter: 'saturate(0.92) brightness(1.02)',
          }}
          loading="lazy"
          decoding="async"
        />

        {/* Lightest possible top wash so the closing line stays readable. */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[40%]"
          style={{
            background:
              'linear-gradient(to bottom, rgba(246,244,239,0.35), rgba(246,244,239,0))',
          }}
          aria-hidden
        />

        <div className="absolute inset-x-0 top-12 text-center md:top-20">
          <p className="font-display italic text-[1.7rem] leading-none text-navy md:text-[2.2rem]">
            See you by the water.
          </p>
          <p className="eyebrow mt-3">
            LUCERNE · AUGUST 1, 2026
          </p>
        </div>
      </div>
    </footer>
  )
}
