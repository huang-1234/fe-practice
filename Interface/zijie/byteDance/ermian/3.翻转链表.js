let node = {
  val: 3,
  next: {
      val: 4,
      next: {
          val: 5,
          next: null,
      },
  },
};

function reserveNode(root){
  if(root==null||root.next==null) return root;
  let pre =null,cur = root;
  while(cur!=null){
      let last = cur.next;
      cur.next = pre;
      pre = cur;
      cur = last
  }
  return pre;
}