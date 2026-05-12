import { Reveal } from '../components/Reveal'

/**
 * Dress code — warm lake visible through soft white lift; type centered.
 */
export function DressCode() {
  return (
    <section
      id="dress-code"
      className="relative isolate min-h-[420px] w-full overflow-hidden md:min-h-[480px]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 scale-[1.06]"
        style={{ filter: 'blur(6px)' }}
      >
        <img
          src="/images/dresscode-sunset-lake.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            objectPosition: 'center center',
            filter: 'saturate(0.98) brightness(1.02) contrast(0.96)',
          }}
        />
      </div>

      {/* Light white veil only — keeps golden-hour colour in the scene, no blue/purple cast */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(252,253,255,0.82) 0%, rgba(252,253,255,0.45) 32%, rgba(252,253,255,0.14) 52%, transparent 72%)',
        }}
      />

      <div className="relative mx-auto flex min-h-[420px] max-w-[1100px] flex-col items-center justify-center px-6 py-24 text-center md:min-h-[480px] md:px-14 md:py-28 lg:px-16">
        <div className="max-w-xl md:max-w-2xl">
          <div className="[text-shadow:0_1px_1px_rgba(255,255,255,0.95),0_0_12px_rgba(252,253,255,0.65)]">
            <Reveal>
              <p className="eyebrow !text-charcoal">DRESS CODE</p>
              <h2 className="mt-4 font-display text-[2.45rem] font-semibold not-italic leading-[1.05] tracking-[-0.015em] text-ocean md:text-[2.85rem]">
                Summer chic
              </h2>
            </Reveal>

            <Reveal delayClass="reveal-delay-1">
              <div className="mt-7 font-sans text-[1rem] font-normal leading-[1.72] text-charcoal md:text-[1.05rem] md:leading-[1.75]">
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
