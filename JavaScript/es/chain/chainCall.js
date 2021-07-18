// 实现一个find函数，并且find函数能够满足下列条件

// title数据类型为string|null
// userId为主键，数据类型为number

// 原始数据
const data = [
  { userId: 8, title: 'title1' },
  { userId: 11, title: 'other' },
  { userId: 15, title: null },
  { userId: 19, title: 'title2' },
  { userId: 19, title: '2' }
];

// 查找data中，符合条件的数据，并进行排序
const result = find(data).where({
  "title": /\d$/
}).orderBy('userId', 'desc');
console.log(result);
// 输出
// [{ userId: 19, title: 'title2' }, { userId: 8, title: 'title1' }];

/* 在JS代码中，链式调用是非常常见的，如jQuery、Promise等中都使用了链式调用，链式调用使得我们的代码更加的清晰。
我们知道JS的链式调用有很多种方式。 1、jQuery链式调用是通过return this的形式来实现的，通过对象上的方法最后加上return this，
把对象再返回回来，对象就可以继续调用方法，实现链式操作了。 */
function find(origin) {
  return {
    data: origin,
    where: function (searchObj) {
      const keys = Reflect.ownKeys(searchObj)

      for (let i = 0;i < keys.length;i++) {
        // 依次使用每一条规则对data进行过滤
        this.data = this.data.filter(item => searchObj[keys[i]].test(item[keys[i]]))
      }

      return find(this.data)
    },
    // 排序方法
    orderBy: function (key, sorter) {
      this.data.sort((a, b) => {
        return sorter === 'desc' ? b[key] - a[key] : a[key] - b[key]
      })

      return this.data
    }
  }
}