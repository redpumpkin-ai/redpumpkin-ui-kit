import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "UI/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  args: { defaultChecked: true },
  parameters: {
    controls: { exclude: ["className", "style", "ref", "asChild"] },
  },
  argTypes: {
    onCheckedChange: { action: "onCheckedChange" },
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {};