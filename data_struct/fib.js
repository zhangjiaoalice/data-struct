
/**
 * 斐波那契数列
 * @param {*} n
 * @returns
 */
function fib (n) {
  if (n === 0) return 0
  if (n === 1) return 1
  return fib(n - 1) + fib(n - 2)
}

/**
 * 斐波那契数列 递归 + 记忆化
 */
function fib_2 (n) {
  const memo = {} // 保存计算结果
  const helper = (x) => {
    if (memo[x]) return memo[x]
    if (n === 0) return 0
    if (n === 1) return 1
    memo[x] = helper(x - 1) + helper(x - 2)
  }
  return helper(n)
}

/**
 * 斐波那契数列动态规划
 */
function fib_3 (n) {
  if (n <= 1) return n
  // 初始化状态转移方程
  let dp = [0, 1]
  for (let i = 2; i <= n; i++) {
    // 自底向上计算
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
}
