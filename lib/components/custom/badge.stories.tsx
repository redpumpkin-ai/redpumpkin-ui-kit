import type { Meta, StoryObj } from "@storybook/react";
import { colors } from "@/lib/utils/color";
import { Badge } from "./badge";

const meta: Meta<typeof Badge> = {
    title: "Custom/Badge",
    component: Badge,
    tags: ["autodocs"],
    argTypes: {
        color: {
            control: "color",
        },
        size: {
            control: "select",
            options: ["sm", "md", "lg"],
        },
        showDot: {
            control: "boolean",
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        size: "md",
        color: colors.green,
        children: "Default",
        showDot: true,
    },
};

export const NoDot: Story = {
    args: {
        size: "md",
        color: colors.green,
        children: "No Dot",
        showDot: false,
    },
};
