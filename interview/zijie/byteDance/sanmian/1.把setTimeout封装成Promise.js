
/* 1.把setTimeout封装成Promise

解答:这题卡住了(嗅大了),一直不知道resolve该放在哪里，后来发猛然发现resolve是一个函数，可以直接放在setTimeout里。 */

function timeout(delay) {
  return new Promise(resolve => setTimeout(resolve, delay));
}
timeout(2000)
  .then((v) => {
      console.log('firstTime', v);
      console.log("huang-1234.github.io");
      return timeout(2000);
  })
  .then((value) => {
    console.log('secondTime',value);
      console.log("bytedance.com");
  });