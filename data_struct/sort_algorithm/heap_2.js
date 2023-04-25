class Heap {
  constructor (data) {
    this.data = data
  }

  /** 堆排序 */
  sort () {
    const arr = this.data
    if (arr.length <= 1) return arr
    let size = arr.length
    for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
      // 从倒数第二个父节点开始比较
      this.maxHeapify(arr, i, arr.length)
    }
    while (size > 1) {
      size--
      Heap.swap(arr, 0, size)
      Heap.maxHeapify(arr, 0, size)
    }
    return arr
  }

  static swap (arr, a, b) {
    if (a === b) return
    let tmp = arr[a]
    arr[a] = arr[b]
    arr[b] = tmp
  }

  // 构建最大堆的过程
  // @params i 当前父节点
  // @params size 数组有效长度
  static maxHeapify (arr, i, size) {
    /**
     * 当某个顶点的值小于左子节点和右子节点的时候要进行交换
     * 保证 父节点的值最大
     **/
    let left = i * 2 + 1 // 左子节点
    let right = i * 2 + 2 // 右子节点
    let lagest = i // 最大的节点，默认为父节点

    // 比较左子节点、右子节点、父节点 找到最大值
    if (left < size && arr[left] > arr[i]) {
      lagest = left
    }

    if (right < size && arr[right] > arr[i]) {
      lagest = right
    }

    if (lagest !== i) {
      this.swap(arr, i, lagest)
      // 交换完之后可能会破坏堆的结构, 递归
      this.maxHeapify(arr, lagest, size)
    }
  }
}
