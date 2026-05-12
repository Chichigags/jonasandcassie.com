import { Reveal } from '../components/Reveal'

/**
 * Gifts — minimal; ocean blue for titles (body stays soft gray).
 */
export function Gifts() {
  return (
    <section
      id="gifts"
      className="atmosphere-bg relative -mt-2 w-full px-6 py-16 md:px-12 md:py-20"
    >
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <p className="eyebrow">ONE LAST THING</p>
          <h2 className="mt-4 font-display text-[2.45rem] font-semibold not-italic leading-[1.06] tracking-[-0.015em] text-ocean md:text-[2.85rem]">
            Gifts
          </h2>
        </Reveal>

        <Reveal delayClass="reveal-delay-1">
          <div className="mx-auto mt-7 max-w-[34rem] font-sans text-[1.02rem] leading-[1.72] text-navy-soft md:text-[1.06rem] md:leading-[1.75]">
            <p>
              Your presence is already the best gift — especially if you&apos;re
              traveling to celebrate with us.
            </p>
          </div>
        </Reveal>

        <div
          className="mx-auto mt-8 h-px max-w-[6rem] bg-gradient-to-r from-transparent via-ocean/18 to-transparent"
          aria-hidden
        />

        <Reveal delayClass="reveal-delay-2">
          <p className="mt-7 font-display text-[1.34rem] font-normal italic leading-snug text-ocean md:text-[1.52rem]">
            Truly — no gifts needed.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
