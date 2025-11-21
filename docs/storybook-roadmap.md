# Storybook Development Roadmap

This roadmap outlines how to add every UI component in `lib/components/ui` to the Storybook playground and expose all available props and subcomponents with interactive controls and autodocs. Each phase includes AI Notes to guide an LLM builder.

## [x] Phase 0 — Prerequisites

- Ensure dependencies are installed: `npm install`
- Confirm Storybook scripts exist: `storybook`, `build-storybook` in `package.json` (found)
- Verify Vite library entry exports all components from `lib/main.ts` (found; see `lib/main.ts:2-54`)

AI Notes

- Detect repository root and confirm presence of `package.json` and `@storybook/react-vite`
- Parse `lib/main.ts` to enumerate all exported components for coverage tracking

## [x] Phase 1 — Initialize Storybook

- Create `.storybook/main.ts` with framework `@storybook/react-vite`
- Configure `stories` glob: `['lib/**/*.stories.@(ts|tsx)']`
- Merge Vite config to include Tailwind plugin and path aliases
- Create `.storybook/preview.ts` and import `lib/index.css`
- Set `parameters.controls.matchers` for color/date and `docs.autodocs: true`

AI Notes

- Generate `main.ts` and `preview.ts` using repository Vite config
- Import `lib/index.css` so components render with Tailwind styles
- Read `vite.config.ts` to mirror alias `@ → ./` and include `@tailwindcss/vite`

## [x] Phase 2 — Global Decorators and Theme

- Add global `decorators` in `preview.ts` to wrap stories in a container with `className` from Tailwind
- Provide `globalTypes.theme` (`'light' | 'dark'`) and toggle `document.documentElement.classList`
- If needed, add providers for components that require context (e.g., `SidebarProvider`)

AI Notes

- Implement a decorator that toggles `dark` class and applies padding so overlays are visible
- Expose a toolbar item for theme switching via `globalTypes`

## [x] Phase 3 — Base Story Pattern

- Use `tags: ['autodocs']` for every story to enable props tables
- Prefer `satisfies Meta<typeof Component>` for typed metadata
- Provide sensible `args` defaults so the component is visible by default
- Use `argTypes` to map union props to radio/select controls
- Exclude non-visual props: `parameters.controls.exclude: ['className','style','ref','asChild']`

Example Template

```ts
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  args: { children: "Button" },
  parameters: {
    controls: { exclude: ["className", "style", "ref", "asChild"] },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};
export const Destructive: Story = { args: { variant: "destructive" } };
```

AI Notes

- Always import the component from its sibling `./<name>` file, not from the library entry, to keep types precise
- Auto-generate controls from TypeScript union types where possible; fall back to `argTypes` when needed

## [x] Phase 4 — Subcomponents and Composition

- Many modules export subcomponents (e.g., `Dialog`, `Sheet`, `DropdownMenu`, `Sidebar`)
- Add `subcomponents` in `Meta` to surface their prop tables on the Docs page
- Create at least one composition story that wires trigger/content correctly

Example: DropdownMenu

```ts
import type { Meta, StoryObj } from "@storybook/react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./dropdown-menu";

const meta = {
  title: "UI/DropdownMenu",
  component: DropdownMenu,
  subcomponents: { DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem },
  tags: ["autodocs"],
} satisfies Meta<typeof DropdownMenu>;

export default meta;

export const Basic: StoryObj<typeof DropdownMenu> = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger>Open</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Item</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};
```

AI Notes

- Build `subcomponents` map from actual named exports of the file to show prop tables
- For compositions, use `render` and supply minimal DOM to demonstrate behavior

## [x] Phase 5 — Overlay Components (Controlled)

- For overlays (`Dialog`, `AlertDialog`, `Drawer`, `Sheet`, `Popover`, `Tooltip`, `HoverCard`): expose `open` and `onOpenChange` in `args`
- Provide a `Controlled` story that sets `open: true` so Docs shows the content
- Add a `play` function for interactions when useful (e.g., clicking triggers)

AI Notes

- Prefer controlled `args` for visibility in the playground; uncontrolled trigger-only stories make Docs empty
- Use `await userEvent.click(...)` in `play` to validate open/close behavior

## [x] Phase 6 — Data Display and Examples

