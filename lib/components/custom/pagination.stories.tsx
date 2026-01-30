import type { Meta, StoryObj } from "@storybook/react";
import { Pagination } from "./pagination";

const meta: Meta<typeof Pagination> = {
    title: "Custom/Pagination",
    component: Pagination,
    tags: ["autodocs"],
    argTypes: {
        currentPage: {
            control: "number",
        },
        totalPage: {
            control: "number",
        },
        separatorClassName: {
            control: "text",
        },
        displayClassName: {
            control: "text",
        },
        prevClassName: {
            control: "text",
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        currentPage: 1,
        totalPage: 10,
    },
};