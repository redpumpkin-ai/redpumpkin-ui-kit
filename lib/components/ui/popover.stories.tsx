import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import userEvent from '@testing-library/user-event'
import { Popover, PopoverContent, PopoverTrigger } from './popover'
import { Button } from './button'

const meta = {
  title: 'UI/Popover',
  component: Popover,
  subcomponents: {
    PopoverContent,
    PopoverTrigger,
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
} satisfies Meta<typeof Popover>

export default meta

type Story = StoryObj<typeof Popover>

export const Default: Story = {
  render: (args) => {
    const [open, setOpen] = React.useState(false)
    return (
      <Popover {...args} open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline">Open popover</Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="leading-none font-medium">Dimensions</h4>
              <p className="text-muted-foreground text-sm">
                Set the dimensions for the layer.
              </p>
            </div>
            <div className="grid gap-2">
              <div className="grid grid-cols-3 items-center gap-4">
                <label htmlFor="width">Width</label>
                <input
                  id="width"
                  defaultValue="100%"
                  className="col-span-2 h-8 w-full rounded border px-3 py-1 text-sm"
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <label htmlFor="maxWidth">Max. width</label>
                <input
                  id="maxWidth"
                  defaultValue="300px"
                  className="col-span-2 h-8 w-full rounded border px-3 py-1 text-sm"
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <label htmlFor="height">Height</label>
                <input
                  id="height"
                  defaultValue="25px"
                  className="col-span-2 h-8 w-full rounded border px-3 py-1 text-sm"
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <label htmlFor="maxHeight">Max. height</label>
                <input
                  id="maxHeight"
                  defaultValue="none"
                  className="col-span-2 h-8 w-full rounded border px-3 py-1 text-sm"
                />
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    )
  },
  play: async ({ canvasElement }) => {
    const buttons = Array.from(canvasElement.querySelectorAll('button'))
    const trigger = buttons.find((b) =>
      /open popover/i.test(b.textContent || '')
    )
    if (trigger) await userEvent.click(trigger)
  },
}

export const Controlled: Story = {
  render: (args) => {
    const [open, setOpen] = React.useState(false)
    // open: true

    return (
      <Popover {...args} open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline">Open Controlled Popover</Button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="p-4">
            <p>
              This popover is controlled with the open prop set to true by
              default.
            </p>
          </div>
        </PopoverContent>
      </Popover>
    )
  },
}

export const WithForm: Story = {
  render: (args) => {
    const [open, setOpen] = React.useState(false)
    return (
      <Popover {...args} open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline">Open form popover</Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="leading-none font-medium">New team member</h4>
              <p className="text-muted-foreground text-sm">
                Invite a new member to your team.
              </p>
            </div>
            <div className="grid gap-2">
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  placeholder="John Doe"
                  className="col-span-3 h-8 w-full rounded border px-3 py-1 text-sm"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  placeholder="john@example.com"
                  className="col-span-3 h-8 w-full rounded border px-3 py-1 text-sm"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="role">Role</label>
                <select className="col-span-3 h-8 w-full rounded border px-3 py-1 text-sm">
                  <option>Member</option>
                  <option>Admin</option>
                  <option>Owner</option>
                </select>
              </div>
            </div>
            <Button size="sm">Send invitation</Button>
          </div>
        </PopoverContent>
      </Popover>
    )
  },
}
