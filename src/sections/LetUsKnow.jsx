import { Reveal } from '../components/Reveal'

const fieldClass =
  'rounded-xl border border-navy/10 bg-paper/90 px-5 py-4 font-sans text-[0.98rem] text-navy outline-none transition-colors placeholder:text-navy/35 focus:border-ocean focus:ring-1 focus:ring-ocean/12 md:text-[1.02rem]'
const labelClass =
  'block font-sans text-[0.72rem] font-semibold uppercase tracking-[0.13em] text-ocean'
const optionClass =
  'flex items-center gap-3 font-sans text-[0.98rem] leading-relaxed text-navy-soft md:text-[1.02rem]'

/**
 * RSVP — airy white, typography-led; ocean button as the single strong anchor.
 */
export function LetUsKnow() {
  return (
    <section
      id="let-us-know"
      className="relative w-full bg-air px-6 py-24 md:px-12 md:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <p className="eyebrow mb-4">YES?</p>
          <h2 className="font-display text-[2.45rem] font-semibold not-italic leading-[1.06] tracking-[-0.015em] text-ocean md:text-[2.85rem]">
            Are you coming?
          </h2>
        </Reveal>

        <Reveal delayClass="reveal-delay-1">
          <form className="mx-auto mt-11 max-w-xl space-y-9 text-left">
            <div>
              <label htmlFor="rsvp-name" className={labelClass}>
                Name(s)
              </label>
              <input
                id="rsvp-name"
                name="name"
                type="text"
                placeholder="Your name (+1, if any)"
                className={`mt-3 w-full ${fieldClass}`}
              />
            </div>

            <fieldset>
              <legend className={labelClass}>
                Will you join any of these as well? (optional)
              </legend>
              <div className="mt-3 grid gap-3">
                {['Friday dinner', 'Saturday brunch'].map((option) => (
                  <label key={option} className={optionClass}>
                    <input
                      type="checkbox"
                      name="optional-weekend-parts"
                      value={option}
                      className="h-4 w-4 accent-ocean"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </fieldset>

            <div>
              <label htmlFor="notes" className={labelClass}>
                Any dietary restrictions? If not, any love or life advice for
                us?
              </label>
              <textarea
                id="notes"
                name="notes"
                rows="4"
                className={`mt-3 w-full resize-none ${fieldClass}`}
              />
            </div>

            <button
              type="submit"
              className="mx-auto block rounded-xl bg-ocean px-8 py-3.5 font-sans text-[0.95rem] font-semibold text-cream transition-colors hover:bg-ocean-deep"
            >
              Let us know
            </button>
          </form>
        </Reveal>

        <Reveal delayClass="reveal-delay-2">
          <p className="mt-11 font-display text-[1.36rem] font-normal italic leading-snug text-ocean md:text-[1.62rem]">
            A text, message or call is also fine.
          </p>
        </Reveal>

        <Reveal delayClass="reveal-delay-3">
          <p className="mx-auto mt-6 max-w-xl font-sans text-[0.92rem] leading-relaxed text-navy-soft md:text-[0.96rem]">
            If you don&apos;t have our number… you&apos;re probably in the
            wrong place.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
