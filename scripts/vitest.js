/*
 * 📜 @augu/eslint-config: Shareable ESLint configuration for my projects
 * Copyright (c) 2019-2022 Noel <cutie@floofy.dev>
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

const { info, error } = require('@actions/core');
const { spawn } = require('child_process');

const main = async () => {
  const proc = spawn('yarn', ['vitest', '--run', '--reporter=json']);

  /** @type {Buffer[]} */
  const chunks = [];
  let code = 0;

  proc.stdout.on('data', chunk => chunks.push(chunk));
  proc.stderr.on('data', chunk => console.error(chunk.toString()));

  await new Promise((resolve) => {
    proc.on('exit', resolve);
  });

  const buf = chunks[0];
  if (buf === undefined || buf === null)
    throw new Error('Missing vitest report!');

  const json = JSON.parse(buf.toString('utf-8').trim());
  info(`Ran all tests in ${Date.now() - json.startTime}ms`);
  info(`   - Passed/Failed Tests: ${json.numPassedTests}/${json.numFailedTests}`);
  info(`   - Total Test Suites:   ${json.numTotalTestSuites}`);
  info('');

  for (const result of json.testResults) {
    info(`Suite in path ${result.name} has ${result.status} in ${result.endTime - result.startTime}ms.`);

    for (const assertion of result.assertionResults) {
      if (assertion.status === 'failed') {
        for (const message of assertion.failureMessages) {
          code = 1;

          error(`${assertion.title} in suite ${assertion.ancestorTitles[1]} :: FAILED [${message}]`, {
            file: result.name,
            startLine: assertion.location.line,
            startColumn: assertion.location.column
          });
        }
      } else {
        info(`✔️  ${assertion.title} in suite ${assertion.ancestorTitles[1]} :: PASSED`);
      }
    }
  }

  process.exit(code);
};

main().catch(ex => {
  console.error(ex);
  process.exit(1);
});
