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

import astroConfig, { type Options as AstroOptions } from './configs/astro';
import vueConfig, { type Options as VueOptions } from './configs/vue';
import ts, { type Options as TsOptions } from './configs/typescript';
import { hasOwnProperty, isObject } from '@noelware/utils';
import { resolveModule } from 'local-pkg';
import type { Linter } from 'eslint';
import javascript from './configs/javascript';
import stylistic from './configs/stylistic';
import debug_ from 'debug';
import defu from 'defu';

// export option types because why not
export type { AstroOptions, TsOptions, VueOptions };

// export them as singular
export { astroConfig as astro, javascript, ts as typescript, vueConfig as vue, stylistic };

const debug = debug_('noel/eslint-config');
const isModuleAvaliable = (module: string) => {
    // CJS `require`
    if (typeof require !== 'undefined') {
        try {
            require(module);
            return true;
        } catch {
            return false;
        }
    }

    // fallback to looking via fs
    return !!resolveModule(module);
};

const stylisticAvaliable = isModuleAvaliable('@stylistic/eslint-plugin');
const prettierAvaliable = isModuleAvaliable('prettier') || isModuleAvaliable('eslint-config-prettier');
const astroAvaliable = isModuleAvaliable('eslint-plugin-astro');
const vueAvaliable = isModuleAvaliable('vue');
const tsAvaliable = isModuleAvaliable('typescript');

export interface Options {
    /**
     * Enables style-based rules for both JavaScript or TypeScript.
     *
     * You will need `@stylistic/eslint-plugin` installed.
     */
    stylistic?: boolean;

    /**
     * Configures the TypeScript side. This can be:
     *
     * * boolean
     * * path to a tsconfig.json file
     * * {@link TsOptions} object.
     */
    typescript?: TsOptions | boolean | string;

    /**
     * Enables the use of linting Astro files via [`eslint-plugin-astro`]. By default, if this is `true`,
     * then it will only validate JavaScript when parsing through Astro's frontmatter. If `{ typescript: true }`
     * is passed in, then TypeScript will also be validated through Astro's frontmatter.
     *
     * [`eslint-plugin-astro`]: https://npm.im/eslint-plugin-astro.
     */
    astro?: AstroOptions | boolean;

    /**
     * Enables the use of ESLint linting `.vue` files.
     */
    vue?: VueOptions | boolean;
}

/**
 * Defines a {@link Linter.Config `Config`} that can be used within a `eslint.config.js` file:
 *
 * ```js
 * const { default: noel } = require('@augu/eslint-config');
 * module.exports = noel();
 * ```
 *
 * This can enable the TypeScript and Vue variants as well (if `vue`/`typescript` are installed
 * and aren't explicitlly disabled).
 *
 * @param options Options object to configure other configurations.
 * @param others Other {@link Linter.FlatConfig `FlatConfig`} configurations to use.
 */
export default async function noel(opts: Options = {}, ...others: Linter.Config[]) {
    debug('eslint-config: init');
    const { typescript, astro, vue, stylistic } = defu<Options, [Options]>(opts, {
        stylistic: stylisticAvaliable,
        typescript: tsAvaliable,
        astro: astroAvaliable,
        vue: vueAvaliable
    });

    const configs = [javascript()];
    if (typescript !== undefined) {
        if (typeof typescript === 'boolean' && !!typescript) {
            configs.push(await ts());
        }

        if (typeof typescript === 'string' || isObject(typescript)) {
            configs.push(await ts(typescript as any));
        }
    }

    if (vue !== undefined) {
        if (typeof vue === 'boolean' && !!vue) {
            configs.push(await vueConfig());
        }

        if (isObject(vue)) {
            configs.push(await vueConfig(vue));
        }
    }

    if (astro !== undefined) {
        if (typeof astro === 'boolean' && !!astro) {
            configs.push(await astroConfig());
        }

        if (isObject(astro)) {
            configs.push(await astroConfig(astro));
        }
    }

    if (stylistic !== undefined && stylistic === true) {
    }

    if (prettierAvaliable) {
        const config = await import('eslint-config-prettier').then((m) =>
            hasOwnProperty(m, 'default') ? m.default : m
        );

        configs.push(config);
    }

    debug('init: finished');
    return configs.concat(...others);
}
