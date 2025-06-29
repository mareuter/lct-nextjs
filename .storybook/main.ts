import type { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@chromatic-com/storybook', '@storybook/addon-themes'],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  features: {
    experimentalRSC: true,
  },
  webpackFinal(config) {
    if (!config.resolve?.alias) return config
    config.resolve.alias = {
      ...config.resolve?.alias,
      'next/link': 'next/dist/client/app-dir/link',
    }
    return config
  },
}
export default config
