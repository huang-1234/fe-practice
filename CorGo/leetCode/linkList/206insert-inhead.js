/* 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。 */

// 使用头插法
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function (head) {
  if (!head || !head.next) return head;

  const resList = new ListNode();
  resList.next = null;
  let p = head;
  while (p) {
    const s = new ListNode();
    s.val = p.val;
    s.next = resList.next;
    resList.next = s;
    p = p.next;
  }
  return resList.next;
};

// 头插法的C++代码,look the detail in 206.cpp
// void CreateListF(LinkNode *& L, ElemType a[], int n){
  
// }