import { Reveal } from '../components/Reveal'

const fieldClass =
  'rounded-xl border border-navy/10 bg-[#EFEDE7]/70 px-5 py-4 font-sans text-[0.98rem] text-navy outline-none transition-colors placeholder:text-navy/35 focus:border-celadon/60 md:text-[1.02rem]'
const labelClass =
  'block font-sans text-[0.76rem] font-medium uppercase tracking-[0.13em] text-navy/80'
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
          <p className="eyebrow mb-4">YES?</p>
          <h2 className="font-display text-[2.25rem] font-medium not-italic leading-[1.08] tracking-[-0.005em] text-navy md:text-[2.75rem]">
            Are you coming?
          </h2>
        </Reveal>

        <Reveal delayClass="reveal-delay-1">
          <form className="mx-auto mt-9 max-w-xl space-y-8 text-left">
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
                      className="h-4 w-4 accent-celadon"
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
              className="mx-auto block rounded-xl bg-celadon px-7 py-3.5 font-sans text-[0.95rem] font-medium text-white transition hover:brightness-95"
            >
              Let us know
            </button>
          </form>
        </Reveal>

        <Reveal delayClass="reveal-delay-2">
          <p className="mt-9 font-display italic text-[1.4rem] leading-snug text-gold-deep md:text-[1.65rem]">
            A text, message or call is also fine.
          </p>
        </Reveal>

        <Reveal delayClass="reveal-delay-3">
          <p className="mx-auto mt-5 max-w-xl font-sans italic text-[0.92rem] leading-relaxed text-navy/55 md:text-[0.96rem]">
            If you don&apos;t have our number… you&apos;re probably in the
            wrong place.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
