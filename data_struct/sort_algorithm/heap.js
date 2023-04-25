class Heap {
  constructor (data) {
    this.data = data
  }
  sort () {
    const arr = this.data
    let size = arr.length
    if (size <= 1) return
    // 从倒数第二个父节点开始构造大顶堆, i表示父节点
    for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
      Heap.maxHeapify(arr, i, arr.length)
    }
    // 每次找到最大值作为根节点之后，就将根节点的值和最后一个值进行交换，交换完成移除最后一个节点
    // 然后继续找到剩下节点中的最大值
    while (size > 1) {
      size--
      Heap.swap(arr, 0, size)
      Heap.maxHeapify(arr, 0, size)
    }

    return arr
  }

  static swap (arr, index1, index2) {
    if (index1 === index2) return
    let tmp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = tmp
  }

  // 构造大顶堆
  static maxHeapify (arr, i, size) {
    let left = 2 * i + 1
    let right = 2 * i + 2
    let lagest = i // 最大值索引，默认为父节点
    // 比较父节点和子节点找到最大值的索引
    if (left < size && arr[left] > arr[lagest]) {
      lagest = left
    }

    if (right < size && arr[right] > arr[lagest]) {
      lagest = right
    }

    if (i !== lagest) {
      // 交换最大值和子节点的位置
      Heap.swap(arr, i, lagest)
      // 交换之后，大顶堆的结构可能会被破坏，以当前最大值作为父节点递归子节点,保证每个子树的父节点都大于子节点
      Heap.maxHeapify(arr, lagest, size)
    }
  }
}

const arr = [2, 4, 35, 16, 7, -1, 35, 8, 93]

const heap = new Heap(arr)

console.log('未排序 heap:', heap.data)

const res = heap.sort()
console.log('排序 heap:', res)
