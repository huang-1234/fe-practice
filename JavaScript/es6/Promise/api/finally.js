const p1 = new Promise((resolve, reject) => {
  reject(new Error('出错了'))
  resolve(2)
})
p1.then(
  res => {
    console.log(res);
  }
)
console.log(p1);
// setTimeout(console.log, 0, p1);