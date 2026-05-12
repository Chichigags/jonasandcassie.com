import { Hero } from './sections/Hero'
import { Story } from './sections/Story'
import { Weekend } from './sections/Weekend'
import { Evening } from './sections/Evening'
import { DressCode } from './sections/DressCode'
import { LetUsKnow } from './sections/LetUsKnow'
import { Gifts } from './sections/Gifts'
import { LakeFooter } from './sections/LakeFooter'

/**
 * Single-column scroll — structure unchanged; unified ink, ivory, honey.
 */
export default function App() {
  return (
    <div className="min-h-screen bg-paper text-navy">
      <main className="overflow-x-hidden">
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
