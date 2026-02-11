import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import { CustomDrawer, CustomDrawerProvider, CustomDrawerHeader, CustomDrawerContent } from "./drawer";

const meta = {
    title: "Custom/Drawer",
    component: CustomDrawer,
    tags: ["autodocs"],
    decorators: [
        (Story) => {
            const [isOpen, setIsOpen] = useState(false);
            return (
                <div id="root">
                    <Button onClick={() => setIsOpen(true)}>
                        Open Drawer
                    </Button>
                    <CustomDrawerProvider isOpen={isOpen} closeDrawer={() => setIsOpen(false)}>
                        <Story />
                    </CustomDrawerProvider>
                </div>
            );
        },
    ],
} satisfies Meta<typeof CustomDrawer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        contentClassName: "w-[595px]",
        children: (
            <>
                <CustomDrawerHeader
                    title="Settings"
                    desc="Manage your profile and notification."
                />
                <ScrollArea style={{ height: `calc(100vh - 75px)`}}>
                    <CustomDrawerContent className="grid gap-4">
                        <p>Drawer Content</p>
                    </CustomDrawerContent>
                </ScrollArea>
            </>
        ),
    },
};
