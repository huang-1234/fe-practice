/*
import { typescript } from 'rollup-plugin-typescript2';
 * @lc app=leetcode.cn id=752 lang=typescript
 *
 * [752] 打开转盘锁
 */

// @lc code=start
/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends: string[], target: string): number {

  function plusOne(s: string, j: number) {
    const sArr: string[] = s.split('');
    if (sArr[j] === '9') {
      sArr[j] = '0';
    } else {
      sArr[j] = (parseInt(sArr[j]) + 1).toString();
    }
    return sArr.join('');
  }
  function minusOne(s: string, j: number) {
    const sArr: string[] = s.split('');
    if (sArr[j] === '0') {
      sArr[j] = '1';
    } else {
      sArr[j] = (parseInt(sArr[j]) - 1).toString();
    }
    return sArr.join('');
  }


  const deads = new Set();
  for (const s in deadends) deads.add(s);
  const visited = new Set<string>();
  const queue = [];
  let step=0;
  queue.push("0000");
  visited.add("0000");

  while (!!queue.length) {
    let queueSize = queue.length;
    for (let i = 0;i < queueSize;i++){
      const cur = queue.pop();
      if (deads.has(cur)){
        continue;
      }
      if (cur === target) {
        return step;
      }
      for (let j = 0; j < 4; j++){
        const up = plusOne(cur, j);
        if (!visited.has(up)) {
          queue.push(up);
          visited.add(up)
        }
        const down = minusOne(cur, j);
        if (!visited.has(down)) {
          queue.push(down);
          visited.add(down)
        }
      }
    }
    step++;
  }
  return -1;

};

// @lc code=end

