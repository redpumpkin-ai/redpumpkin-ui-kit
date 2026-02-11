import type { Meta, StoryObj } from "@storybook/react";
import { Home, BookOpen, Settings, Plus, LogOut } from "lucide-react";

import {
    Sidebar,
    SidebarProvider,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
    SidebarMenu,
    SidebarMenuTitle,
    SidebarMenuSeparator,
    SidebarMenuItem,
    SidebarMenuItemIcon,
    SidebarMenuItemLabel,
    SidebarMenuItemCaret,
    SidebarMenuDropdown,
    SidebarUserProfile,
    SidebarUserProfileMenuItem,
    SidebarGroup,
    SidebarBody,
    SidebarBodyHeader,
    SidebarBodyContent,
    SidebarBodyWrapper,
} from "./sidebar";

const meta = {
    title: "Custom/Sidebar",
    component: Sidebar,
    tags: ["autodocs"],
    decorators: [
        (Story) => (
            <SidebarProvider>
                <SidebarBody>
                    <Story />
                    <SidebarBodyContent>
                        <SidebarBodyHeader>
                            Header
                        </SidebarBodyHeader>
                        <SidebarBodyWrapper>
                            <p>Content</p>
                        </SidebarBodyWrapper>
                    </SidebarBodyContent>
                </SidebarBody>
            </SidebarProvider>
        ),
    ],
} satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: (
            <>
                <SidebarHeader
                    title="Redpumpkin.AI"
                    description="Virtual Assistant"
                    logo="/images/logo-redpumpkin-icon.png"
                />
                <SidebarContent>
                    <SidebarMenu>
                        <SidebarMenuItem id="home" className="pr-1.5 bg-background border-border">
                            <SidebarMenuItemIcon icon={<Home size={18} />} />
                            <SidebarMenuItemLabel label="Home" />
                            <SidebarMenuItemCaret />
                        </SidebarMenuItem>
                        <SidebarMenuDropdown id="dropdown" icon={<BookOpen size={18} />} label="Master data">
                            <SidebarMenuItem id="sources">
                                <SidebarMenuItemLabel label="Sources" />
                            </SidebarMenuItem>
                            <SidebarMenuItem id="categories">
                                <SidebarMenuItemLabel label="Categories" />
                            </SidebarMenuItem>
                        </SidebarMenuDropdown>
                        <SidebarMenuSeparator />
                        <SidebarMenuTitle label="Admin panel" />
                        <SidebarMenuItem id="settings">
                            <SidebarMenuItemIcon icon={<Settings size={18} />} />
                            <SidebarMenuItemLabel label="Settings" />
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarContent>
                <SidebarFooter className="grid gap-4">
                    <SidebarGroup
                        label="Groups"
                        placeholder="Select Group"
                        items={[
                            { value: "group1", label: "Group 1" },
                            { value: "group2", label: "Group 2" },
                            { value: "group3", label: "Group 3" },
                        ]}
                        value=""
                        onValueChange={() => {}}
                    />
                    <span className="block h-px bg-border"></span>
                    <SidebarUserProfile
                        name="John Doe"
                        email="john.doe.support@gmail.com"
                        menu={
                            <>
                                <SidebarUserProfileMenuItem
                                    label="Invite people"
                                    icon={<Plus size={16} />}
                                    onClick={() => {}}
                                />
                                <li className="h-px bg-border"></li>
                                <SidebarUserProfileMenuItem
                                    label="Logout"
                                    icon={<LogOut size={16} />}
                                    className="text-red-500"
                                    onClick={() => {}}
                                />
                            </>
                        }
                    />
                </SidebarFooter>
            </>
        ),
    },
};