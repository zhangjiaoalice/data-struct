function heapSort (arr) {
  let size = arr.length
  if (size <= 1) return arr
  // 构造堆
  buildHeap(arr)

  while (size > 1) {
    size--
    swap(arr, 0, size)
    maxHeapify(arr, size, 0)
  }
}

function swap (arr, i1, i2) {
  if (i1 === i2) return arr
  let tmp = arr[i1]
  arr[i1] = arr[i2]
  arr[i2] = tmp
}

/** 通过数组构造堆 */
function buildHeap (arr) {
  const size = arr.length
  for (let i = Math.floor(size / 2); i >= 0; i--) {
    maxHeapify(arr, size, i)
  }
}

function maxHeapify (arr, size, i) {
  let left = 2 * i + 1
  let right = 2 * i + 2
  let lagest = i

  if (left < size && arr[left] > arr[lagest]) {
    lagest = left
  }

  if (right < size && arr[right] > arr[lagest]) {
    lagest = right
  }

  if (i !== lagest) {
    swap(arr, i, lagest)
    maxHeapify(arr, size, lagest)
  }
}

const arr = [3, 56, 7, 23, -1, 93, 22, 46]

heapSort(arr)

console.log('arr heap sort:', arr)
