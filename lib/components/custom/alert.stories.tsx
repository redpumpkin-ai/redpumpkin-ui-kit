import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "./alert";

const meta: Meta<typeof Alert> = {
    title: "Custom/Alert",
    component: Alert,
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: "radio",
            options: ["info", "success", "warning", "danger"],
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        variant: "info",
        children: "This is a default alert.",
    },
};
