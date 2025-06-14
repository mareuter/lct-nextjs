import { defineConfig, mergeConfig } from 'vitest/config'
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin'
import { resolve } from 'path'
import path from 'node:path'

import viteConfig from './vite.config.mts'

export default mergeConfig(
  viteConfig,
  defineConfig({
    base: './',
    plugins: [
      storybookTest({
        configDir: path.join(__dirname, '.storybook'),
        // This should match your package.json script to run Storybook
        // The --ci flag will skip prompts and not open a browser
        storybookScript: 'yarn storybook --ci',
      }),
    ],
    publicDir: './public',
    test: {
      //   alias: {
      //     '@/app': resolve(__dirname, './app'),
      //     '@/public': resolve(__dirname, './public'),
      //   },
      environment: 'jsdom',
      // Enable browser mode
      browser: {
        enabled: true,
        // Make sure to install Playwright
        provider: 'playwright',
        headless: true,
        instances: [{ browser: 'chromium' }],
      },
      projects: [
        {
          test: {
            name: 'storybook',
            include: ['**/*.stories.ts'],
            // alias: {
            //   '@/app': resolve(__dirname, './app'),
            //   '@/public': resolve(__dirname, './public'),
            // },
            setupFiles: ['./.storybook/vitest.setup.mts'],
          },
        },
      ],
    },
  }),
)
