/*
// 立即执行的匿名函数前需要加分号
const a = 45// 45 is not a function
(function(){
  console.log('hello')
})()
 */


// 中方括号开头的前一条语句需要加分号
// Cannot read property 'forEach' of undefined
const b = 4
[1, 2, 3].forEach(() => {

})