import type { Meta, StoryObj } from "@storybook/react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./popover";
import { Button } from "./button";

const meta = {
  title: "UI/Popover",
  component: Popover,
  subcomponents: {
    PopoverContent,
    PopoverTrigger,
  },
  tags: ["autodocs"],
  args: {
    open: false,
  },
  parameters: {
    controls: {
      exclude: ["className", "style", "ref", "asChild"],
    },
  },
} satisfies Meta<typeof Popover>;

export default meta;

type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: (args) => (
    <Popover {...args}>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-muted-foreground">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <label htmlFor="width">Width</label>
              <input
                id="width"
                defaultValue="100%"
                className="col-span-2 h-8 w-full border rounded px-3 py-1 text-sm"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <label htmlFor="maxWidth">Max. width</label>
              <input
                id="maxWidth"
                defaultValue="300px"
                className="col-span-2 h-8 w-full border rounded px-3 py-1 text-sm"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <label htmlFor="height">Height</label>
              <input
                id="height"
                defaultValue="25px"
                className="col-span-2 h-8 w-full border rounded px-3 py-1 text-sm"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <label htmlFor="maxHeight">Max. height</label>
              <input
                id="maxHeight"
                defaultValue="none"
                className="col-span-2 h-8 w-full border rounded px-3 py-1 text-sm"
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const Controlled: Story = {
  args: {
    open: true,
  },
  render: (args) => (
    <Popover {...args}>
      <PopoverContent>
        <div className="p-4">
          <p>This popover is controlled with the open prop set to true by default.</p>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const WithForm: Story = {
  render: (args) => (
    <Popover {...args}>
      <PopoverTrigger asChild>
        <Button variant="outline">Open form popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">New team member</h4>
            <p className="text-sm text-muted-foreground">
              Invite a new member to your team.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                placeholder="John Doe"
                className="col-span-3 h-8 w-full border rounded px-3 py-1 text-sm"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                placeholder="john@example.com"
                className="col-span-3 h-8 w-full border rounded px-3 py-1 text-sm"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="role">Role</label>
              <select className="col-span-3 h-8 w-full border rounded px-3 py-1 text-sm">
                <option>Member</option>
                <option>Admin</option>
                <option>Owner</option>
              </select>
            </div>
          </div>
          <Button size="sm">Send invitation</Button>
        </div>
      </PopoverContent>
    </Popover>
  ),
};