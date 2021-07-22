/*
// 引入readline模块
var readline = require('readline');

//创建readline接口实例
var  rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

// question方法
rl.question("你叫什么？",function(answer){
    console.log("名字是："+answer);
    // 不加close，则不会结束
    rl.close();
});

// close事件监听
rl.on("close", function(){
   // 结束程序
    process.exit(0);
});
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.on('line', function (line) {
  const tokens = line.split(' ');
  console.log(parseInt(tokens[0]) + parseInt(tokens[1]));
  const n = tokens[0], m = tokens[1];
  let str;
  str = readline();
  console.log(str);
});