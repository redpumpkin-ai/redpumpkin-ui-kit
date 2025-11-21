import type { Meta, StoryObj } from "@storybook/react";
import userEvent from "@testing-library/user-event";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
} from "./navigation-menu";

const meta = {
  title: "UI/NavigationMenu",
  component: NavigationMenu,
  subcomponents: {
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuContent,
    NavigationMenuTrigger,
    NavigationMenuLink,
    NavigationMenuIndicator,
    NavigationMenuViewport,
  },
  tags: ["autodocs"],
  parameters: {
    controls: { exclude: ["className", "style", "ref", "asChild"] },
  },
} satisfies Meta<typeof NavigationMenu>;

export default meta;

type Story = StoryObj<typeof NavigationMenu>;

export const Default: Story = {
  render: () => (
    <div className="max-w-xl">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Learn</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px]">
                <li>
                  <NavigationMenuLink href="#">
                    Introduction
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink href="#">
                    Installation
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink href="#">
                    Usage
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Components</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px]">
                <li>
                  <NavigationMenuLink href="#">Button</NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink href="#">Card</NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink href="#">Dialog</NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="#">Docs</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuIndicator />
        <NavigationMenuViewport />
      </NavigationMenu>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const triggers = Array.from(
      canvasElement.querySelectorAll('[data-slot="navigation-menu-trigger"]')
    );
    const first = triggers[0] as HTMLElement | undefined;
    if (first) {
      first.focus();
      await userEvent.keyboard("{Enter}");
      await userEvent.keyboard("{ArrowRight}");
      await userEvent.keyboard("{ArrowLeft}");
      await userEvent.keyboard("{Escape}");
    }
  },
};