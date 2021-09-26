
function findParentNode(root, node1, node2){
  if(!root)return 'no';
  const map = new Map();
  let p = root;
  let groundParent;
  function setParentToChild(p){
    while(p.children){
      for(child of p.children){
        map.set(p, child);
        if(child.children){
          setParentToChild(child)
        }
      }
    }
  }
  setParentToChild(p);
  let needVarChild = node1;
  while(needVarChild !== root){
    if(map.has(node2)){
      groundParent = needVarChild;
    }else{
      needVarChild = map.get(needVarChild)
    }
  }
  return groundParent;

}

function isParse(root, node1, node2){
  const groundParent = findParentNode(root, node1, node2);
  for(child of groundParent.children){
    let findNode1, findNode2;
    if( child.id === node1.id ){
      findNode1 = child;
    }
    if( child.id === node1.id ){
      findNode2 = child;
    }
    if(findNode1 && findNode2){
      if(findNode1.zIndex > findNode2.zIndex){
        return 'yes'
      }else{
        return 'no'
      }
    }else if(findNode1 && !findNode2){
      for(child1 of node1.children){
        return isParse(child,child1,node2)
      }
    }else if(!findNode1 && findNode2){
      for(child2 of node2.children){
        return isParse(child,node1,child2)
      }
    }else if(!findNode1 && !findNode2){
      return isParse(child,node1,node2)
    }
  }
}