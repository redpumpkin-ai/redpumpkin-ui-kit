import type { Meta, StoryObj } from "@storybook/react";
import { RoleBadge } from "./role-badge";

const meta = {
    title: "Custom/RoleBadge",
    component: RoleBadge,
    tags: ["autodocs"],
    argTypes: {
        color: {
            control: "color",
        },
    },
} satisfies Meta<typeof RoleBadge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: "Admin",
        color: "#22c55e",
    },
};