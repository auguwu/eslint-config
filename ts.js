/*
 * 📜 @augu/eslint-config: Shareable ESLint configuration for my projects
 * Copyright (c) 2019-2023 Noel <cutie@floofy.dev>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

// @ts-check

const { resolve } = require('path');

/**
 * @param {import('eslint').ESLint.ConfigData} config
 */
const defineConfig = (config) => config;
module.exports = defineConfig({
    extends: resolve(__dirname, 'index.js'),
    plugins: ['@typescript-eslint'],
    parser: '@typescript-eslint/parser',
    rules: {
        // https://typescript-eslint.io/rules/adjacent-overload-signatures
        '@typescript-eslint/adjacent-overload-signatures': 'warn',

        // https://typescript-eslint.io/rules/consistent-type-definitions
        '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

        // https://typescript-eslint.io/rules/type-annotation-spacing
        '@typescript-eslint/type-annotation-spacing': [
            'error',
            {
                // enforces 'const a: string' and not 'const a : string'
                before: false,
                after: true
            }
        ],

        // https://typescript-eslint.io/rules/no-extra-non-null-assertion
        '@typescript-eslint/no-extra-non-null-assertion': 'error',

        // https://typescript-eslint.io/rules/no-array-constructor
        '@typescript-eslint/no-array-constructor': 'error',

        // https://typescript-eslint.io/rules/no-empty-interface
        '@typescript-eslint/no-empty-interface': [
            'warn',
            { allowSingleExtends: true }
        ],

        // https://typescript-eslint.io/rules/no-empty-function
        '@typescript-eslint/no-empty-function': 'error',

        // https://typescript-eslint.io/rules/prefer-as-const
        '@typescript-eslint/prefer-as-const': 'error',

        // https://typescript-eslint.io/rules/space-infix-ops
        '@typescript-eslint/space-infix-ops': 'error',

        // https://typescript-eslint.io/rules/await-thenable
        '@typescript-eslint/await-thenable': 'error',

        // https://typescript-eslint.io/rules/no-extra-semi
        '@typescript-eslint/no-extra-semi': 'error',

        // https://typescript-eslint.io/rules/no-this-alias
        '@typescript-eslint/no-this-alias': ['error', { allowDestructuring: true }],

        // https://typescript-eslint.io/rules/no-namespace
        '@typescript-eslint/no-namespace': ['error', { allowDeclarations: true }],

        // https://typescript-eslint.io/rules/brace-style
        '@typescript-eslint/brace-style': ['error', '1tbs'],

        // https://typescript-eslint.io/rules/array-type
        '@typescript-eslint/array-type': 'warn',

        // https://typescript-eslint.io/rules/ban-types
        '@typescript-eslint/ban-types': 'warn',

        // https://typescript-eslint.io/rules/indent
        '@typescript-eslint/indent': 'off',

        // disable it in the default config since TS ESLint overrides it
        'brace-style': 'off'
    }
});
