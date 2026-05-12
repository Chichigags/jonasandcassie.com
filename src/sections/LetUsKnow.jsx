import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Reveal } from '../components/Reveal'
import { RsvpSuccessNote } from './RsvpSuccessNote'

const FORMSPREE_ACTION = 'https://formspree.io/f/xvzldrop'

const fieldClass =
  'rounded-xl border border-navy/10 bg-paper/90 px-5 py-4 font-sans text-[0.98rem] text-charcoal outline-none transition-colors placeholder:text-navy/35 focus:border-ocean focus:ring-1 focus:ring-ocean/12 md:text-[1.02rem]'
const labelClass =
  'block font-sans text-[0.72rem] font-semibold uppercase tracking-[0.13em] text-charcoal'
const optionClass =
  'flex items-center gap-3 font-sans text-[0.98rem] leading-relaxed text-charcoal md:text-[1.02rem]'

/**
 * RSVP — POST to Formspree; success as a quiet floating note (portal).
 */
export function LetUsKnow() {
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [successLeaving, setSuccessLeaving] = useState(false)
  const autoDismissRef = useRef(null)
  const finishDismissRef = useRef(null)

  const dismissSuccessModal = useCallback(() => {
    if (autoDismissRef.current) {
      window.clearTimeout(autoDismissRef.current)
      autoDismissRef.current = null
    }
    if (finishDismissRef.current) {
      window.clearTimeout(finishDismissRef.current)
      finishDismissRef.current = null
    }
    setSuccessLeaving(true)
    finishDismissRef.current = window.setTimeout(() => {
      setStatus('idle')
      setSuccessLeaving(false)
      finishDismissRef.current = null
    }, 300)
  }, [])

  useEffect(() => {
    if (status !== 'success') {
      document.body.style.overflow = ''
      return undefined
    }

    document.body.style.overflow = 'hidden'
    autoDismissRef.current = window.setTimeout(dismissSuccessModal, 5400)

    return () => {
      if (autoDismissRef.current) {
        window.clearTimeout(autoDismissRef.current)
        autoDismissRef.current = null
      }
      if (finishDismissRef.current) {
        window.clearTimeout(finishDismissRef.current)
        finishDismissRef.current = null
      }
      document.body.style.overflow = ''
    }
  }, [status, dismissSuccessModal])

  async function handleSubmit(e) {
    e.preventDefault()
    e.stopPropagation()
    const form = e.currentTarget
    setStatus('submitting')
    setErrorMessage('')

    try {
      const res = await fetch(FORMSPREE_ACTION, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })

      const body = await res.json().catch(() => ({}))

      const succeeded = res.ok || body?.ok === true

      if (succeeded) {
        form.reset()
        setSuccessLeaving(false)
        setStatus('success')
        return
      }

      const fromErrors =
        Array.isArray(body.errors) &&
        body.errors.map((err) => err.message).filter(Boolean).join('; ')
      setErrorMessage(
        fromErrors ||
          body.error ||
          `Could not send (${res.status}). Check Formspree domain settings or try again.`,
      )
      setStatus('error')
    } catch {
      setErrorMessage('Network error. Please try again.')
      setStatus('error')
    }
  }

  const successModal =
    status === 'success' && typeof document !== 'undefined'
      ? createPortal(
          <RsvpSuccessNote
            leaving={successLeaving}
            onDismiss={dismissSuccessModal}
          />,
          document.body,
        )
      : null

  return (
    <section
      id="let-us-know"
      className="relative w-full bg-air px-6 py-24 md:px-12 md:py-28 lg:py-32"
    >
      {successModal}

      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <p className="eyebrow mb-4">YES?</p>
          <h2 className="font-display text-[2.45rem] font-semibold not-italic leading-[1.06] tracking-[-0.015em] text-ocean md:text-[2.85rem]">
            Are you coming?
          </h2>
        </Reveal>

        <Reveal delayClass="reveal-delay-1">
          <form
            className="mx-auto mt-11 max-w-xl space-y-9 text-left"
            onSubmit={(e) => {
              void handleSubmit(e)
            }}
          >
            <div>
              <label htmlFor="rsvp-name" className={labelClass}>
                Name(s)
              </label>
              <input
                id="rsvp-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Your name (+1, if any)"
                className={`mt-3 w-full ${fieldClass}`}
              />
            </div>

            <fieldset>
              <legend className={labelClass}>
                Will you join any of these as well? (optional)
              </legend>
              <div className="mt-3 grid gap-3">
                <label className={optionClass}>
                  <input
                    type="checkbox"
                    name="friday_dinner"
                    value="Yes"
                    className="h-4 w-4 min-h-[1rem] min-w-[1rem] shrink-0 accent-ocean"
                  />
                  Friday dinner
                </label>
                <label className={optionClass}>
                  <input
                    type="checkbox"
                    name="saturday_brunch"
                    value="Yes"
                    className="h-4 w-4 min-h-[1rem] min-w-[1rem] shrink-0 accent-ocean"
                  />
                  Saturday brunch
                </label>
              </div>
            </fieldset>

            <div>
              <label htmlFor="rsvp-message" className={labelClass}>
                Any dietary restrictions? If not, any love or life advice for
                us?
              </label>
              <textarea
                id="rsvp-message"
                name="message"
                rows="4"
                className={`mt-3 w-full resize-none ${fieldClass}`}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'submitting' || status === 'success'}
              aria-busy={status === 'submitting'}
              className="mx-auto block min-h-[2.75rem] rounded-xl bg-citrus px-8 py-3.5 font-sans text-[0.95rem] font-semibold text-cream transition-[opacity,background-color] duration-200 hover:bg-citrus-deep disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === 'submitting' ? 'Sending…' : 'Let us know'}
            </button>

            {status === 'error' && errorMessage && (
              <p
                className="text-center font-sans text-[0.92rem] text-navy-soft"
                role="alert"
              >
                {errorMessage}
              </p>
            )}
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