- `Table`: provide sample rows and nested header/body; expose density props via controls
- `Chart`: include demo dataset and `ChartConfig`; show `ChartLegendContent` and `ChartTooltipContent`
- `Calendar`: default to `new Date()`; expose `mode` and `selected` controls
- `Pagination`: demonstrate numeric pages and callbacks via `action('onChange')`

AI Notes

- Include concise but realistic demo data; keep props exhaustive and controls responsive
- Verify that `ChartConfig` types render correctly in Docs; add `argTypes` for config keys if needed

## [x] Phase 7 — Inputs and Forms

- `Input`, `Textarea`, `Checkbox`, `RadioGroup`, `Switch`, `Slider`, `Select`, `InputOTP`: expose their value/state and event callbacks via controls and actions
- `Form` + `Field`: demonstrate integration with `react-hook-form` and `zod`

Example: Form

```ts
import type { Meta, StoryObj } from "@storybook/react";
import { Form } from "./form";
// Render a small form using RHF; show submit handling
```

AI Notes

- Use `action('onChange')`/`action('onSubmit')` from `@storybook/addon-actions` to surface events
- Keep form examples focused to avoid noisy Docs; one short field group is enough

## [x] Phase 8 — Navigation and Menus

- `Menubar` and `NavigationMenu`: include nested items; ensure keyboard navigation works in `play`
- `ContextMenu`: render a target area and open via right-click in `play`

AI Notes

- Provide keyboard interaction tests with `userEvent.keyboard`
- Use bounded container elements to keep overlays in the viewport for screenshots

## [x] Phase 9 — Layout and Utility

- `Accordion`, `Collapsible`, `Resizable`, `ScrollArea`, `AspectRatio`, `Card`, `Breadcrumb`, `Avatar`, `Badge`, `Separator`, `Kbd`, `Spinner`, `Skeleton`, `Empty`
- Keep stories simple with visible states; expose size/variant props via controls

AI Notes

- For utility primitives, ensure Docs displays their prop table even if the visual is minimal

## [x] Phase 10 — Providers and System Components

- `Sidebar`: wrap stories with `SidebarProvider`; expose state via `useSidebar`-driven args
- `Sonner`: render `Toaster` and provide a button in `render` to trigger a toast
- `Command`: prefer `CommandDialog`; seed with sample groups/items

AI Notes

- Identify provider requirements by scanning exports; add minimal providers to story `render`
- Use controlled props where applicable to make elements visible in Docs

## Phase 11 — Automation (Optional but Recommended)

- Generate skeleton stories for all files in `lib/components/ui/*.tsx`
- Derive story `title` as `UI/<PascalCaseName>` and default `args`
- Populate `subcomponents` from named exports within the module
- Create a coverage report to track which components have stories

AI Notes

- Implement a Node script:
  - Read `lib/main.ts` for exported module paths
  - For each module, inspect named exports and write `*.stories.tsx` next to it
  - Add `tags: ['autodocs']`, default `args`, and `parameters.controls.exclude`

## Phase 12 — Quality Gates

- Run `npm run lint` and fix issues
- Run `npm run build-storybook` to validate Docs and controls
- Run `npm run storybook` to manually verify interactions

AI Notes

- Parse Storybook build output; fail the pipeline on missing stories or props tables
- Optionally add CI checks for story coverage percentage

## Component Coverage List

From `lib/main.ts` (export list):

- accordion, alert-dialog, alert, aspect-ratio, avatar, badge, breadcrumb, button-group, button, calendar, card, carousel, chart, checkbox, collapsible, command, context-menu, dialog, drawer, dropdown-menu, empty, field, form, hover-card, input-group, input-otp, input, item, kbd, label, menubar, navigation-menu, pagination, popover, progress, radio-group, resizable, scroll-area, select, separator, sheet, sidebar, skeleton, slider, sonner, spinner, switch, table, tabs, textarea, toggle-group, toggle, tooltip

## Deliverables

- One `*.stories.tsx` per UI module under `lib/components/ui`
- Stories include `tags: ['autodocs']`, `args`, `argTypes` where needed, and `subcomponents` for composed modules
- Overlays provide a controlled story to make content visible in Docs
- Automation script (optional) generates/updates skeletons to keep parity as the library grows

## References

- Entry exports: `lib/main.ts:1-54`
- Existing example story: `lib/components/ui/button.stories.tsx:1-49`
