/**
 * 使用单向链表实现队列
 */
export class Queue {
  constructor () {
    this.head = null
    this.tail = null
    this.len = 0
  }

  get length () {
    return this.len
  }

  add (item) {
    // 入队
    const newNode = {
      value: item,
      next: null
    }

    if (this.head === null) {
      this.head = newNode
    }

    const tailNode = this.tail
    if (tailNode) {
      tailNode.next = newNode
    }
    this.tail = newNode

    this.len++
  }

  delete () {
    // 出队
    const headNode = this.head
    if (headNode === null) return null
    if (this.len <= 0) return null
    const value = headNode.value
    this.head = headNode.next
    this.len--
    return value
  }
}

// const queue = new Queue()
// queue.add(100)
// queue.add(200)
// queue.add(300)
// console.log('length 一：', queue.length)

// queue.delete()
// console.log('length 二：', queue.length)

// queue.delete()
// console.log('length 三：', queue.length)

// queue.delete()
// console.log('length 三：', queue.length)

/** 性能测试 */
let q1 = new Queue()
console.time('linkList')
for (let i = 0; i < 10 * 10000; i++) {
  q1.add(i)
}
for (let i = 0; i < 10 * 10000; i++) {
  q1.delete()
}
console.timeEnd('linkList')

let q2 = []
console.time('arr')
for (let i = 0; i < 10 * 10000; i++) {
  q2.push(i)
}
for (let i = 0; i < 10 * 10000; i++) {
  q2.pop()
}
console.timeEnd('arr')
