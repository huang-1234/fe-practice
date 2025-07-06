const { readFile } = require('fs')

/*
// 常规使用 回调函数的用法
readFile('./some.txt', 'utf8', (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
})
 */


const PromsieReadFile = (pathname, deCode, cb) => {
  return new Promise((resolve, reject) => {
    readFile(pathname, deCode, (err, data) => {
      if (err) reject(err);
      resolve(data);
    })
  })
}
const options = {
  pathname: './some.txt',
  deCode: ''
}
// PromsieReadFile(options.pathname, options.deCode).then(
//   res => console.log('res:', res),
//   err => console.log('err', err)
// )

async function asyncReadFile() {
  const res = await PromsieReadFile(options.pathname, options.deCode);
  return res;
}
const res = asyncReadFile()
console.log('res', res);