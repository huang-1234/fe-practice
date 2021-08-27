
/**
 * 练习Promise的链式调用
 */
const p3 = new Promise((resolve, reject) => {
  console.log('p3 start');
  resolve('resolve p3')
  console.log('p3 end');
})
async function async1() {
  console.log('async1 start');
  const p3res = await p3
  console.log(p3res);
  console.log('async1 end');
}
async1()

console.log('sync start')
const p1 = new Promise((resolve, reject) => {
  const v1 = 1;
  console.log(`p1: `, v1)
  resolve(v1)
})
  .then(
    res => {
      res = res * 2 + 1
      console.log(`p1: `, res);
      return res
    }
  )
  .then(
    res => {
      res = res * 2 + 1
      console.log(`p1: `, res);
      return res
    }
  )
  .then(
    res => {
      res = res * 2 + 1
      console.log(`p1: `, res);
      return res
    }
  )


const p2 = new Promise((resolve, reject) => {
  const v1 = 1;
  console.log(`p2: `, v1)
  resolve(v1)
})
  .then(
    res => {
      res = res * 2
      console.log(`p2: `, res);
      return res
    }
  )
  .then(
    res => {
      res = res * 2
      console.log(`p2: `, res);
      return res
    }
  )
  .then(
    res => {
      res = res * 2
      console.log(`p2: `, res);
      return res
    }
  )

console.log('sync end');


