
console.log('task start')

{

  // 二者非常相似，但是二者区别取决于他们什么时候被调用.

  // -- setImmediate 设计在poll阶段完成时执行，即check阶段；
  // -- setTimeout 设计在poll阶段为空闲时，且设定时间到达后执行；但其在timer阶段执行

  // 其二者的调用顺序取决于当前event loop的上下文，如果他们在异步i／o callback之外调用，其执行先后顺序是不确定的

  setImmediate(function immediate() {
    console.log('immediate1');
  });
  setImmediate(function immediate() {
    console.log('immediate2');
  });

  setTimeout(function timeout() {
    console.log('timeout1');
  }, 0);

  setTimeout(function timeout() {
    console.log('timeout2');
  }, 0);

}
console.log(`===================================================`)
{
  var fs = require('fs')
  // 但当二者在异步i/o callback内部调用时，总是先执行setImmediate，再执行setTimeout
  fs.readFile(__filename, () => {
    console.log('IO 回调开始------------------------------------------------------------------')
    setTimeout(() => {
      console.log('timeout')
    }, 0)
    setImmediate(() => {
      console.log('immediate')
    })
  })
  // $ node timeout_vs_immediate.js
  // immediate
  // timeout
}
console.log('task end')

{
  // ITERATIONS_MAX
  const ITERATIONS_MAX = 2;
  let iteration = 0;

  const timeout = setInterval(() => {
    console.log('TIME PHASE START:' + iteration);

    if (iteration >= ITERATIONS_MAX) {
      clearInterval(timeout);
      console.log('TIME PHASE exceeded!');
    }

    console.log('TIME PHASE END:' + iteration);

    ++iteration;
  }, 0);

  setTimeout(() => {
    console.log('TIME PHASE0');

    setTimeout(() => {
      console.log('TIME PHASE1');

      setTimeout(() => {
        console.log('TIME PHASE2');
      });
    });
  });
}