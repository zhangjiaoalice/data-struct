/**
 * 复杂链表的复制，思路：
 * 利用哈希表的查询特性，考虑构建 原链表节点 和 新 新链表节点 的键值对映射关系
 * 再遍历构建 链表的 next 和 randow 引用指向
 */

class Node {
  constructor (val, next = null, randow = null) {
    this.val = val
    this.next = next
    this.randow = randow
  }
}

function copyRandowList (head) {
  if (!head) return null
  const map = new Map()
  // 从头节点开始
  let curr = head
  // 构建 新旧节点之间的映射关系
  while (curr) {
    map.set(curr, new Node(curr.val))
    curr = curr.next
  }

  // 从头节点开始遍历，构建 next 和 randow 的指向
  curr = head
  while (curr) {
    map.get(curr).next = map.get(curr.next) ? map.get(curr.next) : null
    map.get(curr).randow = map.get(curr.randow) ? map.get(curr.randow) : null
    curr = curr.next
  }

  // 返回头节点
  return map.get(head)
}

function copyComplexLinkList (head) {
  if (!head) return null
  let cur = head
  const map = new Map() // 利用哈希表的查询特性
  while (cur) {
    map.set(cur, new Node())
  }
}
