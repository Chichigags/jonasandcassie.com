import { Reveal } from '../components/Reveal'

/**
 * Gifts — minimal; ocean blue for titles (body stays soft gray).
 */
export function Gifts() {
  return (
    <section
      id="gifts"
      className="relative w-full section-flow px-6 pt-24 pb-32 md:px-12 md:pt-28 md:pb-40"
    >
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <p className="eyebrow">ONE LAST THING</p>
          <h2 className="mt-5 font-display text-[2.45rem] font-semibold not-italic leading-[1.06] tracking-[-0.015em] text-ocean md:text-[2.85rem]">
            Gifts
          </h2>
        </Reveal>

        <Reveal delayClass="reveal-delay-1">
          <div className="mx-auto mt-8 max-w-[34rem] font-sans text-[1.02rem] leading-[1.82] text-navy-soft md:mt-9 md:text-[1.06rem] md:leading-[1.86]">
            <p>
              Your presence is already the best gift — especially if you&apos;re
              traveling to celebrate with us.
            </p>
          </div>
        </Reveal>

        <div
          className="mx-auto mt-10 h-px w-16 bg-stone-300/80 md:mt-11 md:w-20"
          aria-hidden
        />

        <Reveal delayClass="reveal-delay-2">
          <p className="mx-auto mt-12 max-w-md px-2 pt-2 font-display text-[1.42rem] font-normal italic leading-snug text-ocean md:mt-14 md:px-0 md:text-[1.58rem] md:leading-snug">
            Truly — no gifts needed.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
