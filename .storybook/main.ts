import type { StorybookConfig } from '@storybook/nextjs-vite'

const config: StorybookConfig = {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@chromatic-com/storybook', '@storybook/addon-themes', '@storybook/addon-vitest'],
  core: {
    builder: '@storybook/builder-vite',
  },
  framework: {
    name: '@storybook/nextjs-vite',
    options: {},
  },
  features: {
    experimentalRSC: true,
  },
  async viteFinal(config, _options) {
    return config
  },
}
export default config
