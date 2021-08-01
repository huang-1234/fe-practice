console.log('script start');

async function async1() {
  console.log('async1 start'); //
  await async2();
  console.log('async1 end');
}
async function async2() {
  console.log('async2 start'); //
  return new Promise((resolve, reject) => {
    console.log('after async before resolve');
    resolve();
    console.log('async2 promise');
  })
}

console.log('script start middleware');

setTimeout(function () {
  console.log('setTimeout');
}, 0);

async1();

new Promise(function (resolve) {
  console.log('promise1');
  resolve();
}).then(function () {
  console.log('promise2');
}).then(function () {
  console.log('promise3');
});
console.log('script end');

/*
宏任务1
script start
script start middleware

async1 start
async2 start
after async before resolve
async2 promise
promise1
script end

同步任务1下的异步任务1

async1 end
promise2
promise3

宏任务2
setTimeout
 */

/* 正确输出结果：
script start
script start middleware
async1 start
async2 start
after async before resolve
async2 promise
promise1
script end

promise2
promise3
async1 end

setTimeout
 */

/* 在async1 */
