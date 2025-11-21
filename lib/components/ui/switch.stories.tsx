import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./switch";

const meta: Meta<typeof Switch> = {
  title: "UI/Switch",
  component: Switch,
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

type Story = StoryObj<typeof Switch>;

export const Default: Story = {};