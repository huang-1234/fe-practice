/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
 var dailyTemperatures = function(temperatures) {
  const tLen = temperatures.length;
  const res = new Array(tLen)
  const st = [];
  for(let i=tLen-1; i>=0; i--){
    while(st.length && temperatures[st[st.length-1]]<=temperatures[i]){
      st.pop();
    }
    res[i] = st.length>0 ? st[st.length-1]-i : 0
    st.push(i);

  }
  return res
};
// @lc code=end

