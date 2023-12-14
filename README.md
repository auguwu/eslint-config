# 🐻‍❄️📜 `@augu/eslint-config`

[![npm version](https://badge.fury.io/js/%40augu%2Feslint-config.svg)](https://badge.fury.io/js/%40augu%2Feslint-config)
[![Stars](https://img.shields.io/github/stars/auguwu/eslint-config)](https://github.com/auguwu/eslint-config)
[![Build Size](https://img.shields.io/bundlephobia/min/@augu/eslint-config?style=flat-square)](https://github.com/auguwu/eslint-config)
[![Workflow Status](https://github.com/auguwu/eslint-config/workflows/ESLint/badge.svg)](#)

> _@augu/eslint-config is Noel's [ESLint](https://eslint.org) configurations for JavaScript, TypeScript, and Vue.js projects_

## Usage

> [!IMPORTANT]
> As of `v5.0.0`, `@augu/eslint-config` has opted to use ESLint's new [flat configuration](https://eslint.org/blog/2022/08/new-config-system-part-2/)s. You are still able to use `.eslintrc.js`/`.eslintrc.json` files.

### Flat Config

```js
const { default: useNoel } = require('@augu/eslint-config');

module.exports = useNoel({
    /* override options */
});
```

### `.eslintrc.js`/`.eslintrc.json`

As of v5, all RC files are deprecated and will be removed in v6, to use them, you will need to import them in the `rc/` directory:

```js
{
    // Load the default configuration
    "extends": ["@augu/eslint-config/rc"],

    // Loads the TypeScript configuration that extends from the
    // default one. Requires @typescript-eslint/parser and
    // @typescript-eslint/eslint-plugin.
    "extends": ["@augu/eslint-config/rc/ts.js"],

    // Loads the Vue configuration that extends from the default one. Requires
    // vue-eslint-parser and eslint-plugin-vue. You will need to import the
    // 'vue-ts.js' file from this package to use this correctly with TypeScript.
    "extends": ["@augu/eslint-config/rc/vue.js"]
}
```

## CLI

As of v5, you can install `@augu/eslint-config` as a CLI that will act as `eslint` but improves messages with [`eslint-formatter-codeframe`](https://npm.im/eslint-formatter-codeframe) and adds support for GitHub Actions' Annotations!

To use it, you can use `npx`:

```shell
$ npx noel-eslint --ext .js,.ts
```

All options that are supported by `eslint` are also supported with `noel-eslint`.

## License

**@augu/eslint-config** is released under the **MIT License** with love by [Noel Towa](https://floofy.dev)! 🐻‍❄️💜
