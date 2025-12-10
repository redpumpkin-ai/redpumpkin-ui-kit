import type { Meta, StoryObj } from '@storybook/react'
import { RadioGroup, RadioGroupItem } from './radio-group'

const meta: Meta<typeof RadioGroup> = {
  title: 'UI/RadioGroup',
  component: RadioGroup,
  subcomponents: { RadioGroupItem },
  tags: ['autodocs'],
  args: { defaultValue: 'a' },
  parameters: {
    controls: { exclude: ['className', 'style', 'ref', 'asChild'] },
  },
  argTypes: {
    onValueChange: { action: 'onValueChange' },
  },
}

export default meta

type Story = StoryObj<typeof RadioGroup>

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="a">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="a" id="a" />
        <label htmlFor="a">Option A</label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="b" id="b" />
        <label htmlFor="b">Option B</label>
      </div>
    </RadioGroup>
  ),
}
