const path = require('path');

const directory = path.dirname(__filename);
const fileName = path.basename(__filename);
const extension = path.extname(__filename);
const parseFile = path.parse(__filename);
const joinPath = path.join(__dirname, 'server', 'index.html');

module.exports = {
  directory,
  fileName,
  extension,
  parseFile,
  joinPath,
};
