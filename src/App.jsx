import { Hero } from './sections/Hero'
import { Story } from './sections/Story'
import { Weekend } from './sections/Weekend'
import { Evening } from './sections/Evening'
import { DressCode } from './sections/DressCode'
import { LetUsKnow } from './sections/LetUsKnow'
import { Gifts } from './sections/Gifts'
import { LakeFooter } from './sections/LakeFooter'

/**
 * Single-column, full-width, section-by-section scroll. Each section
 * carries its own background and breathing room — the page reads like
 * an invitation rather than a magazine spread.
 */
export default function App() {
  return (
    <div className="min-h-screen bg-paper text-navy">
      <main>
        <Hero />
        <Story />
        <Evening />
        <DressCode />
        <Weekend />
        <LetUsKnow />
        <Gifts />
        <LakeFooter />
      </main>
    </div>
  )
}
