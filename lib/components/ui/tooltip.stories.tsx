import type { Meta, StoryObj } from "@storybook/react";
import userEvent from "@testing-library/user-event";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "./tooltip";
import { Button } from "./button";

const meta = {
  title: "UI/Tooltip",
  component: Tooltip,
  subcomponents: {
    TooltipContent,
    TooltipTrigger,
  },
  tags: ["autodocs"],
  args: {
    open: false,
  },
  argTypes: {
    onOpenChange: { action: "onOpenChange" },
  },
  parameters: {
    controls: {
      exclude: ["className", "style", "ref", "asChild"],
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: (args) => (
    <Tooltip {...args}>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  ),
  play: async ({ canvasElement }) => {
    const buttons = Array.from(canvasElement.querySelectorAll("button"));
    const trigger = buttons.find((b) => /hover me/i.test(b.textContent || ""));
    if (trigger) await userEvent.hover(trigger);
  },
};

export const Controlled: Story = {
  args: {
    open: true,
  },
  render: (args) => (
    <Tooltip {...args}>
      <TooltipTrigger asChild>
        <Button variant="outline">Anchor</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>This tooltip is controlled with the open prop set to true by default.</p>
      </TooltipContent>
    </Tooltip>
  ),
};

export const DifferentPositions: Story = {
  render: () => (
    <div className="flex gap-4 flex-wrap">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Top</Button>
        </TooltipTrigger>
        <TooltipContent side="top">
          <p>Tooltip on top</p>
        </TooltipContent>
      </Tooltip>
      
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Right</Button>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>Tooltip on right</p>
        </TooltipContent>
      </Tooltip>
      
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Bottom</Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>Tooltip on bottom</p>
        </TooltipContent>
      </Tooltip>
      
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Left</Button>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>Tooltip on left</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

export const WithIcon: Story = {
  render: (args) => (
    <Tooltip {...args}>
      <TooltipTrigger asChild>
        <Button variant="outline" size="icon">
          <span className="text-lg">⚡</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Lightning fast performance</p>
      </TooltipContent>
    </Tooltip>
  ),
};

export const LongContent: Story = {
  render: (args) => (
    <Tooltip {...args}>
      <TooltipTrigger asChild>
        <Button variant="outline">Long tooltip</Button>
      </TooltipTrigger>
      <TooltipContent className="max-w-xs">
        <p>This is a longer tooltip with more detailed information about the feature or functionality you're hovering over.</p>
      </TooltipContent>
    </Tooltip>
  ),
};