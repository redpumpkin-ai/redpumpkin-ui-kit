import type { Meta, StoryObj } from "@storybook/react";
import { ScrollArea, ScrollBar } from "./scroll-area";

const meta = {
  title: "UI/ScrollArea",
  component: ScrollArea,
  subcomponents: { ScrollBar },
  tags: ["autodocs"],
  args: { className: "h-48 w-64" },
  parameters: {
    controls: { exclude: ["className", "style", "ref", "asChild"] },
  },
} satisfies Meta<typeof ScrollArea>;

export default meta;

type Story = StoryObj<typeof ScrollArea>;

export const Default: Story = {
  render: (args) => (
    <ScrollArea {...args}>
      <div className="p-4">
        <div className="space-y-2">
          <p>Line 1</p>
          <p>Line 2</p>
          <p>Line 3</p>
          <p>Line 4</p>
          <p>Line 5</p>
          <p>Line 6</p>
          <p>Line 7</p>
          <p>Line 8</p>
          <p>Line 9</p>
          <p>Line 10</p>
          <p>Line 11</p>
          <p>Line 12</p>
          <p>Line 13</p>
          <p>Line 14</p>
          <p>Line 15</p>
          <p>Line 16</p>
          <p>Line 17</p>
          <p>Line 18</p>
          <p>Line 19</p>
          <p>Line 20</p>
        </div>
      </div>
    </ScrollArea>
  ),
};