import { Reveal } from '../components/Reveal'

/**
 * Story / From Beijing to Singapore.
 *
 * Editorial split: images (two panels, side by side, contained) on the
 * left; story copy on the right — balanced, not a poster.
 */
export function Story() {
  const imgStyle = {
    flex: '0 1 auto',
    width: 'auto',
    height: 'auto',
    objectFit: 'contain',
    borderRadius: '12px',
    opacity: 0.96,
  }

  return (
    <section
      id="story"
      className="story-section relative w-full"
      style={{
        background: '#F6F4EF',
        paddingTop: '96px',
        paddingBottom: '96px',
      }}
    >
      <div className="story-container mx-auto max-w-[1200px] px-6 md:px-10">
        <Reveal>
          <div className="story-row flex flex-col gap-8 md:flex-row md:items-center md:gap-10 lg:gap-12">
            {/* Left ~2/3: two images, horizontal, contain, no crop */}
            <div className="story-images-col flex w-full min-w-0 items-center justify-center md:flex-[2_1_0%]">
              <div
                className="story-images flex w-full flex-col items-center justify-center sm:flex-row"
                style={{
                  gap: '20px',
                  maxWidth: '90%',
                }}
              >
                <img
                  src="/images/beijing.png"
                  alt="A couple walking through a Beijing hutong on a sunlit afternoon"
                  className="story-image story-image-beijing block max-w-full sm:max-w-[calc(50%_-_10px)]"
                  style={imgStyle}
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src="/images/singapore.png"
                  alt="A couple and a small dog by Marina Bay in Singapore at golden hour"
                  className="story-image story-image-singapore block max-w-full sm:max-w-[calc(50%_-_10px)]"
                  style={imgStyle}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            {/* Right ~1/3: text, vertically centered, left-aligned */}
            <div className="story-text-col flex w-full min-w-0 flex-col justify-center md:flex-[1_1_0%]">
              <div className="story-text text-left">
                <p className="mb-0 font-sans text-[0.7rem] font-medium tracking-[0.13em] text-celadon md:text-[0.74rem]">
                  From Beijing to Singapore
                </p>
                <h2 className="mt-4 font-display text-[2.25rem] font-medium not-italic leading-[1.08] tracking-[-0.005em] text-navy md:text-[2.75rem]">
                  Two cities. One story.
                </h2>
                <p
                  className="story-line-2 mt-8 font-sans"
                  style={{
                    fontSize: '1.02rem',
                    lineHeight: 1.6,
                    fontWeight: 400,
                    color: '#4A5568',
                    marginBottom: '18px',
                  }}
                >
                  What started in Beijing turned into a life built together in
                  Singapore — with plenty of adventures, a few plot twists, and
                  eventually, one very spoiled little dog.
                </p>
                <p
                  className="story-line-3 font-sans"
                  style={{
                    fontSize: '1.02rem',
                    lineHeight: 1.6,
                    fontWeight: 400,
                    color: '#4A5568',
                  }}
                >
                  This summer, we&apos;re taking a moment to celebrate it all,
                  with the people who matter most.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
