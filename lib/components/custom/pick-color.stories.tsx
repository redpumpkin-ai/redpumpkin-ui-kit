import type { Meta, StoryObj } from "@storybook/react";
import { colors } from "@/lib/utils/color";
import { PickColor } from "./pick-color";

const meta: Meta<typeof PickColor> = {
    title: "Custom/PickColor",
    component: PickColor,
    tags: ["autodocs"],
    argTypes: {
        currentColor: {
            control: "select",
            options: Object.values(colors),
        },
        onColorChange: {
            action: "colorChange",
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        currentColor: colors.green,
    },
};