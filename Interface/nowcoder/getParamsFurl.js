
// 获取 url 中的参数

// 指定参数名称，返回该参数的值 或者 空字符串
// 不指定参数名称，返回全部的参数对象 或者 { }
// 如果存在多个同名参数，则返回数组
// 输入：http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe key

// 输出：[1, 2, 3]
// ————————————————
// 版权声明：本文为CSDN博主「狐七大人」的原创文章，遵循CC 4.0 BY - SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/weixin_40664145/article/details/115672345
const getParams = function (url) {
  let secondArg='';
  if (arguments[1].trim()) {
    secondArg = arguments[1];
  }
  
  let newArr = url.split('?')[1].split('#')[0].split('&');
  console.log(url)
  console.log(newArr);
  let Ans = [];
  for (let i = 0;i < newArr.length;++i) {
    let numStr = newArr[i].split('=')[1];
    console.log(numStr, typeof numStr, isNumber(numStr)); // 输出调试
    if (-1===newArr[i].indexOf(secondArg)) {
      continue;
    } else {
      // 如果要考虑这个参数是否为数字，还要再写一个判断
      if (isNumber(numStr)) {
        Ans.push(parseFloat(numStr))
      } else {
        Ans.push(numStr)
      }
      
    }
  }
  function isNumber(val) {
  // var regPos = /^\d+(\.\d+)?$/; //非负浮点数
  // var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
    const regPos = /^\d+(\.\d)?$/;
    const regNeg = /^(-((\d+\.\d*[1-9]\d*)  |   (\d*[1-9]\d*\.\d+)  |   (\d*[1-9]\d*)))$/
    if (regPos.test(val) || regNeg.test(val)) {
      return true;
    } else {
      return false;
    }
  }
  return Ans
}

//写完后参考解答
function getUrlParam(sUrl, sKey) {
  let newArr = [];
  let newObj = {};
  // 获取?号后面#号前面的值
  let query = sUrl.split('#')[0].split('?')[1];
  // 如果query存在
  if (query) {
    let arr = query.split('&');
    for (let i = 0;i < arr.length;i++) {
      if (arr[i]) {
        arr[i] = arr[i].split('=');
        // 数组
        if (sKey !== undefined) {
          if (arr[i][0] === sKey) {
            newArr.push(arr[i][1]);
          }
          // 对象
        } else {
          if (arr[i][0] in newObj) {
            newObj[arr[i][0]].push(arr[i][1])
          } else {
            newObj[arr[i][0]] = [arr[i][1]]
          }
        }
      }
    }
    // 判断sKey有没有值
    if (sKey !== undefined) {
      switch (newArr.length) {
        case 0: return ''; break;
        case 1: return newArr[0]; break;
        default: return newArr; break;
      }
    } else {
      return newObj
    }
    // 如果query不存在，判断sKey是否存在，如果存在就返回空对象，如果不存在就返回空字符串
  } else {
    return sKey !== undefined ? {} : ''
  }
}

const url = 'http://www.nowcoder.com?key=1&key=24.3&key=3&test=4#hehe key';
const key = 'key'
const res = getParams(url, key);
console.log(res);
console.log('-------',getUrlParam(url,key));