/* eslint-disable */

import js from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import tseslint from 'typescript-eslint'

export default [
  {
    ignores: ['dist', '**/node_modules'],
    files: ['**/*.{ts,tsx}'],
  },
  {
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'react-refresh/only-export-components': 'warn',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "default",
          format: ["camelCase", "PascalCase"],
          leadingUnderscore: "forbid"
        },
        {
          selector: "typeAlias",  // 타입선언
          format: ["PascalCase"],
        },
        {
          selector: "memberLike",  // Property 멤버
          format: ["camelCase"],
        },
        {
          selector: "function",  // exported function (컴포넌트 명)
          format: ["PascalCase"],
          modifiers: ["exported"],
        },
        {
          "selector": "enumMember",
          "format": ["UPPER_CASE"]
        },
        {
          selector: "function",  // function
          format: ["camelCase"],
        },
      ],
      ...reactHooks.configs.recommended.rules,
    },
  },
  eslintConfigPrettier,
  js.configs.recommended,
  ...tseslint.configs.recommended,
]
