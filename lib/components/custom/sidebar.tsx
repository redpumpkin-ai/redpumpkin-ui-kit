import { createContext, useContext, useState } from "react";
import { PanelLeft, ChevronUp, ChevronDown, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";

import { Label } from "@/lib/components/ui/label";
import { Button } from "@/lib/components/ui/button";
import { ScrollArea } from "@/lib/components/ui/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/lib/components/ui/select";
import { Popover, PopoverTrigger, PopoverContent } from "@/lib/components/ui/popover";

interface SidebarContext {
    open: boolean;
    setOpen: (open: boolean) => void;
}

const SidebarContext = createContext<SidebarContext | null>(null);

export function useSidebar() {
    const context = useContext(SidebarContext);
    if (!context) {
        throw new Error("useSidebar must be used within a Sidebar");
    }
    return context;
}

export function SidebarProvider({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useState<boolean>(true);

    return (
        <SidebarContext.Provider value={{ open, setOpen }}>
            {children}
        </SidebarContext.Provider>
    );
}

export function Sidebar({ children }: { children: React.ReactNode; }) {
    const { open } = useSidebar();

    return (
        <aside className={cn(
                "flex flex-col w-[243px] bg-[#f9f9f9] border-r border-border transition-all duration-300 ease-in-out",
                !open && "w-[82px]",
            )}
            >
            {children}
        </aside>
    );
}

export function SidebarTrigger({ children, className }: { children: React.ReactNode; className?: string; }) {
    const { open, setOpen } = useSidebar();

    return (
        <button type="button" onClick={() => setOpen(!open)} className={cn("cursor-pointer", className)}>
            {children}
        </button>
    );
}

export function SidebarHeader({ title, description, logo, className }: {
    title: string;
    description: string;
    logo: string;
    className?: string;
}) {
    const { open } = useSidebar();

    return (
        <header className={cn("flex relative px-4 h-[65px] items-center border-b border-border", className)}>
            <div className="flex gap-3 items-center">
                <img
                    alt={title}
                    src={logo}
                    loading="lazy"
                    className="block max-w-[38px] max-h-[38px]"
                />
                {
                    open && (
                        <span className="grid whitespace-nowrap">
                            <span className="font-semibold uppercase leading-none">
                                {title}
                            </span>
                            <span className="text-sm text-muted-foreground leading-none leading-snug">
                                {description}
                            </span>
                        </span>
                    )
                }
            </div>
        </header>
    );
}

export function SidebarContent({ children, className, heightReduce }: {
    children: React.ReactNode;
    className?: string;
    heightReduce?: number;
}) {
    const { open } = useSidebar();

    return (
        <ScrollArea style={{ height: `calc(100vh - ${heightReduce || (open ? 229 : 155)}px)`}} className={cn("", className)}>
            {children}
        </ScrollArea>
    );
}

export function SidebarFooter({ children, className }: { children: React.ReactNode; className?: string; }) {
    return (
        <footer className={cn("p-4 bg-background border-t", className)}>
            {children}
        </footer>
    );
}

export function SidebarMenu({ children, className }: { children: React.ReactNode; className?: string; }) {
    const { open } = useSidebar();

    return (
        <nav className={cn("flex-grow p-4", className)}>
            <ul className={cn("grid gap-1", open ? "w-[210px]" : "w-[50px]")}>
                {children}
            </ul>
        </nav>
    );
}

export function SidebarMenuTitle({ label }: { label: string }) {
    const { open } = useSidebar();

    return open ? (
        <li className="relative mb-2">
            <span className="block relative z-[2] text-sm text-muted-foreground whitespace-nowrap">
                <span className="pr-3 bg-[#f9f9f9]">{label}</span>
            </span>
            <span className="flex absolute inset-0 items-center">
                <span className="block w-full h-px border border-dotted"></span>
            </span>
        </li>
    ) : (
        <li className="relative my-2 border-t"></li>
    );
}

export function SidebarMenuSeparator() {
    const { open } = useSidebar();

    return open ? (
        <li><span className="block py-2"></span></li>
    ) : null;
}

export function SidebarMenuItem({ id, className, ...props }: React.ComponentProps<"li">) {
    const { open } = useSidebar();

    return (
        <li
            className={`sidebar-menu-${id} ${cn(
                "flex py-2.5 px-2.5 min-h-[42px] gap-2 text-sm items-center border border-transparent rounded-md transition-colors whitespace-nowrap hover:bg-background",
                !open && "gap-0",
                className
            )}`}
            {...props}
        />
    );
}

export function SidebarMenuItemIcon({ icon }: { icon: React.ReactNode; }) {
    return (
        <span className="block w-6">
            {icon}
        </span>
    );
}

export function SidebarMenuItemLabel({ label }: { label: string; }) {
    const { open } = useSidebar();

    return open ? (
        <span className={cn("flex-grow line-clamp-1")}>
            {label}
        </span>
    ) : null;
}

export function SidebarMenuItemCaret() {
    return (
        <span className="block w-1 h-5 bg-foreground rounded-lg"></span>
    );
}

export function SidebarMenuDropdown({ id, icon, label, isActive, children }: {
    id: string;
    icon: React.ReactNode;
    label: string;
    isActive?: boolean;
    children: React.ReactNode;
}) {
    const { open } = useSidebar();
    const [isOpen, setIsOpen] = useState<boolean>(isActive ?? false);

    return (
        <li className={`sidebar-menu-${id}`}>
            <button type="button" onClick={() => setIsOpen(prev => !prev)} className={cn(
                    "flex py-2.5 px-3 min-h-[42px] gap-2 w-full text-sm text-left items-center border border-transparent rounded-md transition-colors whitespace-nowrap hover:bg-secondary",
                    isActive && "bg-secondary border-border"
                )}
                >
                <span className="block w-6">{icon}</span>
                {
                    open && (
                        <>
                            <span className="flex-grow line-clamp-1">
                                {label}
                            </span>
                            <span className="block w-4">
                                {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                            </span>
                        </>
                    )
                }
            </button>
            {
                isOpen && (
                    <div className="ml-5.5 pl-4 border-l">
                        <ul className="grid gap-1 mt-2">
                            {children}
                        </ul>
                    </div>
                )
            }
        </li>
    );
}

export function SidebarGroup({
    label = "Groups",
    placeholder = "Select Group",
    items,
    value,
    onValueChange,
}: {
    label: string;
    placeholder?: string;
    items: { value: string; label: string; }[];
    value: string;
    onValueChange: (value: string) => void;
}) {
    const { open } = useSidebar();

    if (!open) {
        return null;
    }

    return (
        <div className="grid gap-2">
            <Label>{label}</Label>
            <Select value={value} onValueChange={onValueChange}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                    {items.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                            {item.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
}

export function SidebarUserProfile({
    name,
    email,
    avatar,
    menu,
}: {
    name: string;
    email: string;
    avatar?: string;
    menu?: React.ReactNode;
}) {
    const { open } = useSidebar();

    return (
        <Popover>
            <PopoverTrigger asChild>
                <div className="cursor-pointer">
                    <div className="flex gap-3 items-center">
                        <figure className="flex relative w-10 min-w-[40px] h-10 overflow-hidden bg-background border rounded-full">
                            <picture className="flex absolute inset-0 p-1 overflow-hidden">
                                {
                                    avatar ? (
                                        <img
                                            src={avatar}
                                            alt={name}
                                            loading="lazy"
                                            className="block w-full h-full object-cover"
                                        />
                                    ) : (
                                        <img
                                            src="/images/avatar-placeholder.jpg"
                                            alt={name}
                                            loading="lazy"
                                            className="block w-full h-full object-cover rounded-full"
                                        />
                                    )
                                }
                            </picture>
                        </figure>
                        {
                            open && (
                                <>
                                    <div className="flex-grow">
                                        <div className="text-sm font-medium">{name}</div>
                                        <div className="text-xs text-muted-foreground">{email}</div>
                                    </div>
                                    <Button
                                        type="button"
                                        variant="outline"
                                        className="!w-7 !h-7 self-center"
                                        >
                                        <ChevronsUpDown />
                                    </Button>
                                </>
                            )
                        }
                    </div>
                </div>
            </PopoverTrigger>
            <PopoverContent
                side="right"
                sideOffset={20}
                align="start"
                className="mb-4 p-1 w-[200px] border rounded-lg"
                style={{
                    boxShadow: `0px 0px 24px 0px #00000014`,
                }}
                >
                <ul className="grid gap-1 text-sm">
                    {menu}
                </ul>
            </PopoverContent>
        </Popover>
    );
}

export function SidebarUserProfileMenuItem({
    label,
    icon,
    onClick,
    className,
}: {
    label: string;
    icon: React.ReactNode;
    onClick: () => void;
    className?: string;
}) {
    return (
        <li>
            <button
                type="button"
                className={cn("flex w-full p-2.5 text-left rounded-md transition-colors hover:bg-muted", className)}
                onClick={onClick}
                >
                <span className="flex-grow">{label}</span>
                <span>{icon}</span>
            </button>
        </li>
    );
}

export function SidebarBody({ children }: { children: React.ReactNode; }) {
    return (
        <div className="flex w-full h-screen overflow-hidden">
            {children}
        </div>
    );
}

export function SidebarBodyHeader({ children }: { children: React.ReactNode; }) {
    const { open, setOpen } = useSidebar();

    return (
        <header className="h-[65px]">
            <nav className="stick top-0 left-0 right-0 z-40 h-[65px] border-b bg-background">
                <div className="flex px-4 h-full items-center">
                    <div className="pr-4 border-r">
                        <button
                            type="button"
                            className="flex w-8 h-8 items-center justify-center cursor-pointer shadow-xs rounded-md border outline-none transition-all"
                            onClick={() => setOpen(!open)}
                            >
                            <PanelLeft size={20} />
                        </button>
                    </div>
                    <div className="flex-grow pl-4">
                        {children}
                    </div>
                </div>
            </nav>
        </header>
    );
}

export function SidebarBodyContent({ children }: { children: React.ReactNode; }) {
    const { open } = useSidebar();

    return (
        <main
            className="flex flex-col relative z-[3] w-full h-full bg-background transition-all duration-300 ease-in-out"
            style={{
                width: open ? `calc(100% - 243px)` : `100%`,
            }}
            >
            {children}
        </main>
    );
}

export function SidebarBodyWrapper({ children, className }: { children: React.ReactNode; className?: string; }) {
    return (
        <ScrollArea className={cn("p-4", className)} style={{ height: "calc(100% - 65px)" }}>
            {children}
        </ScrollArea>
    );
}