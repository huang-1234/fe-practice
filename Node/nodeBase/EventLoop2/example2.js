var fs = require('fs');
console.log('task start')
function someAsyncOperation (callback) {
  var time = Date.now();
  // 花费9毫秒
  fs.readFile('/path/to/xxxx.pdf', callback);
}

var timeoutScheduled = Date.now();
var fileReadTime = 0;
var delay = 0;

setTimeout(function () {
  delay = Date.now() - timeoutScheduled;
}, 5);

someAsyncOperation(function () {
  fileReadTime = Date.now();
  while(Date.now() - fileReadTime < 20) {

  }
  console.log('setTimeout: ' + (delay) + "ms have passed since I was scheduled");
  console.log('fileReaderTime',fileReadTime - timeoutScheduled);
});

console.log('task end')
/* task start
task end
setTimeout: 22ms have passed since I was scheduled
fileReaderTime 23 */

/* 解释：
当时程序启动时，event loop初始化：

timer阶段（无callback到达，setTimeout需要10毫秒）
i/o callback阶段，无异步i/o完成
忽略
poll阶段，阻塞在这里，当运行5ms时，poll依然空闲，但已设定timer,且时间已到达，因此，event loop需要循环到timer阶段,执行setTimeout callback,由于从poll --> timer中间要经历check,close阶段,这些阶段也会消耗一定时间，因此执行setTimeout callback实际是7毫秒 然后又回到poll阶段等待异步i/o完成，在9毫秒时fs.readFile完成，其callback加入poll queue并执行。 */