const { join } = require('path');

module.exports = {
    extends: join(__dirname, 'index.js'),
    parser: 'babel-eslint'
};