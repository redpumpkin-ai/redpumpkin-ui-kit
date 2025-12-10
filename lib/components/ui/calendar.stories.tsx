import type { Meta, StoryObj } from '@storybook/react'
import { Calendar, CalendarDayButton } from './calendar'

const meta: Meta<typeof Calendar> = {
  title: 'UI/Calendar',
  component: Calendar,
  subcomponents: { CalendarDayButton },
  tags: ['autodocs'],
  args: {
    mode: 'single',
    selected: new Date(),
    captionLayout: 'label',
  },
  parameters: {
    controls: { exclude: ['className', 'style', 'ref', 'asChild'] },
  },
  argTypes: {
    mode: {
      control: { type: 'radio' },
      options: ['single', 'multiple', 'range'],
    },
  },
}

export default meta

type Story = StoryObj<typeof Calendar>

export const Default: Story = {}

export const Multiple: Story = {
  args: {
    mode: 'multiple',
    selected: [new Date()],
  },
}

export const Range: Story = {
  args: {
    mode: 'range',
    selected: {
      from: new Date(),
      to: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    },
  },
}
