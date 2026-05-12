/**
 * Tiny watercolor-adjacent stems — corner accent only, not a wreath.
 */
function WildflowerCorner() {
  return (
    <svg
      className="pointer-events-none absolute bottom-0 left-0 h-[5.25rem] w-[4.5rem] overflow-visible opacity-[0.42] md:h-[5.75rem] md:w-[5rem]"
      viewBox="0 0 88 104"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient
          id="rsvp-wf-stem"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop stopColor="#A8B8A3" stopOpacity="0.55" />
          <stop offset="1" stopColor="#93B2F8" stopOpacity="0.35" />
        </linearGradient>
        <radialGradient id="rsvp-wf-bloom-a" cx="50%" cy="50%" r="50%">
          <stop stopColor="#FBEDB0" stopOpacity="0.75" />
          <stop offset="1" stopColor="#F1B94C" stopOpacity="0.2" />
        </radialGradient>
        <radialGradient id="rsvp-wf-bloom-b" cx="50%" cy="50%" r="50%">
          <stop stopColor="#93B2F8" stopOpacity="0.5" />
          <stop offset="1" stopColor="#93B2F8" stopOpacity="0.08" />
        </radialGradient>
      </defs>
      <path
        d="M8 96 Q22 72 18 48 Q14 28 24 12"
        stroke="url(#rsvp-wf-stem)"
        strokeWidth="1.15"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M14 88 Q34 70 40 44 Q46 22 52 8"
        stroke="url(#rsvp-wf-stem)"
        strokeWidth="0.95"
        strokeLinecap="round"
        fill="none"
        opacity="0.85"
      />
      <ellipse cx="46" cy="14" rx="5" ry="4" fill="url(#rsvp-wf-bloom-b)" />
      <ellipse cx="22" cy="42" rx="4.5" ry="3.5" fill="url(#rsvp-wf-bloom-a)" />
      <ellipse cx="34" cy="58" rx="3" ry="2.5" fill="#A8B8A3" fillOpacity="0.35" />
      <circle cx="58" cy="30" r="2.2" fill="#FBEDB0" fillOpacity="0.55" />
    </svg>
  )
}

export function RsvpSuccessNote({ leaving, onDismiss }) {
  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center px-5 py-10 transition-opacity duration-300 ease-out ${
        leaving ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
      style={{ background: 'rgba(10, 22, 128, 0.05)' }}
      role="presentation"
      onClick={(e) => {
        if (e.target === e.currentTarget) onDismiss()
      }}
    >
      <div
        className={`relative w-full max-w-[22.5rem] rounded-[1.15rem] border border-[rgba(10,22,128,0.12)] bg-paper px-9 pb-10 pt-11 shadow-[0_18px_44px_-22px_rgba(10,22,128,0.12),0_6px_16px_-10px_rgba(10,22,128,0.05)] md:max-w-[24rem] md:px-10 md:pb-11 md:pt-12 ${
          leaving
            ? 'translate-y-[4px] opacity-0 transition-[opacity,transform] duration-300 ease-out'
            : 'animate-rsvp-note-in'
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="rsvp-success-title"
        onClick={(e) => e.stopPropagation()}
      >
        <WildflowerCorner />

        <button
          type="button"
          onClick={onDismiss}
          className="absolute right-3 top-3 rounded-full px-2 py-1 font-sans text-[1.15rem] leading-none text-ocean/35 transition-colors hover:bg-ocean/[0.06] hover:text-ocean/55"
          aria-label="Close"
        >
          ×
        </button>

        <div className="relative text-center">
          <p
            id="rsvp-success-title"
            className="font-display text-[1.22rem] font-normal leading-snug text-ocean md:text-[1.32rem]"
          >
            Thank you — we can&apos;t wait to see you by the lake.
          </p>
          <p className="mt-3 font-sans text-[0.88rem] font-normal leading-relaxed text-ocean/80 md:text-[0.92rem]">
            See you in Lucerne.
          </p>
        </div>
      </div>
    </div>
  )
}
