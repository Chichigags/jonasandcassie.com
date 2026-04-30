import { Reveal } from '../components/Reveal'

const items = [
  { time: '5:00 PM', label: 'Meet at Lucerne Pier 1' },
  {
    time: '5:15 – 7:15 PM',
    label: 'Boat ride to Weggis, with Aperol along the way',
  },
  {
    time: '7:45 – 10:45 PM',
    label: 'Dinner by the lake, with fireworks around 10 PM',
  },
  { time: '11:00 PM', label: 'Shuttle back to Lucerne' },
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
        <p className="text-center font-sans text-[0.74rem] font-medium uppercase tracking-[0.34em] text-navy/55 md:text-[0.82rem]">
          An evening that turns into
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
                  <p className="font-serif text-[1rem] leading-relaxed text-navy/80 md:text-[1.08rem]">
                    {item.label}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>

      <Reveal delayClass="reveal-delay-3">
        <p className="mx-auto mt-12 max-w-2xl text-center font-serif text-[1rem] leading-relaxed text-navy/75 md:mt-14 md:text-[1.08rem]">
          Please keep an eye on the timings — especially the boat.{' '}
          <em className="font-display italic text-gold">
            Just on time. Very Swiss.
          </em>
        </p>
      </Reveal>
    </section>
  )
}
