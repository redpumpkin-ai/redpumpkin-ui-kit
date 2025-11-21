import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "./slider";

const meta: Meta<typeof Slider> = {
  title: "UI/Slider",
  component: Slider,
  tags: ["autodocs"],
  args: { defaultValue: [25, 75], min: 0, max: 100 },
  parameters: {
    controls: { exclude: ["className", "style", "ref", "asChild"] },
  },
  argTypes: {
    onValueChange: { action: "onValueChange" },
  },
};

export default meta;

type Story = StoryObj<typeof Slider>;

export const Default: Story = {};