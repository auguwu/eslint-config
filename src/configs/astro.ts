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

import { getTypeScriptESLintIfAvaliable } from '../util';
import { hasOwnProperty } from '@noelware/utils';
import type { Linter } from 'eslint';
import debug_ from 'debug';

const debug = debug_('noel/eslint-config:astro');

/** Options for the Astro configuration for `@augu/eslint-config`. */
export interface Options {
    /**
     * Enables the use of TypeScript inside of Astro files.
     * @default 'false'
     */
    typescript?: boolean;
}

export default async function astro(opts: Options = {}): Promise<Linter.Config> {
    debug('checking if `eslint-plugin-astro` and `astro-eslint-parser` are installed');
    const [plugin, parser] = await Promise.all([
        await import('eslint-plugin-astro'),
        await import('astro-eslint-parser')
    ]).then(([plugin, parser]) => [
        hasOwnProperty(plugin, 'default') ? plugin.default : plugin,
        hasOwnProperty(parser, 'default') ? parser.default : parser
    ]);

    let tsParser: any;
    let typescript = hasOwnProperty(opts, 'typescript') ? opts.typescript : false;

    if (typescript) {
        const [isAvaliable, pkg] = await getTypeScriptESLintIfAvaliable();
        if (!isAvaliable) {
            debug('unable to load typescript-eslint from current workspace, disabling TypeScript support');
            typescript = false;
        } else {
            tsParser = pkg;
        }
    }

    return {
        name: 'noel/eslint-config:astro',
        files: ['**/*.astro'],
        processor: 'astro/client-side-ts',
        languageOptions: {
            parser: parser as any,
            sourceType: 'module',
            parserOptions: {
                type: 'module',
                parser: typescript ? tsParser : undefined
            }
        },

        plugins: {
            astro: plugin as any
        },

        rules: {
            'astro/missing-client-only-directive-value': 'error',
            'astro/no-conflict-set-directives': 'error',
            'astro/no-deprecated-astro-canonicalurl': 'error',
            'astro/no-deprecated-astro-fetchcontent': 'error',
            'astro/no-deprecated-astro-resolve': 'error',
            'astro/no-deprecated-getentrybyslug': 'error',
            'astro/no-unused-define-vars-in-style': 'error',
            'astro/valid-compile': 'error'
        }
    };
}
