import { defineConfig } from 'eslint/config'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'
import pluginNext from '@next/eslint-plugin-next'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default defineConfig([
  {
    plugins: {
      '@next/next': pluginNext,
    },
    extends: compat.extends(
      'prettier',
      'eslint:recommended',
        // 'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:storybook/recommended',
      'plugin:@next/next/recommended',
    ),

    languageOptions: {
      ecmaVersion: 5,
      sourceType: 'script',

      parserOptions: {
        warnOnUnsupportedTypeScriptVersion: false,
      },
    },

    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      ...pluginNext.configs.recommended.rules,
      // Allow unused variables if they are prefixed with _
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
    },
  },
])
