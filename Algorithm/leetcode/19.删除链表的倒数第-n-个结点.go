/*
 * @lc app=leetcode.cn id=19 lang=golang
 *
 * [19] 删除链表的倒数第 N 个结点
 */
// @lc code=start
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func removeNthFromEnd(head *ListNode, n int) *ListNode {
	slow := fast = head
	for ; n--; {
		fast = fast.Next
	}
	if fast == nil {
		return head.Next
	}
	for ; fast.Next != nil && slow.Next != nil; {
		slow = slow.Next
		fast = fast.Next
	}
	slow.Next = slow.Next.Next
	return head
}
func getLength(head *ListNode) (length int) {
	for ; head != nil; head = head.Next {
			length++
	}
	return
}

func removeNthFromEnd(head *ListNode, n int) *ListNode {
	length := getLength(head)
	dummy := &ListNode{0, head}
	cur := dummy
	for i := 0; i < length-n; i++ {
			cur = cur.Next
	}
	cur.Next = cur.Next.Next
	return dummy.Next
}
// @lc code=end

