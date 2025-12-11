import '../lib/index.css'
import type { Decorator } from '@storybook/react'

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: 'light', title: 'Light' },
        { value: 'dark', title: 'Dark' },
      ],
      dynamicTitle: true,
    },
  },
}

const withTheme: Decorator = (Story, context) => {
  const theme = context.globals.theme === 'dark' ? 'dark' : 'light'
  const root = document.documentElement
  root.classList.remove('dark')
  if (theme === 'dark') root.classList.add('dark')

  return (
    <div className="bg-background text-foreground w-full p-8">
      <Story />
    </div>
  )
}

export const decorators: Decorator[] = [withTheme]

export const parameters = {
  controls: {
    expanded: true,
    matchers: { color: /(background|color)$/i, date: /Date$/ },
  },
  docs: { autodocs: true },
}
