import { Reveal } from '../components/Reveal'

/**
 * Gifts. Big serif title up top, two-line body, italic gold close.
 * No bouquet image — clean, balanced, centered.
 */
export function Gifts() {
  return (
    <section
      id="gifts"
      className="relative w-full bg-paper px-6 py-16 md:px-12 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <p className="eyebrow">
            ONE LAST THING
          </p>
          <h2 className="mt-4 font-display text-[2.25rem] font-medium italic leading-[1.08] tracking-[-0.005em] text-navy md:text-[2.75rem]">
            Gifts
          </h2>
        </Reveal>

        <Reveal delayClass="reveal-delay-1">
          <div className="mx-auto mt-7 max-w-[34rem] font-sans text-[1rem] leading-[1.72] text-navy/85 md:text-[1.05rem]">
            <p>
              Your presence is already the best gift — especially if you&apos;re
              traveling to celebrate with us.
            </p>
          </div>
        </Reveal>

        <div className="mx-auto mt-8 h-px w-12 bg-gold/20" aria-hidden />

        <Reveal delayClass="reveal-delay-2">
          <p className="mt-7 font-display italic text-[1.32rem] leading-snug text-gold md:text-[1.55rem]">
            Truly — no gifts needed.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
