# 🐻‍❄️📜 `@augu/eslint-config`

[![npm version](https://badge.fury.io/js/%40augu%2Feslint-config.svg)](https://badge.fury.io/js/%40augu%2Feslint-config)
[![Stars](https://img.shields.io/github/stars/auguwu/eslint-config)](https://github.com/auguwu/eslint-config)
[![Build Size](https://img.shields.io/bundlephobia/min/@augu/eslint-config?style=flat-square)](https://github.com/auguwu/eslint-config)
[![Workflow Status](https://github.com/auguwu/eslint-config/workflows/ESLint/badge.svg)](#)

> _@augu/eslint-config is Noel's [ESLint](https://eslint.org) configurations for JavaScript, TypeScript, and Vue.js projects_

## Usage

> [!IMPORTANT]
> As of `v5.0.0`, `@augu/eslint-config` has opted to use ESLint's new [flat configuration](https://eslint.org/blog/2022/08/new-config-system-part-2/)s.

### Flat Config

```js
const { default: noel } = require('@augu/eslint-config');
module.exports = noel();
```

### `.eslintrc.js`/`.eslintrc.json`

As of v5, all RC files are removed from the package. Please use the new flat config.

## License

**@augu/eslint-config** is released under the **MIT License** with love by [Noel Towa](https://floofy.dev)! 🐻‍❄️💜
