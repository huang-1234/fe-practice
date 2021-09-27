/* Promise.all 并发限制
这时候考虑一个场景：如果你的promises数组中每个对象都是http请求，而这样的对象有几十万个。

那么会出现的情况是，你在瞬间发出几十万个http请求，这样很有可能导致堆积了无数调用栈导致内存溢出。

这时候，我们就需要考虑对Promise.all做并发限制。

Promise.all并发限制指的是，每个时刻并发执行的promise数量是固定的，最终的执行结果还是保持与原来的Promise.all一致。

题目实现
思路分析
整体采用递归调用来实现：最初发送的请求数量上限为允许的最大值，并且这些请求中的每一个都应该在完成时继续递归发送，
通过传入的索引来确定了urls里面具体是那个URL，保证最后输出的顺序不会乱，而是依次输出。

代码实现 */
/**
 *
 * @param {*} urls
 * @param {*} maxNum
 * @returns
 */
function multiRequest(urls = [], maxNum) {
  // 请求总数量
  const len = urls.length;
  // 根据请求数量创建一个数组来保存请求的结果
  const result = new Array(len).fill(false);
  // 当前完成的数量
  let count = 0;

  return new Promise((resolve, reject) => {
    // 请求maxNum个
    while (count < maxNum) {
      executeRequest();
    }
    function executeRequest() {
      let current = count++;
      // 处理边界条件
      if (current >= len) {
        // 请求全部完成就将promise置为成功状态, 然后将result作为promise值返回
        !result.includes(false) && resolve(result);
        return;
      }
      const url = urls[current];
      console.log(`开始 ${current}`, new Date().toLocaleString());
      fetch(url)
        .then((res) => {
          // 保存请求结果
          result[current] = res;
          console.log(`完成 ${current}`, new Date().toLocaleString());
          // 请求没有全部完成, 就递归
          if (current < len) {
            executeRequest();
          }
        })
        .catch((err) => {
          console.log(`结束 ${current}`, new Date().toLocaleString());
          result[current] = err;
          // 请求没有全部完成, 就递归
          if (current < len) {
            executeRequest();
          }
        });
    }
  });
}