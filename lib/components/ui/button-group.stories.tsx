import type { Meta, StoryObj } from '@storybook/react'
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from './button-group'
import { Button } from './button'

const meta: Meta<typeof ButtonGroup> = {
  title: 'UI/ButtonGroup',
  component: ButtonGroup,
  subcomponents: { ButtonGroupSeparator, ButtonGroupText },
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

type Story = StoryObj<typeof ButtonGroup>

export const Default: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="outline">Left</Button>
      <ButtonGroupSeparator />
      <Button variant="outline">Right</Button>
    </ButtonGroup>
  ),
}
