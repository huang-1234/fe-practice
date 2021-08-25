/* 第十三篇: 能不能实现数组reduce方法 ?
依照 ecma262 草案，实现的reduce的规范如下: */

/* 其中有几个核心要点:
1、初始值不传怎么处理
2、回调函数的参数有哪些，返回值如何处理。 */

Array.prototype.reduce = function (callbackfn, initialValue) {
  // 异常处理，和 map 一样
  // 处理数组类型异常
  if (this === null || this === undefined) {
    throw new TypeError("Cannot read property 'reduce' of null or undefined");
  }
  // 处理回调类型异常
  if (Object.prototype.toString.call(callbackfn) != "[object Function]") {
    throw new TypeError(callbackfn + ' is not a function')
  }
  let O = Object(this);
  let len = O.length >>> 0;
  let k = 0;
  let accumulator = initialValue;
  if (accumulator === undefined) {
    for (;k < len;k++) {
      // 查找原型链
      if (k in O) {
        accumulator = O[k];
        k++;
        break;
      }
    }
  }
  // 表示数组全为空
  if (k === len && accumulator === undefined)
    throw new Error('Each element of the array is empty');
  for (;k < len;k++) {
    if (k in O) {
      // 注意，核心！
      accumulator = callbackfn.call(undefined, accumulator, O[k], k, O);
    }
  }
  return accumulator;
}

/* 其实是从最后一项开始遍历，通过原型链查找跳过空项。

最后给大家奉上V8源码，以供大家检查: */
function ArrayReduce(callback, current) {
  CHECK_OBJECT_COERCIBLE(this, "Array.prototype.reduce");

  // Pull out the length so that modifications to the length in the
  // loop will not affect the looping and side effects are visible.
  var array = TO_OBJECT(this);
  var length = TO_LENGTH(array.length);
  return InnerArrayReduce(callback, current, array, length,
    arguments.length);
}

function InnerArrayReduce(callback, current, array, length, argumentsLength) {
  if (!IS_CALLABLE(callback)) {
    throw make_type_error(kCalledNonCallable, callback);
  }

  var i = 0;
  find_initial: if (argumentsLength < 2) {
    for (;i < length;i++) {
      if (i in array) {
        current = array[i++];
        break find_initial;
      }
    }
    throw make_type_error(kReduceNoInitial);
  }

  for (;i < length;i++) {
    if (i in array) {
      var element = array[i];
      current = callback(current, element, i, array);
    }
  }
  return current;
}