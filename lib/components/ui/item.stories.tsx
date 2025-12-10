import type { Meta, StoryObj } from '@storybook/react'
import {
  Item,
  ItemMedia,
  ItemContent,
  ItemActions,
  ItemGroup,
  ItemSeparator,
  ItemTitle,
  ItemDescription,
  ItemHeader,
  ItemFooter,
} from './item'

const meta = {
  title: 'UI/Item',
  component: Item,
  subcomponents: {
    ItemMedia,
    ItemContent,
    ItemActions,
    ItemGroup,
    ItemSeparator,
    ItemTitle,
    ItemDescription,
    ItemHeader,
    ItemFooter,
  },
  tags: ['autodocs'],
  parameters: {
    controls: { exclude: ['className', 'style', 'ref', 'asChild'] },
  },
} satisfies Meta<typeof Item>

export default meta

type Story = StoryObj<typeof Item>

export const Default: Story = {}
