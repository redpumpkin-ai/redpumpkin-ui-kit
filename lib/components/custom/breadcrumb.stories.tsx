import type { Meta, StoryObj } from "@storybook/react";
import { CustomBreadcrumb } from "./breadcrumb";

const meta: Meta<typeof CustomBreadcrumb> = {
    title: "Custom/Breadcrumb",
    component: CustomBreadcrumb,
    tags: ["autodocs"],
    argTypes: {
        items: {
            control: "object",
        },
        separator: {
            control: "text",
        },
        activeClassName: {
            control: "text",
        },
        linkClassName: {
            control: "text",
        },
        separatorClassName: {
            control: "text",
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        items: [
            { path: "/", label: "Home" },
            { path: "/about", label: "About" },
            { path: "/contact", label: "Contact" },
        ],
    },
};