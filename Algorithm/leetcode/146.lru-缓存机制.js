/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存机制
 */

// @lc code=start
/**
 * @param {number} capacity
 */

var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.cacheKey = new Set();
  this.cacheMap = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
// LRUCache.prototype.get = function (key) {
//   if (this.cacheMap.has(key)) {
//     const lastestUsedValue = this.cacheMap.get(key);
//     let count = 1;
//     // for(const firstKey in this.cacheMap){
//     //   if(count--){
//     //     this.cacheMap.delete(firstKey)
//     //   }else{
//     //     break;
//     //   }
//     // }
//     const lastIndex = this.cacheMap.size - 1;
//     const firstKey = this.cacheMap.keys()[lastIndex];
//     this.cacheMap.delete(firstKey);
//     this.cacheMap.set(key, lastestUsedValue);
//     return lastestUsedValue;
//   } else {
//     // 去数据库或者其他仓库找
//     return -1
//   }
// };

// /**
//  * @param {number} key
//  * @param {number} value
//  * @return {void}
//  */
// LRUCache.prototype.put = function (key, value) {
//   if (this.cacheMap.size < this.capacity) {
//     this.cacheMap.set(key, value);
//     return null
//   }
//   let count = 1;
//   for (const firstKey in this.cacheMap) {
//     while (count--) {
//       this.cacheMap.delete(firstKey);
//     }
//     break;
//   }
//   this.cacheMap.set(key, value);
// };

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

 class ListNode {
  constructor(key, value) {
    this.key = key
    this.value = value
    this.next = null
    this.prev = null
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity
    this.hash = {}
    this.count = 0
    this.dummyHead = new ListNode()
    this.dummyTail = new ListNode()
    this.dummyHead.next = this.dummyTail
    this.dummyTail.prev = this.dummyHead
  }

  get(key) {
    let node = this.hash[key]
    if (node == null) return -1
    this.moveToHead(node)
    return node.value
  }

  put(key, value) {
    let node = this.hash[key]
    if (node == null) {
      if (this.count == this.capacity) {
        this.removeLRUItem()
      }
      let newNode = new ListNode(key, value)
      this.hash[key] = newNode
      this.addToHead(newNode)
      this.count++
    } else {
      node.value = value
      this.moveToHead(node)
    }
  }

  moveToHead(node) {
    this.removeFromList(node)
    this.addToHead(node)
  }

  removeFromList(node) {
    let temp1 = node.prev
    let temp2 = node.next
    temp1.next = temp2
    temp2.prev = temp1
  }

  addToHead(node) {
    node.prev = this.dummyHead
    node.next = this.dummyHead.next
    this.dummyHead.next.prev = node
    this.dummyHead.next = node
  }

  removeLRUItem() {
    let tail = this.popTail()
    delete this.hash[tail.key]
    this.count--
  }

  popTail() {
    let tail = this.dummyTail.prev
    this.removeFromList(tail)
    return tail
  }
}
// @lc code=end

