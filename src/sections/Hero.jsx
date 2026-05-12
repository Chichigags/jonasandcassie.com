/**
 * Hero — meadow; airy type rhythm; modest lower margin (not oversized bottom pad).
 */
export function Hero() {
  return (
    <header className="relative isolate w-full overflow-hidden">
      <img
        src="/images/hero-meadow.png"
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
        style={{
          objectPosition: 'center center',
          filter: 'saturate(0.92) contrast(0.96) brightness(1.02)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(245,242,236,0.12) 0%, rgba(245,242,236,0.06) 45%, transparent 100%)',
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(252,253,255,0.06), rgba(252,253,255,0.14))',
        }}
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1100px] flex-col justify-center px-6 pb-20 pt-24 md:px-12 md:pb-24 md:pt-28 lg:px-16 lg:pb-28">
        <div className="max-w-2xl [text-shadow:0_1px_18px_rgba(252,253,255,0.8)]">
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
    </header>
  )
}
