const GRASS_IMAGE = '/images/rsvp-success-grass.png'

/**
 * RSVP success — ivory editorial card; subtle corner botanical; manual close only.
 */
export function RsvpSuccessNote({ leaving, onDismiss }) {
  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center px-6 py-12 transition-opacity duration-300 ease-out ${
        leaving ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
      style={{ background: 'rgba(29, 46, 111, 0.04)' }}
      role="presentation"
      onClick={(e) => {
        if (e.target === e.currentTarget) onDismiss()
      }}
    >
      <div
        className={`relative w-full max-w-[24rem] overflow-hidden rounded-[1.35rem] border bg-[#F7F3ED] shadow-[0_2px_28px_-16px_rgba(29,46,111,0.08),0_1px_3px_rgba(29,46,111,0.04)] md:max-w-[26rem] ${
          leaving
            ? 'translate-y-[3px] opacity-0 transition-[opacity,transform] duration-300 ease-out'
            : 'animate-rsvp-note-in'
        }`}
        style={{ borderColor: 'rgba(29, 46, 111, 0.08)' }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="rsvp-success-title"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Base */}
        <div className="pointer-events-none absolute inset-0 bg-[#F7F3ED]" aria-hidden />

        {/* Corner botanical — barely visible */}
        <div
          className="pointer-events-none absolute -bottom-1 -right-1 h-[min(46%,220px)] w-[min(58%,280px)] opacity-[0.18] max-md:opacity-[0.16]"
          style={{
            backgroundImage: `url(${GRASS_IMAGE})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            backgroundPosition: 'bottom right',
            filter: 'blur(0.6px)',
          }}
          aria-hidden
        />

        <button
          type="button"
          onClick={onDismiss}
          className="absolute right-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-full text-[1.1rem] font-light leading-none text-[#1D2E6F]/45 transition-colors hover:bg-[#1D2E6F]/[0.06] hover:text-[#1D2E6F]/65"
          aria-label="Close"
        >
          ×
        </button>

        <div className="relative z-10 px-10 pb-12 pt-11 text-left md:px-12 md:pb-14 md:pt-12">
          <p
            id="rsvp-success-title"
            className="font-display text-[1.65rem] font-semibold leading-[1.2] tracking-[-0.02em] text-[#1D2E6F] md:text-[1.85rem]"
          >
            Nice, can&apos;t wait to see you in Lucerne.
          </p>
        </div>
      </div>
    </div>
  )
}
