package main
// import . "nc_tools"
/*
 * type ListNode struct{
 *   Val int
 *   Next *ListNode
 * }
 */

/**
 *
 * @param head ListNode类
 * @return bool布尔型
*/
func hasCycle( head *ListNode ) bool {
    // write code here
    bool tag = false;
    pOne, pTow := head, head.next.next;
    for ; pTow.next && pTow.next.next;  {
        pOne = pOne.next;
        pTow = pTow.next.next
        if pOne == pTow{
            tag = true
//             return true
        }
    }
    return tag
}

func main(){
	struct *
	hasCycle
}