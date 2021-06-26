/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var sortList = function(head) {
  if(!head || !head.next) return head;
  let onePtr = head,towPtr = head.next;
  for(;towPtr && towPtr.next;){
    onePtr = onePtr.next;
    towPtr = towPtr.next.next;
  }
  let mid = onePtr.next;
  onePtr.next = null;
  
  let left = sortList(head),right=sortList(mid);
  let ans = new ListNode(0);  let temp = ans;

  for(;left && right ; ){
    if(left.val<right.val){
      temp.next = left;left=left.next;
    }else{
      temp.next = right;right = right.next;
    }
    temp=temp.next;
  }
  // while(left) temp.next = left;
  // while(right) temp.next = right;
  if(left){
    temp.next = left;
  }else{
    temp.next = right;
  }
  console.log(ans,ans.next)
  return ans.next
};