const exec = require('child_process').exec;
console.log(exec)

// 'dplayer-thumbnails --help' 为脚本命令
exec('dplayer-thumbnails --help', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
});