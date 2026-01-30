import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./badge";

const meta: Meta<typeof Badge> = {
    title: "Custom/Badge",
    component: Badge,
    tags: ["autodocs"],
    argTypes: {
        color: {
            control: "color",
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        color: "#27A847",
        children: "Default",
    },
};
