
//myDeepClone,为了防止RangeError: Maximum call stack size exceeded;add a WeakMap
const deepClone = (target, map = new WeakMap()) => {
  // console.log(arguments);
  if (!arguments) throw new Error('there is no params');
  //为了解决属性类型为数组Array，增加类型函数
  const checkType = target => Object.prototype.toString.call(target).slice(8, -1);
  
  let Result, targetType = checkType(target);
  if (targetType === 'Object') {
    Result = {};
  } else if (targetType === 'Array') {
    Result = [];
  } else {
    return target;
  }

  //遍历这个对象
  for (index in target) {
    const value = target[index];
    if (map.get(value)) {
      return value
    }
    map.set(target, value);
    if (checkType(value) === 'Object' || checkType(value) === 'Array') {
      
      Result[index] = deepClone(target[index],map)
    } else {
      Result[index] = value;
    }
  }
  console.log('map:',map);
  return Result;
}


/* // Maximum call stack size exceeded
let obj = {
  val: 100,
  fn: (a, b)=>{
    console.log(a + b);
    return this.a + this.b;
  },
  obj: [
    {
      name: 'hsq',
      age: 18
    }
  ],
  date: new Date(),
  // sayName() {
  //   console.log(object);
  // }
};
obj.out = obj;
console.log(obj);
let out = deepClone(obj);
console.log('out:',out);//报错: RangeError: Maximum call stack size exceeded
out.obj = out;
console.log(out.obj.out);
 */

//
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