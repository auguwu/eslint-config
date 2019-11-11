const { join } = require('path');

module.exports = {
    extends: join(__dirname, 'index.js'),
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    root: true,
    rules: {
        '@typescript-eslint/no-empty-interface': 'error',
        '@typescript-eslint/no-empty-function': 'warn',
        '@typescript-eslint/array-type': 'error'
    }
};