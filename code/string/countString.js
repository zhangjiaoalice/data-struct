export default (str) => {
  // 建立数据结构
  const arr = []
  // 对任意输入的字串都返回符合条件的子串
  let match = (subStr) => {
    // 找到连续的0或1
    let j = subStr.match(/^(0+|1+)/)[0]
    // 取出第一位，找到紧挨着当前元素的互补元素
    let o = (j[0] ^ 1).toString().repeat(j.length)
    let reg = new RegExp(`^(${j}${o})`)
    if (reg.test(subStr)) {
      return RegExp.$1
    } else {
      return ''
    }
  }
  for (let i = 0; i < str.length - 1; i++) {
    let sub = match(str.slice(i))
    if (sub) {
      arr.push(sub)
    }
  }
  return arr
}
