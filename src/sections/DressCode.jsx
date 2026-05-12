import { Reveal } from '../components/Reveal'

/**
 * Dress code — wide lake / wildflower plate; ginger title, ocean body lines.
 */
export function DressCode() {
  return (
    <section
      id="dress-code"
      className="relative isolate min-h-[420px] w-full overflow-hidden md:min-h-[460px]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 scale-[1.02] blur-[2.5px] md:blur-[2px]"
      >
        <img
          src="/images/dresscode-hero-lake.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            objectPosition: 'center 42%',
            filter: 'saturate(0.96) brightness(1.02) contrast(1.03)',
          }}
        />
      </div>

      {/* Light centre lift so type sits on calmer sky/water — not heavy white fog */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 85% 70% at 50% 38%, rgba(252,253,255,0.38) 0%, rgba(252,253,255,0.12) 45%, transparent 72%)',
        }}
      />

      <div className="relative mx-auto flex min-h-[420px] max-w-[1100px] flex-col items-center justify-center px-6 py-24 text-center md:min-h-[460px] md:px-12 md:py-24 lg:px-14">
        <div className="max-w-xl">
          <Reveal>
            <p className="eyebrow !text-ocean [text-shadow:0_1px_2px_rgba(255,255,255,0.95),0_0_12px_rgba(255,255,255,0.55)]">
              DRESS CODE
            </p>
            <h2 className="mt-4 font-display text-[2.45rem] font-semibold not-italic leading-[1.05] tracking-[-0.015em] text-[#D6A83F] [text-shadow:0_1px_2px_rgba(255,255,255,0.98),0_0_20px_rgba(255,255,255,0.7),0_1px_3px_rgba(10,22,128,0.08)] md:text-[2.5rem]">
              Summer chic
            </h2>
          </Reveal>

          <Reveal delayClass="reveal-delay-1">
            <div className="mt-7 font-sans text-[1rem] font-medium leading-[1.72] text-ocean [text-shadow:0_1px_2px_rgba(255,255,255,0.95),0_0_10px_rgba(255,255,255,0.5)] md:text-[1.02rem] md:leading-[1.75]">
              <p>Boat-friendly, dance-friendly.</p>
            </div>
          </Reveal>

          <Reveal delayClass="reveal-delay-2">
            <p className="mt-8 font-display text-[1.26rem] font-normal italic leading-snug tracking-[-0.012em] text-ocean [text-shadow:0_1px_2px_rgba(255,255,255,0.95),0_0_14px_rgba(255,255,255,0.55)] md:text-[1.32rem]">
              No black tie. No pressure.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
