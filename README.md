# 🐻‍❄️📜 @augu/eslint-config
[![npm version](https://badge.fury.io/js/%40augu%2Feslint-config.svg)](https://badge.fury.io/js/%40augu%2Feslint-config)
[![Stars](https://img.shields.io/github/stars/auguwu/eslint-config)](https://github.com/auguwu/eslint-config)
[![Build Size](https://img.shields.io/bundlephobia/min/@augu/eslint-config?style=flat-square)](https://github.com/auguwu/eslint-config)
[![Workflow Status](https://github.com/auguwu/eslint-config/workflows/ESLint/badge.svg)](#)

> *Noel's share-able [ESLint](https://eslint.org) configuration for JavaScript, TypeScript, and Vue projects*

**@augu/eslint-config** is a collection of my ESLint configurations that are installed from all of my projects.

## Usage
```js
{
    // Load the default configuration
    "extends": ["@augu"],

    // Loads the TypeScript configuration that extends from the
    // default one. Requires @typescript-eslint/parser and 
    // @typescript-eslint/eslint-plugin.
    "extends": ["@augu/eslint-config/ts.js"],

    // Loads the Vue configuration that extends from the default one. Requires
    // vue-eslint-parser and eslint-plugin-vue. You will need to import the
    // 'vue-ts.js' file from this package to use this correctly with TypeScript.
    "extends": ["@augu/eslint-config/vue.js"]
}
```

## License
**@augu/eslint-config** is released under the **MIT License** with love by [Noel](https://floofy.dev)! 🐻‍❄️💜
