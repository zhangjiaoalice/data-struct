function createLinklist (arr) {
  if (!arr || arr.length === 0) return []
  const len = arr.length
  let curNode = {
    value: arr[len - 1],
    next: null
  }
  for (let i = len - 2; i >= 0; i--) {
    curNode = {
      value: arr[i],
      next: curNode
    }
  }

  return curNode
}

function reverseLink (linkNode) {
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

    prevNode = curNode
    curNode = nextNode
    nextNode = nextNode.next
  }

  curNode.next = prevNode

  return curNode
}

function reverseLink_2 (linkNode) {
  if (!linkNode) return linkNode
  let pre = null
  let cur = linkNode
  while (cur) {
    const nextNode = cur.next
    cur.next = pre
    pre = cur
    cur = nextNode
  }
  return pre
}

const linkList = createLinklist([1, 3, 5, 7, 9])
console.log('linkList:', linkList)
const rvLink = reverseLink(linkList)
console.log('rvlink:', rvLink)
