import { findPalindNum1, findPalindNum2, findPalindNum3 } from '../palind_num'

describe('找到数字从1-max所有回文子串', () => {
  test('findPalindNum1', () => {
    expect(findPalindNum1(20)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 11])
  })

  test('findPalindNum2', () => {
    expect(findPalindNum2(100)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 44, 55, 66, 77, 88, 99])
  })

  test('findPalindNum3', () => {
    expect(findPalindNum3(100)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 44, 55, 66, 77, 88, 99])
  })
})
