import type { Meta, StoryObj } from '@storybook/react'
import { InboxIcon } from 'lucide-react'
import { Button } from './button'
import {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
  EmptyMedia,
} from './empty'

const meta = {
  title: 'UI/Empty',
  component: Empty,
  subcomponents: {
    EmptyHeader,
    EmptyTitle,
    EmptyDescription,
    EmptyContent,
    EmptyMedia,
  },
  tags: ['autodocs'],
  parameters: {
    controls: { exclude: ['className', 'style', 'ref', 'asChild'] },
  },
} satisfies Meta<typeof Empty>

export default meta

type Story = StoryObj<typeof Empty>

export const Default: Story = {
  render: () => (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <InboxIcon className="size-6" />
        </EmptyMedia>
        <div className="flex-col gap-2">
          <EmptyTitle>No items found</EmptyTitle>
          <EmptyDescription>
            Add items to see them listed here.
          </EmptyDescription>
        </div>
      </EmptyHeader>
      <EmptyContent>
        <Button>Add item</Button>
      </EmptyContent>
    </Empty>
  ),
}
