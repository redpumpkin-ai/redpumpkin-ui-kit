import type { StorybookConfig } from '@storybook/react-vite'
import path from 'path'

const config: StorybookConfig = {
  stories: ['../lib/**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-docs',
    {
      name: '@storybook/addon-mcp',
      options: {
        toolsets: {
          dev: true,
          docs: true,
        },
        experimentalFormat: 'markdown',
      },
    },
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  staticDirs: ['../public'],
  features: {
    experimentalComponentsManifest: true, // Enable manifest generation for the docs toolset, only supported in React-based setups.
  },
  viteFinal: async (config) => {
    config.plugins = [...(config.plugins || [])]
    config.resolve = config.resolve || {}
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@': path.resolve(process.cwd(), './'),
    }
    return config
  },
}

export default config
