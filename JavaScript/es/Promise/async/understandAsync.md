## 理解 async

## 写在前面

本文将要实现一个顺序读取文件的最优方法，实现方式从最古老的回调方式到目前的`async`，也会与大家分享下本人对于`thunk`库与`co`库的理解。实现的效果：顺序读取出`a.txt`与`b.txt`，将读出的内容拼接成为一个字符串。

## 同步读取

```reasonml
const readTwoFile = () => {
    const f1 = fs.readFileSync('./a.txt'),
        f2 = fs.readFileSync('./b.txt');
    return Buffer.concat([f1, f2]).toString();
};
```

这种方式最利于我们理解，代码也很清楚，没有过多的嵌套，很好的维护，但是这种有着最大的问题，那就是性能，`node`所倡导的就是异步`i/o`来处理密集`i/o`，而同步的读取，很大的程度上浪费着服务器的`cpu`，这种方式的弊端明显的大于好处，所以直接pass掉。（**其实`node`的任何异步编程的解决方案的目标都是要达到同步的语义，异步的执行。**）

## 利用回调读取

```reasonml
const readTwoFile = () => {
    let str = null;
    fs.readFile('./a.txt', (err, data) => {
        if (err) throw new Error(err);
        str = data;
        fs.readFile('./b.txt', (err, data) => {
            if (err) throw new Error(err);
            str = Buffer.concat([str, data]).toString();
        });
    });
};
```

利用回调的方式，实现起来很简单，直接的嵌套下去就好，但是这种情况下很容易造成的就是不易维护，难以读懂的情况，最为极致的情况的就是回调地狱。

## Promise实现

```reasonml
const readFile = file => 
    new Promise((reslove, reject) => {
        fs.readFile(file, (err, data) => {
            if (err) reject(err);
            reslove(data);
        });
    });
const readTwoFile = () => {
    let bf = null;
    readFile('./a.txt')
        .then(
            data => {
                bf = data;
                return readFile('./b.txt');
            }, 
            err => { throw new Error(err) }
        )
        .then(
            data => {
                console.log(Buffer.concat([bf, data]).toString())
            }, 
            err => { throw new Error(err) }
        );
};
```

`Promise`可以将横向增长的回调转化为纵向增长，能解决一些问题，但是`Promise`造成的问题就是代码冗余，一眼看过去，全部是`then`，也不是很爽，但是相比于回调函数嵌套来说，已经有了很大的提升。

## yield

`Generator`很多语言中都有，本质上是**协程**，下面就来看一下**协程，线程，进程**的区别与联系：

- 进程：操作系统中分配资源的基本单位
- 线程：操作系统中调度资源的基本单位
- 协程：比线程更小的的执行单元，自带`cpu`上下文，一个协程一个栈

一个进程中可能存在多个线程，一个线程中可能存在多个协程，进程、线程的切换由操作系统控制，而协程的切换由程序员自身控制。异步`i/o`利用回调的方式来应对`i/o`密集，同样的使用协程也可以来应对，协程的切换并没有很大的资源浪费，将一个`i/o`操作写成一个协程，这样进行`i/o`时可以吧`cpu`让给其他协程。
`js`同样支持协程，那就是`yield`。使用`yield`给我们直观的感受就是，执行到了这个地方停了下来，其他的代码继续跑，到你想让他继续执行了，他就是会继续执行。

```reasonml
function *readTwoFile() {
    const f1 = yield readFile('./a.txt');
    const f2 = yield readFile('./b.txt');  
    return Buffer.concat([f1, f2]).toString();
}
```

`yield`下的顺序读取呈现的也是一种顺序读取的方式，对于`readFile`来看有两种不同的实现方式，

- 利用`thunkify`

```javascript
const thunkify = (fn, ctx) => (...items) => (done) => {
    ctx = ctx || null;
    let called = false;
    items.push((...args) => {
        if (called) return void 0;
        called = true;
        done.apply(ctx, args);
    });
    try {
        fn.apply(ctx, items);    
    } catch(err) {
        done(err);
    }
};
```

`thunkify`函数就是一种柯里化得思想，最后的传入参数`done`就为回调函数，利用`thunkify`可以很轻松的实现`yield`函数的自动化流程：

```php
const run = fn => {
    const gen = fn();
    let res;
    (function next(err, data) {
        let g = gen.next(data);
        if (g.done) return void 0;
        g.value(next);
    })();
};
```

- 利用`Promise`

```javascript
const readFile = file => 
    new Promise((reslove, reject) => {
        fs.readFile(file, (err, data) => {
            if (err) reject(err);
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
            err => { throw new Error(err); }
        );
    })();
};
run(readTwoFile);
```

上面两种方式都可以达到自动执行`yield`的过程，那么有没有一种方式，可以兼容这两种实现方式呢，tj大神又给出了一个库，那就是`co`库，先来看下用法：

```lasso
// readTwoFile的实现与上面类似,readFile既可以利用Promise也可以利用thunkify
// co库返回一个Promise对象
co(readTwoFile).then(data => console.log(data));
```

来看下`co`库的实现，`co`库默认会返回一个`Promise`对象，对于`yield`之后的值（如上面的`res.value`），`co`库会将其转换为一个`Promise`。实现思想很简单，基本还是利用递归的方式，大体的思路如下：

```javascript
const baseHandle = handle => res => {
    let ret;
    try {
        ret = gen[handle](res);
    } catch(e) {
        reject(e);
    }
    next(ret);
};
function co(gen) {
    const ctx = this,
        args = Array.prototype.slice.call(arguments, 1);
    return new Promise((reslove, reject) => {
        if (typeof gen === 'function') gen = gen.apply(ctx, args);
        if (!gen || typeof gen.next !== 'function') return resolve(gen);

        const onFulfilled = baseHandle('next'),
            onRejected = baseHandle('throw');

        onFulfilled();

        function next(ret) {
            if (ret.done) reslove(ret.value);
            // 将yield的返回值转换为Proimse
            const value = toPromise.call(ctx, ret.value);
            if (value && isPromise(value)) return value.then(onFulfilled, onRejected);
            return onRejected(new TypeError('yield type error'));
        }
    });
}
```

`toPromise`就是将一些类型转换为`Promise`，从这里我们可以看出的是可以将哪些类型放在`yield`后面，这里就来看一个常用的：

```javascript
// 把thunkify之后的函数转化为Promise的形式
function thunkToPromise(fn) {
    const ctx = this;
    return new Promise(function (resolve, reject) {
        fn.call(ctx, function (err, res) {
            if (err) return reject(err);
            if (arguments.length > 2) res = slice.call(arguments, 1);
            resolve(res);
        });
    });
}
```

最近`Node`已经支持了`async/await`，可以利用其来做异步操作：

## 终极解决

```javascript
const readFile = file => 
    new Promise((reslove, reject) => {
        fs.readFile(file, (err, data) => {
            if (err) reject(err);
            reslove(data);
        });
    });
const readTwoFile = async function() {
    const f1 = await readFile('./a.txt');
    const f2 = await readFile('./b.txt');    
    return Buffer.concat([f1, f2]).toString();
};
readTwoFile().then(data => {
    console.log(data);
});
```

`async/await`做的就是将`Promise`对象给串联起来，避免了`then`的调用方式，代码非常的易读，就是一种同步的方式。不再需要借助其他外界类库（比如`co`库）就可以优雅的解决回调的问题。