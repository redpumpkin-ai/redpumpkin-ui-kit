import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { Button } from "../ui/button";
import { ModalProvider, Modal, ModalContent, ModalHeader, ModalContentBody } from "./modal";

const meta = {
    title: "Custom/Modal",
    component: Modal,
    tags: ["autodocs"],
    decorators: [
        (Story) => {
            const [isOpen, setIsOpen] = useState(false);
            return (
                <div id="root">
                    <Button onClick={() => setIsOpen(true)}>
                        Open Modal
                    </Button>
                    <ModalProvider isOpen={isOpen} onClose={() => setIsOpen(false)}>
                        <Story />
                    </ModalProvider>
                </div>
            );
        },
    ],
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: (
            <>
                <ModalContent className="w-full max-w-[457px]">
                    <ModalHeader
                        title="Invite people"
                        desc="Invite people to join your organization."
                    />
                    <ModalContentBody>
                        <p>Modal Content</p>
                    </ModalContentBody>
                </ModalContent>
            </>
        ),
    },
};