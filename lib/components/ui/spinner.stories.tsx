import type { Meta, StoryObj } from '@storybook/react'
import { Spinner } from './spinner'

const meta: Meta<typeof Spinner> = {
  title: 'UI/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  args: { className: 'size-6' },
  parameters: {
    controls: { exclude: ['className', 'style', 'ref', 'asChild'] },
  },
}

export default meta

type Story = StoryObj<typeof Spinner>

export const Default: Story = {}
