import { createLinkedListFromArr, reverseLinkedList } from '../creatLinkList'

describe('测试单向链表反转功能', () => {
  test('reverseLinkedList test1', () => {
    const nodeSingle = {
      value: 100,
      next: null
    }
    const node = reverseLinkedList(nodeSingle)
    expect(node).toEqual({
      value: 100,
      next: null
    })
  })

  test('reverseLinkedList test2', () => {
    const nodeList = createLinkedListFromArr([2, 4, 6, 8, 10])
    const node = reverseLinkedList(nodeList)
    expect(node).toEqual({
      value: 10,
      next: {
        value: 8,
        next: {
          value: 6,
          next: {
            value: 4,
            next: {
              value: 2
            }
          }
        }
      }
    })
  })
})
