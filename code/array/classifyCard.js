/**
 * 因数的概念: 因数是指整数a除以整数b的商正好是整数没有余数，称b是a的因数（整数a能被整数b整除，称b是a的因数）
 * 公约数的概念: 能同时整除多个数的数
 * 最大公约数的概念: 是两个或者多个整数共有公约数种最大的一个
 */
// 求两数的最大公约数
export const commonDivisor = (a, b) => {
  if (b === 0) {
    return a
  } else {
    // a%b 求 a除以b 的余数
    return commonDivisor(b, a % b)
  }
}

export const classifyFun = (arr) => {
  // 排序，让相同的数字排在一起，方便进行分组
  const str = arr.sort().join('')
  // 分组（匹配多张相同的牌或者匹配单张牌）
  const group = str.match(/(\d)\1+|\d/g)
  while (group.length > 1) {
    let a = group.shift().length
    let b = group.shift().length
    let v = commonDivisor(a, b)
    if (v === 1) {
      return false
    } else {
      group.unshift('0'.repeat(v))
    }
  }
  return group.length ? group[0].length > 1 : false
}
