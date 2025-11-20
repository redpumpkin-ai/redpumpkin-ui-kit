import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "./progress";

const meta: Meta<typeof Progress> = {
  title: "UI/Progress",
  component: Progress,
  tags: ["autodocs"],
  args: { value: 50 },
  parameters: {
    controls: { exclude: ["className", "style", "ref", "asChild"] },
  },
};

export default meta;

type Story = StoryObj<typeof Progress>;

export const Default: Story = {};