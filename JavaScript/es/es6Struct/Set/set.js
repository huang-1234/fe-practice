
// Set实现leetCode无重复字符的最长子串源码
let s = 'abcaqwerjjjasdfgaa';
let setArr = new Set(); console.log(setArr);
let Max = 0;
let tag = 0;
for (let i = 0;i < s.length;++i) {
  
  while(setArr.has(s[i])){
    let beforeL = setArr.size;
    Max = Max > beforeL ? Max : beforeL ;
    setArr.delete(s[tag++])
  }
  setArr.add(s[i]);
}
console.log(Max);

// Set实现leetCode无重复字符的最长子串源码封装成函数

let str = '00' + Math.random();
console.log(typeof str);

/* 
//test
let set1 = new Set();
set1.add(44)
console.log( set1.add(22))
 */