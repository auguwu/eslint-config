const { join } = require('path');

/**
 * ESLint configuration for Vue and JavaScript
 */
module.exports = {
  extends: join(__dirname, 'index.js'),
  plugins: ['vue'],
  rules: {
    'vue/no-async-in-computed-properties': 'error',
    'vue/no-shared-component-data': 'warn',
    'vue/no-unused-components': 'error',
    'vue/no-template-key': 'error',
    'vue/no-unused-vars': 'error'
  }
};