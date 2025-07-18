function mergeProtocolTrees(treeOrigin, treeIncrement) {
  const result = { ...treeOrigin };
  const diffMap = new Map();

  // 1. 遍历树B记录差异节点
  const traverseAndDiff = (node, path = []) => {
    const currentPath = [...path, node.id];
    diffMap.set(node.id, currentPath);

    if (treeOrigin[node.id]) {
      // 节点存在但属性不同时标记差异
      if (JSON.stringify(node.props) !== JSON.stringify(treeOrigin[node.id].props)) {
        node._status = 'modified';
      }
    } else {
      node._status = 'added';
    }

    node.children?.forEach(child => traverseAndDiff(child, currentPath));
  };
  traverseAndDiff(treeIncrement.root);

  // 2. 增量合并到树A
  const applyDiff = (targetNode, diffNode) => {
    if (diffNode._status === 'added') {
      targetNode.children = targetNode.children || [];
      targetNode.children.push({ ...diffNode });
    } else if (diffNode._status === 'modified') {
      Object.assign(targetNode.props, diffNode.props);
    }

    diffNode.children?.forEach(child => {
      const existingChild = targetNode.children?.find(c => c.id === child.id);
      if (existingChild) applyDiff(existingChild, child);
      else targetNode.children?.push(child);
    });
  };

  applyDiff(result.root, treeIncrement.root);
  return { mergedTree: result, diffMap };
}

// 测试目标：验证基础属性合并与路径生成
const treeA = {
  root: {
    id: "root",
    props: { title: "商品卡片" },
    children: [
      { id: "price", props: { value: 99, color: "black" } }
    ]
  }
};

const treeB = {
  root: {
    id: "root",
    children: [
      { id: "price", props: { color: "red" } }, // 修改颜色
      { id: "stock", props: { count: 100 } }    // 新增节点
    ]
  }
};

const result = mergeProtocolTrees(treeA, treeB);
console.log(result.mergedTree);
console.log(result.diffMap);
// 测试目标：验证差异路径生成
const diffPath = result.diffMap.get("price");
console.log(diffPath); // 输出: ["root", "price"]
// 测试目标：验证差异路径生成
const diffPath2 = result.diffMap.get("stock");
console.log(diffPath2); // 输出: ["root", "stock"]

// 预期输出
const expected = {
  mergedTree: {
    root: {
      id: "root",
      props: { title: "商品卡片" },
      children: [
        { id: "price", props: { value: 99, color: "red" } }, // 颜色更新
        { id: "stock", props: { count: 100 } }               // 新增节点
      ]
    }
  },
  diffMap: new Map([
    ["price", ["root", "price"]],    // 修改节点路径
    ["stock", ["root", "stock"]]     // 新增节点路径
  ])
};