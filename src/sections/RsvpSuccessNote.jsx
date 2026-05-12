const SKY_IMAGE = '/images/rsvp-success-sky.png'

/**
 * RSVP success — photographic sky note: soft image inside the card, type top-left.
 */
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
        className={`relative w-full max-w-[26rem] min-h-[15.5rem] overflow-hidden rounded-[1.15rem] border border-[rgba(10,22,128,0.12)] shadow-[0_18px_44px_-22px_rgba(10,22,128,0.12),0_6px_16px_-10px_rgba(10,22,128,0.05)] md:max-w-[28rem] md:min-h-[16rem] ${
          leaving
            ? 'translate-y-[4px] opacity-0 transition-[opacity,transform] duration-300 ease-out'
            : 'animate-rsvp-note-in'
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="rsvp-success-title"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Photographic sky — scaled so flowers stay modest, bottom-right */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `url(${SKY_IMAGE})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '168% auto',
            backgroundPosition: '94% 92%',
            filter: 'saturate(0.88) contrast(0.97) brightness(1.02)',
          }}
          aria-hidden
        />

        {/* Airy veil: open sky for type, flowers stay soft in the corner */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'linear-gradient(118deg, rgba(252,253,255,0.96) 0%, rgba(250,248,243,0.9) 28%, rgba(252,253,255,0.55) 52%, rgba(252,253,255,0.22) 78%, rgba(252,253,255,0.06) 100%)',
          }}
          aria-hidden
        />

        {/* High-sky lift — slight brightening upper-left for cloud/editorial air */}
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            background:
              'radial-gradient(ellipse 95% 70% at 8% 12%, rgba(255,255,255,0.65) 0%, transparent 52%)',
          }}
          aria-hidden
        />

        <button
          type="button"
          onClick={onDismiss}
          className="absolute right-2.5 top-2.5 z-20 rounded-full px-2 py-1 font-sans text-[1.15rem] leading-none text-[#0A1680]/40 transition-colors hover:bg-[#0A1680]/[0.06] hover:text-[#0A1680]/60"
          aria-label="Close"
        >
          ×
        </button>

        <div className="relative z-10 flex max-w-[20rem] flex-col items-start px-8 pb-9 pt-10 text-left md:max-w-[21rem] md:px-9 md:pb-10 md:pt-11">
          <p
            id="rsvp-success-title"
            className="font-display text-[1.2rem] font-normal leading-[1.35] text-[#0A1680] md:text-[1.3rem]"
          >
            So happy you&apos;ll be part of it.
          </p>
          <div className="mt-5 flex items-start gap-3 border-l border-citrus/75 pl-3.5">
            <p className="font-sans text-[0.88rem] font-normal leading-relaxed text-[#3F4348] md:text-[0.92rem]">
              See you by the lake this summer.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
