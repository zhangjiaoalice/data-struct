/**
 * 使用两个栈实现两个一个队列
 * 栈stack: 后进先出
 * 队列queue: 先进先出
 */
// 空间复杂度 O(n)
export class Queue {
  constructor () {
    this.stack_1 = []
    this.stack_2 = []
  }

  get length () {
    return this.stack_1.length
  }

  get data () {
    return this.stack_1
  }

  add (item) {
    // 入队
    this.stack_1.push(item)
  }

  delete () {
    // 出队列
    let res = null

    // 将stack_1中的元素取出添加到stack_2中
    while (this.stack_1.length) {
      const n = this.stack_1.pop()
      if (n) {
        this.stack_2.push(n)
      }
    }

    res = this.stack_2.pop() // 删除队首的值

    while (this.stack_2.length) {
      const n = this.stack_2.pop()
      if (n) {
        this.stack_1.push(n)
      }
    }

    return res
  }
}

/**
 * 代码功能测试
 */

// const queue = new Queue()

// console.log('访问length属性：', queue.length)
// // 入队
// queue.add('alice')
// queue.add('cat')
// queue.add('dogs')
// queue.add('bird')
// console.log('入队完成:', queue)

// queue.delete()
// console.log('出队:', queue)
