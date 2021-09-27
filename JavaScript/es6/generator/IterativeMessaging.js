
// 迭代消息传递
function* acceptMessage(x) {
  let y = x * (yield 'hello i need a number 7, then i will yild 6*7=42 for you');
  yield y;
  y = (yield 'hello i need a number 3, and then i will change the y=y*3, you should post 3 for me ok?')* y;
  yield y*2;
  return y * 10;
}
const sendMsg = acceptMessage(6);
const meesage1 = `there are some message that i sended, did anybody receive it, tell me please`
console.log(sendMsg.next())
const number2 = 7;
const message2 = `oh!!! i did receive the number 7, ans i get the result 42, think you`
console.log(`there is ${number2} for you take it\n`, sendMsg.next(number2),`\n${message2}`)
console.log(sendMsg.next())
const waitingSendNumber3 = 3;
console.log(`there is ${waitingSendNumber3} for you take it\n`, sendMsg.next(waitingSendNumber3))
console.log(sendMsg.next())