/**
 * 根据数组创建单向链表
 */
export const createLinkedListFromArr = (arr) => {
  if (!arr || arr.length === 0) return []
  // 链表最后一个元素没有next指针，从最后一个元素开始创建链表
  let curNode = {
    value: arr[arr.length - 1],
    next: null
  }
  for (let i = arr.length - 2; i >= 0; i--) {
    curNode = {
      value: arr[i],
      next: curNode
    }
  }
  return curNode
}

/**
 * 反转单链表
 */
export const reverseLinkedList = (linkNode) => {
  let prevNode = null
  let curNode = null
  let nextNode = linkNode

  while (nextNode) {
    if (curNode && !prevNode) {
      delete curNode.next
    }

    if (curNode && prevNode) {
      curNode.next = prevNode
    }

    // 指针整体后移
    prevNode = curNode
    curNode = nextNode
    nextNode = nextNode.next
  }

  // 最后一个元素
  curNode.next = prevNode

  return curNode
}

const linked = createLinkedListFromArr([1, 3, 5, 7, 9])

console.log('根据数组创建链表:', linked)

const reversedLink = reverseLinkedList(linked)

console.log('反转单向链表:', reversedLink)
