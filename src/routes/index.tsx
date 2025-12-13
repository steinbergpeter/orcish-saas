import { createFileRoute } from '@tanstack/react-router'
import HeroSection from '@/components/shadcn-studio/blocks/hero-section'
import GallerySection from '@/components/shadcn-studio/blocks/gallery-section'
import AboutUsSection from '@/components/shadcn-studio/blocks/about-us-section'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <>
      <HeroSection />
      <GallerySection />
      <AboutUsSection />
    </>
  )
}
