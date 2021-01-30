/**
 * Copyright (c) 2019-2020 August
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

// This file shows of what the config is like (w/o issues)

// rule: @typescript-eslint/adjacent-overload-signatures
function override(type: string): string;
function override(type: number): number;
function override(type: string | number): string | number {
  return type;
}

// rule: @typescript-eslint/consistent-type-definitions
type Def = string;
type Unknown = string | Record<string, unknown>;

interface ABCD {
  x: number;
}

// rule: @typescript-eslint/no-array-constructor
const array: string[] = [];

// rule: @typescript-eslint/no-empty-interface
interface A {
  x: string;
}

// rule: @typescript-eslint/no-empty-function
function o() {
  return 'a';
}

// rule: @typescript-eslint/no-extra-semi
const abc = '??';

// rule: @typescript-eslint/array-type
const a: string[] = [];

// rule: @typescript-eslint/brace-style
{
  let ccc = 'l';
}

// rule: @typescript-eslint/ban-types
const obj: Record<string, unknown> = {};
const num: number = 0;
const str: string = 'lucky bottom goes brrrr';
