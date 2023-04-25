/**
 * 快速排序
 * 实现思想:
 * 1. 在数组中找到一个数作为基准值，将大于基准值的数放在右边，小于基准值的数放在左边
 * 2. 然后递归左右两侧的数组，以相同的方式排列左右两侧的数组
 */
function quickSort (arr) {
  if (!arr || arr.length < 2) return arr
  let target = arr[0]
  let left = []
  let right = []
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= target) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  return quickSort(left).concat([target], quickSort(right))
}

const arr = [7, 3, 2, 6, -1, 23, 12]
const res = quickSort(arr)
console.log('res:', res)
