/**
 * 使用两个栈实现一个队列
 */

class Queue {
  constructor () {
    this.inStack = []
    this.outStack = []
  }

  appendTail (val) {
    // 入队
    this.inStack.push(val)
  }

  deleteHead () {
    // 出队
    if (!this.outStack.length) {
      if (!this.inStack.length) return -1
      while (this.inStack.length) {
        const n = this.inStack.pop()
        this.outStack.push(n)
      }
    }
    return this.outStack.pop()
  }
}

const queue = new Queue()

// 入队操作
queue.appendTail(['CQueue', 'deleteHead', 'appendTail', 'appendTail', 'deleteHead', 'deleteHead'])
queue.appendTail([[], [], [5], [2], [], []])

// 出队操作

const res = queue.deleteHead()
console.log('res:', res, queue)
