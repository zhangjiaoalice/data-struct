/**
 * 切换字符串中字母大小写
 */

// 使用正则表达式
export const swicthLetterCase1 = (str) => {
  let res = ''
  if (str.length === 0) return res

  const reg1 = /[a-z]/
  const reg2 = /[A-Z]/
  for (let i = 0; i < str.length; i++) {
    if (reg1.test(str[i])) {
      res += str[i].toUpperCase()
    } else if (reg2.test(str[i])) {
      res += str[i].toLowerCase()
    } else {
      res += str[i]
    }
  }

  return res
}

/**
 * 通过ASCII码判断
 */
export const switchLetterCase2 = (str) => {
  let res = ''
  if (str.length === 0) return res
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i)

    if (code > 64 && code < 91) {
      res += str[i].toLowerCase()
    } else if (code > 96 && code < 123) {
      res += str[i].toUpperCase()
    } else {
      res += str[i]
    }
  }

  return res
}

const res = switchLetterCase2('12AbCde88$5')
console.log('res', res)
