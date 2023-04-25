/**
 * 使用两个栈实现一个队列
 */
class Queue {
  constructor () {
    this.stack_1 = []
    this.stack_2 = []
    this.length = 0
  }

  enQueue (item) {
    if (!item) {
      this.stack_1.push(null)
    } else {
      this.stack_1.push(item)
    }

    this.length++
  }

  deQueue () {
    // 要删除的元素不存在
    if (this.stack_1.length === 0) return -1

    while (this.stack_1.length > 0) {
      const n = this.stack_1.pop()
      this.stack_2.push(n)
    }

    const top = this.stack_2.pop()

    while (this.stack_2.length > 0) {
      const n = this.stack_2.pop()
      this.stack_1.push(n)
    }

    this.length--
    return top
  }

  getSize () {
    return this.length
  }

  getQueue () {
    return this.stack_1
  }
}

const queue = new Queue()

queue.enQueue([[], [3], [], [], []])

// console.log(queue.getQueue())

const q1 = queue.deQueue()

console.log('q1:', q1)
