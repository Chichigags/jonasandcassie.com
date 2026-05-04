import { Reveal } from '../components/Reveal'

const items = [
  {
    time: '5:00 PM',
    label: 'Meet at Lucerne Pier 1',
    note: '(please keep an eye on time — the boat leaves right on time. very Swiss.)',
  },
  {
    time: '5:15 – 7:15 PM',
    label: 'Boat ride to Weggis',
    note: 'Aperol along the way',
  },
  {
    time: '7:45 – 10:45 PM',
    label: 'Dinner by the lake',
    note: 'Fireworks around 10 PM (we didn’t plan this — Switzerland did)',
  },
  { time: '11:00 PM', label: 'Shuttle back to Lucerne' },
  { time: 'Late', label: 'Afterparty somwhere (if we still have energy)' },
]

/**
 * Evening / schedule. Off-white only — no background image. Lighter
 * dividers, slightly muted time column so the schedule doesn't dominate.
 */
export function Evening() {
  return (
    <section
      id="evening"
      className="relative w-full bg-bone px-6 py-20 md:px-12 md:py-24 lg:py-28"
    >
      <Reveal>
        <p className="text-center font-sans text-[0.74rem] font-medium uppercase tracking-[0.13em] text-navy/55 md:text-[0.82rem]">
          AN EVENING THAT TURNS INTO
        </p>
        <h2 className="mt-3 text-center font-display text-[2.4rem] font-medium leading-[1.05] tracking-[-0.005em] text-navy md:mt-4 md:text-[3rem]">
          Something special
        </h2>
      </Reveal>

      <div className="mx-auto mt-12 max-w-3xl md:mt-14">
        <ul className="divide-y divide-navy/8">
          {items.map((item, i) => (
            <li key={item.time} className="py-5 md:py-6">
              <Reveal
                delayClass={i === 0 ? '' : `reveal-delay-${Math.min(i, 3)}`}
              >
                <div className="grid grid-cols-1 items-baseline gap-1 md:grid-cols-[12rem_1fr] md:gap-10">
                  <div className="font-display text-[1rem] font-normal tracking-tight text-gold/85 md:text-[1.05rem]">
                    {item.time}
                  </div>
                  <div className="text-left font-sans text-[0.98rem] leading-relaxed text-navy/80 md:text-[1.02rem]">
                    <p>{item.label}</p>
                    {item.note ? (
                      <p className="mt-1 text-[14px] leading-relaxed text-navy/75">
                        {item.note}
                      </p>
                    ) : null}
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
