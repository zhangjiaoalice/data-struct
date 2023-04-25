/**
 * 获取栈中最小值
 */
class FindMinStack {
  constructor () {
    this.stack = []
    this.minStack = []
  }

  push (item) {
    this.stack.push(item)
    if (this.minStack.length === 0) {
      this.minStack.push(item)
    } else {
      this.minStack.push(Math.min(this.minStack[this.minStack.length - 1], item))
    }
  }

  pop () {
    this.stack.pop()
    this.minStack.pop()
  }

  top () {
    return this.stack[this.stack.length - 1]
  }

  min () {
    return this.minStack[this.minStack.length - 1]
  }
}

const fs = new FindMinStack()

fs.push(-2)
fs.push(0)
fs.push(-3)

const min1 = fs.min()
console.log('min1:', min1)

fs.pop()

console.log('top', fs.top())

const min2 = fs.min()

console.log('min2:', min2)
