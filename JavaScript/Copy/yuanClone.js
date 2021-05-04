
function deepClone(source, map = new WeakMap()) {
  if (source === null) return source;// 为空返回
  if (typeof source !== "object") return source;// 为基本类型返回
  if (source instanceof Date) return new Data(source);// 为日期类型返回创建的新实例
  if (source instanceof RegExp) return new RegExp(source);// 为正则表达式类型返回创建的新实例
  // 判断是否拷贝过该对象,有的话直接返回
  if (map.get(source)) return map.get(source);
  let target = new source.constructor();
  // 设置当前对象与拷贝对象的映射关系
  map.set(source, target);
  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      // 实现递归拷贝
      target[key] = deepClone(source[key], map);
    }
  }
  return target;
}
//data

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
let obj = createData(1000, 1000);
let out = deepClone(obj);
console.log(out);