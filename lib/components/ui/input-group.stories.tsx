import type { Meta, StoryObj } from '@storybook/react'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupInput,
  InputGroupTextarea,
} from './input-group'

const meta = {
  title: 'UI/InputGroup',
  component: InputGroup,
  subcomponents: {
    InputGroupAddon,
    InputGroupButton,
    InputGroupText,
    InputGroupInput,
    InputGroupTextarea,
  },
  tags: ['autodocs'],
  parameters: {
    controls: { exclude: ['className', 'style', 'ref', 'asChild'] },
  },
} satisfies Meta<typeof InputGroup>

export default meta

type Story = StoryObj<typeof InputGroup>

export const Default: Story = {}
