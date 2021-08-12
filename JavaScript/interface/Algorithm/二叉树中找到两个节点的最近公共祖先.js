function lowestCommonAncestor( root ,  o1 ,  o2 ) {
  if(root.val ==o1 || root.val ==o2 || root==null) return null;
  let left = lowestCommonAncestor(root.left,o1,o2);
  let right = lowestCommonAncestor(root.right,o1,o2);
  if(left==null && right==null) return null;//o1,o2都不在树里面,特例
  if(left==null) return right;
  if(right==null) return left;
  return root;
}