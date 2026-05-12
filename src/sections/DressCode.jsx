import { Reveal } from '../components/Reveal'

const summerChic =
  'font-display font-semibold not-italic leading-[1.08] tracking-[-0.02em] text-citrus'

/**
 * Dress code — full-bleed photo; top/bottom paper gradients only.
 */
export function DressCode() {
  return (
    <section id="dress-code" className="relative w-full bg-paper">
      <div className="relative min-h-[min(68svh,560px)] w-full overflow-hidden md:min-h-[min(62svh,520px)]">
        <img
          src="/images/dresscode-lake-wildflowers.png"
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            objectPosition: 'center 42%',
            filter: 'saturate(0.96) contrast(0.97) brightness(1.02)',
          }}
        />

        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-24 bg-gradient-to-b from-paper to-transparent md:h-28"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-28 bg-gradient-to-t from-paper to-transparent md:h-32"
          aria-hidden
        />

        <div className="relative z-[2] mx-auto flex min-h-[min(68svh,560px)] max-w-[1100px] flex-col items-center px-6 pb-24 pt-[clamp(3rem,11vh,5.5rem)] text-center md:min-h-[min(62svh,520px)] md:px-12 md:pb-28 md:pt-[clamp(3.5rem,10vh,5rem)] lg:px-14">
          <div className="max-w-xl">
            <Reveal>
              <p className="eyebrow !text-ocean">DRESS CODE</p>
              <h2
                className={`mt-5 text-[clamp(2.1rem,5vw,2.65rem)] md:mt-6 ${summerChic}`}
              >
                Summer chic
              </h2>
            </Reveal>

            <Reveal delayClass="reveal-delay-1">
              <div className="mt-8 font-sans text-[1rem] font-normal leading-[1.75] text-ocean md:text-[1.05rem] md:leading-[1.78]">
                <p>Boat-friendly, dance-friendly.</p>
              </div>
            </Reveal>

            <Reveal delayClass="reveal-delay-2">
              <p className="mt-9 font-display text-[1.22rem] font-normal italic leading-snug tracking-[-0.01em] text-ocean md:mt-10 md:text-[1.3rem]">
                No black tie. No pressure.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
