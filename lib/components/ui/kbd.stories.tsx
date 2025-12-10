import type { Meta, StoryObj } from '@storybook/react'
import { Kbd, KbdGroup } from './kbd'

const meta: Meta<typeof Kbd> = {
  title: 'UI/Kbd',
  component: Kbd,
  subcomponents: { KbdGroup },
  tags: ['autodocs'],
  args: { children: '⌘K' },
  parameters: {
    controls: { exclude: ['className', 'style', 'ref', 'asChild'] },
  },
}

export default meta

type Story = StoryObj<typeof Kbd>

export const Default: Story = {}
