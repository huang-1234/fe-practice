
//myDeepClone
const deepClone = (target) => {
  //为了解决属性类型为数组Array，增加类型函数
  const checkType = target => Object.prototype.toString.call(target).slice(8, -1);
  
  let Result, targetType = checkType(target);
  if (targetType === 'Object') {
    Result = {};
  } else if (targetType === 'Array') {
    Result = [];
  } else {
    return target
  }
  //遍历这个对象
  for (index in target) {
    const value = target[index];
    if (checkType(value) === 'Object' || checkType(value) === 'Array') {
      
      Result[index] = deepClone(target[index])
    } else {
      Result[index] = value;
    }
  }
  return Result;
}

let o1 = {
  name: 'hsq',
  course: {
    major: {
      math: ['xiandai', 'gaoshu', 'gailvlun'],
      computer:['jizu','C','C++','java','python'],
    },
    minor: {
      wenxue:'wenxue'
    }
  }
}
let o2 = deepClone(o1);
console.log(o1);
o2.course.minor.wenxue = 'no'
console.log('o1:', o1.course.minor.wenxue, 'o2:', o2.course.minor.wenxue);
//看数组输出
o2.course.major.math.push('JSxue')
console.log('o1:', o1.course.major.math, 'o2:', o2.course.major.math);

/* 
// Maximum call stack size exceeded
let obj = { val: 100 };
obj.target = obj;
console.log(obj);
deepClone(obj);//报错: RangeError: Maximum call stack size exceeded

 */
