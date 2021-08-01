
function jsonStringify(data) {
  let type = typeof data

  if (type !== 'object') {
    let result = data
    // data 可能是基础数据类型
    // NaN 和 Infinity 序列化返回 "null"
    // function 序列化返回 undefined，因此和 undefined、symbol 一起处理
    if (Number.isNaN(data) || data === Infinity) {
      result = 'null'
    } else if (type === 'function' || type === 'undefined' || type === 'symbol') {
      return undefined
    } else if (type === 'string') {
      return '"' + data + '"'
    }
    return String(result)
  }
  else if (type === 'object') { // 开始判断引用类型
    if (data === null) {
      return 'null'
    } else if (data.toJSON && typeof data.toJSON === 'function') {
      return jsonStringify(data.toJSON())
    } else if (data instanceof Array) { // 数组
      let result = []
      
      data.forEach((item, index) => {
        if (typeof item === 'undefined' || typeof item === 'function' || typeof item === 'symbol') {
          item[index] = null
        } else {
          result[index] = jsonStringify(item)
        }
      })
      result = '[' + result + ']'
      return result.replace(/'/g, '"') // 注意将单引号转化为双引号
    }
    else { // 普通对象
      let result = []
      Object.keys(data).forEach((item, index) => {
        if (typeof item !== 'symbol') {
          if (
            typeof data[item] !== 'function' &&
            typeof data[item] !== 'symbol' &&
            typeof data[item] !== 'undefined'
          ) {
            result.push('"' + item + '"' + ':' + jsonStringify(data[item]))
          }
        }
      })
      return ('{' + result + '}').replace(/'/g, '"')
    }
  }
}