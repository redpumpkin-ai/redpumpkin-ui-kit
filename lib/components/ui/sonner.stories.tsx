import type { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from 'next-themes'
import { toast } from 'sonner'
import { Toaster } from './sonner'
import { Button } from './button'

const meta: Meta<typeof Toaster> = {
  title: 'UI/Sonner',
  component: Toaster,
  tags: ['autodocs'],
  args: {
    position: 'top-right',
  },
  parameters: {
    controls: { exclude: ['className', 'style', 'ref', 'asChild'] },
  },
}

export default meta

type Story = StoryObj<typeof Toaster>

export const Default: Story = {
  render: (args) => (
    <ThemeProvider attribute="class">
      <div className="flex items-center gap-2">
        <Button onClick={() => toast('Notification')}>Toast</Button>
        <Button variant="secondary" onClick={() => toast.success('Saved')}>
          Success
        </Button>
        <Button variant="destructive" onClick={() => toast.error('Failed')}>
          Error
        </Button>
        <Button variant="outline" onClick={() => toast.info('Info')}>
          Info
        </Button>
        <Button variant="ghost" onClick={() => toast.warning('Warning')}>
          Warning
        </Button>
      </div>
      <Toaster {...args} />
    </ThemeProvider>
  ),
}
