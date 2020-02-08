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
    'space-in-parens': ['error', 'never'],
    'no-new-wrappers': 'error',
    'no-debugger': 'error',
    'no-new-func': 'error',
    'no-caller': 'error',
    'no-with': 'error',
    indent: ['error', 2, { SwitchCase: 1 }],
    quotes: ['error', 'single'],
    semi: ['error', 'always']
  },
  globals: {
    _config: false,
    console: true
  }
};