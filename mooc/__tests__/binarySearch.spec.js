import { binarySearch1, binarySearch2, binarySearchReview, binarySearchReview2 } from '../binary_search'

describe('二分法实现', () => {
  test('非递归测试', () => {
    expect(binarySearch1([1, 3, 5, 7, 9, 10], 7)).toBe(3)
    expect(binarySearch1([1, 3, 5, 7, 9, 10], 200)).toBe(-1)
  })

  test('递归测试', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 23, 33, 44, 55]
    expect(binarySearch2(arr, 7)).toBe(6)
    expect(binarySearch2(arr, 100)).toBe(-1)
  })

  test('test binarySearchReview', () => {
    expect(binarySearchReview([1, 3, 5, 7, 9, 10], 7)).toBe(3)
  })

  test('test binarySearchReview2', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 23, 33, 44, 55]
    expect(binarySearchReview2(arr, 7)).toBe(6)
    expect(binarySearchReview2(arr, 100)).toBe(-1)
  })
})
