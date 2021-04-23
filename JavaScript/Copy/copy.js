
/* 
//obj
const deepCloneKnowledgePoints = {
  title: '浅拷贝和深拷贝',
  chapterOne: {
    title: '章节一',
    point: [
      '浅拷贝和深拷贝初探索',
      '基本数据类型和引用数据类型',
    ],
  },
  chapterTwo: {
    title: '章节二',
    point: [
      '手写浅拷贝',
      'Object.assign()',
      'Array.prototype.concat()',
      'Array.prototype.slice()',
      '...obj 展开运算符',
    ],
    extend: [
      'for...in',
      'for...of',
      'for...in 和 for...of 的区别',
      'hasOwnProperty',
    ],
  },
  chapterThree: {
    title: '章节三',
    point: [
      '手写深拷贝',
      'JSON.parse(JSON.stringify())',
      '函数库 Lodash',
      '框架 jQuery',
    ],
    extend: [
      'typeof',
      'instanceof',
      'constructor',
      {
        point: 'Object.prototype.toString.call()',
        extend: [
          'Function.prototype.apply()',
          'Function.prototype.bind()',
          'Function.prototype.call()',
          'apply()、bind() 以及 call() 的区别',
        ],
      },
      {
        point: 'JSON.parse(JSON.stringify())',
        extend: [
          'JSON.parse()',
          'JSON.stringify()',
        ]
      }
    ],
  },
}; 
*/


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

let obj = { val: 100 };
obj.target = obj;
console.log(obj);
deepClone(obj);//报错: RangeError: Maximum call stack size exceeded



//long
const getType = obj => Object.prototype.toString.call(obj);

const isObject = (target) => (typeof target === 'object' || typeof target === 'function') && target !== null;

const canTraverse = {
  '[object Map]': true,
  '[object Set]': true,
  '[object Array]': true,
  '[object Object]': true,
  '[object Arguments]': true,
};
const mapTag = '[object Map]';
const setTag = '[object Set]';
const boolTag = '[object Boolean]';
const numberTag = '[object Number]';
const stringTag = '[object String]';
const symbolTag = '[object Symbol]';
const dateTag = '[object Date]';
const errorTag = '[object Error]';
const regexpTag = '[object RegExp]';
const funcTag = '[object Function]';

const handleRegExp = (target) => {
  const { source, flags } = target;
  return new target.constructor(source, flags);
}

const handleFunc = (func) => {
  // 箭头函数直接返回自身
  if (!func.prototype) return func;
  const bodyReg = /(?<={)(.|\n)+(?=})/m;
  const paramReg = /(?<=\().+(?=\)\s+{)/;
  const funcString = func.toString();
  // 分别匹配 函数参数 和 函数体
  const param = paramReg.exec(funcString);
  const body = bodyReg.exec(funcString);
  if (!body) return null;
  if (param) {
    const paramArr = param[0].split(',');
    return new Function(...paramArr, body[0]);
  } else {
    return new Function(body[0]);
  }
}

const handleNotTraverse = (target, tag) => {
  const Ctor = target.constructor;
  switch (tag) {
    case boolTag:
      return new Object(Boolean.prototype.valueOf.call(target));
    case numberTag:
      return new Object(Number.prototype.valueOf.call(target));
    case stringTag:
      return new Object(String.prototype.valueOf.call(target));
    case symbolTag:
      return new Object(Symbol.prototype.valueOf.call(target));
    case errorTag:
    case dateTag:
      return new Ctor(target);
    case regexpTag:
      return handleRegExp(target);
    case funcTag:
      return handleFunc(target);
    default:
      return new Ctor(target);
  }
}

const deepClone = (target, map = new WeakMap()) => {
  if (!isObject(target))
    return target;
  let type = getType(target);
  let cloneTarget;
  if (!canTraverse[type]) {
    // 处理不能遍历的对象
    return handleNotTraverse(target, type);
  } else {
    // 这波操作相当关键，可以保证对象的原型不丢失！
    let ctor = target.constructor;
    cloneTarget = new ctor();
  }

  if (map.get(target))
    return target;
  map.set(target, true);

  if (type === mapTag) {
    //处理Map
    target.forEach((item, key) => {
      cloneTarget.set(deepClone(key, map), deepClone(item, map));
    })
  }

  if (type === setTag) {
    //处理Set
    target.forEach(item => {
      cloneTarget.add(deepClone(item, map));
    })
  }

  // 处理数组和对象
  for (let prop in target) {
    if (target.hasOwnProperty(prop)) {
      cloneTarget[prop] = deepClone(target[prop], map);
    }
  }
  return cloneTarget;
}

let o = {
  name:'hsq'
}
o.link = o;
let out = deepClone(o)
console.log(out);
