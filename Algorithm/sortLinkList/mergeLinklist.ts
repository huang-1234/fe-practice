
// genarate ListNode
interface Node{
  val: number,
  next:Node
}
// function ListNode(val: number, next: Node) {
//   this.val = (undefined === val ? 0 : val);
//   this.next = (undefined === next ? null:next)
// }

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}
function sortList(head: ListNode | null) {
  
};