import { Queue } from '../two_stack_one_queue'

describe('使用两个栈实现一个数组', () => {
  let queue = {}
  beforeEach(() => {
    queue = new Queue()
  })
  test('入栈测试', () => {
    queue.add(1)
    queue.add(3)
    queue.add(5)
    expect(queue.data).toEqual([1, 3, 5])
  })

  test('出栈测试', () => {
    queue.add('alice')
    queue.add('wang')
    queue.add('cate')
    // expect(queue.data).toEqual(['alice', 'wang', 'cate'])
    // expect(queue.delete()).toEqual('alice')
    queue.delete()
    expect(queue.data).toEqual(['wang', 'cate'])
  })
})
