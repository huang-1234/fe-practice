// 先创建双向链表类DoubleLinklist，并添加基本属性，再实现双向链表的常用方法：
//封装双向链表类
class DoubleLinklist {
  constructor() {
    //封装内部类：节点类
    function Node(data) {
      this.data = data
      this.prev = null
      this.next = null
    }

    //属性
    this.head = null
    this.tail == null
    this.length = 0
  }
  // 2.1.append(element)
  //append方法
  append(data) {
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
  //将链表转变为字符串形式
  //一.toString方法
  toString() {
    return this.backwardString()
  }
  //二.forwardString方法
  forwardString() {
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
  //三.backwardString方法
  backwardString() {
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
  // 2.3.insert(position,element)
  //insert方法
  insert(position, data) {
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
  // 2.4.get(position)
  //get方法
  get(position) {
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
  // 2.5.indexOf(element)
  //indexOf方法
  indexOf(data) {
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
  // 2.7.update(position,element)
  //update方法
  update(position, newData) {
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
  // 2.8.removeAt(position)
  //removeAt方法
  removeAt(position) {
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
  // 2.9.其他方法
  // 其他方法包括：remove(element) 、isEmpty() 、size() 、getHead() 、getTail()
  /*--------------------其他方法-------------------*/
  //八.remove方法
  remove(data) {
    //1.根据data获取下标值
    let index = this.indexOf(data)

    //2.根据index删除对应位置的节点
    return this.removeAt(index)
  }
  //九.isEmpty方法
  isEmpty() {
    return this.length == 0
  }
  //十.size方法
  size() {
    return this.length
  }
  //十一.getHead方法：获取链表的第一个元素
  getHead() {
    return this.head.data
  }
  //十二.getTail方法：获取链表的最后一个元素
  getTail() {
    return this.tail.data
  }
}















//测试代码
//1.创建双向链表
let list1 = new DoubleLinklist()

//2.测试append方法
list1.append('aaa')
list1.append('bbb')
list1.append('ccc')
console.log(list1);

//测试代码
//1.创建双向链表
let list2 = new DoubleLinklist()

//2.测试字符串方法
list2.append('aaa')
list2.append('bbb')
list2.append('ccc')
console.log(list2.toString());
console.log(list2.forwardString());
console.log(list2.backwardString());


    //测试代码
    //1.创建双向链表
    let list3 = new DoubleLinklist()

	//2.测试insert方法
    list3.insert(0, '插入链表的第一个元素')
    list3.insert(0, '在链表首部插入元素')
    list3.insert(1, '在链表中间插入元素')
    list3.insert(3, '在链表尾部插入元素')
    console.log(list3);


        //测试代码
    //1.创建双向链表
    let list4 = new DoubleLinklist()

  	//2.测试get方法
    list4.append('a')
    list4.append('b')
    list4.append('b1')
    list4.append('b2')
    list4.append('b3')
    list4.append('b4')
    list4.append('b5')
    list4.append('b6')
    list4.append('b7')
    console.log(list4.get(0));
    console.log(list4.get(7));


        //测试代码
    //1.创建双向链表
    let list5 = new DoubleLinklist()

    //2.测试indexOf方法
    list5.append('a')
    list5.append('b')
    list5.append('c')
    console.log(list5.indexOf('a'));
    console.log(list5.indexOf('c'));

        //测试代码
    //1.创建双向链表
    let list6 = new DoubleLinklist()

    //2.测试update方法
    list6.append('a')
    list6.append('b')
    console.log(list6.update(1, 'c'));
    console.log(list6);

        //测试代码
    //1.创建双向链表
    let list7 = new DoubleLinklist()

	//2.测试removeAt方法
    list7.append('a')
    list7.append('b')
    list7.append('c')
    console.log(list7.removeAt(1));
    console.log(list7);


        //测试代码
    //1.创建双向链表
    let list8 = new DoubleLinklist()

/*------------其他方法的测试--------------*/
    list8.append('a')
    list8.append('b')
    list8.append('c')
    list8.append('d')
    //remove方法
    console.log(list8.remove('a'));
    console.log(list8);
    //isEmpty方法
    console.log(list8.isEmpty());
    //size方法
    console.log(list8.size());
    //getHead方法
    console.log(list8.getHead());
    //getTead方法
    console.log(list8.getTail());
