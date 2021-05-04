//myDeepClone
const deepClone = (target) => {
  //为了解决属性类型为数组Array，增加类型函数
  const checkType = target => Object.prototype.toString.call(target).slice(8, -1);

  let oResult, targetType = checkType(target);
  if (targetType === 'Object') {
    oResult = {};
  } else if (targetType === 'Array') {
    oResult = [];
  } else {
    return target
  }
  //define Stack
  function Stack() {
    this.items=[];
    this.top = null;
    this.push = function (item) {
      this.items.push(item)
    };
    this.pop = function (item) {
      return this.items.pop(item)
    };
    this.size = function () {
      return items.length;
    }
    this.clear = function () {
      this.items = [];
    }
  }
  //遍历这个对象，并将其属性push到Stack中
  let myStack = new Stack();
  for (index in target) {
    myStack.push(target[index]);
  }
  while (myStack.size()) {
    let value = myStack.pop();
    if (checkType(value)==='Object' || checkType(value)==='Array') {
      // oReturn[]
    }
  }
  return oResult;
}

let o1 = {
  name: 'hsq',
  course: {
    major: {
      math: ['xiandai', 'gaoshu', 'gailvlun'],
      computer: ['jizu', 'C', 'C++', 'java', 'python'],
    },
    minor: {
      wenxue: 'wenxue'
    }
  }
}