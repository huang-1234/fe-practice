// let a:any = 1;
// a = 'sdg'
// let b: string = a as string;
// console.log(a);
//
/* function fn1(num:number) {
  if (num > 0) {
    return true;
  } else {
    return 123;
  }
} */
//
/* let add: (a: number, b: number) => number = (a: number, b: number) => {
  return a+b;
}
add = function (a: number, b: number) {
  return a - b;
}
let result = add(50, 33);
console.log(result);


// 4数组
let arr1: number[] = [1, 2, 5];
let arr2: Array<string> = ['name', 'phone', 'address', 'location'] // 字符串型数组
 */

// 5
let a2: any = 'zsgxf';
let b2: number = a2;
console.log(b2)

function a() {
  console.log(this)
}
