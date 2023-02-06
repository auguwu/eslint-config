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

/**
 * @param {import('eslint').ESLint.ConfigData} config
 */
const defineConfig = (config) => config;
module.exports = defineConfig({
    root: true,
    env: {
        es6: true,
        node: true
    },
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            forOf: true,
            spread: true,
            modules: true,
            classes: true,
            generators: true,
            restParams: true,
            regexUFlag: true,
            regexYFlag: true,
            globalReturn: true,
            destructuring: true,
            impliedStrict: true,
            blockBindings: true,
            defaultParams: true,
            octalLiterals: true,
            arrowFunctions: true,
            binaryLiterals: true,
            templateStrings: true,
            superInFunctions: true,
            unicodeCodePointEscapes: true,
            objectLiteralShorthandMethods: true,
            objectLiteralComputedProperties: true,
            objectLiteralDuplicateProperties: true,
            objectLiteralShorthandProperties: true
        }
    },
    globals: {
        _config: false,
        console: true,
        BigInt: true
    },
    rules: {
        // https://eslint.org/docs/latest/rules/no-misleading-character-class
        'no-misleading-character-class': 'error',

        // https://eslint.org/docs/latest/rules/no-template-curly-string
        'no-template-curly-in-string': 'error',

        // https://eslint.org/docs/latest/rules/no-unexpected-multiline
        'no-unexpected-multiline': 'error',

        // https://eslint.org/docs/latest/rules/no-constant-condition
        'no-constant-condition': 'error',

        // https://eslint.org/docs/latest/rules/no-extra-boolean-cast
        'no-extra-boolean-cast': 'error',

        // https://eslint.org/docs/latest/rules/array-bracket-spacing
        'array-bracket-spacing': ['error', 'never'],

        // https://eslint.org/docs/latest/rules/object-curly-spacing
        'object-curly-spacing': ['error', 'always', { objectsInObjects: false }],

        // https://eslint.org/docs/latest/rules/no-duplicate-imports
        'no-duplicate-imports': 'error',

        // https://eslint.org/docs/latest/rules/no-floating-decimal
        'no-floating-decimal': 'error',

        // https://eslint.org/docs/latest/rules/no-trailing-spaces
        'no-trailing-spaces': 'warn',

        // https://eslint.org/docs/latest/rules/no-unsafe-negation
        'no-unsafe-negation': 'error',

        // https://eslint.org/docs/latest/rules/default-param-last
        'default-param-last': 'error',

        // https://eslint.org/docs/latest/rules/no-invalid-regex
        'no-invalid-regexp': 'error',

        // https://eslint.org/docs/latest/rules/no-duplicate-case
        'no-duplicate-case': 'error',

        // https://eslint.org/docs/latest/rules/no-unsafe-finally
        'no-unsafe-finally': 'error',

        // https://eslint.org/docs/latest/rules/default-case-last
        'default-case-last': 'warn',

        // https://eslint.org/docs/latest/rules/no-sparse-arrays
        'no-sparse-arrays': 'error',

        // https://eslint.org/docs/latest/rules/space-in-parens
        'space-in-parens': ['error', 'never'],

        // https://eslint.org/docs/latest/rules/no-new-wrpapers
        'no-new-wrappers': 'error',

        // https://eslint.org/docs/latest/rules/no-cond-assign
        'no-cond-assign': 'error',

        // https://eslint.org/docs/latest/rules/no-func-assign
        'no-func-assign': 'error',

        // https://eslint.org/docs/latest/rules/accessor-pairs
        'accessor-pairs': ['error', { setWithoutGet: true }],

        // https://eslint.org/docs/latest/rules/no-unreachable
        'no-unreachable': 'error',

        // https://eslint.org/docs/latest/rules/getter-return
        'getter-return': 'error',

        // https://eslint.org/docs/latest/rules/no-extra-semi
        'no-extra-semi': 'error',

        // https://eslint.org/docs/latest/rules/for-direction
        'for-direction': 'error',

        // https://eslint.org/docs/latest/rules/no-arrow-spacing
        'arrow-spacing': ['error', { before: true, after: true }],

        // https://eslint.org/docs/latest/rules/no-obj-calls
        'no-obj-calls': 'error',

        // https://eslint.org/docs/latest/rules/no-dupe-arg
        'no-dupe-args': 'error',

        // https://eslint.org/docs/latest/rules/no-dupe-keys
        'no-dupe-keys': 'error',

        // https://eslint.org/docs/latest/rules/no-debugger
        'no-debugger': 'error',

        // https://eslint.org/docs/latest/rules/no-new-func
        'no-new-func': 'error',

        // https://eslint.org/docs/latest/rules/brace-style
        'brace-style': ['error', '1tbs'],

        // https://eslint.org/docs/latest/rules/no-eq-null
        'no-eq-null': 'error',

        // https://eslint.org/docs/latest/rules/use-isnan
        'use-isnan': 'warn',

        // https://eslint.org/docs/latest/rules/no-caller
        'no-caller': 'error',

        // https://eslint.org/docs/latest/rules/no-empty
        'no-empty': 'error',

        // https://eslint.org/docs/latest/rules/eol-last
        'eol-last': 'warn',

        // https://eslint.org/docs/latest/rules/no-with
        'no-with': 'error',

        // https://eslint.org/docs/latest/rules/eqeqeq
        eqeqeq: 'error',

        // https://eslint.org/docs/latest/rules/semi
        semi: ['error', 'always'],

        // https://eslint.org/docs/latest/rules/yoda
        yoda: 'error'
    }
});
