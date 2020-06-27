/**
 * Copyright (c) 2019-2020 August
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

/**
 * Basic JavaScript configuration for ESLint
 */
module.exports = {
  root: true,
  env: {
    es6: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 2020,
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
  rules: {
    'no-unexpected-multiline': 'error',
    'object-curly-spacing': ['error', 'always', { objectsInObjects: false }],
    'no-duplicate-imports': 'error',
    'no-extra-boolean-cast': 'error',
    'no-floating-decimal': 'error',
    'no-unsafe-negation': 'error',
    'no-unsafe-finally': 'error',
    'no-sparse-arrays': 'error',
    'space-in-parens': ['error', 'never'],
    'no-new-wrappers': 'error',
    'no-func-assign': 'error',
    'no-unreachable': 'error',
    'getter-return': 'error',
    'no-extra-semi': 'error',
    'for-direction': 'error',
    'no-debugger': 'error',
    'no-new-func': 'error',
    'brace-style': ['error', '1tbs'],
    'use-isnan': 'warn',
    'no-caller': 'error',
    'no-empty': 'error',
    'no-with': 'error',
    camelcase: 'error',
    indent: ['error', 2, { SwitchCase: 1 }],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    yoda: 'error'
  },
  globals: {
    _config: false,
    console: true
  }
}; // breaking change