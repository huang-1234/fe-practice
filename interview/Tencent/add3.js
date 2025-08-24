
// function getTowNumber() {
  
// }


function add3(param3) {
  console.log(' param3' ,param3);
  let result = param3;
  return function add2(param2) {
    console.log(' param2',param2);
    result += param2;
    return function add1(param1) {
      console.log(' param1',param1);
      result += param1;
      return result;
    }
  }
}
let ans = add3(1)(2)(3);
console.log(ans);
