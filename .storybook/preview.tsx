import "../lib/index.css";
import type { Decorator } from "@storybook/react";
import { SidebarProvider } from "../lib/components/ui/sidebar";

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "light",
    toolbar: {
      icon: "circlehollow",
      items: [
        { value: "light", title: "Light" },
        { value: "dark", title: "Dark" },
      ],
      dynamicTitle: true,
    },
  },
};

const withTheme: Decorator = (Story, context) => {
  const theme = context.globals.theme === "dark" ? "dark" : "light";
  const root = document.documentElement;
  root.classList.remove("dark");
  if (theme === "dark") root.classList.add("dark");

  return (
    <SidebarProvider>
      <div className="min-h-screen p-8 bg-background text-foreground">
        <Story />
      </div>
    </SidebarProvider>
  );
};

export const decorators: Decorator[] = [withTheme];

export const parameters = {
  controls: {
    expanded: true,
    matchers: { color: /(background|color)$/i, date: /Date$/ },
  },
  docs: { autodocs: true },
};
