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

import { describe, test, expect } from 'vitest';
import { Linter } from 'eslint';

const config = require('..');

describe('ESLint Configuration - JavaScript', () => {
  const linter = new Linter();

  test('should pass without any errors', () => {
    const sourceCode = `const foo = 'bar';
    `.trim() + '\n';

    const results = linter.verify(sourceCode, config);

    expect(results).toMatchInlineSnapshot('[]');
  });

  test('@augu/eslint-config :: yoda', () => {
    const sourceCode = [
      'const colour = \'red\';',
      'if (\'red\' === colour) {',
      '  console.log(\'yoda encountered!\');',
      '}',
      ''
    ].join('\n');

    const results = linter.verify(sourceCode, config);

    expect(results.length).toBe(1);
    expect(results).toMatchInlineSnapshot(`
      [
        {
          "column": 5,
          "endColumn": 21,
          "endLine": 2,
          "fix": {
            "range": [
              26,
              42,
            ],
            "text": "colour === 'red'",
          },
          "line": 2,
          "message": "Expected literal to be on the right side of ===.",
          "messageId": "expected",
          "nodeType": "BinaryExpression",
          "ruleId": "yoda",
          "severity": 2,
        },
      ]
    `);

    const fixResult = linter.verifyAndFix(sourceCode, config);

    expect(fixResult.fixed).toBeTruthy();
    expect(fixResult.messages.length).toBe(0);
    expect(fixResult.output).toMatchInlineSnapshot(`
      "const colour = 'red';
      if (colour === 'red') {
        console.log('yoda encountered!');
      }
      "
    `);
  });

  test('@augu/eslint-config :: semi', () => {
    const sourceCode = [
      'const yellow = \'yellow\'',
      'console.log(yellow);',
      ''
    ].join('\n');

    const results = linter.verify(sourceCode, config);
    expect(results.length).toBe(1);
    expect(results).toMatchInlineSnapshot(`
      [
        {
          "column": 24,
          "endColumn": 1,
          "endLine": 2,
          "fix": {
            "range": [
              23,
              23,
            ],
            "text": ";",
          },
          "line": 1,
          "message": "Missing semicolon.",
          "messageId": "missingSemi",
          "nodeType": "VariableDeclaration",
          "ruleId": "semi",
          "severity": 2,
        },
      ]
    `);

    const fixResult = linter.verifyAndFix(sourceCode, config);

    expect(fixResult.fixed).toBeTruthy();
    expect(fixResult.messages.length).toBe(0);
    expect(fixResult.output).toMatchInlineSnapshot(`
      "const yellow = 'yellow';
      console.log(yellow);
      "
    `);
  });

  test('@augu/eslint-config :: eqeqeq', () => {
    const sourceCode = [
      'const blue = "blue";',
      'if (blue != "blue") {',
      '  console.log("it\'s not blue :(");',
      '}',
      ''
    ].join('\n');

    const results = linter.verify(sourceCode, config);

    expect(results.length).toBe(1);
    expect(results).toMatchInlineSnapshot(`
      [
        {
          "column": 10,
          "endColumn": 12,
          "endLine": 2,
          "line": 2,
          "message": "Expected '!==' and instead saw '!='.",
          "messageId": "unexpected",
          "nodeType": "BinaryExpression",
          "ruleId": "eqeqeq",
          "severity": 2,
        },
      ]
    `);
  });

  test('@augu/eslint-config :: no-with', () => {
    const sourceCode = [
      'const lock = {};',
      'with (lock) {',
      '  console.log("doing some mutex stuff right here, right?");',
      '}',
      ''
    ].join('\n');

    const results = linter.verify(sourceCode, config);
    expect(results.length).toBe(1);
    expect(results).toMatchInlineSnapshot(`
      [
        {
          "column": 1,
          "fatal": true,
          "line": 2,
          "message": "Parsing error: 'with' in strict mode",
          "ruleId": null,
          "severity": 2,
        },
      ]
    `);
  });

  test('heck', () => {
    expect(false).toBeTruthy();
  });
});
