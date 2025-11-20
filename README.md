# Redpumpkin UI Kit

A reusable React component library intended to be installed via `npm install` and consumed in other projects.

The kit ships both ES Module and UMD builds, type definitions, and a compiled stylesheet. Components are built on top of Radix UI and related libraries.

## Installation

```bash
npm install redpumpkin-ui-kit
```

This library declares `react` and `react-dom` as peer dependencies. Ensure they are installed in your project. Components that rely on Radix UI also expect the corresponding `@radix-ui/react-*` package to be present; install peers as needed based on the components you use.

## Styles

Import the compiled CSS once in your application entry:

```ts
import 'redpumpkin-ui-kit/style.css'
```

The kit supports light/dark color tokens. Apply `class="dark"` on a top-level element (e.g., `html` or your app wrapper) to enable dark mode.

## Usage

Import components directly from the package:

```tsx
import { Button, Accordion } from 'redpumpkin-ui-kit'

export default function Example() {
  return (
    <div>
      <Button variant="default">Click me</Button>
      <Accordion>{/* ... */}</Accordion>
    </div>
  )
}
```

All components are exported from the package root. Examples include `Accordion`, `AlertDialog`, `Avatar`, `Badge`, `Breadcrumb`, `Button`, `Calendar`, `Card`, `Carousel`, `Chart`, `Checkbox`, `Collapsible`, `Command`, `ContextMenu`, `Dialog`, `Drawer`, `DropdownMenu`, `Empty`, `Field`, `Form`, `HoverCard`, `Input`, `InputGroup`, `InputOTP`, `Item`, `Kbd`, `Label`, `Menubar`, `NavigationMenu`, `Pagination`, `Popover`, `Progress`, `RadioGroup`, `Resizable`, `ScrollArea`, `Select`, `Separator`, `Sheet`, `Sidebar`, `Skeleton`, `Slider`, `Sonner`, `Spinner`, `Switch`, `Table`, `Tabs`, `Textarea`, `Toggle`, `ToggleGroup`, `Tooltip`.

## Module Formats

- ESM: `redpumpkin-ui-kit.es.js` for modern bundlers (`import { Button } from 'redpumpkin-ui-kit'`).
- UMD: `redpumpkin-ui-kit.umd.js` with global `RedpumpkinUIKit` for non-ESM contexts.
- Types: `redpumpkin-ui-kit.d.ts` for TypeScript.

## Notes

- Tree-shaking works with named exports; import only what you use.
- When using components backed by Radix UI or other peer libraries, ensure the corresponding peer dependency is installed.

## Local Development

```bash
npm run dev
npm run build
npm run lint
```

This repository uses Vite in library mode and generates type declarations during `build`.
