import type { Meta, StoryObj } from '@storybook/react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from './tabs'

const meta = {
  title: 'UI/Tabs',
  component: Tabs,
  subcomponents: { TabsList, TabsTrigger, TabsContent },
  tags: ['autodocs'],
  parameters: {
    controls: { exclude: ['className', 'style', 'ref', 'asChild'] },
  },
} satisfies Meta<typeof Tabs>

export default meta

type Story = StoryObj<typeof Tabs>

export const Default: Story = {}
