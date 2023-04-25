import { findTwoNumber1, findTwoNumber2, hasMap } from '../findTwoNum'

describe('两数之和测试', () => {
  test('暴力解法测试', () => {
    expect(findTwoNumber1([1, 22, 3, 4, 21, 11, 7], 7)).toEqual([3, 4])
  })

  test('双指针', () => {
    expect(findTwoNumber2([1, 3, 5, 7, 9, 8, 10], 8)).toEqual([1, 7])
  })

  test('哈希表', () => {
    expect(hasMap([1, 3, 5, 7, 11, 23, 12], 23)).toEqual([11, 12])
  })
})
