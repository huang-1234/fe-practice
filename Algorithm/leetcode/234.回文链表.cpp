/*
 * @lc app=leetcode.cn id=234 lang=javascript
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
public:
  bool isPalindrome(ListNode* head) {  // O(n)、O(1)
    ListNode *slow = head, *fast = head, *prev = nullptr;
    //  其一，find mid node 使用快慢指针找到链表中点
    while (fast) {  // find mid node
      slow = slow->next;
      fast = fast->next ? fast->next->next : fast->next;
    }
    // 其二，reverse 逆序后半部分
    while (slow) {  // reverse
      ListNode* temp = slow->next;
      slow->next     = prev;
      prev           = slow;
      slow           = temp;
    }
    // 其三，check 从头、中点，开始比较是否相同。
    while (head && prev) {  // check
      if (head->val != prev->val) {
        return false;
      }
      head = head->next;
      prev = prev->next;
    }
    return true;
  }
};
// @lc code=end
