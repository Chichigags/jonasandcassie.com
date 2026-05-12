import { Reveal } from '../components/Reveal'
import beijingImg from '../assets/story/beijing.png'
import singaporeImg from '../assets/story/singapore.png'

/**
 * Story — same layout; warm ivory field; slight editorial offset on photos.
 *
 * Photos are imported so Vite emits correct URLs on any base path. Desktop
 * uses CSS grid with minmax on the photo track so that column cannot collapse.
 */
export function Story() {
  const imgStyle = {
    flex: '0 1 auto',
    width: 'auto',
    height: 'auto',
    objectFit: 'contain',
    borderRadius: '12px',
    opacity: 1,
  }

  return (
    <section
      id="story"
      className="atmosphere-bg relative z-[4] -mt-[clamp(2.25rem,5.5vw,3.75rem)] w-full pt-[clamp(3.25rem,8vw,5rem)] pb-16 md:pb-20 lg:pb-22"
    >
      <div className="story-container mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="story-row grid grid-cols-1 gap-10 md:grid-cols-[minmax(300px,1.15fr)_minmax(0,1fr)] md:items-center md:gap-x-12 lg:gap-x-14">
          <div className="story-images-col flex w-full items-center justify-center">
            <div
              className="story-images flex w-full flex-col items-center justify-center sm:flex-row"
              style={{
                gap: '20px',
                maxWidth: 'min(100%,520px)',
              }}
            >
              <img
                src={beijingImg}
                alt="A couple walking through a Beijing hutong on a sunlit afternoon"
                width={480}
                height={510}
                className="story-image story-image-beijing block h-auto max-w-full translate-x-0.5 rotate-[0.35deg] saturate-[0.94] contrast-[0.97] brightness-[1.01] sm:max-w-[calc(50%_-_10px)]"
                style={imgStyle}
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
              <img
                src={singaporeImg}
                alt="A couple and a small dog by Marina Bay in Singapore at golden hour"
                width={480}
                height={510}
                className="story-image story-image-singapore block h-auto max-w-full -translate-x-0.5 -rotate-[0.25deg] saturate-[0.94] contrast-[0.97] brightness-[1.01] sm:max-w-[calc(50%_-_10px)]"
                style={imgStyle}
                loading="eager"
                decoding="async"
              />
            </div>
          </div>

          <Reveal className="min-w-0">
            <div className="story-text-col flex w-full min-w-0 flex-col justify-center">
              <div className="story-text text-left">
                <p className="eyebrow mb-0">HOW WE GOT HERE</p>
                <h2 className="mt-5 max-md:whitespace-nowrap max-md:text-[clamp(1.02rem,4.8vw,1.45rem)] max-md:tracking-[-0.025em] font-display font-semibold not-italic leading-[1.06] tracking-[-0.015em] text-ocean md:text-[1.4rem] lg:text-[1.62rem] xl:text-[1.82rem] 2xl:text-[1.98rem] xl:whitespace-nowrap">
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
