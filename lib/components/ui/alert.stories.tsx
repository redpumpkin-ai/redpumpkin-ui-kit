import type { Meta, StoryObj } from "@storybook/react"
import { Alert, AlertTitle, AlertDescription } from "./alert"

const meta = {
  title: "UI/Alert",
  component: Alert,
  subcomponents: { AlertTitle, AlertDescription },
  tags: ["autodocs"],
  parameters: {
    controls: { exclude: ["className", "style", "ref", "asChild"] },
  },
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof Alert>;

export const Default: Story = {};
