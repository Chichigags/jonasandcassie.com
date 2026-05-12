import { Reveal } from '../components/Reveal'

/**
 * Dress code — full-bleed lake field, airy sky, editorial type (not poster-in-a-box).
 */
export function DressCode() {
  return (
    <section id="dress-code" className="relative z-[1] -mt-8 md:-mt-14">
      <div className="relative mx-auto min-h-[min(70svh,620px)] max-w-[min(100%,1240px)] overflow-hidden rounded-t-[2.25rem] shadow-[0_-8px_40px_-28px_rgba(30,45,120,0.07)] md:min-h-[min(68svh,580px)] md:rounded-t-[3.25rem] lg:rounded-t-[4rem]">
        <img
          src="/images/dresscode-hero-lake.png"
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            objectPosition: 'center 36%',
            filter: 'saturate(0.9) contrast(0.93) brightness(1.04)',
          }}
        />

        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[rgba(225,238,252,0.42)] via-transparent via-45% to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(245,242,236,0.35)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_18%,rgba(255,255,255,0.22),transparent_62%)]"
          aria-hidden
        />

        <div className="relative mx-auto flex min-h-[min(70svh,620px)] max-w-[1100px] flex-col items-center px-6 pb-20 pt-[clamp(3.5rem,12vh,6rem)] text-center md:min-h-[min(68svh,580px)] md:px-12 md:pb-24 md:pt-[clamp(4rem,11vh,5.5rem)] lg:px-14">
          <div className="max-w-xl">
            <Reveal>
              <p className="eyebrow !text-ocean/90 [text-shadow:0_1px_12px_rgba(255,255,255,0.9)]">
                DRESS CODE
              </p>
              <h2 className="mt-5 font-display text-[clamp(2.25rem,5vw,2.65rem)] font-semibold not-italic leading-[1.08] tracking-[-0.02em] text-citrus [text-shadow:0_1px_14px_rgba(255,255,255,0.95),0_0_1px_rgba(255,255,255,0.8)] md:mt-6">
                Summer chic
              </h2>
              <div
                className="mx-auto mt-5 h-px w-14 bg-gradient-to-r from-transparent via-citrus/70 to-transparent md:mt-6 md:w-16"
                aria-hidden
              />
            </Reveal>

            <Reveal delayClass="reveal-delay-1">
              <div className="mt-8 font-sans text-[1rem] font-normal leading-[1.75] text-ocean/95 [text-shadow:0_1px_10px_rgba(255,255,255,0.88)] md:text-[1.05rem] md:leading-[1.78]">
                <p>Boat-friendly, dance-friendly.</p>
              </div>
            </Reveal>

            <Reveal delayClass="reveal-delay-2">
              <p className="mt-9 font-display text-[1.22rem] font-normal italic leading-snug tracking-[-0.01em] text-ocean [text-shadow:0_1px_12px_rgba(255,255,255,0.9)] md:mt-10 md:text-[1.3rem]">
                No black tie. No pressure.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
