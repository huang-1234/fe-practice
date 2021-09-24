/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function partition(head, x) {
  let small = new ListNode(0);
  const smallHead = small;
  let large = new ListNode(0);
  const largeHead = large;
  while (head) {
    if(head.val < x){
      small.next = head;
      small = small.next;
    } else {
      large.next = head;
      large = large.next;
    }
    head = head.next;
  }
  large.next = null;
  small.next = largeHead.next;
  return smallHead.next;
}
// @lc code=end

/* 直观来说我们只需维护两个链表 \textit{small}small 和 \textit{large}large 即可，\textit{small}small 链表按顺序存储所有小于 xx 的节点，\textit{large}large 链表按顺序存储所有大于等于 xx 的节点。遍历完原链表后，我们只要将 \textit{small}small 链表尾节点指向 \textit{large}large 链表的头节点即能完成对链表的分隔。

为了实现上述思路，我们设 \textit{smallHead}smallHead 和 \textit{largeHead}largeHead 分别为两个链表的哑节点，即它们的 \textit{next}next 指针指向链表的头节点，这样做的目的是为了更方便地处理头节点为空的边界条件。同时设 \textit{small}small 和 \textit{large}large 节点指向当前链表的末尾节点。开始时 \textit{smallHead}=\textit{small},\textit{largeHead}=\textit{large}smallHead=small,largeHead=large。随后，从前往后遍历链表，判断当前链表的节点值是否小于 xx，如果小于就将 \textit{small}small 的 \textit{next}next 指针指向该节点，否则将 \textit{large}large 的 \textit{next}next 指针指向该节点。

遍历结束后，我们将 \textit{large}large 的 \textit{next}next 指针置空，这是因为当前节点复用的是原链表的节点，而其 \textit{next}next 指针可能指向一个小于 xx 的节点，我们需要切断这个引用。同时将 \textit{small}small 的 \textit{next}next 指针指向 \textit{largeHead}largeHead 的 \textit{next}next 指针指向的节点，即真正意义上的 \textit{large}large 链表的头节点。最后返回 \textit{smallHead}smallHead 的 \textit{next}next 指针即为我们要求的答案
 */