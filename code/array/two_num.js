/**
 * 两数之和:
 *  给定一个数组 nums 和 一个目标值 target， 输出数组nums中两个值和为target的下标数组
 */

// 复杂度分析: 时间复杂度 - O(n^2) 空间复杂度 - O(n)
export const addTwoNum = (nums, target) => {
  if (!nums || nums.length === 0) return []
  const tmp = new Set()
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const res = nums[i] + nums[j]
      if (res === target) {
        tmp.add(i)
        tmp.add(j)
      }
    }
  }
  return Array.from(tmp).sort()
}

/** 哈希表实现 */
// 复杂度分析 时间复杂度 - O(n) 空间复杂度 - O(n)
export const hashAddTwoNum = (nums, target) => {
  if (!nums || nums.length === 0) return []
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i]
    } else {
      map.set(nums[i], i)
    }
  }
}
