import { Reveal } from '../components/Reveal'

const blocks = [
  {
    time: '5:00 PM',
    playfulTime: false,
    title: 'Meet at Lucerne Pier 1',
    body: [
      'We’ll meet at the pier and board the boat together.',
    ],
    accent:
      'One important Swiss detail: the boat leaves exactly on time. Not “fashionably late” time. Swiss time.',
  },
  {
    time: '5:15 – 7:15 PM',
    playfulTime: false,
    title: 'Boat ride to Weggis',
    body: [
      'A scenic ride across Lake Lucerne with mountain views, good company, and an apéro to get the celebrations started.',
      'Time to meet, mingle, and get to know each other — because not everyone has had the pleasure yet.',
    ],
    accent: 'Consider this the official start of the celebration.',
  },
  {
    time: '7:45 – 10:45 PM',
    playfulTime: false,
    title: 'Dinner at Restaurant Riva am See, Weggis',
    body: [
      'Long tables, short speeches, good food, fine wine, and hopefully even better conversations.',
      'And around 10 PM, Switzerland will conveniently provide fireworks for us.',
    ],
    accent: 'We can’t take credit — that part happens every National Day.',
  },
  {
    time: '11:00 PM',
    playfulTime: false,
    title: 'Back to Lucerne',
    body: ['We’ll arrange transport back to Lucerne for everyone.'],
    accent: [
      'For the responsible guests: this is the elegant ending.',
      'For everyone else…',
    ],
  },
  {
    time: 'Late-ish',
    playfulTime: true,
    title: 'Afterparty somewhere',
    body: [
      'No official plans yet — but we suspect a few drinks, stories, and questionable dance moves may continue somewhere in town.',
    ],
    accent: 'Optional, but encouraged.',
  },
]

/**
 * Evening / schedule. Editorial timeline: time column + warm copy, no
 * table dividers; optional subtle vertical guide on desktop.
 */
export function Evening() {
  return (
    <section
      id="evening"
      className="relative w-full bg-bone px-6 py-20 md:px-12 md:py-24 lg:py-28"
    >
      <Reveal>
        <header className="mx-auto max-w-prose text-center">
          <p className="eyebrow">THE EVENING</p>
          <h2 className="mt-4 font-display text-[2.25rem] font-medium not-italic leading-[1.08] tracking-[-0.005em] text-navy md:text-[2.75rem]">
            Here&apos;s the plan
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-sans text-[1rem] leading-[1.72] text-navy/85 md:text-[1.05rem] md:leading-[1.75]">
            A summer evening by the lake — simple, relaxed, and hopefully
            memorable.
          </p>
        </header>
      </Reveal>

      <div className="relative mx-auto mt-14 max-w-content md:mt-18">
        {/* Subtle vertical guide in the gutter — desktop only */}
        <div
          className="pointer-events-none absolute bottom-8 left-[11.35rem] top-8 hidden w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent md:block lg:left-[11.85rem]"
          aria-hidden
        />

        <ul className="relative space-y-14 md:space-y-16 lg:space-y-[4.25rem]">
          {blocks.map((block, i) => (
            <li key={block.title}>
              <Reveal
                delayClass={i === 0 ? '' : `reveal-delay-${Math.min(i, 3)}`}
              >
                <article className="grid grid-cols-1 gap-3 md:grid-cols-[minmax(0,10.5rem)_minmax(0,1fr)] md:gap-x-10 lg:gap-x-14">
                  <div className="md:pt-0.5">
                    <p
                      className={
                        block.playfulTime
                          ? 'font-display text-[1.28rem] font-normal italic leading-none tracking-[0.04em] text-navy/50 md:text-[1.38rem]'
                          : 'font-display text-[1.28rem] font-normal leading-none tracking-[-0.02em] text-navy/48 md:text-[1.42rem]'
                      }
                    >
                      {block.time}
                    </p>
                  </div>

                  <div className="min-w-0 md:max-w-prose lg:max-w-none">
                    <h3 className="font-display text-[1.22rem] font-medium leading-snug tracking-[-0.01em] text-navy md:text-[1.3rem]">
                      {block.title}
                    </h3>
                    <div className="mt-3 space-y-3 font-sans text-[0.98rem] leading-[1.72] text-navy/80 md:text-[1.02rem] md:leading-[1.75]">
                      {block.body.map((para, j) => (
                        <p key={j}>{para}</p>
                      ))}
                    </div>
                    {Array.isArray(block.accent) ? (
                      <div className="mt-5 space-y-2">
                        {block.accent.map((line) => (
                          <p
                            key={line}
                            className="font-display text-[0.96rem] italic leading-relaxed text-gold md:text-[1.02rem]"
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                    ) : (
                      <p className="mt-5 font-display text-[0.96rem] italic leading-relaxed text-gold md:text-[1.03rem]">
                        {block.accent}
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
