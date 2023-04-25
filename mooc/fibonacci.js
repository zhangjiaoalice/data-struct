/**
 * 斐波那契数列
 * f(0) = 0
 * f(1) = 1
 * f(n) = f(n-1) + f(n-2)
 */

// 递归的方式实现 (递归)时间复杂度 - O(2^n)
// const fibonacci = (n) => {
//   if (n <= 0) return 0
//   if (n === 1) return 1
//   return fibonacci(n - 1) + fibonacci(n - 2)
// }

// 斐波那契优化(循环记录中间结果)
export const fibonacci = (n) => {
  if (n <= 0) return 0
  if (n === 1) return 1
  let n1 = 1 // 记录n-1
  let n2 = 0 // 记录n-2
  let res = 0
  for (let i = 2; i <= n; i++) {
    res = n1 + n2
    // 记录中间结果
    n2 = n1
    n1 = res
  }
  return res
}

// const res = fibonacci(22)
// console.log('斐波那契数列：', res)
