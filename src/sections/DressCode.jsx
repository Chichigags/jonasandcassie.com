import { Reveal } from '../components/Reveal'

/**
 * Dress code — editorial lake: clarity over dreamy blur; restrained type.
 */
export function DressCode() {
  return (
    <section
      id="dress-code"
      className="relative isolate min-h-[420px] w-full overflow-hidden md:min-h-[480px]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 scale-[1.03]"
        style={{ filter: 'blur(3px)' }}
      >
        <img
          src="/images/dresscode-sunset-lake.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            objectPosition: 'center center',
            filter:
              'saturate(0.93) brightness(1) contrast(1.04)',
          }}
        />
      </div>

      {/* Tame peripheral bokeh slightly — keep opacity low so it stays editorial, not fog */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(252,251,248,0.22) 0%, transparent 22%, transparent 78%, rgba(252,251,248,0.2) 100%)',
        }}
      />

      {/* Lighter veil — airy, not misty */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(252,253,255,0.66) 0%, rgba(252,253,255,0.28) 34%, rgba(252,253,255,0.06) 54%, transparent 74%)',
        }}
      />

      <div className="relative mx-auto flex min-h-[420px] max-w-[1100px] flex-col items-center justify-center px-6 py-24 text-center md:min-h-[480px] md:px-14 md:py-28 lg:px-16">
        <div className="max-w-xl md:max-w-2xl">
          <Reveal>
            <p className="eyebrow !text-charcoal">DRESS CODE</p>
            <h2 className="mt-4 font-display text-[2.45rem] font-semibold not-italic leading-[1.05] tracking-[-0.015em] text-[#1a2e4a] [text-shadow:0_1px_2px_rgba(255,255,255,0.45)] md:text-[2.85rem]">
              Summer chic
            </h2>
          </Reveal>

          <Reveal delayClass="reveal-delay-1">
            <div className="mt-7 font-sans text-[1rem] font-normal leading-[1.72] text-charcoal md:text-[1.05rem] md:leading-[1.75]">
              <p>Boat-friendly, dance-friendly.</p>
            </div>
          </Reveal>

          <Reveal delayClass="reveal-delay-2">
            <p className="mt-8 font-display text-[1.26rem] font-normal italic leading-snug tracking-[-0.012em] text-[#7a6f66] md:text-[1.38rem]">
              No black tie. No pressure.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
