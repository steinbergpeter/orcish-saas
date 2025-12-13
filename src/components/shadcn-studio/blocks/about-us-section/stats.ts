import { MedalIcon, SparklesIcon, StarIcon, TargetIcon } from 'lucide-react'
import type { ComponentType } from 'react'

type StatItems = Array<{
  icon: ComponentType
  value: string
  description: string
}>

const stats: StatItems = [
  {
    icon: SparklesIcon,
    value: '20+',
    description: 'Years of Experience',
  },
  {
    icon: TargetIcon,
    value: '70+',
    description: 'Successful Projects',
  },
  {
    icon: StarIcon,
    value: '550+',
    description: 'Customer Reviews',
  },
  {
    icon: MedalIcon,
    value: '25',
    description: 'Achieve Awards',
  },
]

export default stats
