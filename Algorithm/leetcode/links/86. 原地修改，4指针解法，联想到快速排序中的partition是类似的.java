/*
 * @lc app=leetcode.cn id=86 lang=java
 *
 * [1] 两数之和
 */
import ListNode;
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

class Solution {
    public ListNode partition(ListNode head, int x) {
        if (head == null) return head;
        ListNode preCur = null;
        ListNode cur = head;
        ListNode preNext = null;
        ListNode next = head;

        while (next != null) {
            if (next.val >= x) {
                preNext = next;
                next = next.next;
            } else {
                if (cur != next) {
                    if (preCur == null) {
                        head = next;
                    } else {
                        preCur.next = next;
                    }
                    preNext.next = next.next;
                    next.next = cur;
                    preCur = next;
                    next = preNext.next;
                } else {
                    preCur = cur;
                    cur = cur.next;
                    preNext = next;
                    next = next.next;
                }

            }
        }
        return head;
    }
}
// @lc code=end