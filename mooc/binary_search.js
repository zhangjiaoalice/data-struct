/**
 * 二分查找
 */

// 非递归方法
export const binarySearch1 = (arr, target) => {
  if (!arr || arr.length === 0) return -1
  // 初始化搜索区域
  let startIndex = 0
  let endIndex = arr.length - 1

  while (startIndex <= endIndex) {
    // 在搜索区域范围内
    const midleIndex = Math.floor((startIndex + endIndex) / 2)
    const midleValue = arr[midleIndex]
    if (target < midleValue) {
      // 目标值在左侧
      endIndex = midleIndex - 1
    } else if (target > midleValue) {
      // 目标值在右侧
      startIndex = midleIndex + 1
    } else {
      // 匹配到目标值
      return midleIndex
    }
  }

  // 目标值不在数组中
  return -1
}

// 递归方法
export const binarySearch2 = (arr, target, startIndex, endIndex) => {
  if (!arr || arr.length === 0) return -1
  if (!startIndex) startIndex = 0 // 初始化搜索区域
  if (!endIndex) endIndex = arr.length - 1

  // 边界条件判断
  if (startIndex > endIndex) return -1

  const midleIndex = Math.floor((startIndex + endIndex) / 2)
  const midleValue = arr[midleIndex]

  if (target < midleValue) {
    // 左侧
    return binarySearch2(arr, target, startIndex, midleIndex - 1)
  } else if (target > midleValue) {
    // 右侧
    return binarySearch2(arr, target, midleIndex + 1, endIndex)
  } else {
    // 找到目标值
    return midleIndex
  }
}

/**
 * 代码功能测试
 */
// const targetIndex = binarySearch([1, 3, 5, 7, 9], 7)
// console.log('查找的值....:', targetIndex)

/** 非递归 */
export function binarySearchReview (arr, target) {
  const len = arr.length
  if (len === 0) return -1
  let startIndex = 0
  let endIndex = len - 1

  while (startIndex <= endIndex) {
    const midIndex = Math.floor((startIndex + endIndex) / 2)
    const midValue = arr[midIndex]
    if (target < midValue) {
      // 目标值在左侧
      endIndex = midIndex - 1
    } else if (target > midValue) {
      // 目标值在右侧
      startIndex = midIndex + 1
    }
  }
  return -1
}

export function binarySearchReview2 (arr, target, startIndex, endIndex) {
  const len = arr.length
  if (len === 0) return -1
  if (!startIndex || startIndex === undefined) startIndex = 0
  if (!endIndex || endIndex === undefined) endIndex = len - 1
  const midIndex = Math.floor((startIndex + endIndex) / 2)
  const midValue = arr[midIndex]

  if (target < midValue) {
    // 目标值在左侧
    binarySearchReview2(arr, target, startIndex, midIndex - 1)
  } else if (target > midIndex) {
    binarySearchReview2(arr, target, midIndex + 1, endIndex)
  } else {
    return midIndex
  }
}
