import { Reveal } from '../components/Reveal'

/**
 * Gifts — minimal; recedes visually.
 */
export function Gifts() {
  return (
    <section
      id="gifts"
      className="relative w-full bg-paper px-6 py-14 md:px-12 md:py-18"
    >
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <p className="eyebrow text-ocean/80">ONE LAST THING</p>
          <h2 className="mt-3 font-display text-[2.15rem] font-semibold not-italic leading-[1.08] tracking-[-0.015em] text-ocean/92 md:text-[2.45rem]">
            Gifts
          </h2>
        </Reveal>

        <Reveal delayClass="reveal-delay-1">
          <div className="mx-auto mt-6 max-w-[34rem] font-sans text-[0.98rem] leading-[1.78] text-navy-soft/95 md:text-[1.02rem] md:leading-[1.8]">
            <p>
              Your presence is already the best gift — especially if you&apos;re
              traveling to celebrate with us.
            </p>
          </div>
        </Reveal>

        <div className="mx-auto mt-6 h-px w-9 bg-ocean/14" aria-hidden />

        <Reveal delayClass="reveal-delay-2">
          <p className="mt-5 font-display text-[1.22rem] font-normal italic leading-snug text-ocean/88 md:text-[1.36rem]">
            Truly — no gifts needed.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
