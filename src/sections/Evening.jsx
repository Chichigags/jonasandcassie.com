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
    accentItalic: true,
    accentWarm: true,
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
    accentItalic: false,
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
    accentItalic: true,
    accentWarm: true,
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
    accentItalic: false,
  },
  {
    time: 'Late-ish',
    playfulTime: true,
    title: 'Afterparty somewhere',
    body: [
      'No official plans yet — but we suspect a few drinks, stories, and questionable dance moves may continue somewhere in town.',
    ],
    accent: 'Optional, but encouraged.',
    accentItalic: true,
    accentWarm: false,
  },
]

const accentMuted =
  'font-sans text-[0.98rem] leading-relaxed text-navy-soft md:text-[1.04rem]'
const accentWarmItalic =
  'font-display text-[1.02rem] italic font-normal leading-relaxed text-citrus md:text-[1.08rem]'
const accentCoolItalic =
  'font-display text-[1.02rem] italic font-normal leading-relaxed text-ocean md:text-[1.08rem]'

function ScheduleAccent({ accent, italic, warm }) {
  const italicClass = warm ? accentWarmItalic : accentCoolItalic

  if (Array.isArray(accent)) {
    if (italic) {
      return (
        <div className="mt-5 space-y-2">
          {accent.map((line) => (
            <p key={line} className={italicClass}>
              {line}
            </p>
          ))}
        </div>
      )
    }
    return (
      <div className="mt-5 space-y-2">
        {accent.map((line) => (
          <p key={line} className={accentMuted}>
            {line}
          </p>
        ))}
      </div>
    )
  }

  if (italic) {
    return <p className={`mt-5 ${italicClass}`}>{accent}</p>
  }
  return <p className={`mt-5 ${accentMuted}`}>{accent}</p>
}

/**
 * Evening — editorial itinerary; ocean structure, orange only on chosen lines.
 */
export function Evening() {
  return (
    <section
      id="evening"
      className="relative w-full bg-paper px-6 py-20 md:px-12 md:py-24 lg:py-28"
    >
      <Reveal>
        <header className="mx-auto max-w-prose text-center">
          <p className="eyebrow">THE EVENING</p>
          <h2 className="mt-4 font-display text-[2.5rem] font-semibold not-italic leading-[1.06] tracking-[-0.015em] text-ocean md:text-[2.9rem]">
            Here&apos;s the plan
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-sans text-[1.02rem] leading-[1.72] text-navy-soft md:text-[1.06rem] md:leading-[1.75]">
            A summer evening by the lake — simple, relaxed, and hopefully
            memorable.
          </p>
        </header>
      </Reveal>

      <div className="relative mx-auto mt-16 max-w-content md:mt-20">
        <div
          className="pointer-events-none absolute bottom-8 left-[11.05rem] top-8 hidden w-px bg-ocean/28 md:block lg:left-[11.65rem]"
          aria-hidden
        />

        <ul className="relative space-y-14 md:space-y-[4rem] lg:space-y-[4.25rem]">
          {blocks.map((block, i) => (
            <li key={block.title}>
              <Reveal
                delayClass={i === 0 ? '' : `reveal-delay-${Math.min(i, 3)}`}
              >
                <article className="grid grid-cols-1 gap-4 md:grid-cols-[minmax(0,10.75rem)_minmax(0,1fr)] md:gap-x-12 lg:gap-x-16">
                  <div className="md:pt-0.5">
                    <p className="font-display text-[1.38rem] font-semibold leading-none tracking-[-0.02em] text-ocean md:text-[1.52rem]">
                      {block.time}
                    </p>
                  </div>

                  <div className="min-w-0 md:max-w-prose lg:max-w-none">
                    <h3 className="font-display text-[1.26rem] font-semibold leading-snug tracking-[-0.01em] text-navy md:text-[1.34rem]">
                      {block.title}
                    </h3>
                    <div className="mt-3.5 space-y-3 font-sans text-[0.98rem] leading-[1.72] text-navy-soft md:text-[1.02rem] md:leading-[1.75]">
                      {block.body.map((para, j) => (
                        <p key={j}>{para}</p>
                      ))}
                    </div>
                    <ScheduleAccent
                      accent={block.accent}
                      italic={block.accentItalic !== false}
                      warm={block.accentWarm !== false}
                    />
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
