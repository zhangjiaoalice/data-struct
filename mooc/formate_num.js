/** js实现数字千分位格式化
 * eg: 输入12050100, 输出 12,050, 100
 * 注意: 需要进行逆序判断
*/

// 思路一： 使用数组，reverse, 每3位进行拆分
export const formate1 = num => {
  const n = Math.floor(num) // 只考虑整数位

  const arr = n.toString().split('').reverse() // 逆序判断
  const res = arr.reduce((prev, cur, index) => {
    if (index % 3 === 0) {
      if (prev) {
        return `${cur},${prev}`
      } else {
        return cur
      }
    } else {
      return cur + prev
    }
  }, '')
  return res
}

// 思路二： 使用字符串解析
export const formate2 = num => {
  const n = Math.floor(num)
  let res = ''
  const str = n.toString()
  const len = str.length
  for (let i = len - 1; i >= 0; i--) {
    const j = len - i
    if (j % 3 === 0) {
      if (i === 0) {
        res = str[i] + res
      } else {
        res = ',' + str[i] + res
      }
    } else {
      res = str[i] + res
    }
  }
  return res
}

const res = formate2(12050100)
console.log('格式化结果2:', res)
