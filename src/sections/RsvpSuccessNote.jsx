import noteImg from '../assets/rsvp-success-note.png'

/**
 * RSVP success — handwritten note fades in, slightly tilted like tape on wall; × to close.
 */
export function RsvpSuccessNote({ leaving, onDismiss }) {
  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center px-5 py-10 transition-[opacity,background-color] duration-500 ease-out md:px-8 ${
        leaving ? 'pointer-events-none bg-transparent opacity-0' : 'bg-ocean/[0.07] opacity-100'
      }`}
      role="presentation"
      onClick={(e) => {
        if (e.target === e.currentTarget) onDismiss()
      }}
    >
      <div
        className={`relative mx-auto max-w-[min(92vw,22rem)] md:max-w-[min(88vw,24rem)] ${
          leaving
            ? 'pointer-events-none scale-[0.98] opacity-0 transition-all duration-[420ms] ease-out'
            : 'animate-rsvp-photo-in'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="RSVP received"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="sr-only">
          Nice, Jonas, Cassie and Riva can&apos;t wait to see you this summer.
        </p>

        <button
          type="button"
          onClick={onDismiss}
          className="absolute -right-1 -top-1 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-paper/90 text-[1.15rem] font-light leading-none text-ocean/55 shadow-postcard ring-1 ring-ocean/10 transition-colors hover:bg-paper hover:text-ocean/75 md:right-0 md:top-0"
          aria-label="Close"
        >
          ×
        </button>

        <div className="-rotate-[2.25deg] origin-center shadow-[0_18px_40px_-22px_rgba(30,45,120,0.18),0_6px_16px_-8px_rgba(30,45,120,0.1)] ring-1 ring-ocean/[0.06]">
          <img
            src={noteImg}
            alt="Handwritten note: Nice, Jonas, Cassie and Riva can’t wait to see you this summer."
            className="block h-auto w-full rounded-[2px]"
            decoding="async"
          />
        </div>
      </div>
    </div>
  )
}
