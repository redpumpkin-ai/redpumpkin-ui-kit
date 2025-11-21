import type { Meta, StoryObj } from "@storybook/react";
import { AspectRatio } from "./aspect-ratio";

const meta = {
  title: "UI/AspectRatio",
  component: AspectRatio,
  tags: ["autodocs"],
  args: { ratio: 16 / 9 },
  parameters: {
    controls: { exclude: ["className", "style", "ref", "asChild"] },
  },
} satisfies Meta<typeof AspectRatio>;

export default meta;

type Story = StoryObj<typeof AspectRatio>;

export const Default: Story = {
  render: (args) => (
    <div className="w-64">
      <AspectRatio {...args}>
        <div className="bg-muted rounded-lg w-full h-full flex items-center justify-center">Media</div>
      </AspectRatio>
    </div>
  ),
};