class Solution {
public:
    ListNode *selectSortList(ListNode *head) {
        // IMPORTANT: Please reset any member data you declared, as
        // the same Solution instance will be reused for each test case.
        //选择排序
        if(head == NULL || head->next == NULL)return head;
        ListNode *pstart = new ListNode(0);
        pstart->next = head; //为了操作方便，添加一个头结点
        ListNode*sortedTail = pstart;//指向已排好序的部分的尾部
        
        while(sortedTail->next != NULL)
        {
            ListNode*minNode = sortedTail->next, *p = sortedTail->next->next;
            //寻找未排序部分的最小节点
            while(p != NULL)
            {
                if(p->val < minNode->val)
                    minNode = p;
                p = p->next;
            }
            swap(minNode->val, sortedTail->next->val);
            sortedTail = sortedTail->next;
        }
        
        head = pstart->next;
        delete pstart;
        return head;
    }
};