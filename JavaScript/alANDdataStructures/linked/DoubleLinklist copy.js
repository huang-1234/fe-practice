//封装双向链表
class DoubleLinklist {
  constructor() {
    //封装内部类：节点类
    class Node {
      constructor(data) {
        this.data = data
        this.prev = null
        this.next = null
      }
    }

    //属性
    this.head = null
    this.tail == null
    this.length = 0

    //常见的操作：方法
    //一.append方法
    DoubleLinklist.prototype.append = data => {
      //1.根据data创建新节点
      let newNode = new Node(data)

      //2.添加节点
      //情况1：添加的是第一个节点
      if (this.length == 0) {
        this.tail = newNode
        this.head = newNode
        //情况2：添加的不是第一个节点
      } else {
        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail = newNode
      }

      //3.length+1
      this.length += 1
    }

    //二.将链表转变为字符串形式
    //2.1.toString方法
    DoubleLinklist.prototype.toString = () => {
      return this.backwardString()
    }

    //2.2.forwardString方法
    DoubleLinklist.prototype.forwardString = () => {
      //1.定义变量
      let current = this.tail
      let resultString = ""

      //2.依次向前遍历，获取每一个节点
      while (current) {
        resultString += current.data + "--"
        current = current.prev
      }
      return resultString
    }

    //2.3.backwardString方法
    DoubleLinklist.prototype.backwardString = () => {
      //1.定义变量
      let current = this.head
      let resultString = ""

      //2.依次向后遍历，获取每一个节点
      while (current) {
        resultString += current.data + "--"
        current = current.next
      }
      return resultString
    }

    //三.insert方法
    DoubleLinklist.prototype.insert = (position, data) => {
      //1.越界判断
      if (position < 0 || position > this.length)
        return false

      //2.根据data创建新的节点
      let newNode = new Node(data)

      //3.插入新节点
      //原链表为空
      //情况1：插入的newNode是第一个节点
      if (this.length == 0) {
        this.head = newNode
        this.tail = newNode
        //原链表不为空
      } else {
        //情况2：position == 0
        if (position == 0) {
          this.head.prev = newNode
          newNode.next = this.head
          this.head = newNode
          //情况3：position == this.length
        } else if (position == this.length) {
          this.tail.next = newNode
          newNode.prev = this.tail
          this.tail = newNode
          //情况4：0 < position < this.length
        } else {
          let current = this.head
          let index = 0
          while (index++ < position) {
            current = current.next
          }
          //修改pos位置前后节点变量的指向
          newNode.next = current
          newNode.prev = current.prev
          current.prev.next = newNode
          current.prev = newNode
        }
      }
      //4.length+1
      this.length += 1
      return true //返回true表示插入成功
    }

    //四.get方法
    DoubleLinklist.prototype.get = position => {
      //1.越界判断
      if (position < 0 || position >= this.length) { //获取元素时position不能等于length
        return null
      }

      //2.获取元素
      let current = null
      let index = 0
      //this.length / 2 > position:从头开始遍历
      if ((this.length / 2) > position) {
        current = this.head
        while (index++ < position) {
          current = current.next
        }
        //this.length / 2 =< position:从尾开始遍历
      } else {
        current = this.tail
        index = this.length - 1
        while (index-- > position) {
          current = current.prev
        }
      }
      return current.data
    }

    //五.indexOf方法
    DoubleLinklist.prototype.indexOf = data => {
      //1.定义变量
      let current = this.head
      let index = 0

      //2.遍历链表，查找与data相同的节点
      while (current) {
        if (current.data == data) {
          return index
        }
        current = current.next
        index += 1
      }
      return -1
    }

    //六.update方法
    DoubleLinklist.prototype.update = (position, newData) => {
      //1.越界判断
      if (position < 0 || position >= this.length) {
        return false
      }

      //2.寻找正确的节点
      let current = this.head
      let index = 0
      //this.length / 2 > position:从头开始遍历
      if (this.length / 2 > position) {
        while (index++ < position) {
          current = current.next
        }
        //this.length / 2 =< position:从尾开始遍历
      } else {
        current = this.tail
        index = this.length - 1
        while (index-- > position) {
          current = current.prev
        }
      }

      //3.修改找到节点的data
      current.data = newData
      return true //表示成功修改
    }

    //七.removeAt方法
    DoubleLinklist.prototype.removeAt = position => {
      //1.越界判断
      if (position < 0 || position >= this.length) {
        return null
      }

      //2.删除节点
      //当链表中length == 1
      //情况1：链表只有一个节点
      let current = this.head //定义在最上面方便以下各种情况返回current.data
      if (this.length == 1) {
        this.head = null
        this.tail = null
        //当链表中length > 1
      } else {
        //情况2：删除第一个节点
        if (position == 0) {
          this.head.next.prev = null
          this.head = this.head.next
          //情况3：删除最后一个节点
        } else if (position == this.length - 1) {
          current = this.tail //该情况下返回被删除的最后一个节点
          this.tail.prev.next = null
          this.tail = this.tail.prev
        } else {
          //情况4：删除链表中间的节点
          let index = 0
          while (index++ < position) {
            current = current.next
          }
          current.next.prev = current.prev
          current.prev.next = current.next
        }
      }

      //3.length -= 1
      this.length -= 1
      return current.data //返回被删除节点的数据
    }
    /*--------------------其他方法-------------------*/
    //八.remove方法
    DoubleLinklist.prototype.remove = data => {
      //1.根据data获取下标值
      let index = this.indexOf(data)

      //2.根据index删除对应位置的节点
      return this.removeAt(index)
    }

    //九.isEmpty方法
    DoubleLinklist.prototype.isEmpty = () => {
      return this.length == 0
    }

    //十.size方法
    DoubleLinklist.prototype.size = () => {
      return this.length
    }

    //十一.getHead方法：获取链表的第一个元素
    DoubleLinklist.prototype.getHead = () => {
      return this.head.data
    }

    //十二.getTail方法：获取链表的最后一个元素
    DoubleLinklist.prototype.getTail = () => {
      return this.tail.data
    }
  }
}

    //测试代码
    //1.创建双向链表
    let list = new DoubleLinklist()

	//2.测试removeAt方法
    list.append('a')
    list.append('b')
    list.append('c')
    console.log(list.removeAt(1));
    console.log(list);
