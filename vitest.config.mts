import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { resolve } from 'path'

export default defineConfig({
  base: './',
  plugins: [tsconfigPaths(), react()],
  publicDir: './public',
  test: {
    alias: {
      '@': resolve(__dirname, '.'),
    },
    environment: 'jsdom',
    projects: [
      {
        test: {
          name: 'storybook',
          include: ['**/*.stories.ts'],
        },
      },
    ],
  },
})
