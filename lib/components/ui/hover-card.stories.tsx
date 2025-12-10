import type { Meta, StoryObj } from '@storybook/react'
import userEvent from '@testing-library/user-event'
import { HoverCard, HoverCardContent, HoverCardTrigger } from './hover-card'
import { Button } from './button'
import { Avatar, AvatarFallback, AvatarImage } from './avatar'

const meta = {
  title: 'UI/HoverCard',
  component: HoverCard,
  subcomponents: {
    HoverCardContent,
    HoverCardTrigger,
  },
  tags: ['autodocs'],
  args: {
    open: false,
  },
  argTypes: {
    onOpenChange: { action: 'onOpenChange' },
  },
  parameters: {
    controls: {
      exclude: ['className', 'style', 'ref', 'asChild'],
    },
  },
} satisfies Meta<typeof HoverCard>

export default meta

type Story = StoryObj<typeof HoverCard>

export const Default: Story = {
  render: (args) => (
    <HoverCard {...args}>
      <HoverCardTrigger asChild>
        <Button variant="link">@nextjs</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@nextjs</h4>
            <p className="text-sm">The React Framework for the Web</p>
            <div className="flex items-center pt-2">
              <span className="text-muted-foreground text-xs">
                Joined December 2021
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
  play: async ({ canvasElement }) => {
    const buttons = Array.from(canvasElement.querySelectorAll('button'))
    const trigger = buttons.find((b) => /@nextjs/i.test(b.textContent || ''))
    if (trigger) await userEvent.hover(trigger)
  },
}

export const Controlled: Story = {
  args: {
    open: true,
  },
  render: (args) => (
    <HoverCard {...args}>
      <HoverCardTrigger asChild>
        <Button variant="outline">Anchor</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="p-4">
          <p>
            This hover card is controlled with the open prop set to true by
            default.
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
}

export const UserProfile: Story = {
  render: (args) => (
    <HoverCard {...args}>
      <HoverCardTrigger asChild>
        <Button variant="ghost" className="h-auto p-0">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">shadcn</h4>
            <p className="text-muted-foreground text-sm">Software Engineer</p>
            <div className="flex items-center pt-2">
              <span className="text-muted-foreground text-xs">
                1.2k followers • 42 following
              </span>
            </div>
            <div className="flex gap-2 pt-2">
              <Button size="sm" className="h-7">
                Follow
              </Button>
              <Button size="sm" variant="outline" className="h-7">
                Message
              </Button>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
}

export const ProductCard: Story = {
  render: (args) => (
    <HoverCard {...args}>
      <HoverCardTrigger asChild>
        <Button variant="outline">View Product Details</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="space-y-3">
          <div className="bg-muted flex aspect-video items-center justify-center rounded-lg">
            <span className="text-muted-foreground text-sm">Product Image</span>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Premium Headphones</h4>
            <p className="text-muted-foreground text-sm">
              High-quality wireless headphones with noise cancellation
            </p>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold">$299</span>
            <Button size="sm">Add to Cart</Button>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
}
