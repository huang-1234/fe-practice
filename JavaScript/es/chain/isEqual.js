/* 本题要做的就是判断两个地址不相同的对象是否“相等”，相等的话返回true，否则返回false。本文只给一个参考的解答，实际需要考虑很多方面，可以参考Underscore里的_.isEqual()方法，地址：https://github.com/lessfish/underscore-analysis/blob/master/underscore-1.8.3.js/src/underscore-1.8.3.js#L1094-L1190 */
// 答案仅供参考
// 更详细的解答建议参考Underscore源码[https://github.com/lessfish/underscore-analysis/blob/master/underscore-1.8.3.js/src/underscore-1.8.3.js#L1094-L1190](https://github.com/lessfish/underscore-analysis/blob/master/underscore-1.8.3.js/src/underscore-1.8.3.js#L1094-L1190)

function isEqual(A, B) {
  const keysA = Object.keys(A)
  const keysB = Object.keys(B)

  // 健长不一致的话就更谈不上相等了
  if (keysA.length !== keysB.length) return false

  for (let i = 0;i < keysA.length;i++) {
    const key = keysA[i]

    // 类型不等的话直接就不相等了
    if (typeof A[key] !== typeof B[key]) return false

    // 当都不是对象的时候直接判断值是否相等
    if (typeof A[key] !== 'object' && typeof B[key] !== 'object' && A[key] !== B[key]) {
      return false
    }

    if (Array.isArray(A[key]) && Array.isArray(B[key])) {
      if (!arrayEqual(A[key], B[key])) return false
    }

    // 递归判断
    if (typeof A[key] === 'object' && typeof B[key] === 'object') {
      if (!isEqual(A[key], B[key])) return false
    }
  }

  return true
}

function arrayEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false

  for (let i = 0;i < arr1.length;i++) {
    if (arr1[i] !== arr2[i]) return false
  }

  return true
}
isEqual(obj1, obj2)