import { Reveal } from '../components/Reveal'

/**
 * Dress code — full-bleed lake; editorial type on the image (no floating card).
 */
export function DressCode() {
  return (
    <section
      id="dress-code"
      className="relative isolate min-h-[420px] w-full overflow-hidden md:min-h-[480px]"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <img
          src="/images/dresscode-lake.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            objectPosition: 'center bottom',
          }}
        />
      </div>

      {/* Tight left veil only — gradient hits fully transparent quickly; rest of frame is untouched */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-[min(62vw,15rem)] sm:w-[min(56vw,16.5rem)] md:w-[min(28vw,20rem)] lg:w-[min(24vw,21.5rem)]"
        style={{
          background:
            'linear-gradient(90deg, rgba(252,253,255,0.62) 0%, rgba(252,253,255,0.14) 32%, rgba(252,253,255,0) 48%)',
        }}
      />

      <div className="relative mx-auto flex min-h-[420px] max-w-[1100px] items-center px-6 py-24 md:min-h-[480px] md:px-14 md:py-28 lg:px-16">
        <div className="max-w-lg text-left md:max-w-xl">
          <div className="[text-shadow:0_1px_1px_rgba(255,255,255,0.98),0_0_6px_rgba(255,255,255,0.35)]">
            <Reveal>
              <p className="eyebrow">DRESS CODE</p>
              <h2 className="mt-4 font-display text-[2.45rem] font-semibold not-italic leading-[1.05] tracking-[-0.015em] text-ocean md:text-[2.85rem]">
                Summer chic
              </h2>
            </Reveal>

            <Reveal delayClass="reveal-delay-1">
              <div className="mt-7 font-sans text-[1rem] font-normal leading-[1.72] text-navy md:text-[1.05rem] md:leading-[1.75]">
                <p>Boat-friendly, dance-friendly.</p>
              </div>
            </Reveal>

            <Reveal delayClass="reveal-delay-2">
              <p className="mt-8 font-display text-[1.32rem] font-normal italic leading-snug text-ocean md:text-[1.48rem]">
                No black tie. No pressure.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
