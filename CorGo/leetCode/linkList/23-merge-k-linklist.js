// 合并 K 个有序链表
/**
 * Definition for singly - linked list.
 * function ListNode(val, next) {
 * this.val = (val === undefined ? 0 : val)
      * this.next = (next === undefined ? null : next)
        * }
  * /
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  const mergeTwoList = function (l1, l2) {
    if (l1 == null) return l2;
    if (l2 == null) return l1;
    let p = dummyHead = new ListNode();
    let p1 = l1, p2 = l2;
    while (p1 && p2) {
      if (p1.val > p2.val) {
        p.next = p2;
        p = p.next;
        p2 = p2.next;
      } else {
        p.next = p1;
        p = p.next;
        p1 = p1.next;
      }
    }
    // 循环完成后务必检查剩下的部分
    if (p1) p.next = p1;
    else p.next = p2;
    return dummyHead.next;
  };
  const _mergeLists = (lists, start, end) => {
    if (end - start < 0) return null;
    if (end - start == 0) return lists[end];
    let mid = Math.floor(start + (end - start) / 2);
    return mergeTwoList(_mergeLists(lists, start, mid), _mergeLists(lists, mid + 1, end));
  }
  return _mergeLists(lists, 0, lists.length - 1);
};