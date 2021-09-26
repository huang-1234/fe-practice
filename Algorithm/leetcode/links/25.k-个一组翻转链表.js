/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  let count = 0;
  let p = head;
  let res = new ListNode(null);
  let resP = res;
  const st = [];
  let headTemp = head;
  while (p) {
    let kTemp = k;
    let headP = headTemp;
    while (kTemp-- && p) {
      st.push(p);
      p = p.next;
    }
    if (kTemp) {
      
    }
    while (st.length) {
      resP.next = st.pop();
      resP = resP.next;
    }
    console.log(resP)
  }
  if (p2.next) {
    resP.next = p2;
  }
  return res;
};
// @lc code=end

