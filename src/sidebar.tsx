import {
    Home,
    BookOpen,
    Settings,
    Plus,
    LogOut,
} from "lucide-react";

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuItemIcon,
    SidebarMenuItemLabel,
    SidebarMenuItemCaret,
    SidebarMenuDropdown,
    SidebarMenuSeparator,
    SidebarMenuTitle,
    SidebarUserProfile,
    SidebarUserProfileMenuItem,
    SidebarGroup,
    useSidebar,

    // others
    TokenUsage,
} from "@/lib/main";

export function AppSidebar() {
    const { open } = useSidebar();

    return (
        <Sidebar>
            <SidebarHeader
                title="Redpumpkin.AI"
                description="Virtual Assistant"
                logo="/images/logo-redpumpkin-icon.png"
            />
            <SidebarContent>
                <SidebarMenu>
                    <SidebarMenuItem id="home" className="bg-background border-border">
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
                {
                    open && (
                        <div className="p-4">
                            <div className="p-4 whitespace-nowrap bg-background border rounded-md">
                                <h4 className="mb-3 text-sm text-muted-foreground leading-snug">
                                    Token usage
                                </h4>
                                <TokenUsage
                                    inputTokens={{
                                        value: 100,
                                        label: "100",
                                        color: "#A420F6",
                                    }}
                                    outputTokens={{
                                        value: 200,
                                        label: "200",
                                        color: "#C979FF",
                                    }}
                                    totalTokens={{
                                        value: 300,
                                        label: "300",
                                        color: "#DFA6FF",
                                    }}
                                />
                            </div>
                        </div>
                    )
                }
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
        </Sidebar>
    );
}