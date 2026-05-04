import { Reveal } from '../components/Reveal'

const fieldClass =
  'rounded-xl border border-navy/15 bg-paper/70 px-4 py-3 font-sans text-[0.98rem] text-navy outline-none transition-colors placeholder:text-navy/35 focus:border-gold/70 md:text-[1.02rem]'
const labelClass =
  'block font-sans text-[0.76rem] font-medium uppercase tracking-[0.13em] text-navy/60'
const optionClass =
  'flex items-center gap-3 font-sans text-[0.98rem] leading-relaxed text-navy/80 md:text-[1.02rem]'

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
          <h2 className="font-display text-[2.4rem] font-medium leading-[1.08] tracking-[-0.005em] text-navy md:text-[3rem]">
            Let us know
          </h2>
          <p className="eyebrow mt-4">SO WE CAN PLAN THINGS PROPERLY.</p>
        </Reveal>

        <Reveal delayClass="reveal-delay-1">
          <form className="mx-auto mt-9 max-w-xl space-y-7 text-left">
            <div>
              <label htmlFor="rsvp-name" className={labelClass}>
                Name(s)
              </label>
              <input
                id="rsvp-name"
                name="name"
                type="text"
                placeholder="Your name (and your plus one, if you're bringing someone)"
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
                      className="h-4 w-4 accent-gold"
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
          </form>
        </Reveal>

        <Reveal delayClass="reveal-delay-2">
          <p className="mt-9 font-display italic text-[1.4rem] leading-snug text-gold md:text-[1.65rem]">
            A text, message, or call works too — whatever&apos;s easiest.
          </p>
        </Reveal>

        <Reveal delayClass="reveal-delay-3">
          <p className="mx-auto mt-5 max-w-xl font-sans italic text-[1rem] leading-relaxed text-navy/70 md:text-[1.05rem]">
            If you don&apos;t have our number… you&apos;re probably in the
            wrong place.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
