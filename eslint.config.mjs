import { fileURLToPath } from 'url'
import { dirname } from 'path'
import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  js.configs.recommended,
  ...compat.extends(
    '@rocketseat/eslint-config/next',
    'next/core-web-vitals',
    'next/typescript',
  ),
  {
    rules: {
      camelcase: 'off', // Desabilita a regra camelcase
    },
  },
]

export default eslintConfig
