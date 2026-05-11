/**
 * Closing card — natural lake/sunset image; light typographic panel only.
 */
export function LakeFooter() {
  return (
    <footer
      id="lake-footer"
      className="relative isolate mt-10 w-full overflow-hidden bg-paper md:mt-16"
    >
      <div className="relative h-[42svh] min-h-[280px] w-full md:h-[48svh]">
        <img
          src="/images/footer-lake.png"
          alt="Calm lake at golden hour, soft clouds over a faint mountain horizon"
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            objectPosition: 'center bottom',
          }}
          loading="lazy"
          decoding="async"
        />

        <div className="absolute inset-x-0 top-10 flex justify-center px-4 md:top-16">
          <div className="rounded-xl bg-air/58 px-7 py-6 text-center backdrop-blur-[5px] md:px-9 md:py-7">
            <p className="font-script text-[2.35rem] leading-none text-ocean [text-shadow:0_1px_18px_rgba(252,253,255,0.9)] md:text-[3rem]">
              See you by the water.
            </p>
            <p className="mt-4 font-display text-[1.12rem] font-semibold leading-none text-ocean md:text-[1.38rem]">
              Jonas &amp; Cassie
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
