/* 
let data = [1, 8, 6, 2, 5, 4, 8, 3, 7];
data2 = data.slice();
let len = data.length;
console.log(data2);
let Arr = data.sort((x, y) => y - x);
console.log(Arr);
for (let i = 0;i < len;i++){
  let pos = 0;
  if (i < len - 1 && data2[i] === data2[i + 1]) {
    let index = data2.indexOf(Arr[i], pos); console.log('index:', index);
    pos=data2.indexOf(Arr[i])
  }
  
  
}

 */


// 11. 盛最多水的容器
/**
 * @param {number[]} height
 * @return {number}
 */
/* 
var maxArea = function (height) {
  // if(Math.max(...[height])<=0){
  //   return 0;
  // }
  let len = height.length; let Max = 0;
  let Arr = height.sort((x, y) => y - x);
  console.log(Arr)
  for (let i = 0;i < len;i++) {
    let index = height.indexOf(Arr[i])
    console.log(index)
    if (Arr[i] === height[i]) continue;
    let Area = Arr[i] * height[index];
    Max = Max > Area ? Max : Area;
  }
  return Max;
};
let data = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(data));

 */


/* // 暴力先破解再说,结果超时了
let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
let maxArea = function (height) {
  if(height.filter((ele)=>ele>0).length <2) return 0
  let Area = 0;
  const len = height.length;
  for (let i = 0;i < len;i++){
    let current = height[i];
    for (let j = i + 1;j < len;j++){
      let minHeight = height[i] > height[j] ? height[j] : height[i];
      let cArea = (j - i) * minHeight;
      Area = Area > cArea ? Area : cArea;
    }
  }
  return Area;
}
console.log(maxArea(height));
 */

//=============================================================
// 双指针法
/**
 * @param {number[]} height
 * @return {number}
 */
let maxArea = function (height) {
  if (height.filter((ele) => ele > 0).length < 2) return 0;
  let Ans = 0;
  const len = height.length;
  let L = 0, R = len - 1;
  while (L < R) {
    // 如果height[R]比较小，这R移动
    if (height[L] > height[R]) {
      let minHeight = height[R];
      Area = (R - L) * minHeight;
      Ans = Ans > Area ? Ans : Area;
      R--;
    } else { // 如果height[L]<=height,则L移动
      let minHeight = height[L];
      Area = (R - L) * minHeight;
      Ans = Ans > Area ? Ans : Area;
      L++;
    }
  }
  return Ans;
}