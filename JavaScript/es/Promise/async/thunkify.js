const thunkify = (fn, ctx) => (...items) => (done) => {
  ctx = ctx || null;
  let called = false;
  items.push((...args) => {
    if (called) {
      return void 0;
    }
    called = true;
    done.apply(ctx, args);
  });
  try {
    fn.apply(ctx, items);
  } catch (err) {
    done(err);
  }
};

/* thunkify函数就是一种柯里化得思想，最后的传入参数done就为回调函数，
利用thunkify可以很轻松的实现yield函数的自动化流程： */
const run = fn => {
  const gen = fn();
  let res;
  (function next(err, data) {
    let g = gen.next(data);
    if (g.done) return void 0;
    g.value(next);
  })();
};

/* 利用Promise */
const readFile = file =>
  new Promise((reslove, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) {
        reject(err);
      }
      reslove(data);
    });
  });
const run = fn => {
  const gen = fn();
  let str = null;
  (function next(err, data) {
    let res = gen.next(data);
    if (res.done) return void 0;
    res.value.then(
      data => {
        next(null, data);
      },
      err => {
        throw new Error(err);
      }
    );
  })();
};
run(readTwoFile);

/* 上面两种方式都可以达到自动执行yield的过程，那么有没有一种方式，可以兼容这两种实现方式呢,
  tj大神又给出了一个库，那就是co库，先来看下用法： */
// readTwoFile的实现与上面类似,readFile既可以利用Promise也可以利用thunkify
// co库返回一个Promise对象
co(readTwoFile).then(data => console.log(data));