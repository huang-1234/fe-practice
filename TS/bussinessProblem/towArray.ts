/**
  * 需求：
  *  1.在数组remoteData中找到数组selctData里存在的id并且selected值为true(这个id在数组selctData中对应的项的selected为true)，
  * 将它的selected值设置为true。
  *  2. 可以多种方法，但必须有一种方法是使用Array.map 和 Array.findIndex 来实现的。
  * */

interface Item {
  id: number;
  usageRate: number;
  category: string;
  name: string;
  selected: boolean
}
type ItemData = Item[]
const selctData: ItemData = [
  { id: 2, usageRate: 75, category: "cpu", name: "clw1", selected: true },
  { id: 4, usageRate: 100, category: "memory", name: "clw3", selected: true },
  { id: 9, usageRate: 84, category: "memory", name: "clw2", selected: false },
  { id: 15, usageRate: 57, category: "disk", name: "clw1", selected: false },
  { id: 19, usageRate: 78, category: "cpu", name: "clw3", selected: true },
]
const remoteData: ItemData = [
  { id: 1, usageRate: 57, category: "memory", name: "clw1", selected: false },
  { id: 2, usageRate: 90, category: "cpu", name: "clw1", selected: false },
  { id: 3, usageRate: 67, category: "disk", name: "clw2", selected: false },
  { id: 4, usageRate: 100, category: "memory", name: "clw3", selected: false },
  { id: 6, usageRate: 58, category: "disk", name: "clw3", selected: false },
  { id: 9, usageRate: 85, category: "memory", name: "clw2", selected: false },
  { id: 12, usageRate: 2, category: "cpu", name: "clw4", selected: false },
  { id: 15, usageRate: 79, category: "disk", name: "clw1", selected: false },
  { id: 19, usageRate: 30, category: "cpu", name: "clw3", selected: false },
  { id: 24, usageRate: 66, category: "cpu", name: "clw2", selected: false }
]

function setRemoteEqualSelectInSelected(remoteData: ItemData, selctData: ItemData): void {
  const selectTrueIds = selctData.filter((select) => {
    return select.selected
  })
  remoteData.forEach((remote,index) => {
    if (selectTrueIds.findIndex((selectId) => remote.id === selectId.id)) {
      remoteData[index].selected = true;
    }
  })
}

setRemoteEqualSelectInSelected(remoteData, selctData)

console.log(remoteData, selctData)