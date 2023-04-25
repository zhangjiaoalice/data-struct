/**
 * 归并排序是一种分治算法
 * 思想: 将一个数组分割为更小的数组，直到每个数组中只有一个元素,然后合并两个数组
 */

function mergeSort (arr) {
  if (arr.length === 1) return arr
  const mid = Math.floor(arr.length / 2)
  const left = arr.slice(0, mid)
  const right = arr.slice(mid)

  return merge(mergeSort(left), mergeSort(right))
}

function merge (left, right) {
  const res = []
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      res.push(left.shift())
    } else {
      res.push(right.shift())
    }
  }

  // 将为剩余元素拼接到结果数组中
  return res.concat(left, right)
}
