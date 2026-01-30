import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "./progress";

const meta: Meta<typeof Progress> = {
    title: "Custom/Progress",
    component: Progress,
    tags: ["autodocs"],
    argTypes: {
        value: {
            control: "range",
            min: 0,
            max: 100,
        },
        bgColor: {
            control: "color",
        },
        activeColor: {
            control: "color",
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        value: 50,
        bgColor: "#d1d1d1",
        activeColor: "#171717",
    },
};
