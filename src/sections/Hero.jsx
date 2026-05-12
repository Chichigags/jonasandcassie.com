import { FlowWaveHeroBottom } from '../components/FlowWave'

/**
 * Hero — meadow; airy cool sky, softer sun, gentle wave into ivory story.
 */
export function Hero() {
  return (
    <header className="relative isolate w-full overflow-hidden pb-[clamp(2.5rem,6vw,4rem)]">
      <img
        src="/images/hero-meadow.png"
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
        style={{
          objectPosition: 'center center',
          filter: 'saturate(0.88) contrast(0.94) brightness(1.05)',
        }}
      />
      {/* Cool sky air — less heavy warmth */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[rgba(220,235,252,0.22)] via-transparent via-35% to-transparent"
        aria-hidden
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(252,253,255,0.2) 0%, transparent 42%, rgba(245,242,236,0.08) 78%, rgba(245,242,236,0.35) 100%)',
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, transparent 55%, rgba(255,255,255,0.22) 100%)',
        }}
        aria-hidden
      />

      <div className="relative z-[2] mx-auto flex min-h-[100svh] max-w-[1100px] flex-col justify-center px-6 pb-16 pt-24 md:px-12 md:pb-20 md:pt-28 lg:px-16 lg:pb-24">
        <div className="max-w-2xl [text-shadow:0_1px_20px_rgba(252,253,255,0.88)]">
          <p className="font-sans text-[0.78rem] font-semibold uppercase tracking-[0.13em] text-charcoal opacity-0 animate-fade-up md:text-[0.82rem]">
            LUCERNE · AUGUST 1, 2026
          </p>

          <h1 className="mt-7 font-display text-[clamp(3rem,7.2vw,5rem)] font-semibold leading-[1.06] tracking-[-0.015em] text-ocean opacity-0 animate-fade-up-delay">
            Life, Love &amp; 40
          </h1>

          <p className="mt-7 font-sans text-[0.92rem] font-semibold uppercase tracking-[0.13em] text-charcoal opacity-0 animate-fade-up-slow md:text-[1rem]">
            JONAS &amp; CASSIE
          </p>

          <p className="mt-11 font-display italic text-[1.55rem] font-normal leading-[1.38] text-ocean opacity-0 animate-fade-up-slow md:text-[1.82rem] md:leading-[1.36]">
            One marriage. Two birthdays.
            <br />
            One summer evening by the lake.
          </p>

          <p className="mt-9 max-w-xl font-sans text-[1.02rem] leading-[1.78] text-navy-soft opacity-0 animate-fade-up-slow md:text-[1.08rem] md:leading-[1.8]">
            We&apos;re celebrating a special season of life — our marriage, our
            forties, and the people who make it all meaningful.
          </p>
        </div>
      </div>

      <FlowWaveHeroBottom />
    </header>
  )
}
