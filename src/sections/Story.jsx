import { Reveal } from '../components/Reveal'

const ASSET = (path) => {
  const raw = import.meta.env.BASE_URL || '/'
  const base = raw.endsWith('/') ? raw : `${raw}/`
  return `${base}${path.replace(/^\//, '')}`
}

/**
 * Story — same layout; warm ivory field; slight editorial offset on photos.
 *
 * Image column uses md:shrink-0 so flex never collapses it when the headline
 * has a large min-content width (nowrap was starving the photo flex child).
 */
export function Story() {
  const imgStyle = {
    flex: '0 1 auto',
    width: 'auto',
    height: 'auto',
    objectFit: 'contain',
    borderRadius: '12px',
    opacity: 1,
    filter: 'saturate(0.94) contrast(0.97) brightness(1.01)',
  }

  return (
    <section
      id="story"
      className="story-section relative w-full bg-paper py-28 md:py-32 lg:py-36"
    >
      <div className="story-container mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="story-row flex flex-col gap-10 md:flex-row md:items-center md:gap-12 lg:gap-14">
          <div className="story-images-col flex w-full items-center justify-center md:shrink-0 md:flex-[5_1_0%]">
            <div
              className="story-images flex w-full flex-col items-center justify-center sm:flex-row"
              style={{
                gap: '20px',
                maxWidth: '90%',
              }}
            >
              <img
                src={ASSET('/images/beijing.png')}
                alt="A couple walking through a Beijing hutong on a sunlit afternoon"
                width={480}
                height={510}
                className="story-image story-image-beijing block h-auto max-w-full translate-x-0.5 rotate-[0.35deg] sm:max-w-[calc(50%_-_10px)]"
                style={imgStyle}
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
              <img
                src={ASSET('/images/singapore.png')}
                alt="A couple and a small dog by Marina Bay in Singapore at golden hour"
                width={480}
                height={510}
                className="story-image story-image-singapore block h-auto max-w-full -translate-x-0.5 -rotate-[0.25deg] sm:max-w-[calc(50%_-_10px)]"
                style={imgStyle}
                loading="eager"
                decoding="async"
              />
            </div>
          </div>

          <Reveal className="min-w-0 md:flex-[4_1_0%]">
            <div className="story-text-col flex w-full min-w-0 flex-col justify-center">
              <div className="story-text text-left">
                <p className="eyebrow mb-0">HOW WE GOT HERE</p>
                <h2 className="mt-5 font-display text-[1.95rem] font-semibold not-italic leading-[1.06] tracking-[-0.015em] text-ocean md:text-[1.4rem] lg:text-[1.62rem] xl:text-[1.82rem] 2xl:text-[1.98rem] xl:whitespace-nowrap">
                  From Beijing to Singapore
                </h2>
                <p className="story-line-2 mt-8 font-sans text-[1.02rem] font-normal leading-[1.72] text-navy-soft md:text-[1.05rem] md:leading-[1.75] mb-[18px]">
                  What started in Beijing turned into a life built together in
                  Singapore — with plenty of adventures, a few plot twists, and
                  eventually, one very spoiled little dog.
                </p>
                <p className="story-line-3 font-sans text-[1.02rem] font-normal leading-[1.72] text-navy-soft md:text-[1.05rem] md:leading-[1.75]">
                  This summer, we&apos;re taking a moment to celebrate it all,
                  with the people who matter most.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
