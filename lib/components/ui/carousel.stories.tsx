import type { Meta, StoryObj } from '@storybook/react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from './carousel'

const meta = {
  title: 'UI/Carousel',
  component: Carousel,
  subcomponents: {
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
  },
  tags: ['autodocs'],
  parameters: {
    controls: { exclude: ['className', 'style', 'ref', 'asChild'] },
  },
} satisfies Meta<typeof Carousel>

export default meta

type Story = StoryObj<typeof Carousel>

export const Default: Story = {}
