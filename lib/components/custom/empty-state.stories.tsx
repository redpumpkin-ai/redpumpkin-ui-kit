import type { Meta, StoryObj } from "@storybook/react";
import { EmptyState } from "./empty-state";

const meta = {
    title: "Custom/EmptyState",
    component: EmptyState,
    tags: ["autodocs"],
    argTypes: {
        description: {
            type: "string",
            description: "The description of the empty state.",
        },
        imageUrl: {
            type: "string",
            description: "The URL of the image to display in the empty state.",
        },
    },
} satisfies Meta<typeof EmptyState>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        description: "No data available",
        imageUrl: "/images/icon-empty-data.svg",
    },
};