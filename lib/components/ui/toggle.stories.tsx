import type { Meta, StoryObj } from '@storybook/react'
import { Toggle } from './toggle'

const meta: Meta<typeof Toggle> = {
  title: 'UI/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  args: {
    children: 'Toggle',
    variant: 'default',
    size: 'default',
    defaultPressed: false,
  },
  parameters: {
    controls: { exclude: ['className', 'style', 'ref', 'asChild'] },
  },
  argTypes: {
    variant: { control: { type: 'radio' }, options: ['default', 'outline'] },
    size: { control: { type: 'radio' }, options: ['default', 'sm', 'lg'] },
  },
}

export default meta

type Story = StoryObj<typeof Toggle>

export const Default: Story = {}
export const Outline: Story = { args: { variant: 'outline' } }
