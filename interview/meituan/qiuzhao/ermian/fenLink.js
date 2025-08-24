/* 给出一个长度为 nn 的单链表和一个值 xx ，单链表的每一个值为 list[i]list[i]，请返回一个链表的头结点，要求新链表中小于 xx 的节点全部在大于等于 xx 的节点左侧，并且两个部分之内的节点之间与原来的链表要保持相对顺序不变。

例如：
给出 1 \to 4 \to 3 \to 2 \to 5 \to 21→4→3→2→5→2 和 x = 3x=3
返回 1 \to 2 \to 2 \to 4 \to 3 \to 51→2→2→4→3→5

数据范围：
n \le 200n≤200

-100 \le list[i] \le 100−100≤list[i]≤100

复杂度要求：
时间  O(n)O(n)
空间  O(1)O(1)
示例1
输入
{1,4,3,2,5,2},3
输出
{1,2,2,4,3,5}
*/
/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
  *
  * @param head ListNode类
  * @param x int整型
  * @return ListNode类
  */
 function partition( head ,  x ) {
  // write code here
  const insertNode = (curNode, node)=>{
      const next = node.next;
      curNode.next = node;
      node.next = next;
  };
  const deleteNode = (curNode, node) => {

  };
  let firstNodeMorex = null;
  let xNode = null;
  let firstNodeCount=0;
  let p = head;
  while(p){
      while(p){
          if(p.val < x){
              firstNodeCount++;
              firstNodeMorex = p;
              p = p.next;
          }else{
              break;
          }
      }
      while(p){
          if(p.val === x){
              xNode = p;
              break;
          }else{
              p = p.next;
          }
      }
  }
  p = head;

  for(let curCount=0; p && p.next; p = p.next){
      // 在x左侧且大于x
      let firstMorexPreNode=null
      if(curCount < firstNodeCount && p.val > firstNodeMorex.val){
          const tNode = p;
          deleteNode(firstNodeMorex, tNode);
          insertNode(xNode, tNode);
          p = p.next;
      }else if( curCount > firstNodeCount && p.val < firstNodeMorex.val ){
          const tNode = p;
          deleteNode(firstNodeMorex, tNode);
          insertNode(firstNodeMorex, tNode);
          p = p.next;
      }
  }
  return head;
}
module.exports = {
  partition : partition
};