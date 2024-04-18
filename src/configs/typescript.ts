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

import { assertIsError, hasOwnProperty, isObject } from '@noelware/utils';
import type { Linter } from 'eslint';
import { existsSync } from 'fs';
import { resolve } from 'path';
import debug_ from 'debug';

const debug = debug_('noel/eslint-config:typescript');
const RULES: NonNullable<Linter.FlatConfig['rules']> = {
    // https://typescript-eslint.io/rules/adjacent-overload-signatures
    'ts/adjacent-overload-signatures': 'warn',

    // https://typescript-eslint.io/rules/consistent-type-definitions
    'ts/consistent-type-definitions': ['error', 'interface'],

    // https://typescript-eslint.io/rules/prefer-literal-enum-member
    'ts/prefer-literal-enum-member': [
        'warn',
        {
            allowBitwiseExpressions: true
        }
    ],

    // https://typescript-eslint.io/rules/type-annotation-spacing
    'ts/type-annotation-spacing': [
        'error',
        {
            // enforces 'const a: string' and not 'const a : string'
            before: false,
            after: true,
            overrides: {
                // enforces 'const a: () => string = () => "woof"'
                arrow: {
                    before: true,
                    after: true
                }
            }
        }
    ],

    // https://typescript-eslint.io/rules/no-extra-non-null-assertion
    'ts/no-extra-non-null-assertion': 'error',

    // https://typescript-eslint.io/rules/no-useless-constructor
    'ts/no-useless-constructor': 'error',

    // https://typescript-eslint.io/rules/no-array-constructor
    'ts/no-array-constructor': 'error',

    // https://typescript-eslint.io/rules/no-empty-interface
    'ts/no-empty-interface': ['warn', { allowSingleExtends: true }],

    // https://typescript-eslint.io/rules/no-empty-function
    'ts/no-empty-function': 'error',

    // https://typescript-eslint.io/rules/prefer-as-const
    'ts/prefer-as-const': 'error',

    // https://typescript-eslint.io/rules/space-infix-ops
    'ts/space-infix-ops': 'error',

    // https://typescript-eslint.io/rules/no-extra-semi
    'ts/no-extra-semi': 'error',

    // https://typescript-eslint.io/rules/no-this-alias
    'ts/no-this-alias': ['error', { allowDestructuring: true }],

    // https://typescript-eslint.io/rules/no-namespace
    'ts/no-namespace': ['error', { allowDeclarations: true }],

    // https://typescript-eslint.io/rules/brace-style
    'ts/brace-style': ['error', '1tbs'],

    // https://typescript-eslint.io/rules/array-type
    'ts/array-type': ['error', { default: 'array-simple' }],

    // https://typescript-eslint.io/rules/ban-types
    'ts/ban-types': 'warn',

    // https://typescript-eslint.io/rules/indent
    'ts/indent': 'off',

    // disable it in the default config since TS ESLint overrides it
    'no-useless-constructor': 'off',
    'dot-notation': 'off',
    'brace-style': 'off'
};

const TYPE_AWARE_RULES: NonNullable<Linter.FlatConfig['rules']> = {
    // https://typescript-eslint.io/rules/no-throw-literal
    'ts/no-throw-literal': 'error',

    // https://typescript-eslint.io/rules/dot-notation
    'ts/dot-notation': [
        'error',
        {
            allowPrivateClassPropertyAccess: true,
            allowProtectedClassPropertyAccess: false,
            allowKeywords: true
        }
    ],

    // https://typescript-eslint.io/rules/no-implied-eval
    'ts/no-implied-eval': 'error',

    // https://typescript-eslint.io/rules/await-thenable
    'ts/await-thenable': 'error'
};

/**
 * Represents the options for configuring the TypeScript ESLint rules.
 */
export interface Options {
    /** disables the use of finding a valid `tsconfig.json` file when loading the config. */
    disableAutomaticTsConfigResolver?: boolean;

