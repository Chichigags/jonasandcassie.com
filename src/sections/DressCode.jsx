import { Reveal } from '../components/Reveal'

/**
 * Dress code. A *very* faint horizon photograph sits behind the type —
 * almost imperceptible, so it adds atmosphere without becoming the
 * subject. No flowers in this section.
 */
export function DressCode() {
  return (
    <section
      id="dress-code"
      className="relative isolate w-full overflow-hidden bg-paper px-6 py-24 md:px-12 md:py-28 lg:py-32"
    >
      {/* Subtle lake-horizon backdrop — bottom-aligned so the calm water
          sits behind the closing line and the soft sky fills the upper
          half of the section. Light wash on top keeps the type readable
          without flattening the colors. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <img
          src="/images/dresscode-lake.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            objectPosition: 'center bottom',
            filter: 'saturate(0.92) brightness(1.02)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(246,244,239,0.55), rgba(246,244,239,0.30))',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-2xl text-center">
        <Reveal>
          <p className="eyebrow">
            DRESS CODE
          </p>
          <h2 className="mt-4 font-display text-[2.25rem] font-medium leading-[1.08] tracking-[-0.005em] text-navy md:text-[2.75rem]">
            Summer by the Lake
          </h2>
        </Reveal>

        <Reveal delayClass="reveal-delay-1">
          <div className="mx-auto mt-8 max-w-xl space-y-4 font-sans text-[1rem] leading-[1.7] text-navy/85 md:text-[1.05rem]">
            <p>Something light, comfortable, and just a little festive.</p>
            <p>
              Think linen, soft colors — something you&apos;d actually enjoy
              wearing by the lake.
            </p>
          </div>
        </Reveal>

        <Reveal delayClass="reveal-delay-2">
          <p className="mt-9 font-display italic text-[1.3rem] leading-snug text-gold md:whitespace-nowrap md:text-[1.5rem]">
            No black tie. No pressure. Just feel good.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
