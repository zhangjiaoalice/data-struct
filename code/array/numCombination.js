/**
 * 电话号码字母组合： 给定包含数字2-9的字符串，返回所有它能表示的字母组合
 * 号码映射关系:
 * 2 - abc, 3 - def, 4 - ghi, 5 - jkl, 6 - mno
 * 7 - pqrs, 8 - tuv, 9 - wxyz
 */
export default (str) => {
  const mapArr = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  let num = str.split('')
  //  23 => ['abc', 'def']
  let code = []
  num.forEach(item => {
    if (mapArr[item]) {
      code.push(mapArr[item])
    }
  })
  // 组合运算
  let comb = (arr) => {
    // 保存前两组两两组合的结果
    let tmp = []
    // 遍历第一个元素，里面的循环是遍历第二个元素
    for (let i = 0, il = arr[0].length; i < il; i++) {
      for (let j = 0, jl = arr[0].length; j < jl; j++) {
        tmp.push(`${arr[0][i]}${arr[1][j]}`)
      }
    }
    // 用组合的结果替换掉已经遍历完的字符串
    arr.splice(0, 2, tmp)
    if (arr.length > 1) {
      // 递归
      comb(arr)
    } else {
      return tmp
    }
    return arr[0]
  }
  if (code.length > 1) {
    return comb(code)
  } else {
    return code.join(',').split('')
  }
}

// const solve = (str) => {
//   // 构造数字和字符串的映射关系
//   const map = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
//   // 将传入的字符串的值，作为map数组的下标
//   const indexArr = str.split('')
//   // 用于保存内存变量的数组 23 => ['abc', 'def']
//   const mapResultList = []
//   indexArr.forEach(index => {
//     if (map[index]) {
//       mapResultList.push(map[index])
//     }
//   })

//   // 定义字母两两组合的方法
//   const combinationAlphabet = (arr) => {
//     // 临时保存前两组字符串两两组合的结果
//     let tmp = []
//     // 最外层的循环遍历第一个字符串，第二层循环遍历第二个字符
//     for (let i = 0; i < arr[0].length; i++) {
//       for (let j = 0; j < arr[1].length; j++) {
//         tmp.push(`${arr[0][i]}${arr[1][j]}`)
//       }
//     }
//     // 使用两两组合的数组替换掉第一个和第二个字符串
//     arr.splice(0, 2, tmp)
//     if (arr.length > 1) {
//       // 递归
//       combinationAlphabet(arr)
//     } else {
//       return tmp
//     }
//     return arr[0]
//   }
//   return combinationAlphabet(mapResultList)
// }
