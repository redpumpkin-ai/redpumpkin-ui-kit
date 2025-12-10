import type { Meta, StoryObj } from '@storybook/react'
import userEvent from '@testing-library/user-event'
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarGroup,
  MenubarSeparator,
  MenubarLabel,
  MenubarItem,
  MenubarShortcut,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
} from './menubar'

const meta = {
  title: 'UI/Menubar',
  component: Menubar,
  subcomponents: {
    MenubarMenu,
    MenubarTrigger,
    MenubarContent,
    MenubarGroup,
    MenubarSeparator,
    MenubarLabel,
    MenubarItem,
    MenubarShortcut,
    MenubarCheckboxItem,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSub,
    MenubarSubTrigger,
    MenubarSubContent,
  },
  tags: ['autodocs'],
  parameters: {
    controls: { exclude: ['className', 'style', 'ref', 'asChild'] },
  },
} satisfies Meta<typeof Menubar>

export default meta

type Story = StoryObj<typeof Menubar>

export const Default: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem inset>New File</MenubarItem>
          <MenubarItem inset>Open</MenubarItem>
          <MenubarItem inset>
            Save
            <MenubarShortcut>Ctrl+S</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger inset>Share</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Email</MenubarItem>
              <MenubarItem>Copy Link</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem checked>Autosave</MenubarCheckboxItem>
          <MenubarRadioGroup value="letters">
            <MenubarRadioItem value="letters">Letters</MenubarRadioItem>
            <MenubarRadioItem value="numbers">Numbers</MenubarRadioItem>
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
  play: async ({ canvasElement }) => {
    const triggers = Array.from(
      canvasElement.querySelectorAll('[data-slot="menubar-trigger"]')
    )
    const first = triggers[0] as HTMLElement | undefined
    if (first) {
      first.focus()
      await userEvent.keyboard('{Enter}')
      await userEvent.keyboard('{ArrowDown}')
      await userEvent.keyboard('{ArrowRight}')
      await userEvent.keyboard('{Escape}')
    }
  },
}
