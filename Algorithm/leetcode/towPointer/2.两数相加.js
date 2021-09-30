/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let p1 = l1, p2 = l2;
  const cSum = p1.val + p2.val;
  const cbv = cSum % 10
  const nbv = Math.floor(cSum / 10)
  const head = new ListNode(cbv);
  let tail = head
  p1 = p1.next; p2 = p2.next;

  let nextBitValue = nbv
  for (;p1 && p2;) {
    const curSum = p1.val + p2.val + nextBitValue
    const curBitValue = curSum % 10
    nextBitValue = Math.floor(curSum / 10)
    tail.next = new ListNode(curBitValue)
    tail = tail.next
  }

  while (p1) {
    const curSum = p1.val + nextBitValue
    p1 = p1.next
    const curBitValue = curSum % 10
    tail.next = new ListNode(curBitValue)
    tail = tail.next

    nextBitValue = Math.floor(curSum / 10)
  }
  while (p2) {
    const curSum = p2.val + nextBitValue
    p2 = p2.next
    const curBitValue = curSum % 10
    nextBitValue = Math.floor(curSum / 10)
    tail.next = new ListNode(curBitValue)
    tail = tail.next
  }
  return head
};
// @lc code=end

/*

  let p1 = l1, p2 = l2;
  const cSum = p1.val + p2.val;
  const cbv = cSum % 10
  const nbv = Math.floor(cSum / 10)
  const head = new ListNode(cbv);
  let tail = head
  p1 = p1.next; p2 = p2.next;

  let nextBitValue = nbv
  for (;p1 && p2;) {
    const curSum = p1.val + p2.val + nextBitValue
    const curBitValue = curSum % 10
    nextBitValue = Math.floor(curSum / 10)
    tail.next = new ListNode(curBitValue)
    tail = tail.next
  }

  while (p1) {
    const curSum = p1.val + nextBitValue
    p1 = p1.next
    const curBitValue = curSum % 10
    nextBitValue = Math.floor(curSum / 10)
    tail.next = new ListNode(curBitValue)

    tail = tail.next
  }
  while (p2) {
    const curSum = p2.val + nextBitValue
    p2 = p2.next
    const curBitValue = curSum % 10
    nextBitValue = Math.floor(curSum / 10)
    tail.next = new ListNode(curBitValue)
    tail = tail.next
  }
  return head
*/