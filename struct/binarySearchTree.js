/**
 *
 */
class Node {
  constructor (key) {
    this.key = key
    this.left = null
    this.right = null
  }
}

class BinarySearch {
  constructor () {
    this.root = null // 根节点
  }

  insertNode (node, newNode) {
    if (newNode.key < node.key) {
      // 将节点添加到左侧
      if (node.left === null) {
        node.left = newNode
      } else {
        this.insertNode(node.left, newNode)
      }
    } else {
      // 将节点添加到右侧
      if (node.right === null) {
        node.right = newNode
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }

  searchNode (node, key) {
    if (key < node.key) {
      // 目标值在左侧
      return this.searchNode(node.left, key)
    } else if (key > node.key) {
      // 目标值在右侧
      return this.searchNode(node.right, key)
    } else {
      // 找到目标值
      return true
    }
  }

  minNode (node) {
    if (node) {
      while (node && node.left !== null) {
        node = node.left
      }
      return node.key
    }
    return null
  }

  maxNode (node) {
    if (node) {
      while (node && node.right) {
        node = node.right
      }
      return node.key
    }
    return null
  }

  findMinNode (node) {
    while (node && node.left !== null) {
      node = node.left
    }
    return node
  }

  removeNode (node, key) {
    if (key < node.key) {
      node.left = this.removeNode(node.left, key)
      return node
    } else if (key > node.key) {
      node.right = this.removeNode(node.right, key)
      return node
    } else {
      if (node.left === null && node.right === null) {
        node = null
        return node
      }
      if (node.left === null) {
        node = node.right
        return node
      }
      if (node.right === null) {
        node = node.left
        return node
      }
      let aux = this.findMinNode(node.right)
      node.key = aux.key
      node.right = this.removeNode(node.right, aux.key)
      return node
    }
  }
  inOrderTraverseNode (node, callback) {
    if (node !== null) {
      this.inOrderTraverseNode(node.left, callback)
      callback(node.key)
      this.inOrderTraverseNode(node.right, callback)
    }
  }

  preOrderTraverseNode (node, callback) {
    if (node !== null) {
      callback(node.key)
      this.preOrderTraverseNode(node.left, callback)
      this.preOrderTraverseNode(node.right, callback)
    }
  }

  postOrderTraverseNode (node, callback) {
    if (node !== null) {
      this.postOrderTraverseNode(node.left, callback)
      this.postOrderTraverseNode(node.right, callback)
      callback(node.key)
    }
  }

  // 插入节点
  insert (key) {
    const newNode = new Node(key)
    if (this.root === null) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }

  remove (key) {
    if (this.node === null) {
      return false
    }
    this.removeNode(this.root, key)
  }

  searchkey (key) {
    if (this.root === null) {
      return false
    }
    this.searchNode(this.root, key)
  }

  // 中序遍历
  inOrderTraverse (callback) {
    this.inOrderTraverseNode(this.root, callback)
  }

  // 前序遍历
  preOrderTraverse (callback) {
    this.preOrderTraverseNode(this.root, callback)
  }

  // 后序遍历
  postOrderTraverse (callback) {
    this.postOrderTraverseNode(this.root, callback)
  }

  min () {
    return this.minNode(this.root)
  }

  max () {
    return this.maxNode(this.root)
  }
}

const tree1 = new BinarySearch()
tree1.insert(5)
tree1.insert(6)
tree1.insert(4)
tree1.insert(3)

console.log(tree1)
