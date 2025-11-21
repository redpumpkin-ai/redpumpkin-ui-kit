import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
  tags: ["autodocs"],
  args: { placeholder: "Type here", type: "text" },
  parameters: {
    controls: { exclude: ["className", "style", "ref", "asChild"] },
  },
  argTypes: {
    onChange: { action: "onChange" },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {};
export const Password: Story = { args: { type: "password", placeholder: "Password" } };