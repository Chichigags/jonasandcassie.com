import { Reveal } from '../components/Reveal'

/**
 * Gifts. Big serif title up top, two-line body, italic gold close.
 * No bouquet image — clean, balanced, centered.
 */
export function Gifts() {
  return (
    <section
      id="gifts"
      className="relative w-full bg-paper px-6 py-20 md:px-12 md:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <p className="font-sans text-[0.74rem] font-medium uppercase tracking-[0.34em] text-navy/55 md:text-[0.82rem]">
            One last thing
          </p>
          <h2 className="mt-4 font-display text-[2.4rem] font-medium leading-[1.08] tracking-[-0.005em] text-navy md:text-[3rem]">
            Gifts
          </h2>
        </Reveal>

        <Reveal delayClass="reveal-delay-1">
          <div className="mx-auto mt-8 max-w-xl space-y-2 font-serif text-[1.05rem] leading-relaxed text-navy/85 md:text-[1.12rem]">
            <p>Your presence is already the best gift for us</p>
            <p>— especially if you&apos;re traveling to celebrate together.</p>
          </div>
        </Reveal>

        <Reveal delayClass="reveal-delay-2">
          <p className="mt-9 font-display italic text-[1.4rem] leading-snug text-gold md:text-[1.65rem]">
            Truly — no gifts needed.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
