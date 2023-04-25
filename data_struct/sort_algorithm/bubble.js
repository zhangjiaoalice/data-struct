/**
 * 冒泡排序
 * 冒泡排序是排序算法的基础,双层循环：
 * 内循环: 比较相邻两个元素，左边元素大于右边元素时交换两个元素的位置
 * 外循环: 每伦循环将当前最大元素交换至剩余未排序数组的最右边，直至所有元素都被交换至正确的位置
 * 时间复杂度: O(n^2)
 */
function bubbleSort (nums) {
  if (!nums || nums.length === 0) return nums
  const len = nums.length
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (nums[j] > nums[j + 1]) {
        let tmp = nums[j]
        nums[j] = nums[j + 1]
        nums[j + 1] = tmp
      }
    }
  }
}

function bubbleSortOptimize (nums) {
  if (!nums || nums.length === 0) return nums
  const len = nums.length
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (nums[j] < nums[j + 1]) {
        let tmp = nums[j]
        nums[j] = nums[j + 1]
        nums[j] = tmp
      }
    }
  }
}

const arr = [2, 4, 56, 22, 1, -2]
bubbleSort(arr)
const arrOp = [3, 4, 1, -23, -1, 67, 25]
bubbleSortOptimize(arrOp)
console.log('bubbleSort:', arr)
console.log('bubbleSortOptimize:', arrOp)
