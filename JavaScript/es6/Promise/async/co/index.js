/* 来看下co库的实现，co库默认会返回一个Promise对象，对于yield之后的值（如上面的res.value,
co库会将其转换为一个Promise。实现思想很简单，基本还是利用递归的方式，大体的思路如下： */
const baseHandle = handle => res => {
  let ret;
  try {
    ret = gen[handle](res);
  } catch (e) {
    reject(e);
  }
  next(ret);
};
function co(gen) {
  const ctx = this;
  const args = Array.prototype.slice.call(arguments, 1);
  return new Promise((reslove, reject) => {
    if (typeof gen === 'function') gen = gen.apply(ctx, args);
    if (!gen || typeof gen.next !== 'function') return resolve(gen);

    const onFulfilled = baseHandle('next');
    const onRejected = baseHandle('throw');

    onFulfilled();

    function next(ret) {
      if (ret.done) {
        reslove(ret.value);
      }// 将yield的返回值转换为Proimse
      const value = toPromise.call(ctx, ret.value);
      if (value && isPromise(value)) {
        return value.then(onFulfilled, onRejected);
      }
      return onRejected(new TypeError('yield type error'));
    }
  });
}

/* toPromise就是将一些类型转换为Promise, 从这里我们可以看出的是可以将哪些类型放在yield后面, 这里就来看一个常用的： */
// 把thunkify之后的函数转化为Promise的形式
function thunkToPromise(fn) {
  const ctx = this;
  return new Promise(function (resolve, reject) {
    fn.call(ctx, function (err, res) {
      if (err) {
        return reject(err);
      }
      if (arguments.length > 2) {
        res = slice.call(arguments, 1);
      }
      resolve(res);
    });
  });
}

/* 终极解决方案 */
const readFile = file =>
  new Promise((reslove, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject(err);
      reslove(data);
    });
  });
const readTwoFile = async function () {
  const f1 = await readFile('./a.txt');
  const f2 = await readFile('./b.txt');
  return Buffer.concat([f1, f2]).toString();
};
readTwoFile().then(data => {
  console.log(data);
});