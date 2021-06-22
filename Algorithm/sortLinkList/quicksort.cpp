#include <iostream>
#include <vector>
using namespace std;
struct ListNode
{
  int val;
  ListNode *next;
  ListNode(int x) : val(x), next(NULL) {}
};

void quicksort(vector<int> &arr, int low, int high)
{
  if (low < high)
  {
    int middle = partition(arr, low, high);
    quicksort(arr, low, middle - 1);
    quicksort(arr, middle + 1, high);
  }
}

class Solution
{
public:
  ListNode *quickSortList(ListNode *head)
  {
    // IMPORTANT: Please reset any member data you declared, as
    // the same Solution instance will be reused for each test case.
    //链表快速排序
    if (head == NULL || head->next == NULL)
      return head;
    qsortList(head, NULL);
    return head;
  }
  void qsortList(ListNode *head, ListNode *tail)
  {
    //链表范围是[low, high)
    if (head != tail && head->next != tail)
    {
      ListNode *mid = partitionList(head, tail);
      qsortList(head, mid);
      qsortList(mid->next, tail);
    }
  }
  ListNode *partitionList(ListNode *low, ListNode *high)
  {
    //链表范围是[low, high)
    int key = low->val;
    ListNode *loc = low;
    for (ListNode *i = low->next; i != high; i = i->next)
      if (i->val < key)
      {
        loc = loc->next;
        swap(i->val, loc->val);
      }
    swap(loc->val, low->val);
    return loc;
  }
};