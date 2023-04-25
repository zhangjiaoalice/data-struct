function findMissingNum (arr) {
  if (!arr || arr.length === 0) return -1
  for (let i = 0; i < arr.length; i++) {
    if (i > 0 && arr[i + 1] - arr[i] > 1) {
      return arr[i] + 1
    }
  }
}

const arr = [1, 2, 4, 5]
const arr2 = [0, 1, 2, 3, 4, 5, 6, 7, 9]
const res = findMissingNum(arr2)
console.log('缺失的内容：', res)
