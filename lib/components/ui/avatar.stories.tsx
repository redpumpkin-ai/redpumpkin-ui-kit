import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarImage, AvatarFallback } from "./avatar";

const meta: Meta<typeof Avatar> = {
  title: "UI/Avatar",
  component: Avatar,
  subcomponents: { AvatarImage, AvatarFallback },
  tags: ["autodocs"],
  args: { children: <AvatarFallback>RP</AvatarFallback> },
  parameters: {
    controls: { exclude: ["className", "style", "ref", "asChild"] },
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {};