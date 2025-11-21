import type { Meta, StoryObj } from "@storybook/react";
import userEvent from "@testing-library/user-event";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet";
import { Button } from "./button";

const meta = {
  title: "UI/Sheet",
  component: Sheet,
  subcomponents: {
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
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
} satisfies Meta<typeof Sheet>;

export default meta;

type Story = StoryObj<typeof Sheet>;

export const Default: Story = {
  render: (args) => (
    <Sheet {...args}>
      <SheetTrigger asChild>
        <Button>Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="name" className="text-right text-sm">
              Name
            </label>
            <input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3 border rounded px-3 py-2 text-sm"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="username" className="text-right text-sm">
              Username
            </label>
            <input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3 border rounded px-3 py-2 text-sm"
            />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
  play: async ({ canvasElement }) => {
    const buttons = Array.from(canvasElement.querySelectorAll("button"));
    const trigger = buttons.find((b) => /open sheet/i.test(b.textContent || ""));
    if (trigger) await userEvent.click(trigger);
  },
};

export const Controlled: Story = {
  args: {
    open: true,
  },
  render: (args) => (
    <Sheet {...args}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Controlled Sheet</SheetTitle>
          <SheetDescription>
            This sheet is controlled with the open prop set to true by default.
          </SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <SheetClose asChild>
            <Button>Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};

export const Top: Story = {
  render: (args) => (
    <Sheet {...args}>
      <SheetTrigger asChild>
        <Button>Open Top Sheet</Button>
      </SheetTrigger>
      <SheetContent side="top">
        <SheetHeader>
          <SheetTitle>Top Sheet</SheetTitle>
          <SheetDescription>
            This sheet opens from the top of the screen.
          </SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};

export const Left: Story = {
  render: (args) => (
    <Sheet {...args}>
      <SheetTrigger asChild>
        <Button>Open Left Sheet</Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Left Sheet</SheetTitle>
          <SheetDescription>
            This sheet opens from the left side of the screen.
          </SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};

export const Bottom: Story = {
  render: (args) => (
    <Sheet {...args}>
      <SheetTrigger asChild>
        <Button>Open Bottom Sheet</Button>
      </SheetTrigger>
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle>Bottom Sheet</SheetTitle>
          <SheetDescription>
            This sheet opens from the bottom of the screen.
          </SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};
