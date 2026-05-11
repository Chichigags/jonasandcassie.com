import { Reveal } from '../components/Reveal'

const plans = [
  {
    eyebrow: 'FRIDAY EVENING · JULY 31',
    title: 'Old Town dinner',
    body: [
      'A bit of sightseeing in the old town, followed by a dinner. Nothing fancy — just a warm start.',
      'Time: around 7:00 PM on Friday, July 31',
      'Location: somewhere in Lucerne Old Town',
    ],
  },
  {
    eyebrow: 'SATURDAY · AUGUST 1',
    title: 'Swiss farm brunch',
    body: [
      'This day also happens to be Swiss National Day — so we’re starting the morning on a farm just outside Lucerne. Very fitting.',
      'Time: 11:00 AM – 2:00 PM on Saturday, August 1',
      'Location: Lisbeth & Walter Wüest-Meier, Kantonsstrasse 16, 6211 Buchs LU (about 20 mins drive from Lucerne)',
      'Dress code: something red or white — if you feel like leaning into it',
      "Transport: We’ll sort out the details once we know who's coming — either carpooling or meeting at Sursee station.",
    ],
  },
]

function StackedPlanLine({ children }) {
  const labelMatch = /^(Time|Location|Dress code|Transport):\s(.+)$/.exec(children)

  if (!labelMatch) {
    return null
  }

  return (
    <div className="mb-4">
      <p className="mb-1 font-sans text-[12px] font-semibold uppercase leading-snug tracking-[0.08em] text-ocean/85">
        {labelMatch[1]}
      </p>
      <p className="font-sans text-[16px] leading-[1.65] text-navy-soft">
        {labelMatch[1] === 'Location' && labelMatch[2].includes('Kantonsstrasse') ? (
          <>
            Lisbeth &amp; Walter Wüest-Meier,
            <br />
            Kantonsstrasse 16, 6211 Buchs LU
            <br />
            (about 20 mins drive from Lucerne)
          </>
        ) : labelMatch[2].includes('something red or white') ? (
          <>
            something red or white —
            <br />
            if you feel like leaning into it
          </>
        ) : (
          labelMatch[2]
        )}
      </p>
    </div>
  )
}

export function Weekend() {
  return (
    <section
      id="weekend"
      className="relative w-full bg-sky-wash px-6 py-22 md:px-10 md:py-26"
    >
      <div className="mx-auto max-w-[1000px]">
        <Reveal>
          <div className="mx-auto mb-14 max-w-xl text-center md:mb-16">
            <p className="eyebrow">MORE FUN</p>
            <h2 className="mt-4 font-display text-[2.45rem] font-semibold not-italic leading-[1.06] tracking-[-0.015em] text-ocean md:text-[2.85rem]">
              A little bit more
            </h2>
            <p className="mx-auto mt-6 max-w-md font-sans text-[1.02rem] leading-[1.72] text-navy-soft md:text-[1.06rem] md:leading-[1.75]">
              Since you&apos;re already here,
              <br className="md:hidden" />
              {' '}let&apos;s start a little early.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-10 md:grid-cols-2 md:items-stretch md:gap-12 lg:gap-14">
          {plans.map((plan, index) => (
            <Reveal
              key={plan.eyebrow}
              delayClass={`reveal-delay-${Math.min(index + 2, 3)}`}
              className="h-full"
            >
              <div className="flex h-full flex-col">
                <article className="flex-1 rounded-[18px] border border-ocean/18 bg-air px-9 py-8 shadow-postcard md:px-10 md:py-9">
                  <div className="max-w-[480px]">
                    <p className="mb-3.5 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-ocean md:text-[0.74rem]">
                      {plan.eyebrow}
                    </p>
                    <h3 className="mb-5 font-display text-[1.78rem] font-semibold leading-[1.12] text-ocean md:text-[1.92rem]">
                      {plan.title}
                    </h3>
                    <div className="space-y-2 font-sans text-[0.98rem] leading-[1.72] text-navy-soft md:text-[1rem] md:leading-[1.75]">
                      {plan.body
                        .filter((line) => !/^(Time|Location|Dress code|Transport):/.test(line))
                        .map((line) => (
                          <p key={line}>{line}</p>
                        ))}
                    </div>
                    <div className="mt-6">
                      {plan.body
                        .filter((line) => /^(Time|Location|Dress code|Transport):/.test(line))
                        .map((line) => (
                          <StackedPlanLine key={line}>{line}</StackedPlanLine>
                        ))}
                    </div>
                  </div>
                </article>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
