/**
 * Basic JavaScript configuration for ESLint
 */
module.exports = {
  root: true,
  env: {
    es6: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      forOf: true,
      spread: true,
      modules: true,
      classes: true,
      generators: true,
      restParams: true,
      regexUFlag: true,
      regexYFlag: true,
      globalReturn: true,
      destructuring: true,
      impliedStrict: true,
      blockBindings: true,
      defaultParams: true,
      octalLiterals: true,
      arrowFunctions: true,
      binaryLiterals: true,
      templateStrings: true,
      superInFunctions: true,
      unicodeCodePointEscapes: true,
      objectLiteralShorthandMethods: true,
      objectLiteralComputedProperties: true,
      objectLiteralDuplicateProperties: true,
      objectLiteralShorthandProperties: true
    }
  },
  rules: {
    'object-curly-spacing': ['error', 'always', { objectsInObjects: false }],
    'no-duplicate-imports': 'error',
    'no-extra-boolean-cast': 'error',
    'no-floating-decimal': 'error',
    'space-in-parens': ['error', 'never'],
    'no-new-wrappers': 'error',
    'no-invalid-this': 'error',
    'no-func-assign': 'error',
    'getter-return': 'error',
    'no-extra-semi': 'error',
    'for-direction': 'error',
    'no-debugger': 'error',
    'no-new-func': 'error',
    'brace-style': ['error', '1tbs'],
    'use-isnan': 'warn',
    'no-caller': 'error',
    'no-empty': 'error',
    'no-with': 'error',
    indent: ['error', 2, { SwitchCase: 1 }],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    yoda: 'error'
  },
  globals: {
    _config: false,
    console: true
  }
};