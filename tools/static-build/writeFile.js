import fs from 'fs';
import Promise from 'bluebird';

const writeFile = Promise.promisify(fs.writeFile);

export default (path, fileContent) => writeFile(path, fileContent);
