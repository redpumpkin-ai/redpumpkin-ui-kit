import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import userEvent from '@testing-library/user-event'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from './drawer'
import { Button } from './button'

const meta = {
  title: 'UI/Drawer',
  component: Drawer,
  subcomponents: {
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
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
} satisfies Meta<typeof Drawer>

export default meta

type Story = StoryObj<typeof Drawer>

export const Default: Story = {
  render: (args) => {
    const [open, setOpen] = React.useState(false)
    return (
      <Drawer {...args} open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button>Open Drawer</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    )
  },
  play: async ({ canvasElement }) => {
    const buttons = Array.from(canvasElement.querySelectorAll('button'))
    const trigger = buttons.find((b) =>
      /open drawer/i.test(b.textContent || '')
    )
    if (trigger) await userEvent.click(trigger)
  },
}

export const Controlled: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = React.useState(false)
    // open: true

    return (
      <Drawer {...args} open={open} onOpenChange={setOpen}>
        <Button onClick={() => setOpen(true)}>Open Controlled Drawer</Button>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Controlled Drawer</DrawerTitle>
            <DrawerDescription>
              This drawer is controlled with the open prop set to true by
              default.
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button>Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    )
  },
}

export const Top: Story = {
  render: (args) => {
    const [open, setOpen] = React.useState(false)
    return (
      <Drawer {...args} direction="top" open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button>Open Top Drawer</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Top Drawer</DrawerTitle>
            <DrawerDescription>
              This drawer opens from the top of the screen.
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    )
  },
}

export const Left: Story = {
  render: (args) => {
    const [open, setOpen] = React.useState(false)
    return (
      <Drawer {...args} direction="left" open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button>Open Left Drawer</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Left Drawer</DrawerTitle>
            <DrawerDescription>
              This drawer opens from the left side of the screen.
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    )
  },
}

export const Right: Story = {
  render: (args) => {
    const [open, setOpen] = React.useState(false)
    return (
      <Drawer {...args} direction="right" open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button>Open Right Drawer</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Right Drawer</DrawerTitle>
            <DrawerDescription>
              This drawer opens from the right side of the screen.
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    )
  },
}
