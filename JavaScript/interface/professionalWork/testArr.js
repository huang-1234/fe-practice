

let arr = [
  { id: 1, name: '部门1', pid: 0 },
  { id: 2, name: '部门2', pid: 1 },
  { id: 3, name: '部门3', pid: 1 },
  { id: 4, name: '部门4', pid: 3 },
  { id: 5, name: '部门5', pid: 4 },
]
function ArrayToTree(items) {
  const itemMap = {}
  for (const item of items) {
    itemMap[item.id] = { ...item, children: [] }
  }
  return itemMap
}

console.log(ArrayToTree(arr));