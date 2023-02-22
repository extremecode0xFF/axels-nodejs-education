const fs = require('fs');
const path = require('path');
const GREETINGS = require('../data');

fs.mkdir(path.join(__dirname, 'test'), (error) => {
  if (error) {
    console.log('Directory already exists');
    return;
  }

  console.log('Directory is created!!!');
});

const filePath = path.join(__dirname, 'test', 'text.txt');

fs.writeFile(filePath, GREETINGS, (error) => {
  if (error) {
    console.log('Cannot write into file');
    return;
  }
  console.log('File has been created!!!');
});

fs.appendFile(filePath, 'Append Text', (error) => {
  if (error) {
    console.log('Cannot append into file');
  }
  console.log('File has been appended!!!');
});

fs.readFile(filePath, 'utf-8', (error, data) => {
  if (error) {
    throw error;
  }

  console.log('Read file: ', data);
});
