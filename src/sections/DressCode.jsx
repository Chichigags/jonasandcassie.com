import { Reveal } from '../components/Reveal'

const summerChic =
  'font-display font-semibold not-italic leading-[1.06] tracking-[-0.02em] text-citrus'

/**
 * Dress code — full-bleed photo; top/bottom paper gradients only.
 */
export function DressCode() {
  return (
    <section id="dress-code" className="section-flow-warm relative w-full pt-6 md:pt-10">
      <div className="relative min-h-[min(68svh,560px)] w-full overflow-hidden md:min-h-[min(62svh,520px)]">
        <img
          src="/images/dresscode-lake-wildflowers.png"
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover [filter:saturate(0.96)_contrast(0.97)_brightness(0.94)]"
          style={{
            objectPosition: 'center 42%',
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 z-[0] bg-gradient-to-b from-paper/55 via-paper/25 to-paper/45"
          aria-hidden
        />

        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-28 bg-gradient-to-b from-paper to-transparent md:h-32"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-32 bg-gradient-to-t from-paper to-transparent md:h-36"
          aria-hidden
        />

        <div className="relative z-[2] mx-auto flex min-h-[min(68svh,560px)] max-w-[1100px] flex-col items-center px-6 pb-28 pt-[clamp(5.25rem,16vh,7.5rem)] text-center md:min-h-[min(62svh,520px)] md:px-12 md:pb-32 md:pt-[clamp(5.5rem,15vh,6.75rem)] lg:px-14">
          <div className="mx-auto max-w-xl">
            <Reveal>
              <p className="eyebrow">DRESS CODE</p>
              <h2
                className={`mt-5 text-[clamp(2.12rem,5.1vw,2.68rem)] md:mt-6 ${summerChic}`}
              >
                Summer chic
              </h2>
            </Reveal>

            <Reveal delayClass="reveal-delay-1">
              <div className="mt-9 font-sans text-[1rem] font-normal leading-[1.78] text-stone-700 md:mt-10 md:text-[1.05rem] md:leading-[1.82]">
                <p>Boat-friendly, dance-friendly.</p>
              </div>
            </Reveal>

            <Reveal delayClass="reveal-delay-2">
              <p className="mt-10 font-display text-[1.22rem] font-normal italic leading-snug tracking-[-0.01em] text-stone-700 md:mt-11 md:text-[1.3rem]">
                No black tie. No pressure.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

