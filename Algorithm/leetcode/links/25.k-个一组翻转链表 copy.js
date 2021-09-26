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
  while (p.next) {
    let goon = false;
    let kTemp = k;
    while (kTemp-- && p.next) {
      if (p.next) {
        p = p.next;
      } else {
        goon = true;
      }
    }
    if (goon) { break; }
    count++;
  }
  if (count <= k) {
    return head;
  }
  let res = new ListNode();
  let p3 = res;
  const st = [];
  let p2 = head;
  while (count-- && p2.next) {
    let kTemp = k;
    while (kTemp--) {
      st.push(p2);
      p2 = p2.next;
    }
    while (st.length) {
      p3.next = st.pop();
      p3 = p3.next;
    }
    console.log(p3)
  }
  if (p2.next) {
    p3.next = p2;
  }
  return res;
};
// @lc code=end

