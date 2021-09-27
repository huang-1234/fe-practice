/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
function findMaxFloorRow(matrix, arrLen, target, level) {

  let top = 0, buttom = arrLen;
  while(top < buttom){
    const mid = top + (buttom - top)/2 | 0;
    if(matrix[mid][level] < target){
      top = mid+1;
    }else if(matrix[mid][level] === target){
      return -1;
    } else {
      buttom = mid;
    }
  }
  return top > 0 ? top : 1;
}
 function findMaxFloorColumn(matrix, arrLen,target, level){
  let top = 0, buttom = arrLen;
  while(top < buttom){
    const mid = top + (buttom - top)/2 | 0;
    if(matrix[level][mid] < target){
      top = mid+1;
    }else{
      buttom = mid;
    }
  }
  return top > 0 ? top : 1;
}
var searchMatrix = function(matrix, target) {
  const levelIdx = findMaxFloorRow(matrix, matrix.length, target, 0) - 1;
  if (-2 === levelIdx) {
    return true;
  }
  console.log(levelIdx)
  const targetIdx = findMaxFloorColumn(matrix, matrix[0].length, target, levelIdx);
  console.log(targetIdx)
  if( matrix[levelIdx][targetIdx] === target || matrix[levelIdx][targetIdx-1] === target){
    return true;
  }else{
    return false;
  }
};

const matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60]
];
const target = 23;
console.log(searchMatrix(matrix, target))

// other's code
var OtherSearchMatrix = function(matrix, target) {
  let arr=[]
  for (let i = 0;i < matrix.length;i++){
    arr=arr.concat(matrix[i])
  }
  if (arr.indexOf(target) != -1) {
    return true
  } else {
    return false
  }
};
// @lc code=end

