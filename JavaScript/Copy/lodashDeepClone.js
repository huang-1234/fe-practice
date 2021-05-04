/* // 类型检测函数
function checkType(oTarget) {
  // let reg = /\d*$/;
  let Type = Object.prototype.toString.call(oTarget).slice(8,-1);
  console.log(Type);
  return Type
}
 */

let deepClone = require('lodash').cloneDeep;

function createData(deep, breadth) {
  var data = {};
  var temp = data;

  for (var i = 0;i < deep;i++) {
    temp = temp['data'] = {};
    for (var j = 0;j < breadth;j++) {
      temp[j] = j;
    }
  }

  return data;
}
let obj = createData(10000, 10000);
let out = deepClone(obj);
console.log(out);