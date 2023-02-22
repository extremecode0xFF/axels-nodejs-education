const chalk = require('chalk');
const GREETINGS = require('./data');
const { directory } = require('./demo/path');

console.log(chalk.blue(GREETINGS));
console.log(directory);
