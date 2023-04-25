/**
 * 找到数组中重复的数字
 */
function findRepeatNum (nums) {
  if (!nums || nums.length === 0) return -1
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (!map.has(num)) {
      map.set(num, 0)
    } else {
      map.set(num, map.get(num) + 1)
    }
  }
  const arr = []
  map.forEach((val, key) => {
    if (val > 0) {
      arr.push(key)
    }
  })

  return arr
}

function findRepeatNum2 (nums) {
  var i = 0
  while (i < nums.length) {
    if (nums[i] === i) {
      i++
      continue
    } else {
      if (nums[nums[i]] === nums[i]) {
        return nums[i]
      }
      let temp = nums[i] // 两数交换
      nums[i] = nums[temp]
      nums[temp] = temp
    }
  }
}

function findRepeatNum3 (nums) {
  if (!nums || nums.length === 0) return -1
  let rightIndex = nums.length - 1
  let temp = -1
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    while (rightIndex >= 0) {
      if (num === nums[rightIndex]) {
        temp = num
      }
      rightIndex--
    }
  }
  return temp
}

const arr = [1, 1, 3, 4, 5, 6, 3, 2, 1, 3, 2]
const res = findRepeatNum3(arr)

console.log('res:', res)
