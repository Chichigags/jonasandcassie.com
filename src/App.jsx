import { Hero } from './sections/Hero'
import { Story } from './sections/Story'
import { Weekend } from './sections/Weekend'
import { Evening } from './sections/Evening'
import { DressCode } from './sections/DressCode'
import { LetUsKnow } from './sections/LetUsKnow'
import { Gifts } from './sections/Gifts'
import { LakeFooter } from './sections/LakeFooter'

/**
 * Single-column scroll — structure unchanged; bold bright Scandinavian
 * summer palette (ink, sky, citrus, lake air).
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
