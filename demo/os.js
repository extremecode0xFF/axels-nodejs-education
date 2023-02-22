const os = require('os');

console.log('OS: ', os.platform());

console.log('CPU architecture: ', os.arch());

console.log('CPU core', os.cpus());

console.log('Free system memory', os.freemem());

console.log('Total system memory', os.totalmem());

console.log('Home directory: ', os.homedir());

console.log('System uptime', os.uptime());
