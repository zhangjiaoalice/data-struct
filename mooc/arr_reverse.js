/**
 * 将一个数组旋转 k 步
 */

/**
 * 复杂度分析: 时间复杂度 - O(1)、 空间复杂度 - O(n)
 */
export const reverseArrMethod1 = (arr, k) => {
  if (!k || arr.length === 0) return arr
  const step = Math.abs(k % arr.length)
  const temp1 = arr.slice(-step)
  const temp2 = arr.splice(0, arr.length - step)
  return temp1.concat(temp2)
}

/**
 * 复杂度分析: 时间复杂度 - O(n^2)、 空间复杂度 - O(1)
 */
export const reverseArrMethod2 = (arr, k) => {
  if (!k || arr.length === 0) return arr
  const step = Math.abs(k % arr.length)

  for (let i = 0; i < step; i++) {
    const cur = arr.pop()
    if (cur) {
      arr.unshift(cur)
    }
  }
  return arr
}

export function reverseReview (arr, k) {
  if (!arr || arr.length === 0) return arr
  const step = Math.abs(k)
  const part1 = arr.slice(-step)
  const part2 = arr.slice(0, arr.length - step)
  return part1.concat(part2)
}
