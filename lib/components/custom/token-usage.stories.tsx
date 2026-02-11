import type { Meta, StoryObj } from "@storybook/react";
import { TokenUsage } from "./token-usage";

const meta = {
    title: "Custom/TokenUsage",
    component: TokenUsage,
    tags: ["autodocs"],
    args: {
        inputTokens: {
            value: 100,
            label: "100",
            color: "#A420F6",
        },
        outputTokens: {
            value: 200,
            label: "200",
            color: "#C979FF",
        },
        totalTokens: {
            value: 300,
            label: "300",
            color: "#DFA6FF",
        },
        bgColor: "#F7F9F9",
    },
} satisfies Meta<typeof TokenUsage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        inputTokens: {
            value: 100,
            label: "100",
            color: "#A420F6",
        },
        outputTokens: {
            value: 200,
            label: "200",
            color: "#C979FF",
        },
        totalTokens: {
            value: 300,
            label: "300",
            color: "#DFA6FF",
        },
        bgColor: "#F7F9F9",
    },
};