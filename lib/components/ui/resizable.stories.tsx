import type { Meta, StoryObj } from "@storybook/react";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "./resizable";

const meta = {
  title: "UI/Resizable",
  component: ResizablePanelGroup,
  subcomponents: { ResizablePanel, ResizableHandle },
  tags: ["autodocs"],
  args: { direction: "horizontal" as const },
  argTypes: {
    direction: { control: { type: "radio" }, options: ["horizontal", "vertical"] },
  },
  parameters: {
    controls: { exclude: ["className", "style", "ref", "asChild"] },
  },
} satisfies Meta<typeof ResizablePanelGroup>;

export default meta;

type Story = StoryObj<typeof ResizablePanelGroup>;

export const Default: Story = {
  render: (args) => (
    <div className="h-48">
      <ResizablePanelGroup {...args}>
        <ResizablePanel defaultSize={50}>
          <div className="flex h-full items-center justify-center">Left</div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={50}>
          <div className="flex h-full items-center justify-center">Right</div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
};

export const Vertical: Story = {
  args: { direction: "vertical" },
  render: (args) => (
    <div className="h-48">
      <ResizablePanelGroup {...args}>
        <ResizablePanel defaultSize={50}>
          <div className="flex h-full items-center justify-center">Top</div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={50}>
          <div className="flex h-full items-center justify-center">Bottom</div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
};