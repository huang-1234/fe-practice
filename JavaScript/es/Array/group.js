const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 5 },
  { name: "bananas", type: "fruit", quantity: 0 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 5 },
  { name: "fish", type: "meat", quantity: 22 },
];

Array.prototype.group = function (callback, thisArg) {
  const result = Object.create(null);
  for (const [index, elem] of this.entries()) {
    const groupKey = callback.call(thisArg, elem, index, this);
    if (! (groupKey in result)) {
      result[groupKey] = [];
    }
    result[groupKey].push(elem);
  }
  return result;
};
Array.prototype.groupToMap = function (callback, thisArg) {
  const result = new Map();
  for (const [index, elem] of this.entries()) {
    const groupKey = callback.call(thisArg, elem, index, this);
    let group = result.get(groupKey);
    if (group === undefined) {
      group = [];
      result.set(groupKey, group);
    }
    group.push(elem);
  }
  return result;
};


const result = inventory.group(({ type }) => type);
console.log(result)
/* 结果是：
{
  vegetables: [
    { name: 'asparagus', type: 'vegetables', quantity: 5 },
  ],
  fruit: [
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "cherries", type: "fruit", quantity: 5 }
  ],
  meat: [
    { name: "goat", type: "meat", quantity: 23 },
    { name: "fish", type: "meat", quantity: 22 }
  ]
}
*/

// TypeError: inventory.group is not a function