import type { Meta, StoryObj } from '@storybook/react'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from './accordion'

const meta = {
  title: 'UI/Accordion',
  component: Accordion,
  subcomponents: { AccordionItem, AccordionTrigger, AccordionContent },
  tags: ['autodocs'],
  args: { type: 'single', collapsible: true },
  argTypes: {
    type: { control: { type: 'radio' }, options: ['single', 'multiple'] },
  },
  parameters: {
    controls: { exclude: ['className', 'style', 'ref', 'asChild'] },
  },
} satisfies Meta<typeof Accordion>

export default meta

type Story = StoryObj<typeof Accordion>

export const Default: Story = {
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>Yes.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>Yes.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}
