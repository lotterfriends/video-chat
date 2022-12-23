import { copyFileSync, existsSync, mkdirSync, readdirSync, rm, statSync } from 'fs';
import { join } from 'path';
import { execCommand } from './util';

var copyRecursiveSync = function(src: string, dest: string) {
  var exists = existsSync(src);
  var stats = statSync(src);
  var isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    if (!existsSync(dest)) {
      mkdirSync(dest);
    }
    readdirSync(src).forEach(function(childItemName) {
      copyRecursiveSync(join(src, childItemName),join(dest, childItemName));
    });
  } else {
    copyFileSync(src, dest);
  }
};


const run = async () => {
  rm('work', { recursive: true }, async () => {
    await execCommand('npx nx build demo-video-chat-server --prod', {showStdout: true});
    await execCommand('npx nx build demo-video-chat-client --prod', {showStdout: true});
    await execCommand('npx ncc build dist/apps/demo-video-chat-server/main.js -o work', {showStdout: true});
    const frontendTarget = 'work/client';
    copyRecursiveSync(`dist/apps/demo-video-chat-client/`, frontendTarget);
  });
}

run();