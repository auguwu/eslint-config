# @augu/eslint-config
[![npm version](https://badge.fury.io/js/%40augu%2Feslint-config.svg)](https://badge.fury.io/js/%40augu%2Feslint-config) [![Stars](https://img.shields.io/github/stars/auguwu/eslint-config)](https://github.com/auguwu/eslint-config) [![Workflow Status](https://github.com/auguwu/eslint-config/workflows/ESLint%20-%20Testing/badge.svg)](https://github.com/auguwu/eslint-config/tree/master/.github/workflows) [![Build Size](https://img.shields.io/bundlephobia/min/@augu/eslint-config?style=flat-square)](https://github.com/auguwu/eslint-config)

> :scroll: **| Shareable ESLint configuration for my projects**

## Usage
> `.eslintrc.json`

```js
{
  // Loads the normal ESLint config
  "extends": "@augu"
}
```

## Supports
- JavaScript (no external deps)
- TypeScript (requires `@typescript-eslint/parser` and `@typescript-eslint/eslint-plugin`)
- Nuxt.js + JavaScript (requires `eslint-plugin-nuxt`, `vue-eslint-parser`, `eslint-plugin-vue`, and `babel-eslint`)
- Nuxt.js + TypeScript (requires `eslint-plugin-nuxt`, `vue-eslint-parser`, `eslint-plugin-vue`, `@typescript-eslint/parser`, `@typescript-eslint/eslint-plugin`)
- Vue.js (requires `vue-eslint-parser` and `eslint-plugin-vue`)
- Vue.js + TypeScript (requires `vue-eslint-parser`, `eslint-plugin-vue`, `@typescript-eslint/parser`, `@typescript-eslint/eslint-plugin`)

## LICENSE
**@augu/eslint-config** is released under the MIT License, read [here](/LICENSE) for more information.