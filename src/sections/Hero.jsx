/**
 * Hero — meadow; light bottom fade into ivory; no stacked veils or wave SVG.
 */
export function Hero() {
  return (
    <header className="relative isolate w-full">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/images/hero-meadow.png"
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            objectPosition: 'center center',
            filter: 'saturate(0.94) contrast(0.96) brightness(1.03)',
          }}
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[min(28vh,12rem)] bg-gradient-to-t from-paper from-15% to-transparent"
          aria-hidden
        />
      </div>

      <div className="relative z-[1] mx-auto flex min-h-[100svh] max-w-[1100px] flex-col justify-center px-6 pb-20 pt-24 md:px-12 md:pb-24 md:pt-28 lg:px-16 lg:pb-28">
        <div className="max-w-2xl">
          <p className="font-sans text-[0.78rem] font-semibold uppercase tracking-[0.13em] text-charcoal opacity-0 animate-fade-up md:text-[0.82rem]">
            LUCERNE · AUGUST 1, 2026
          </p>

          <h1 className="mt-7 font-display text-[clamp(3rem,7.2vw,5rem)] font-semibold leading-[1.06] tracking-[-0.015em] text-ocean opacity-0 animate-fade-up-delay">
            Life, Love &amp; 40
          </h1>

          <p className="mt-7 font-sans text-[0.92rem] font-semibold uppercase tracking-[0.13em] text-charcoal opacity-0 animate-fade-up-slow md:text-[1rem]">
            JONAS &amp; CASSIE
          </p>

          <p className="mt-10 font-display italic text-[1.55rem] font-normal leading-tight text-ocean opacity-0 animate-fade-up-slow md:mt-11 md:text-[1.82rem] md:leading-[1.36]">
            One marriage. Two birthdays.
            <br />
            One summer evening by the lake.
          </p>

          <p className="mt-7 max-w-xl font-sans text-[1.02rem] leading-[1.72] text-navy-soft opacity-0 animate-fade-up-slow md:mt-9 md:text-[1.08rem] md:leading-[1.75]">
            We&apos;re celebrating a special season of life — our marriage, our
            forties, and the people who make it all meaningful.
          </p>
        </div>
      </div>
    </header>
  )
}
