import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import antfu from '@antfu/eslint-config'
import tailwind from 'eslint-plugin-tailwindcss'

export default antfu({
  formatters: {
    css: true,
    html: true,
  },
  languageOptions: {
    globals: {
      utools: 'readonly',
    },
  },
}).append(
  ...tailwind.configs['flat/recommended'],
  {
    settings: {
      tailwindcss: {
        config: `${dirname(fileURLToPath(import.meta.url))}/src/assets/styles/global.css`,
      },
    },
  },
)
