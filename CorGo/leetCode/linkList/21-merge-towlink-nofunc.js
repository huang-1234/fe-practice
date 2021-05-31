/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *   this.val = (val===undefined ? 0 : val)
 *   this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;

  const merge = (l1, l2) => {
    let L1 = l1, L2 = l2;
    let res = new ListNode();
    // let rear1 = L1, rear2 = L2;
    let rear = res;
    while (L1 && L2) {
      if (L1.val <= L2.val) {
        let temp = L1;
        rear.next = temp;
        rear = temp;
        L1 = L1.next;
      } else {
        let temp = L2;
        rear.next = temp;
        rear = temp;
        L2 = L2.next;
      }
    }
    
    if (L1) rear.next = L1;
    else if (L2) rear.next = L2;
    else rear.next = null;

    return res.next;
  }
  return merge(l1, l2);
};