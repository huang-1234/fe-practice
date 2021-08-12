const fs = require('fs')
function timeout(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf8', (err, data) => {
      if (err) reject(err)
      else resolve(data)
    })
  })
}

/* 3.把fs中所有的callback回调函数，封装成Promise */
/* 解答:之前也看过，但写的时候不知道…arg该放在那里。卡住了，我实在太弱了。以下为正确答案。 */
const fs = require('fs')
const promisify = function(callBack) {
    return function(...args) {         //...args应该放在这里，返回一个函数，拿到函数的参数。
        return new Promise((resolve, reject) => {
            callBack(...args, (err, data) => {
                if (err) {
                    reject(err)
                    return;
                }
                resolve(data)
            })
        })
    }
}
const fsReadFile = promisify(fs.readFile);
fsReadFile('./test.txt', 'utf-8')
  .then((data) =>
    console.log(data)
)
  .catch((err) => reject(err));