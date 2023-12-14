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

import { hasOwnProperty } from '@noelware/utils';
import type { Linter } from 'eslint';

export default async function perfectionist(): Promise<Linter.FlatConfig> {
    const plugin = await import('eslint-plugin-perfectionist').then((m) =>
        hasOwnProperty(m, 'default') ? m.default : m
    );

    return {
        plugins: {
            perfectionist: plugin
        },
        rules: {
            'perfectionist/sort-array-includes': 'off',
            'perfectionist/sort-astro-attributes': ['error', { type: 'natural' }],
            'perfectionist/sort-classes': 'off',
            'perfectionist/sort-enums': ['error', { type: 'natural' }],
            'perfectionist/sort-exports': ['error', { type: 'natural' }],
            'perfectionist/sort-imports': [
                'error',
                {
                    type: 'line-length',
                    order: 'desc',
                    'newlines-between': 'never',
                    'max-line-length': 120
                }
            ],
            'perfectionist/sort-interfaces': 'off',
            'perfectionist/sort-jsx-props': ['error', { type: 'line-length' }],
            'perfectionist/sort-maps': 'off',
            'perfectionist/sort-named-exports': ['error', { type: 'natural' }],
            'perfectionist/sort-named-imports': ['error', { type: 'line-length' }],
            'perfectionist/sort-object-types': ['error', { type: 'natural' }],
            'perfectionist/sort-objects': 'off',
            'perfectionist/sort-svelte-attributes': ['error', { type: 'line-length' }],
            'perfectionist/sort-union-types': ['error', { type: 'natural' }],
            'perfectionist/sort-vue-attributes': ['error', { type: 'line-length' }]
        }
    } satisfies Linter.FlatConfig;
}
