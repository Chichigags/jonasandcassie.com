import { Reveal } from '../components/Reveal'

/**
 * Gifts — quiet close; ink-led type.
 */
export function Gifts() {
  return (
    <section
      id="gifts"
      className="relative w-full bg-paper px-6 py-16 md:px-10 md:py-18 lg:py-20"
    >
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <p className="eyebrow">ONE LAST THING</p>
          <h2 className="mt-4 font-display text-[2.45rem] font-semibold not-italic leading-[1.06] tracking-[-0.015em] text-ink md:text-[2.52rem]">
            Gifts
          </h2>
        </Reveal>

        <Reveal delayClass="reveal-delay-1">
          <div className="mx-auto mt-7 max-w-[34rem] font-sans text-[1.02rem] leading-[1.72] text-faded md:text-[1.03rem] md:leading-[1.75]">
            <p>
              Your presence is already the best gift — especially if you&apos;re
              traveling to celebrate with us.
            </p>
          </div>
        </Reveal>

        <div className="mx-auto mt-8 h-px w-12 bg-ink/14" aria-hidden />

        <Reveal delayClass="reveal-delay-2">
          <p className="mt-7 font-display italic text-[1.34rem] font-normal leading-snug text-ink/90 md:text-[1.42rem]">
            Truly — no gifts needed.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
