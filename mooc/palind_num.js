/**
 * 回文字符串
 */

// 思路一，数字转换为字符串，在转换为数组，调用revers方法反转进行比较
export const findPalindNum1 = (max) => {
  const res = []
  if (max <= 0) return res
  for (let i = 1; i <= max; i++) {
    const str = i.toString()
    if (str === str.split('').reverse().join('')) {
      res.push(i)
    }
  }
  return res
}

// 思路二： 双指针方式比较字符串头尾字符
export const findPalindNum2 = max => {
  const res = []
  if (max <= 0) return res

  for (let i = 1; i <= max; i++) {
    const str = i.toString()
    let flag = true // 进行比较的标识
    let startIndex = 0
    let endIndex = str.length - 1
    while (startIndex < endIndex) {
      if (str[startIndex] !== str[endIndex]) {
        flag = false
        break
      } else {
        // 继续比较
        startIndex++
        endIndex--
      }
    }
    if (flag) res.push(i)
  }
  return res
}

// 生成数字的翻转数
export const findPalindNum3 = max => {
  const res = []
  if (max <= 0) return res
  for (let i = 1; i <= max; i++) {
    let n = i
    let rev = 0 // 保存数字的翻转数

    while (n > 0) {
      // 计算翻转数
      rev = rev * 10 + n % 10
      n = Math.floor(n / 10)
    }

    if (rev === i) res.push(i)
  }

  return res
}

// 功能测试
const res = findPalindNum3(100)
console.log('res:', res)
