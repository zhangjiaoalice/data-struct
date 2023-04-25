/**
 * 在排序数组中查找数字
 * @retruns 数字在数组中出现的次数
 */
function binarySearchNum (arr, target) {
  return findNum(0, arr.length - 1, arr, target)
}

function findNum (l, r, arr, target) {
  while (l <= r) {
    const mid = Math.floor((l + r) / 2)
    if (target === arr[mid]) {
      return 1 + findNum(mid + 1, r, arr, target) + findNum(l, mid - 1, arr, target)
    } else if (target < arr[mid]) {
      r = mid - 1
    } else {
      l = mid + 1
    }
  }
  // 没找到
  return 0
}

const arr = [5, 7, 7, 8, 8, 9, 10]
const res = binarySearchNum(arr, 5)
console.log('查询结果:', res)
