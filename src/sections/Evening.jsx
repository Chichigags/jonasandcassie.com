import { Reveal } from '../components/Reveal'

const blocks = [
  {
    time: '5:00 PM',
    title: 'Meet at Lucerne Pier 1',
    body: [
      'We’ll meet at the pier and board the boat together.',
      'One important Swiss detail: the boat leaves exactly on time. Not “fashionably late” time. Swiss time.',
    ],
    honeyLine: 'Very Swiss.',
  },
  {
    time: '5:15 – 7:15 PM',
    title: 'Boat ride to Weggis',
    body: [
      'A scenic ride across Lake Lucerne with mountain views, good company, and an apéro to get the celebrations started.',
      'Time to meet, mingle, and get to know each other — because not everyone has had the pleasure yet.',
      'Consider this the official start of the celebration.',
    ],
  },
  {
    time: '7:45 – 10:45 PM',
    title: 'Dinner at Restaurant Riva am See, Weggis',
    body: [
      'Long tables, short speeches, good food, fine wine, and hopefully even better conversations.',
      'And around 10 PM, Switzerland will conveniently provide fireworks for us.',
      'We can’t take credit — that part happens every National Day.',
    ],
  },
  {
    time: '11:00 PM',
    title: 'Back to Lucerne',
    body: [
      'We’ll arrange transport back to Lucerne for everyone.',
      'For the responsible guests: this is the elegant ending.',
      'For everyone else…',
    ],
  },
  {
    time: 'Late-ish',
    title: 'Afterparty somewhere',
    body: [
      'No official plans yet — but we suspect a few drinks, stories, and questionable dance moves may continue somewhere in town.',
      'Optional, but encouraged.',
    ],
  },
]

/**
 * Evening — calm itinerary; honey accent only on “Very Swiss.”
 */
export function Evening() {
  return (
    <section
      id="evening"
      className="relative w-full bg-paper px-6 py-28 md:px-12 md:py-32 lg:py-36"
    >
      <Reveal>
        <header className="mx-auto max-w-prose text-center">
          <p className="eyebrow">THE EVENING</p>
          <h2 className="mt-4 font-display text-[2.5rem] font-semibold not-italic leading-[1.06] tracking-[-0.015em] text-ocean md:text-[2.9rem]">
            Here&apos;s the plan
          </h2>
          <p className="mx-auto mt-7 max-w-xl font-sans text-[1.02rem] leading-[1.78] text-navy-soft md:text-[1.06rem] md:leading-[1.82]">
            <span className="block">A summer evening by the lake —</span>
            <span className="block">
              simple, relaxed, and hopefully memorable.
            </span>
          </p>
        </header>
      </Reveal>

      <div className="relative mx-auto mt-20 max-w-content md:mt-24 lg:mt-28">
        <div
          className="pointer-events-none absolute bottom-10 left-[11.55rem] top-10 hidden w-px bg-ocean/20 md:block lg:left-[12.05rem]"
          aria-hidden
        />

        <ul className="relative space-y-20 md:space-y-24 lg:space-y-28">
          {blocks.map((block, i) => (
            <li key={block.title}>
              <Reveal
                delayClass={i === 0 ? '' : `reveal-delay-${Math.min(i, 3)}`}
              >
                <article className="grid grid-cols-1 gap-5 md:grid-cols-[minmax(0,11.25rem)_minmax(0,1fr)] md:gap-x-12 lg:gap-x-16">
                  <div className="md:pt-0.5">
                    <p className="font-display text-[1.48rem] font-semibold leading-none tracking-[-0.02em] text-ocean md:text-[1.62rem]">
                      {block.time}
                    </p>
                  </div>

                  <div className="min-w-0 md:max-w-prose lg:max-w-none">
                    <h3 className="font-display text-[1.26rem] font-semibold leading-snug tracking-[-0.01em] text-navy md:text-[1.34rem]">
                      {block.title}
                    </h3>
                    <div className="mt-4 space-y-4 font-sans text-[0.98rem] leading-[1.78] text-navy-soft md:text-[1.02rem] md:leading-[1.82]">
                      {block.body.map((para, j) => (
                        <p key={j}>{para}</p>
                      ))}
                    </div>
                    {block.honeyLine && (
                      <p className="mt-6 font-display text-[1.02rem] font-normal italic leading-[1.78] text-citrus md:text-[1.06rem] md:leading-[1.82]">
                        {block.honeyLine}
                      </p>
                    )}
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
