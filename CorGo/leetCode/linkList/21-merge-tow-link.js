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
    while (L1 || L2) {
      if ((L1 && L2 && L1.val < L2.val)) {
        let s = new ListNode();
        s.val = L1.val;
        rear.next = s;
        rear = s;
        L1 = L1.next;
      }
      else if ((L1 && L2 && L2.val < L1.val)) {
        let s = new ListNode();
        console.log(L2.val);
        s.val = L2.val;
        rear.next = s;
        rear = s;
        L2 = L2.next;
      }
    }
    rear.next = null;
    return res.next;
  }
  return merge(l1, l2);
};

// 此方法宣告失败

// 换一种处理便捷的情况
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
        let s = new ListNode();
        s.val = L1.val;
        rear.next = s;
        rear = s;
        L1 = L1.next;
      } else {
        let s = new ListNode();
        s.val = L2.val;
        rear.next = s;
        rear = s;
        L2 = L2.next;
      }
    }
    // 处理剩下的
    if (L1) rear.next = L1;
    else if (L2) rear.next = L2;
    else rear.next = null;

    return res.next;
  }
  return merge(l1, l2);
};