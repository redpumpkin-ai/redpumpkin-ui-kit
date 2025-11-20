import type { Meta, StoryObj } from "@storybook/react";
import { ToggleGroup, ToggleGroupItem } from "./toggle-group";

const meta: Meta<typeof ToggleGroup> = {
  title: "UI/ToggleGroup",
  component: ToggleGroup,
  subcomponents: { ToggleGroupItem },
  tags: ["autodocs"],
  args: { type: "single", defaultValue: "bold", variant: "outline", size: "default" },
  parameters: {
    controls: { exclude: ["className", "style", "ref", "asChild"] },
  },
  argTypes: {
    type: { control: { type: "radio" }, options: ["single", "multiple"] },
    variant: { control: { type: "radio" }, options: ["default", "outline"] },
    size: { control: { type: "radio" }, options: ["default", "sm", "lg"] },
  },
};

export default meta;

type Story = StoryObj<typeof ToggleGroup>;

export const Default: Story = {
  render: (args) => (
    <ToggleGroup {...args}>
      <ToggleGroupItem value="bold">Bold</ToggleGroupItem>
      <ToggleGroupItem value="italic">Italic</ToggleGroupItem>
      <ToggleGroupItem value="underline">Underline</ToggleGroupItem>
    </ToggleGroup>
  ),
};