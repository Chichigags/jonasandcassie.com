import { Reveal } from '../components/Reveal'

/**
 * RSVP. Eyebrow → body request → italic gold close. The italic gold
 * "text, message or call" line sits at the end as the warm sign-off.
 */
export function LetUsKnow() {
  return (
    <section
      id="let-us-know"
      className="relative w-full bg-bone px-6 py-20 md:px-12 md:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <p className="font-sans text-[0.74rem] font-medium uppercase tracking-[0.34em] text-navy/55 md:text-[0.82rem]">
            Say you&apos;re coming?
          </p>
          <h2 className="mt-4 font-display text-[2.4rem] font-medium leading-[1.08] tracking-[-0.005em] text-navy md:text-[3rem]">
            Let us know
          </h2>
        </Reveal>

        <Reveal delayClass="reveal-delay-1">
          <p className="mx-auto mt-8 max-w-xl font-serif text-[1.05rem] leading-relaxed text-navy/85 md:text-[1.12rem]">
            Please let Jonas or Cassie know if you can make it, whether
            you&apos;re bringing a plus one, or if you have any dietary
            restrictions.
          </p>
        </Reveal>

        <Reveal delayClass="reveal-delay-2">
          <p className="mt-9 font-display italic text-[1.4rem] leading-snug text-gold md:text-[1.65rem]">
            A text, message or call is perfect.
          </p>
        </Reveal>

        <Reveal delayClass="reveal-delay-3">
          <p className="mx-auto mt-5 max-w-xl font-serif italic text-[1.05rem] leading-relaxed text-navy/80 md:text-[1.12rem]">
            If you don&apos;t have our number… you might be in the wrong
            place.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
