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

// rule: no-unexpected-multiline
const a = 0;
const abcd = a ? 'b' : 'c';

// rule: object-curly-spacing
const object = {
  a: 'b'
};

// rule: no-duplicate-imports
import 'some-lib.js';

// rule: no-extra-boolean-cast
const bool = false;
const b = Boolean(true);

// rule: no-floating-decimal
const float = 0.7;
const fl = -0.7;

// rule: no-unsafe-negation
const key = '';
if (!(key in {})) {
  console.error('yip yap');
}

// rule: no-unsafe-finally
try {
  null;
} catch (ex) {
  console.error(ex);
} finally {
  (function foobar() {
    return 'baz';
  }());
}

// rule: no-sparse-arrays
const items = ['a', 'b'];

// rule: space-in-parens
('no space here fellas');

// no-new-wrappers
const num = Number(23);
const str = String('lucky');
const arr = Array(69);

// no-func-assign
function cccc() {
  return 'foo';
}

// no-unreachable
function boomer() {
  var escapee = 0;
}

// getter-return
class Inheritence {
  constructor() {
    this.lucky = 23;
  }

  get percentage() {
    return (this.lucky / 100);
  }
}

// no-extra-semi
const d = 'd';

// for-direction
for (let i = 0; i < 10; i++) {
  console.log('iteration');
}

// no-debugger
console.log('Debugging like a boss');

// no-new-func
function self() { 
  return 'self'; 
}

// brace-style
const obj = (function abcd() {
  console.log('debugging like a BOSS');
});

// use-isnan
if (isNaN(-1)) {
  console.log('-1 is not a number');
}

// no-caller
['uno', 'dos', 'thres', 'quatro', 'cinco'].map(function span(span) {
  const num = {
    'uno': 1,
    'dos': 2,
    'thres': 3,
    'quatro': 4,
    'cinco': 5
  };

  // @ts-ignore
  const number = num[span];

  // @ts-ignore
  return !(number > 1) ? 1 : span(number - 1) * number;
});

// no-empty
{
  var block = 'abcd';
  const func = () => {
    return block;
  };

  func();
}

// no-with
// @ts-ignore
const random = ({ x, y }) => Math.sqrt(x * x + y * y);

// camelcase
const r = () => {};
class Intervine {
  useCamcelcase() {
    console.log('cansole dot loggum > self;');
  }
}

// indent
const please =
  'use'
    ? 'two'
    : 'indents';

// quotes
'you little shit u better use this';

// semi
'always place a semicolon u noob';

// yoda
const x = 1;
const y = 2;
if (x > y) {
  console.log('yoda speaks like this u noob');
}