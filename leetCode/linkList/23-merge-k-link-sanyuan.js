// 自下而上实现
var mergeKLists = function (lists) {

  var mergeTwoLists = function (l1, l2) {
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


  // 边界情况
  if (!lists || !lists.length) return null;
  // 虚拟头指针集合
  let dummyHeads = [];
  // 初始化虚拟头指针
  for (let i = 0;i < lists.length;i++) {
    let node = new ListNode();
    node.next = lists[i];
    dummyHeads[i] = node;
  }
  // 自底向上进行merge
  for (let size = 1;size < lists.length;size += size) {
    for (let i = 0;i + size < lists.length;i += 2 * size) {
      dummyHeads[i].next = mergeTwoLists(dummyHeads[i].next, dummyHeads[i + size].next);
    }
  }
  return dummyHeads[0].next;
};