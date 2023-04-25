/**
 * 找字符串连续最多的子串，和出现的次数
 */

// 传统解法，循环 + 跳步（时间复杂度 O(n)）
export const consecutiveStr1 = (str) => {
  const len = str.length
  if (len === 0) return {}
  let subStr = ''
  let subLen = 0
  let tmpLen = 0
  for (let i = 0; i < len; i++) {
    tmpLen = 0
    for (let j = i; j < len; j++) {
      if (str[j] === str[i]) {
        tmpLen++
      }

      if (str[j] !== str[i] || j === len - 1) {
        if (tmpLen > subLen) {
          subStr = str[i]
          subLen = tmpLen
        }

        // 跳步
        if (i < len - 1) {
          i = j - 1
        }

        break
      }
    }
  }
  return {
    subStr,
    subLen
  }
}

export const consecutiveStr2 = (str) => {
  let len = str.length
  if (len === 0) return {}
  let subStr = ''
  let subLen = 0
  let j = 0 // 记录当前连续的元素
  for (let i = 0; i < len; i++) {
    if (str[i] !== str[j]) {
      const l = i - j
      if (l > subLen) {
        subStr = str[j]
        subLen = l
      }
      j = i
    }
  }
  return { subStr, subLen }
}

// 双指针

// const res = consecutiveStr2('aabbcccddddeeeeeefff111')
// console.log('res:', res)
