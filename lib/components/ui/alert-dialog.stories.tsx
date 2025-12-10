import type { Meta, StoryObj } from '@storybook/react'
import userEvent from '@testing-library/user-event'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from './alert-dialog'
import { Button } from './button'

const meta = {
  title: 'UI/AlertDialog',
  component: AlertDialog,
  subcomponents: {
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
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
} satisfies Meta<typeof AlertDialog>

export default meta

type Story = StoryObj<typeof AlertDialog>

export const Default: Story = {
  render: (args) => (
    <AlertDialog {...args}>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Show Alert Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
  play: async ({ canvasElement }) => {
    const buttons = Array.from(canvasElement.querySelectorAll('button'))
    const trigger = buttons.find((b) =>
      /show alert dialog/i.test(b.textContent || '')
    )
    if (trigger) await userEvent.click(trigger)
  },
}

export const Controlled: Story = {
  args: {
    open: true,
  },
  render: (args) => (
    <AlertDialog {...args}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Controlled Alert Dialog</AlertDialogTitle>
          <AlertDialogDescription>
            This alert dialog is controlled with the open prop set to true by
            default.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}

export const Destructive: Story = {
  render: (args) => (
    <AlertDialog {...args}>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Delete Account</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete Account</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove all associated data.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
            Delete Account
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}
