/*
 * @lc app=leetcode.cn id=234 lang=java
 *
 * [234] 回文链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
    public boolean isPalindrome(ListNode head) {
        int  len = 0;
        ListNode temp = head;
        Stack<Integer> stack = new Stack<>();
        while(temp!=null){
            len++;
            temp = temp.next;
        }
        temp = head;
        for(int i=0;i<len/2;i++){
            stack.push(temp.val);
            temp = temp.next;
        }
        if(len%2!=0) temp = temp.next;
        while(temp!=null){
            if(temp.val!=stack.pop()) return false;
            temp = temp.next;
        }
        return true;
    }
}
// @lc code=end
