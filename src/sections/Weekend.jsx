import { Reveal } from '../components/Reveal'

const plans = [
  {
    eyebrow: 'FRIDAY EVENING · JULY 31',
    title: 'Old town dinner',
    body: [
      'A casual dinner and a walk through the old town in Lucerne. Nothing planned too strictly — just an easy start.',
      'Time: around 7:00 PM on Friday, July 31',
      'Location: somewhere in downtown Lucerne',
      'Dress code: tourist mode (comfortable, slightly lost is perfectly fine)',
    ],
  },
  {
    eyebrow: 'SATURDAY · AUGUST 1',
    title: 'Swiss farm brunch',
    body: [
      'This day also happens to be Swiss National Day, for those who want a real Swiss experience — a relaxed brunch on a farm just outside Lucerne.',
      'Time: 11:00 AM - 2:00 PM on Saturday, August 1',
      'Location: Lisbeth & Walter Wüest-Meier, Kantonsstrasse 16, 6211 Buchs LU (about 20-mins drive from Lucerne)',
      'Dress code: something red or white — if you feel like leaning into it',
      'Transport: we’ll coordinate once we know how many of you are joining — either sharing cars or meeting at Sursee station and going together',
    ],
  },
]

function StackedPlanLine({ children }) {
  const labelMatch = /^(Time|Location|Dress code|Transport):\s(.+)$/.exec(children)

  if (!labelMatch) {
    return null
  }

  return (
    <div className="mb-[18px]">
      <p className="mb-1 font-sans text-[14px] font-normal leading-snug tracking-[0.01em] text-black/50">
        {labelMatch[1]}
      </p>
      <p className="font-sans text-[16px] leading-[1.65] text-navy/80">
        {labelMatch[2].includes('something red or white') ? (
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
      className="relative w-full bg-paper px-6 py-20 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-[1000px]">
        <div className="grid gap-8 md:grid-cols-2 md:items-stretch md:gap-10 lg:gap-12">
          {plans.map((plan, index) => (
            <Reveal
              key={plan.eyebrow}
              delayClass={`reveal-delay-${Math.min(index + 2, 3)}`}
              className="h-full"
            >
              <div className="flex h-full flex-col">
              {index === 0 ? (
                <div className="mb-8 max-w-2xl md:mb-10">
                  <h2 className="font-display text-[1.3rem] font-normal leading-[1.16] tracking-[-0.003em] text-navy/72 sm:whitespace-nowrap md:text-[1.55rem]">
                    well, since you&apos;re already here...
                  </h2>
                  <p className="mt-4 font-sans text-[0.98rem] leading-[1.7] text-navy/72 md:text-[1rem]">
                    we want to spend more time together, so we&apos;re stretching
                    it just a little.
                  </p>
                </div>
              ) : null}
              <article
                className="flex-1 rounded-[18px] px-8 py-8 md:px-9 md:py-9"
                style={{
                  background: 'rgba(0, 0, 0, 0.012)',
                  border: '1px solid rgba(0, 0, 0, 0.03)',
                }}
              >
                <div className="max-w-[480px]">
                  <p className="mb-3.5 font-sans text-[0.72rem] font-medium uppercase tracking-[0.13em] text-navy/55 md:text-[0.74rem]">
                    {plan.eyebrow}
                  </p>
                  <h3 className="mb-[18px] font-display text-[1.7rem] font-medium leading-[1.15] text-gold md:text-[1.9rem]">
                    {plan.title}
                  </h3>
                  <div className="space-y-2 font-sans text-[0.98rem] leading-[1.68] text-navy/80 md:text-[1rem]">
                    {plan.body
                      .filter((line) => !/^(Time|Location|Dress code|Transport):/.test(line))
                      .map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                  </div>
                  <div className="mt-[22px]">
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
