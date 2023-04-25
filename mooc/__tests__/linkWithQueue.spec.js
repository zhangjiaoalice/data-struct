import { Queue } from '../linkList_with_queue'

describe('使用链表实现队列', () => {
  let queue = null
  beforeEach(() => {
    queue = new Queue()
  })
  test('入队测试', () => {
    queue.add(11)
    queue.add(22)
    queue.add(33)
    expect(queue.length).toBe(3)
  })

  test('出队测试', () => {
    queue.add(100)
    queue.add(200)
    queue.add(300)
    queue.add(400)
    expect(queue.length).toBe(4)
    queue.delete()
    expect(queue.length).toBe(3)
    queue.delete()
    expect(queue.length).toBe(2)
  })
})
