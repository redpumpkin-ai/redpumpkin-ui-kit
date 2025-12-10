import type { Meta, StoryObj } from '@storybook/react'
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
} from './command'

const meta = {
  title: 'UI/Command',
  component: CommandDialog,
  subcomponents: {
    CommandInput,
    CommandList,
    CommandEmpty,
    CommandGroup,
    CommandItem,
    CommandShortcut,
    CommandSeparator,
  },
  tags: ['autodocs'],
  args: {
    open: true,
  },
  argTypes: {
    onOpenChange: { action: 'onOpenChange' },
  },
  parameters: {
    controls: { exclude: ['className', 'style', 'ref', 'asChild'] },
  },
} satisfies Meta<typeof CommandDialog>

export default meta

type Story = StoryObj<typeof CommandDialog>

export const Default: Story = {
  render: (args) => (
    <CommandDialog {...args}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            Search files
            <CommandShortcut>Ctrl+K</CommandShortcut>
          </CommandItem>
          <CommandItem>
            Open settings
            <CommandShortcut>Ctrl+,</CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Projects">
          <CommandItem>Project Alpha</CommandItem>
          <CommandItem>Project Beta</CommandItem>
          <CommandItem>Project Gamma</CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  ),
}
