/**
 * Hero. The original wildflower-meadow photograph runs full-bleed, with
 * a soft white wash so the body type sits cleanly. Title block is held
 * to the left of a wide ~1100px container so the right side stays open
 * to the photograph. EN | DE language toggle pinned top-right.
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
          // Slightly desaturate so the cosmos cluster reads softer
          // and clouds look natural rather than over-saturated.
          filter: 'saturate(0.88) brightness(1.02) contrast(0.97)',
        }}
      />
      {/* Soft warm wash — keeps the sky present while making body type
          readable on the left half of the photo. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(246,244,239,0.30), rgba(246,244,239,0.55))',
        }}
        aria-hidden
      />

      {/* EN | DE language toggle — clearly visible, generous margin. */}
      <nav
        aria-label="Language"
        className="absolute right-8 top-8 z-10 font-sans text-[0.95rem] font-medium uppercase tracking-[0.28em] md:right-12 md:top-10"
      >
        <button
          type="button"
          className="text-navy underline decoration-transparent underline-offset-4 transition-all duration-200 hover:decoration-navy"
        >
          EN
        </button>
        <span aria-hidden className="mx-3 text-navy/40">
          |
        </span>
        <button
          type="button"
          className="text-navy/55 underline decoration-transparent underline-offset-4 transition-all duration-200 hover:text-navy hover:decoration-navy"
        >
          DE
        </button>
      </nav>

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1100px] flex-col justify-center px-6 py-24 md:px-12 md:py-28 lg:px-16">
        <div className="max-w-2xl">
          <p className="font-sans text-[0.78rem] font-medium uppercase tracking-[0.13em] text-navy/65 opacity-0 animate-fade-up md:text-[0.85rem]">
            LUCERNE · AUGUST 1, 2026
          </p>

          <h1 className="mt-6 font-display text-[clamp(2.9rem,7vw,4.8rem)] font-medium leading-[1.02] tracking-[-0.01em] text-navy opacity-0 animate-fade-up-delay">
            Life, Love &amp; 40
          </h1>

          <p className="mt-5 font-sans text-[0.9rem] font-medium uppercase tracking-[0.13em] text-navy/70 opacity-0 animate-fade-up-slow md:text-[1rem]">
            JONAS &amp; CASSIE
          </p>

          <p className="mt-10 font-display italic text-[1.5rem] leading-tight text-gold opacity-0 animate-fade-up-slow md:text-[1.75rem]">
            One marriage. Two forties.
          </p>

          <p className="mt-7 max-w-xl font-sans text-[1.02rem] leading-[1.75] text-navy/85 opacity-0 animate-fade-up-slow md:text-[1.08rem]">
            We thought it deserved a proper celebration. Nothing too formal,
            just a summer evening by the lake, with good people, good food, and
            good drinks.
          </p>

          <p className="mt-10 font-display italic text-[1.4rem] leading-snug text-gold opacity-0 animate-fade-up-slow md:text-[1.65rem]">
            We&apos;d love for you to be part of it.
          </p>
        </div>
      </div>
    </header>
  )
}
