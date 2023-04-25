/**
 * 动态规划 - 最少硬币找零问题
 */
class MinCoinsChange {
  constructor (coins) {
    // 硬币面额数组
    this.coins = coins
  }

  /** 处理找零的问题
     * @param amount 找零面额
     * @returns 最少硬币数组
     */
  makeChange (amount) {
    if (!amount) return []
    // 存储 找零面额 和 硬币数组的键值对
    const cache = {}
    if (cache[amount]) {
      return cache[amount]
    }

    let min = [] // 最少硬币数组
    let newMin = []
    let newAmount = []
    for (let i = 0; i < this.coins.length; i++) {
      const coin = this.coins[i]
      newAmount = amount - coin
      if (newAmount >= 0) {
        // 找到最少硬币数组
        newMin = this.makeChange(newAmount)
      }

      if (newMin && newAmount >= 0 && (newMin.length < min.length - 1 || !min.length) && (newMin.length || !newAmount)) {
        min = [coin].concat(newMin)
        console.log('min:', min)
        console.log('amount:', amount)
      }
    }
    cache[amount] = min
    console.log('cache:', cache)

    return cache[amount]
  }
}

const minCoins = new MinCoinsChange([1, 5, 10, 25])
console.log('minCoins:', minCoins)
minCoins.makeChange(36)
