import { createFileRoute } from '@tanstack/react-router'
import HeroSection from '@/components/shadcn-studio/blocks/hero-section'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return <HeroSection />
}
