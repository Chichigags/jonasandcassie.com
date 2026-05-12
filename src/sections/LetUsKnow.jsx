import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Reveal } from '../components/Reveal'
import { RsvpSuccessNote } from './RsvpSuccessNote'

const FORMSPREE_ACTION = 'https://formspree.io/f/xvzldrop'

const fieldClass =
  'w-full rounded-none border-0 border-b border-ocean/14 bg-transparent px-0 py-3.5 font-sans text-[0.98rem] text-charcoal outline-none transition-colors placeholder:text-navy/28 focus:border-ocean/40 focus:ring-0 md:text-[1.02rem]'
const textareaClass = `${fieldClass} mt-2.5 w-full resize-none min-h-[3.25rem] max-h-[14rem] overflow-y-auto leading-[1.5]`
/** Match site body copy (e.g. Weekend / Evening blocks). */
const labelClass =
  'block font-sans text-[0.98rem] font-normal leading-[1.78] text-navy-soft md:text-[1.02rem] md:leading-[1.82]'
const optionClass =
  'flex items-center gap-3 font-sans text-[0.98rem] leading-[1.78] text-navy-soft md:text-[1.02rem] md:leading-[1.82]'

/**
 * RSVP — warm ivory field; quiet form; editorial capsule button.
 */
export function LetUsKnow() {
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [successLeaving, setSuccessLeaving] = useState(false)
  const finishDismissRef = useRef(null)

  const dismissSuccessModal = useCallback(() => {
    if (finishDismissRef.current) {
      window.clearTimeout(finishDismissRef.current)
      finishDismissRef.current = null
    }
    setSuccessLeaving(true)
    finishDismissRef.current = window.setTimeout(() => {
      setStatus('idle')
      setSuccessLeaving(false)
      finishDismissRef.current = null
    }, 480)
  }, [])

  useEffect(() => {
    if (status !== 'success') {
      document.body.style.overflow = ''
      return undefined
    }

    document.body.style.overflow = 'hidden'

    return () => {
      if (finishDismissRef.current) {
        window.clearTimeout(finishDismissRef.current)
        finishDismissRef.current = null
      }
      document.body.style.overflow = ''
    }
  }, [status])

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
      className="relative w-full bg-paper px-6 pb-28 pt-14 md:-mt-6 md:px-12 md:pb-32 md:pt-18 lg:pb-36"
    >
      {successModal}

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <Reveal>
          <p className="eyebrow mb-4">YES?</p>
          <h2 className="font-display text-[2.45rem] font-semibold not-italic leading-[1.06] tracking-[-0.015em] text-ocean md:text-[2.85rem]">
            Are you coming?
          </h2>
        </Reveal>

        <Reveal delayClass="reveal-delay-1">
          <form
            className="mx-auto mt-12 max-w-xl space-y-8 text-left"
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
                className={`mt-2.5 w-full ${fieldClass}`}
              />
            </div>

            <fieldset>
              <legend className={labelClass}>
                Will you join any of these as well? (optional)
              </legend>
              <div className="mt-2.5 grid gap-2.5">
                <label className={optionClass}>
                  <input
                    type="checkbox"
                    name="friday_dinner"
                    value="Yes"
                    className="h-3.5 w-3.5 min-h-[0.875rem] min-w-[0.875rem] shrink-0 accent-citrus"
                  />
                  Friday dinner
                </label>
                <label className={optionClass}>
                  <input
                    type="checkbox"
                    name="saturday_brunch"
                    value="Yes"
                    className="h-3.5 w-3.5 min-h-[0.875rem] min-w-[0.875rem] shrink-0 accent-citrus"
                  />
                  Saturday brunch
                </label>
              </div>
            </fieldset>

            <div>
              <label htmlFor="rsvp-message" className={labelClass}>
                Any dietary restrictions?
              </label>
              <textarea
                id="rsvp-message"
                name="message"
                rows={1}
                placeholder="If not, any love or life advice for us?"
                className={textareaClass}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'submitting' || status === 'success'}
              aria-busy={status === 'submitting'}
              className="mx-auto flex min-h-[2.35rem] min-w-[min(100%,14rem)] items-center justify-center rounded-full border border-transparent bg-citrus px-12 py-2 font-sans text-[0.88rem] font-medium tracking-[0.04em] text-ocean transition-[opacity,background-color] duration-200 hover:bg-citrus-deep disabled:cursor-not-allowed disabled:opacity-70 md:min-w-[16.5rem] md:text-[0.9rem]"
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
          <p className="mt-12 font-display text-[1.36rem] font-normal italic leading-snug text-ocean md:text-[1.62rem]">
            A text, message or call is also fine.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
