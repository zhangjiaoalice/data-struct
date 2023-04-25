/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
  let prevNode = null
  let curNode = null
  let nextNode = head
  while (nextNode) {
    if (curNode && !prevNode) {
      delete curNode.next
    }

    if (curNode && prevNode) {
      curNode.next = prevNode
    }

    prevNode = curNode
    curNode = nextNode
    nextNode = nextNode.next
  }
  curNode.next = prevNode
  console.log('curNode:', curNode.val)
  const arr = []
  while (curNode) {
    console.log('curNode:', curNode.val)
    if (curNode && curNode.val) {
      arr.push(curNode.val)
    }

    curNode = curNode.next
  }
  if (curNode && curNode.val) {
    arr.push(curNode.val)
  }
  return arr
}

const arr = reversePrint({ val: 1, next: { val: 2, next: { val: 3, next: null } } })

console.log('arr:', arr)
