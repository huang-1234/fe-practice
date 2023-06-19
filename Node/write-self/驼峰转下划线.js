const transMode = {
  toHump: 'toHump',
  toLine: 'toLine',
}
  // 下划线转换驼峰
  function toHump(name) {
    return name.replace(/\_(\w)/g, function (all, letter) {
      return letter.toUpperCase();
    });
  }
  //  驼峰 转换 下划线
  function toLine(name) {
    return name.replace(/([A-Z])/g, "_$1").toLowerCase();
  }
function tranJsName(targetStr, mode) {

  switch (mode) {
    case transMode.toHump:
      return toHump(targetStr);
    case transMode.toLine:
      return toLine(targetStr);
    default:
      return toHump(targetStr);
  }
}

// 测试
let a = 'a_b2_345_c2345';
console.log(toHump(a));

let b = 'aBdaNf';
console.log(toLine(b));