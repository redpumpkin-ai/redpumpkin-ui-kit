import type { Meta, StoryObj } from "@storybook/react";
import {
  Sidebar,
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  SidebarSeparator,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarInput,
} from "./sidebar";

const meta = {
  title: "UI/Sidebar",
  component: Sidebar,
  subcomponents: {
    SidebarProvider,
    SidebarTrigger,
    SidebarInset,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
    SidebarSeparator,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarGroupAction,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarMenuAction,
    SidebarMenuBadge,
    SidebarMenuSub,
    SidebarMenuSubItem,
    SidebarMenuSubButton,
    SidebarInput,
  },
  tags: ["autodocs"],
  args: {
    side: "left",
    variant: "sidebar",
    collapsible: "offcanvas",
  },
  argTypes: {
    side: { control: { type: "radio" }, options: ["left", "right"] },
    variant: {
      control: { type: "radio" },
      options: ["sidebar", "floating", "inset"],
    },
    collapsible: {
      control: { type: "radio" },
      options: ["offcanvas", "icon", "none"],
    },
  },
  parameters: {
    controls: { exclude: ["className", "style", "ref", "asChild"] },
  },
} satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof Sidebar>;
type SidebarStoryArgs = React.ComponentProps<typeof Sidebar> & {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export const Default: Story = {
  render: (args: SidebarStoryArgs) => {
    const { open, onOpenChange, ...rest } = args;
    return (
      <SidebarProvider open={open} onOpenChange={onOpenChange}>
        <Sidebar {...rest}>
        <SidebarHeader>
          <SidebarInput placeholder="Search" />
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>General</SidebarGroupLabel>
            <SidebarGroupAction aria-label="Add" />
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="Home">Home</SidebarMenuButton>
                  <SidebarMenuAction aria-label="Pin" />
                  <SidebarMenuBadge>3</SidebarMenuBadge>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="Projects">Projects</SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="Settings">Settings</SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarSeparator />
          <SidebarGroup>
            <SidebarGroupLabel>Shortcuts</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton isActive>Overview</SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>Activity</SidebarMenuButton>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton>Today</SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton>Week</SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter></SidebarFooter>
        </Sidebar>
        <SidebarInset>
          <div className="flex h-12 items-center gap-2 border-b px-2">
            <SidebarTrigger />
            <div className="text-sm">Toolbar</div>
          </div>
          <div className="p-4 text-sm">Content area</div>
        </SidebarInset>
      </SidebarProvider>
    );
  },
};