/**
 * Closing card — natural lake/sunset image; type on image, no panel.
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
          <div className="text-center">
            <p className="font-script text-[2.35rem] leading-none text-ink [text-shadow:0_1px_14px_rgba(252,253,255,0.88)] md:text-[2.55rem] md:[text-shadow:0_1px_12px_rgba(252,253,255,0.82)]">
              See you by the water.
            </p>
            <p className="mt-4 font-display text-[1.12rem] font-semibold leading-none text-ink [text-shadow:0_1px_10px_rgba(252,253,255,0.85)] md:text-[1.22rem] md:[text-shadow:0_1px_8px_rgba(252,253,255,0.8)]">
              Jonas &amp; Cassie
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
