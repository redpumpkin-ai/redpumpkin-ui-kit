import type { Meta, StoryObj } from '@storybook/react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from './card'

const meta: Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,
  subcomponents: {
    CardHeader,
    CardFooter,
    CardTitle,
    CardAction,
    CardDescription,
    CardContent,
  },
  tags: ['autodocs'],
  args: {
    children: (
      <>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Short description</CardDescription>
        </CardHeader>
        <CardContent>Card content</CardContent>
        <CardFooter>Footer</CardFooter>
      </>
    ),
  },
  parameters: {
    controls: { exclude: ['className', 'style', 'ref', 'asChild'] },
  },
}

export default meta

type Story = StoryObj<typeof Card>

export const Default: Story = {}
