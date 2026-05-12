/**
 * Hero — meadow photo full-bleed; light veil, type-led (no heavy glow).
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
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(252,253,255,0.05), rgba(252,253,255,0.16))',
        }}
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1100px] flex-col justify-center px-6 py-24 md:px-10 md:py-24 lg:px-12">
        <div className="max-w-2xl [text-shadow:0_1px_10px_rgba(252,253,255,0.45)] md:[text-shadow:0_1px_8px_rgba(252,253,255,0.38)]">
          <p className="font-sans text-[0.78rem] font-semibold uppercase tracking-[0.13em] text-charcoal opacity-0 animate-fade-up md:text-[0.8rem]">
            LUCERNE · AUGUST 1, 2026
          </p>

          <h1 className="mt-6 font-display text-[clamp(2.85rem,5vw+0.6rem,3.85rem)] font-semibold leading-[1.02] tracking-[-0.015em] text-ink opacity-0 animate-fade-up-delay">
            Life, Love &amp; 40
          </h1>

          <p className="mt-5 font-sans text-[0.92rem] font-semibold uppercase tracking-[0.13em] text-charcoal opacity-0 animate-fade-up-slow md:text-[0.94rem]">
            JONAS &amp; CASSIE
          </p>

          <p className="mt-10 font-display text-[1.55rem] font-normal italic leading-tight text-ink/90 opacity-0 animate-fade-up-slow md:text-[1.62rem]">
            One marriage. Two birthdays.
            <br />
            One summer evening by the lake.
          </p>

          <p className="mt-7 max-w-xl font-sans text-[1.02rem] leading-[1.68] text-faded opacity-0 animate-fade-up-slow md:text-[1.03rem] md:leading-[1.72]">
            We&apos;re celebrating a special season of life — our marriage, our
            forties, and the people who make it all meaningful.
          </p>
        </div>
      </div>
    </header>
  )
}
