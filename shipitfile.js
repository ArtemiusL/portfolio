/* eslint-disable */

const program = require('commander');

module.exports = function (shipit) {
  require('shipit-deploy')(shipit);

  program
    .option('-b, --branch [branch]', 'git branch')
    .option('-p, --port [port]', 'app port')
    .option('-e, --env [env]', 'app env')
    .parse(process.argv);

  const shipitSyncingSourceFolder = './shipit-syncing-source';
  const deploymentFolder = '/var/www/atb/cs';
  const releasesFolder = `${deploymentFolder}/releases`;
  const currentReleaseFolder = `${deploymentFolder}/current`;
  const sshKeyPath = '~/.ssh/id_rsa';
  const appName = 'atb';
  const nodePath = './src';
  const gitRepUrl = 'git@git.snpdev.ru:saltpepper/atb-html.git';

  const branch = program.branch || 'develop';
  const nodeEnv = program.env || 'debug';
  const port = program.port || 3000;

  const stagingServer = 'atb@atb-direct.snpdev.ru';
  const productionServer = '';

  /* init main config */
  shipit.initConfig({
    default: {
      workspace: shipitSyncingSourceFolder,
      deployTo: deploymentFolder,
      repositoryUrl: gitRepUrl,
      branch: branch,
      ignores: ['.git', 'node_modules'],
      keepReleases: 1,
      deleteOnRollback: true,
      key: sshKeyPath,
      shallowClone: false
    },
    staging: {
      servers: stagingServer
    },
    production: {
      servers: productionServer
    }
  });

  shipit.blTask('installPackages', function() {
    return shipit.remote(`cd ${releasesFolder}/${shipit.releaseDirname} && yarn install`);
  });

  shipit.blTask('buildApp', function() {
    return shipit.local(nodeEnv === 'debug' ? 'yarn build:debug' : 'yarn build');
  });

  shipit.blTask('remoteCopyBuild', function() {
    shipit.remoteCopy('./public', `${releasesFolder}/${shipit.releaseDirname}`);
  });

  shipit.blTask('deleteApp', function() {
    return shipit.remote(`pm2 delete -s ${appName} || :`);
  });

  shipit.blTask('startApp', function() {
    return shipit.remote(`cd ${currentReleaseFolder}
      NODE_PATH=${nodePath} NODE_ENV=${nodeEnv} PORT=${port} pm2 start ./dev.js -n ${appName}`);
  });

  shipit.blTask('deleteShipitWorkspace', function() {
    return shipit.local(`rm -rf ${shipitSyncingSourceFolder}`);
  });

  shipit.task('postSetup', [
    'installPackages',
    'buildApp',
    'remoteCopyBuild',
  ], function() {
    shipit.remote('echo Post setup finished!');
  });

  shipit.task('runApp', [
    'deleteApp',
    'startApp',
  ], function() {
    shipit.remote('echo App started!');
  })

  shipit.on('updated', function () {
    shipit.start('postSetup');
  });

  shipit.on('published', function() {
    shipit.start('runApp');
  })

  shipit.on('deployed', function() {
    shipit.start('deleteShipitWorkspace');
  });
};
