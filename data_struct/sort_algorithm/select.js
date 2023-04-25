/**
 * 选择排序，一种原址比较的排序算法
 * 算法流程：
 * 1.找到数组中的最小值放在第一个位置
 * 2.找到第二小时放在第二个位置
 * n...
 * 时间复杂度: O(n^2)
 * 外循环: 如果当前的元素索引不是最小值的元素索引则交互当元素和最小值的位置
 * 内循环: 找到当亲未排序数组中的最小值位置索引
 */
function selectSort (arr) {
  if (!arr || arr.length === 0) return arr
  const len = arr.length
  let minIndex = 0
  for (let i = 0; i < len - 1; i++) {
    minIndex = i
    for (let j = i; j < len; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j
      }
    }
    if (i !== minIndex) {
      let tmp = arr[i]
      arr[i] = arr[minIndex]
      arr[minIndex] = tmp
    }
  }
}

const arr = [3, 35, 6, 7, -3, 0]
selectSort(arr)
console.log('selectSort:', arr)
