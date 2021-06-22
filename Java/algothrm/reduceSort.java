public class LinkedNode {
    public int val;
    public LinkedNode next;
    public LinkedNode() {
        this(-1);
    }
    public LinkedNode(int val) {
        this.val = val;
    }
}

public class SelectSort implements SortStrategy {
    @Override
    public LinkedNode sort(LinkedNode head) {
        LinkedNode vHead = new LinkedNode(-1);
        vHead.next = head;
        // 增加虚拟头节点,方便操作,否则就需要用一堆if来判断了,代码会比较啰嗦 
        LinkedNode newHead = new LinkedNode(-1); 
        LinkedNode tail = newHead;  // tail指向新链表的末尾 
        // 每次从链表中摘出来最小的节点,拼接到新链表末尾
        while (vHead.next != null) {
            LinkedNode pre = vHead;
            LinkedNode cur = head;
            LinkedNode min = head;
            LinkedNode minPre = vHead;
            // 先遍历找最小的节点,记录下最小节点和它前面一个节点
            while (cur != null) {
                if (cur.val < min.val) {
                    minPre = pre;
                    min = cur;
                }
                pre = cur;
                cur = cur.next;
            }
            // 把min节点从原链表中摘除,并拼接到新链表中  
            tail.next = min;
            tail = tail.next;
            minPre.next = min.next;
        }
        return newHead.next; 
    }
}