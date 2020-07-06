/**
 * Copyright (c) 2019-2020 August
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the 'Software'), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

const { join } = require('path');

/**
 * ESLint configuration for TypeScript
 */
module.exports = {
  extends: join(__dirname, 'index.js'),
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/adjacent-overload-signatures': 'warn',
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/no-array-constructor': 'error',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/prefer-as-const': 'error',
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/no-extra-semi': 'error',
    '@typescript-eslint/no-namespace': ['error', { 'allowDeclarations': true }],
    '@typescript-eslint/brace-style': ['error', '1tbs'],
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/ban-types': ['warn', {
      types: {
        '{}': {
          'message': 'Use type Record<string, T> instead',
          'fixWith': 'object'
        },
        'Number': {
          'message': 'Use the \'number\' type instead',
          'fixWith': 'number'
        },
        'String': {
          'message': 'Use the \'string\' type instead',
          'fixWith': 'string'
        }
      }
    }]
  }
};