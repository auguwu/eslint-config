const { join } = require('path');

/**
 * Configuration for React projects
 */
module.exports = {
  extends: join(__dirname, 'index.js'),
  plugins: ['react'],
  rules: {
    'react/require-render-return': 'error'
  }
};