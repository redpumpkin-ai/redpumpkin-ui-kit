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
    <div className="max-w-2xl overflow-hidden rounded-md border border-neutral-200">
      <Accordion {...args}>
        <AccordionItem value="item-1">
          <AccordionTrigger badge="Badges label" badgesVariant="rounded">
            This is accordion
          </AccordionTrigger>
          <AccordionContent>
            Customize your store's appearance and functionality. Choose themes,
            configure layouts, and add features to create a unique shopping
            experience for your customers.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger badge="Badges label" badgesVariant="rounded">
            This is accordion
          </AccordionTrigger>
          <AccordionContent>
            Set up your tax configurations to ensure compliance with local and
            international regulations. Define tax rates for different regions,
            configure tax exemptions, and automate tax calculations for various
            product categories.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger badge="Badges label" badgesVariant="rounded">
            This is accordion
          </AccordionTrigger>
          <AccordionContent>
            Set up your tax configurations to ensure compliance with local and
            international regulations. Define tax rates for different regions,
            configure tax exemptions, and automate tax calculations for various
            product categories.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
}

export const WithoutBadge: Story = {
  render: (args) => (
    <div className="max-w-2xl overflow-hidden rounded-md border border-neutral-200">
      <Accordion {...args}>
        <AccordionItem value="item-1">
          <AccordionTrigger>This is accordion</AccordionTrigger>
          <AccordionContent>
            et up your tax configurations to ensure compliance with local and
            international regulations. Define tax rates for different regions,
            configure tax exemptions, and automate tax calculations for various
            product categories.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>This is accordion</AccordionTrigger>
          <AccordionContent>
            Set up your tax configurations to ensure compliance with local and
            international regulations. Define tax rates for different regions,
            configure tax exemptions, and automate tax calculations for various
            product categories.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>This is accordion</AccordionTrigger>
          <AccordionContent>
            Set up your tax configurations to ensure compliance with local and
            international regulations. Define tax rates for different regions,
            configure tax exemptions, and automate tax calculations for various
            product categories.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
}
