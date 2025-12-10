import type { Meta, StoryObj } from '@storybook/react'
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from './collapsible'

const meta = {
  title: 'UI/Collapsible',
  component: Collapsible,
  subcomponents: { CollapsibleTrigger, CollapsibleContent },
  tags: ['autodocs'],
  args: { open: true },
  argTypes: {
    onOpenChange: { action: 'onOpenChange' },
  },
  parameters: {
    controls: { exclude: ['className', 'style', 'ref', 'asChild'] },
  },
} satisfies Meta<typeof Collapsible>

export default meta

type Story = StoryObj<typeof Collapsible>

export const Default: Story = {
  render: (args) => (
    <Collapsible {...args}>
      <CollapsibleTrigger>Toggle</CollapsibleTrigger>
      <CollapsibleContent>Content</CollapsibleContent>
    </Collapsible>
  ),
}
