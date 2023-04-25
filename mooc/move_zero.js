/**
 * 将数组中的0移动到数组末尾，保持其他元素的顺序不变, 要求要在原数组上操作
 */

// 嵌套循环 时间复杂度O(n^2)
export const moveZero1 = (arr) => {
  const length = arr.length
  if (length === 0) return arr

  let zeroLength = 0
  for (let i = 0; i < length - zeroLength; i++) { // O(n)
    if (arr[i] === 0) {
      arr.push(arr[i])
      arr.splice(i, 1) // O(n)
      i-- // 数组截取了一个元素之后i要递减，否则出现连续为0的数组就会报错
      zeroLength++
    }
  }

  return arr
}

// 双指针优化 时间复杂度 O(n)
export const moveZero2 = (arr) => {
  const length = arr.length
  if (length === 0) return arr
  // 定义一个永远指向第一个0的指针
  let j = -1
  for (let i = 0; i < length; i++) {
    if (arr[i] === 0) {
      if (j < 0) {
        // 初始化j指针
        j = i
      }
    }
    if (arr[i] !== 0 && j > 0) {
      // 交换i、j指向的值
      let tmp = arr[i]
      arr[i] = arr[j]
      arr[j] = tmp

      j++
    }
  }
  return arr
}

// const arr = [1, 2, 0, 0, 0, 33, 24, 8, 0, 6, 7]
// const res = moveZero(arr)
// console.log(res)
