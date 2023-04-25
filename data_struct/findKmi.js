/**
 * 查找第k小值
 */
var getLeastNumbers = function (arr, k) {
  if (arr.length < k) return arr

  const quickSort = (l, r) => {
    let i = l; let j = r
    while (i < j) {
      while (i < j && arr[j] >= arr[l]) j -= 1
      while (i < j && arr[i] <= arr[l]) i += 1;
      [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    [arr[l], arr[i]] = [arr[i], arr[l]]
    if (k < i) {
      return quickSort(l, i - 1)
    } else if (k > i) {
      return quickSort(i + 1, r)
    } else {
      return arr.slice(0, k)
    }
  }

  return quickSort(0, arr.length - 1)
}
