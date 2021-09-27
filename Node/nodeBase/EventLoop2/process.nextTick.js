// process.nextTick()不在event loop的任何阶段执行，而是在各个阶段切换的中间执行,即从一个阶段切换到下个阶段前执行

var fs = require('fs');

fs.readFile(__filename, () => {
  setTimeout(() => {
    console.log('setTimeout1');
  }, 0);
  setImmediate(() => {
    console.log('setImmediate1');
    process.nextTick(()=>{
      console.log('nextTick3');
    })
  });
  new Promise((resolve, reject) => {
    console.log("before resolve")
    resolve('i am fullfild')
    console.log("achived resolve")
  })
  .then(
    res1 => {
      console.log("res1",res1);
      const then1Msg = `and i tranfrom then1`
      return res1 + then1Msg;
    },
    err1 => {
      console.log("err1",err1)
    }
  ).then(
    res2 => {
      console.log(`res2: ${res2}`)
    },
    err2 => {
      console.log(`err2: ${err2}`)
    }
  )
  process.nextTick(()=>{
    console.log('nextTick1');
  })
  process.nextTick(()=>{
    console.log('nextTick2');
  })
});