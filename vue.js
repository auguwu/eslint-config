const { join } = require('path');

/**
 * Configuration for Vue.js development
 */
module.exports = {
    extends: join(__dirname, 'index.js'),
    plugins: ['vue'],
    rules: {
        'vue/no-shared-component-data': 'error',
        'vue/no-unused-components': 'error',
        'vue/no-unused-vars': 'error'
    }
};