// 后面的回调中，我们可以通过event.target.result拿到数据库实例
let db
// 参数1位数据库名，参数2为版本号
const request = window.indexedDB.open("xiaoceDB", 1)
// 使用IndexedDB失败时的监听函数
request.onerror = function (event) {
  console.log('无法使用IndexedDB')
}
// 成功
request.onsuccess = function (event) {
  // 此处就可以获取到db实例
  db = event.target.result
  console.log("你打开了IndexedDB")
}

//
// onupgradeneeded事件会在初始化数据库/版本发生更新时被调用，我们在它的监听函数中创建object store
request.onupgradeneeded = function (event) {
  let objectStore
  // 如果同名表未被创建过，则新建test表
  if (!db.objectStoreNames.contains('test')) {
    objectStore = db.createObjectStore('test', { keyPath: 'id' })
  }
}