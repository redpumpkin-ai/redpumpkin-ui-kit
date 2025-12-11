import type { Meta, StoryObj } from '@storybook/react'
import { AlertCircle, Terminal } from 'lucide-react'

import { Alert, AlertDescription, AlertTitle } from './alert'

const meta = {
  title: 'UI/Alert',
  component: Alert,
  subcomponents: { AlertTitle, AlertDescription },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive'],
    },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Alert>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Alert {...args} className="w-[500px]">
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  ),
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
  render: (args) => (
    <Alert {...args} className="w-[500px]">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
  ),
}

export const Simple: Story = {
  render: (args) => (
    <Alert {...args} className="w-[500px]">
      <AlertTitle>Note</AlertTitle>
      <AlertDescription>
        This is a simple alert without an icon.
      </AlertDescription>
    </Alert>
  ),
}

export const OnlyTitle: Story = {
  render: (args) => (
    <Alert {...args} className="w-[500px]">
      <AlertTitle>This is just a title</AlertTitle>
    </Alert>
  ),
}

export const OnlyDescription: Story = {
  render: (args) => (
    <Alert {...args} className="w-[500px]">
      <AlertDescription>
        This is just a description. It creates a simple banner-like effect.
      </AlertDescription>
    </Alert>
  ),
}
