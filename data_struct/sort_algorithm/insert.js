/**
 * 插入排序
 * 每次排一个数组项，以此方式构建最后的排序数组，对于为排序数组，将已排序数组从后详情扫瞄，找到相应的位置并插入
 */
function inserSort (arr) {
  if (!arr || arr.length === 0) return arr
  let tmp, j
  for (let i = 1; i < arr.length; i++) {
    j = i
    tmp = arr[i]
    while (j > 0 && tmp < arr[j - 1]) {
      arr[j] = arr[j - 1]
      j--
    }
    arr[j] = tmp
  }
}

const arr = [3, 12, 1, -2, 25, 4]
inserSort(arr)
console.log('插入排序:', arr)
