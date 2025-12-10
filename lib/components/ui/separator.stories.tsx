import type { Meta, StoryObj } from '@storybook/react'
import { Separator } from './separator'

const meta: Meta<typeof Separator> = {
  title: 'UI/Separator',
  component: Separator,
  tags: ['autodocs'],
  args: { orientation: 'horizontal' },
  parameters: {
    controls: { exclude: ['className', 'style', 'ref', 'asChild'] },
  },
  argTypes: {
    orientation: {
      control: { type: 'radio' },
      options: ['horizontal', 'vertical'],
    },
  },
}

export default meta

type Story = StoryObj<typeof Separator>

export const Horizontal: Story = {}
export const Vertical: Story = { args: { orientation: 'vertical' } }
