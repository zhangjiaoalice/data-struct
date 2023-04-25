/**
 * 两数之和
 */

// 暴力解法 时间复杂度 O(n^2), 空间复杂度 O(n)
export const findTwoNumber1 = (arr, target) => {
  if (!arr || arr.length === 0) return []
  const res = []
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        res.push(arr[i])
        res.push(arr[j])
      }
    }
  }
  return res
}

// 双指针(二分思想) 时间复杂度 O(n)
export const findTwoNumber2 = (arr, target) => {
  if (!arr || arr.length === 0) return []
  const res = []
  let i = 0
  let j = arr.length - 1
  while (i < j) {
    const n1 = arr[i]
    const n2 = arr[j]
    if (target < n1 + n2) {
      j--
    } else if (target > n1 + n2) {
      i++
    } else {
      res.push(arr[i])
      res.push(arr[j])
      break
    }
  }
  return res
}

// 哈希表 时间复杂度 O(n), 空间复杂度 O(n)
export const hasMap = (arr, target) => {
  if (!arr || arr.length === 0) return []
  const map = new Map()
  for (let i = 0; i < arr.length; i++) {
    if (map.has(target - arr[i])) {
      return [map.get(target - arr[i]), arr[i]]
    } else {
      map.set(arr[i], arr[i])
    }
  }
}

function findTargetFromArr (arr, target) {
  const len = arr.length
  if (len === 0) return []
  let res = []
  // 时间复杂度 O(n^2)
  for (let i = 0; i < len; i++) {
    const n1 = arr[i]
    let flag = false
    for (let j = i + 1; j < len; j++) {
      const n2 = arr[j]
      if (target === n1 + n2) {
        res.push(n1)
        res.push(n2)
        flag = true
        break
      }
    }

    if (flag) break
  }
}

function findTargetfromArr2 (arr, target) {
  const len = arr.length
  if (len === 0) return []
  let res = []
  let startIndex = 0
  let endIndex = len - 1
  // 时间复杂度 O(logn)
  while (startIndex <= endIndex) {
    const n = arr[startIndex] + arr[endIndex]
    if (target < n) {
      endIndex--
    } else if (target < n) {
      startIndex++
    } else {
      res.push(arr[startIndex])
      res.push(arr[endIndex])
    }
  }
}

/**
 * 功能测试
 */
// const res = hasMap([1, 3, 5, 7, 11, 23, 12], 23)
// console.log('两数之和验证:', res)