    /** whether or not to enable rules that are "type-aware" */
    enableTypeAwareRules?: boolean;

    /** Any extra file-paths to append to */
    extraFilePaths?: string[];

    /** File path on where the `tsconfig.json` file is. */
    tsconfig?: string | string[];

    /** Root directory of where `tsconfig.json` is. */
    rootDir?: string;
}

export default async function typescript(): Promise<Linter.FlatConfig>;
export default async function typescript(tsconfig: string): Promise<Linter.FlatConfig>;
export default async function typescript(options: Options): Promise<Linter.FlatConfig>;
export default async function typescript(configOrOpts?: Options | string) {
    let disableAutomaticTsConfigResolver = false;
    let enableTypeAwareRules = true;
    let rootDir = process.cwd();
    const paths = ['**/*.ts'];
    let tsconfig: string[] = [];

    if (isObject(configOrOpts)) {
        if (configOrOpts.disableAutomaticTsConfigResolver !== undefined) {
            disableAutomaticTsConfigResolver = configOrOpts.disableAutomaticTsConfigResolver;
        }

        if (configOrOpts.enableTypeAwareRules !== undefined) {
            enableTypeAwareRules = configOrOpts.enableTypeAwareRules;
        }

        if (Array.isArray(configOrOpts.extraFilePaths) && configOrOpts.extraFilePaths.length > 0) {
            paths.push(...configOrOpts.extraFilePaths);
        }

        if (configOrOpts.rootDir !== undefined) {
            rootDir = configOrOpts.rootDir;
        }

        if (configOrOpts.tsconfig !== undefined) {
            tsconfig = Array.isArray(configOrOpts.tsconfig) ? configOrOpts.tsconfig : [configOrOpts.tsconfig];
        }
    }

    if (typeof configOrOpts === 'string') {
        tsconfig = [configOrOpts];
    }

    if (!disableAutomaticTsConfigResolver && existsSync(resolve(rootDir, 'tsconfig.json'))) {
        tsconfig = [resolve(rootDir, 'tsconfig.json')];
    }

    // disable type-aware rules where no 'tsconfig.json' is available
    if (!tsconfig && enableTypeAwareRules) {
        enableTypeAwareRules = false;
    }

    debug('checking if we have TypeScript for ESLint packages');
    let parser: any, plugin: any;
    try {
        // First, let's see if we have `typescript-eslint` installed, which was introduced in TS ESLint v7
        const { parser: _parser, plugin: _plugin } = await import('typescript-eslint').then((m) => ({
            parser: m.parser,
            plugin: m.plugin
        }));

        parser = _parser;
        plugin = _plugin;

        debug('...loaded from `typescript-eslint` package');
    } catch (ex) {
        // if we are not using Bun, then the `assertIsError` should do something since
        // Bun or ESLint throws a `ResolveMessage` and it's an object but cannot be looked
        // into.
        if (typeof Bun === 'undefined') {
            assertIsError(ex);
        }

        debug(
            '...unable to find `typescript-eslint`, trying from scoped packages (@typescript-eslint/{parser,eslint-plugin}'
        );

        debug('received error: %o', ex);

        parser = await import('@typescript-eslint/parser').then((m) => (hasOwnProperty(m, 'default') ? m.default : m));
        plugin = await import('@typescript-eslint/eslint-plugin').then((m) =>
            hasOwnProperty(m, 'default') ? m.default : m
        );
    }

    return {
        files: paths,
        languageOptions: {
            parser,
            sourceType: 'module',
            parserOptions: tsconfig.length ? { project: tsconfig, tsconfigRootDir: rootDir } : {}
        },
        plugins: {
            // for prettier since `eslint-config-prettier` looks up rules via @typescript-eslint
            '@typescript-eslint': plugin,
            ts: plugin
        },
        rules: {
            ...RULES,
            ...(enableTypeAwareRules ? TYPE_AWARE_RULES : {})
        }
    } satisfies Linter.FlatConfig;
}
