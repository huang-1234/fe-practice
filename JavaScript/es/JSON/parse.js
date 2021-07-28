// JSON.stringify({ x: 1, y: 2 })
// "{"x":1,"y":2}"
/*
const obj2 = {
  x: [10,
    undefined,
    function () {
      console.log('hello world');
    },
    Symbol('')
  ],
  sayHi: function () {
    console.log('Hi hsq');
  },
}
const JsonStr = JSON.stringify(obj2)
console.log(JsonStr);
// "{"x":[10,null,null,null]}"
 */


// 第二个参数的例
function filterOutString(key, value) {
  if (typeof value === 'string') {
    return undefined
  }
  return value
}
var foo = {
  foundation: 'Mozilla',
  model: 'box',
  week: 4,
  transport: 'car',
  month: 7
}
var jsonString = JSON.stringify(foo, filterOutString)
console.log(jsonString)
// "{"week":4,"month":7}"
/*
// 第三个参数的例子
JSON.stringify({ a: 2 }, null, ' ')
// "{
//  "a": 2
// }"
JSON.stringify({ a: 2 }, null, '')
// "{"a":2}"a
 */
