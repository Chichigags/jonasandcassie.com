import { Reveal } from '../components/Reveal'

const summerChic =
  'font-display font-semibold not-italic leading-[1.08] tracking-[-0.02em] text-[#E8B923]'

/**
 * Dress code — new lake / wildflowers plate; reference bright gold title, navy body.
 */
export function DressCode() {
  return (
    <section id="dress-code" className="relative z-[1] -mt-8 md:-mt-14">
      <div className="relative mx-auto min-h-[min(70svh,620px)] max-w-[min(100%,1240px)] overflow-hidden rounded-t-[2.25rem] shadow-[0_-8px_40px_-28px_rgba(30,45,120,0.07)] md:min-h-[min(68svh,580px)] md:rounded-t-[3.25rem] lg:rounded-t-[4rem]">
        <img
          src="/images/dresscode-lake-wildflowers.png"
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            objectPosition: 'center 42%',
            filter: 'saturate(0.92) contrast(0.94) brightness(1.03)',
          }}
        />

        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[rgba(235,244,255,0.35)] via-transparent via-40% to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(245,242,236,0.28)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_95%_75%_at_50%_12%,rgba(255,255,255,0.28),transparent_58%)]"
          aria-hidden
        />

        <div className="relative mx-auto flex min-h-[min(70svh,620px)] max-w-[1100px] flex-col items-center px-6 pb-20 pt-[clamp(3.5rem,12vh,6rem)] text-center md:min-h-[min(68svh,580px)] md:px-12 md:pb-24 md:pt-[clamp(4rem,11vh,5.5rem)] lg:px-14">
          <div className="max-w-xl">
            <Reveal>
              <p className="eyebrow !text-ocean [text-shadow:0_1px_10px_rgba(255,255,255,0.85)]">
                DRESS CODE
              </p>
              <h2
                className={`mt-5 text-[clamp(2.1rem,5vw,2.65rem)] md:mt-6 ${summerChic}`}
              >
                Summer chic
              </h2>
              <div
                className="mx-auto mt-5 flex items-center justify-center gap-2 md:mt-6"
                aria-hidden
              >
                <span className="h-px flex-1 max-w-[3rem] bg-[#E8B923]" />
                <span className="inline-block h-1 w-1 rotate-45 bg-[#E8B923]" />
                <span className="h-px flex-1 max-w-[3rem] bg-[#E8B923]" />
              </div>
            </Reveal>

            <Reveal delayClass="reveal-delay-1">
              <div className="mt-8 font-sans text-[1rem] font-normal leading-[1.75] text-ocean [text-shadow:0_1px_8px_rgba(255,255,255,0.85)] md:text-[1.05rem] md:leading-[1.78]">
                <p>Boat-friendly, dance-friendly.</p>
              </div>
            </Reveal>

            <Reveal delayClass="reveal-delay-2">
              <p className="mt-9 font-display text-[1.22rem] font-normal italic leading-snug tracking-[-0.01em] text-ocean [text-shadow:0_1px_10px_rgba(255,255,255,0.88)] md:mt-10 md:text-[1.3rem]">
                No black tie. No pressure.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
