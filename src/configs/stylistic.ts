/*
 * 📜 @augu/eslint-config: Shareable ESLint configuration for my projects
 * Copyright (c) 2019-2024 Noel Towa <cutie@floofy.dev>
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

import type { Linter } from 'eslint';
import debug_ from 'debug';

const debug = debug_('noel/eslint-config:stylistic');

export default async function stylistic(): Promise<Linter.Config> {
    debug('checking if `@stylistic/eslint-plugin` is avaliable');
    const plugin = await import('@stylistic/eslint-plugin').then((m) => m.default);

    return {
        name: 'noel/eslint-config:stylistic:js',
        files: ['**/*.js'],
        plugins: {
            stylistic: plugin
        },
        rules: {
            // https://eslint.style/rules/js/no-floating-decimal
            'stylistic/no-floating-decimal': 'error',

            // https://eslint.style/rules/js/no-trailing-spaces
            'stylistic/no-trailing-spaces': [
                'error',
                {
                    ignoreComments: true
                }
            ],

            // https://eslint.style/rules/js/space-in-parens
            'stylistic/space-in-parens': ['error', 'never'],

            // https://eslint.style/rules/js/no-extra-semi
            'stylistic/no-extra-semi': 'error',

            // https://eslint.style/rules/js/brace-style
            'stylistic/brace-style': ['error', 'stroustrup'],

            // https://eslint.style/rules/js/eol-last
            'stylistic/eol-last': ['error', 'always']
        }
    };
}
