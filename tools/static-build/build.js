import path from 'path';
import mkdirp from 'mkdirp';
import Promise from 'bluebird';
import pretty from 'pretty';
import removeEmptyLines from 'remove-blank-lines';
import chalk from 'chalk';

import assets from '../../public/webpack-assets.json';
import routes from '../../src/app-routes';
import renderStaticHtml from './renderStaticHtml';
import writeFile from './writeFile';

const STATIC_BUILD_PATH = 'public';

const createBuildFolder = Promise.promisify(mkdirp);

createBuildFolder(path.resolve(process.cwd(), STATIC_BUILD_PATH))
  .then(() =>
    renderStaticHtml(routes, assets)
      .map(({ html, name }) => writeFile(
        path.resolve(process.cwd(), STATIC_BUILD_PATH, `${name}.html`),
        pretty(removeEmptyLines(html)),
      )),
  ).then(promises => Promise.all(promises))
  .then(() => console.info(chalk.green('Build successfull!')))
  .catch(err => console.error(err));

