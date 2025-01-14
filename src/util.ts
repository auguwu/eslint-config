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

import { assertIsError, hasOwnProperty } from '@noelware/utils';
import debug_ from 'debug';

/** Alias for `import('debug').then(m => m.default(...))` */
export const debug = (namespace: string) => debug_(namespace);

export const getTypeScriptESLintIfAvaliable = async (): Promise<
    [avaliable: boolean, pkg: typeof import('typescript-eslint')]
> => {
    let parser: any;
    let isAvaliable = false;
    const d = debug('noel/eslint-config:util');

    try {
        d('attempt to load `@typescript-eslint/parser`...');
        await import('@typescript-eslint/parser').then((m) => {
            parser = hasOwnProperty(m, 'default') ? m.default : m;
            isAvaliable = true;
        });
    } catch (ex) {
        d('failed to find `@typescript-eslint/parser`, checking if `typescript-eslint` is avaliable: %o', ex);
        try {
            await import('typescript-eslint').then((m) => {
                parser = hasOwnProperty(m, 'default') ? m.default : m;
                isAvaliable = true;
            });
        } catch (ex2) {
            d('`typescript-eslint` is not avaliable: %o', ex2);

            typeof Bun === 'undefined' && assertIsError(ex);
            typeof Bun === 'undefined' && assertIsError(ex2);

            throw new Error();
        }
    }

    return [isAvaliable, parser];
};
