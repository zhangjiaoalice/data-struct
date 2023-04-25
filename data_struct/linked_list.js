/**
 * 链表
 */

// 创建节点的构造函数
class Node {
  constructor (element) {
    this.element = element
    this.next = null
  }
}

/**
 * 单向链表
 */
class LinkedList {
  constructor () {
    this.head = null
    this.length = 0
  }

  // 向链表尾部添加一个新的元素
  append (ele) {
    const node = new Node(ele)
    let cur = null // 定义指向当前节点的指针

    if (this.head === null) {
      // 空链表，直接添加
      this.head = node
    } else {
      // 从head节点开始遍历找到最后一个节点，将新元素添加到最后一个节点中
      cur = this.head

      while (cur.next) {
        cur = cur.next
      }

      // 找到最后一个元素
      cur.next = node
    }
    // 更新链表长度
    this.length++
  }

  // 移除指定位置的元素
  removeAt (position) {
    // 校验链表边界条件
    if (position > -1 && position < this.length) {
      let cur = this.head // 从head 开始遍历找到需要删除元素的位置
      let pre = null
      let index = 0 // 记录当前节点的位置
      while (index !== position) {
        pre = cur
        cur = cur.next
        index++
      }

      // 找到目标元素
      pre.next = cur.next

      this.length--
      return true
    } else {
      return false
    }
  }

  // 删除指定的元素，返回删除的元素的值
  remove (ele) {
    const node = new Node(ele)
    let cur = this.head
    let pre = null
    // 遍历找到需要删除的元素
    while (cur.element !== node.element) {
      pre = cur
      cur = cur.next
    }

    // 找到需要删除的元素
    pre.next = cur.next

    // 更新链表长度
    this.length--

    return cur.element
  }

  // 在任意位置插入元素
  insert (ele, position) {
    // 检查插入元素的边界条件
    if (position > -1 && position < this.length) {
      const node = new Node(ele)
      let cur = this.head
      let prev = null
      let index = 0 // 当前节点的指针
      if (position === 0) {
        // 在第一个位置上添加
        node.next = cur
        this.head = node
      } else {
        while (index !== position) {
          prev = cur
          cur = cur.next
          index++
        }
        node.next = cur
        prev.next = node
      }
      this.length++
      return true
    } else {
      return false
    }
  }

  // 返回列表中的索引
  indexOf (ele) {
    let cur = this.head // 从头节点开始遍历
    let index = 0 // 记录当前索引的指针

    while (cur.element !== ele) {
      cur = cur.next
      index++
    }

    return index
  }

  // toString 方法
  toString () {
    let cur = this.head
    let str = ''
    while (cur) {
      str = `${cur.element}${cur.next ? 'n' : ''}`
      cur = cur.next
    }
    return str
  }

  // isEmpty 方法
  isEmpty () {
    return this.length === 0
  }

  // size 方法
  size () {
    return this.length
  }

  // getHead 方法获取链表的第一个元素
  getHead () {
    return this.head
  }
}

// 功能测试
const link = new LinkedList()
console.log('空链表:', link)
link.append(1)
link.append(22)
link.append(15)
link.append(56)
console.log('append 方法测试:', link)
link.remove(22)
console.log('remove 方法测试:', link)
link.append('alice')
link.append('dog')
link.append('cat')
link.removeAt(1)
console.log('removeAt方法测试:', link)
link.insert('花花', 1)
console.log('insert方法测试:', link)
console.log('toString 方法测试：', link.toString())
console.log('getHead 方法测试:', link.getHead())
console.log('size方法测试：', link.size())
console.log('indexOf 方法测试：', link.indexOf('alice'))
