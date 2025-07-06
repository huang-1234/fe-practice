const data: MNode[] = [
  { id: 56, parentId: 62 },
  { id: 81, parentId: 80 },
  { id: 74, parentId: null },
  { id: 76, parentId: 80 },
  { id: 63, parentId: 62 },
  { id: 80, parentId: 86 },
  { id: 87, parentId: 86 },
  { id: 62, parentId: 74 },
  { id: 86, parentId: 74 },
];

// key: value
// sub:parent
const idMapping = data.reduce((acc, el, i) => {
  acc[el.id] = i;
  return acc;
}, {}) || {
  56: 0,
  62: 7,
  63: 4,
  74: 2,
  76: 3,
  80: 5,
  81: 1,
  86: 8,
  87: 6,
};


let root;

interface MNode {
  id: number;
  parentId: number | null;
  children?: MNode[];
}

data.forEach(el => {
  // 判断根节点
  if (el.parentId === null) {
    root = el;
    return;
  }
  // 用映射表找到父元素
  const parentEl: MNode = data[idMapping[el.parentId]] as MNode;
  // 把当前元素添加到父元素的`children`数组中
  parentEl.children = [...(parentEl.children || []), el];
});

console.log('tree menu', idMapping, root)

// 62
const root0 = {
  id: 62,
  parentId: 74,
  children: [
    { id: 56, parentId: 62 }
  ]
}
// 80
const root1 = {
  id: 81, parentId: 80,
  children: [
    { id: 80, parentId: 86 }
  ]
}
// null
const rootNode = {
  id: 74, parentId: null,
}
// 80
const root3 = {
  id: 76, parentId: 80,
  children: [

  ]
}