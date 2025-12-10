import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton } from './skeleton'

const meta: Meta<typeof Skeleton> = {
  title: 'UI/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  args: { className: 'h-4 w-24' },
  parameters: {
    controls: { exclude: ['className', 'style', 'ref', 'asChild'] },
  },
}

export default meta

type Story = StoryObj<typeof Skeleton>

export const Default: Story = {}
