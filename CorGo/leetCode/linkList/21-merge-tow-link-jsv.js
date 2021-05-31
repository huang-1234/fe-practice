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
var mergeTwoLists = function (l1, l2) {
  // 思路，新建一个链表，比较两个链表中小接入新链表，修改链表的指针
  // 新建链表
  let res = new ListNode(0)
  // 定义变量为新链表中添加节点
  let p = res
  while (l1 && l2) {
    if (l1.val < l2.val) {
      p.next = l1
      l1 = l1.next // 把l1节点接入到新链表中
    } else {
      p.next = l2
      l2 = l2.next
    }
    p = p.next
  }
  // 当遍历成后 可能唱的链表中还有剩余节点,把它们全部添加到新链表
  p.next = l1 ? l1 : l2
  return res.next
};