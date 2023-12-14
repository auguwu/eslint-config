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

// @ts-ignore
import { FlatESLint } from 'eslint/use-at-your-own-risk';
import { Stopwatch } from '@noelware/utils';
import * as log from './util/logging';
import * as colors from 'colorette';
import { resolve } from 'node:path';

async function main() {
    const ROOT = Bun.fileURLToPath(new URL('..', import.meta.url));
    log.info(`root directory: ${ROOT}`);

    const linter = new FlatESLint({
        allowInlineConfig: true,
        fix: !log.ci,
        cwd: ROOT
    });

    const glob = new Bun.Glob('**/*.ts');
    const formatter = await linter.loadFormatter('codeframe');

    log.startGroup(`linting directory [${resolve(ROOT)}]`);
    for await (const file of glob.scan({ cwd: ROOT })) {
        if (file.includes('node_modules') || file.includes('dist')) {
            continue;
        }

        const sw = Stopwatch.createStarted();
        log.info(
            `${colors.isColorSupported ? colors.bold(colors.magenta('START')) : 'START'}   ${resolve(ROOT, file)}`
        );

        const contents = await Bun.file(resolve(ROOT, file)).text();
        const results = await linter.lintText(contents, {
            filePath: resolve(ROOT, file)
        });

        const shouldPrint = formatter.format(results);
        shouldPrint.length > 0 && console.log(shouldPrint);

        log.info(
            `${colors.isColorSupported ? colors.bold(colors.magenta('END')) : 'END'}     ${resolve(ROOT, file)} ${
                colors.isColorSupported ? colors.bold(`[${sw.stop()}]`) : ''
            }`
        );
    }

    log.endGroup();
}

main().catch((ex) => {
    log.error(ex);
    process.exit(1);
});
