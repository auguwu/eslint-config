const { join } = require('path');

module.exports = {
    extends: join(__dirname, 'index.js'),
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    rules: {
        '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
        '@typescript-eslint/no-empty-interface': 'error',
        '@typescript-eslint/no-empty-function': 'error',
        '@typescript-eslint/class-name-casing': 'warn',
        '@typescript-eslint/no-namespace': ['error', { 'allowDeclarations': true }],
        '@typescript-eslint/array-type': 'error'
    }
};