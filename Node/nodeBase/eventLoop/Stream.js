const fs = require('fs');
let data = 'I am huangshuiqing,I am in changsha.';
const writeStream = fs.createWriteStream('');
// 
writeStream.write(data, 'utf-8');
writeStream.end();
// 处理事件流
writeStream.on('writeFinish', () => {
  console.log('write finished!');
});
writeStream.on('error', (err) => {
  console.log('err');
  console.log(err.stack);
})
//
