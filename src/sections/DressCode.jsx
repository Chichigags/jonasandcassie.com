import { Reveal } from '../components/Reveal'

/**
 * Dress code — soft lake photo, darkened for type; centered, no white panel.
 */
export function DressCode() {
  return (
    <section
      id="dress-code"
      className="relative isolate min-h-[420px] w-full overflow-hidden md:min-h-[480px]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 scale-[1.08]"
        style={{ filter: 'blur(9px)' }}
      >
        <img
          src="/images/dresscode-sunset-lake.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            objectPosition: 'center center',
            filter:
              'saturate(0.93) brightness(0.98) contrast(0.94) hue-rotate(-3deg)',
          }}
        />
      </div>

      {/* Darken scene for legibility — no white veil */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[rgba(7,10,42,0.5)] via-[rgba(10,22,128,0.42)] to-[rgba(10,22,128,0.55)]"
      />

      <div className="relative mx-auto flex min-h-[420px] max-w-[1100px] flex-col items-center justify-center px-6 py-24 text-center md:min-h-[480px] md:px-14 md:py-28 lg:px-16">
        <div className="max-w-xl md:max-w-2xl">
          <div className="[text-shadow:0_1px_2px_rgba(0,0,0,0.35)]">
            <Reveal>
              <p className="eyebrow !text-cream/75">DRESS CODE</p>
              <h2 className="mt-4 font-display text-[2.45rem] font-semibold not-italic leading-[1.05] tracking-[-0.015em] text-cream md:text-[2.85rem]">
                Summer chic
              </h2>
            </Reveal>

            <Reveal delayClass="reveal-delay-1">
              <div className="mt-7 font-sans text-[1rem] font-normal leading-[1.72] text-cream/88 md:text-[1.05rem] md:leading-[1.75]">
                <p>Boat-friendly, dance-friendly.</p>
              </div>
            </Reveal>

            <Reveal delayClass="reveal-delay-2">
              <p className="mt-8 font-display text-[1.32rem] font-normal italic leading-snug text-citrus md:text-[1.48rem]">
                No black tie. No pressure.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
