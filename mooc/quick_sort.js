/**
 * 快速排序 （固定算法，固定的思路）
 * 1. 找到中间位置的值midVal
 * 2. 小于midVal放在左边, 大于midVal 放在右边
 * 3. 递归，最后拼接左右两侧的数组
 * 取中间值的方法：
 * 1. splice - 会改变原数组
 * 2. slice - 不会改变原数组
 */

export const quickSort1 = (arr) => {
  const len = arr.length
  if (len === 0) return arr
  const midleIndex = Math.floor(len / 2)
  const midleValue = arr.splice(midleIndex, 1) // 改变了原数组，递归和遍历的时候要考虑中间值
  const left = []
  const right = []
  for (let i = 0; i < arr.length; i++) {
    if (midleValue > arr[i]) {
      // 左侧
      left.push(arr[i])
    } else if (midleValue <= arr[i]) {
      // 右侧
      right.push(arr[i])
    }
  }

  return quickSort1(left).concat(midleValue, quickSort1(right))
}

export const quickSort2 = (arr) => {
  const len = arr.length
  if (len === 0) return arr
  const midleIndex = Math.floor(len / 2)
  const midleValue = arr.slice(midleIndex, midleIndex + 1)[0]
  const left = []
  const right = []
  for (let i = 0; i < len; i++) {
    if (i !== midleIndex) {
      if (midleValue > arr[i]) {
        left.push(arr[i])
      } else {
        right.push(arr[i])
      }
    }
  }
  return quickSort2(left).concat([midleValue], quickSort2(right))
}

// 功能测试
// const res = quickSort1([22, 3, 4, 12, 55, 88, 6, 33, 9, 0, 4])
// const res2 = quickSort2([22, 3, 4, 12, 55, 88, 6, 33, 9, 0, 4])
// console.log('quick sort res:', res)
// console.log('res2-----:', res2)
