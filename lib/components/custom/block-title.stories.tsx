import type { Meta, StoryObj } from "@storybook/react";
import { BlockTitle } from "./block-title";

const meta: Meta<typeof BlockTitle> = {
    title: "Custom/BlockTitle",
    component: BlockTitle,
    tags: ["autodocs"],
    argTypes: {
        title: {
            control: "text",
        },
        description: {
            control: "text",
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: "Default",
        description: "Default description",
    },
};