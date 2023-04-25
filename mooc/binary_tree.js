/**
 *  二叉树
 */

export const bstTree = {
  value: 5,
  left: {
    value: 3,
    left: {
      value: 2,
      left: null,
      right: null
    },
    right: {
      value: 4,
      left: null,
      right: null
    }
  },
  right: {
    value: 7,
    left: {
      value: 6,
      left: null,
      right: null
    },
    right: {
      value: 8,
      left: null,
      right: null
    }
  }
}

const arr = []

// 前序遍历 root -> left -> right
const preOrderTraversr = (node) => {
  if (!node) return false
  arr.push(node.value)
  node.left && preOrderTraversr(node.left)
  node.right && preOrderTraversr(node.right)
}

// 中序遍历 left -> root -> right
const inOrderTraverse = (node) => {
  if (!node) return false
  node.left && inOrderTraverse(node.left)
  arr.push(node.value)
  node.right && inOrderTraverse(node.right)
}

// 后序遍历 left -> right -> root

const postOrderTraverse = (node) => {
  if (!node) return false
  node.left && postOrderTraverse(node.left)
  node.right && postOrderTraverse(node.right)
  arr.push(node.value)
}

/**
 * 寻找二叉搜索树中的第k小值（Binary Search Tree）
 */
export const getBstValue = (bst, k) => {
  // 中序遍历，二叉搜索树排
  inOrderTraverse(bst)
  return arr[k - 1] || null
}

/**
 * 功能测试
 */
// preOrderTraversr(bstTree)
// inOrderTraverse(bstTree)
// postOrderTraverse(bstTree)

// const res = getBstValue(bstTree, 3)

// console.log('第k小值：', res)
