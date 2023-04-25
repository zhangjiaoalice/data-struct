class MinStack {
  constructor () {
    this.stack = []
  }

  pushStack (x) {
    if (!this.stack.length) {
      this.stack.push(x)
    } else {
      const top = this.stack.pop()
      if (x < top) {
        this.stack.push(top)
        this.stack.push(x)
      } else {
        this.stack.push(x)
        this.stack.push(top)
      }
    }
  }

  popStack () {
    return this.stack[this.stack.length - 1]
  }
}

const min = new MinStack()

min.pushStack(1)
min.pushStack(2)
min.pushStack(-3)
min.pushStack(0)

const res = min.popStack()

console.log('最小值:', res)
