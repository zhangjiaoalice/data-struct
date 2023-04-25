import { addTwoNum, hashAddTwoNum } from '../two_num'

describe('两数之和 暴力破解法', () => {
  test('test 1', () => {
    expect(addTwoNum([1, 2, 3, 4, 5], 5)).toEqual([0, 1, 2, 3])
  })

  test('test 2', () => {
    expect(addTwoNum([3, 3], 6)).toEqual([0, 1])
  })

  test('test 3', () => {
    expect(addTwoNum([-1, -2, -3, -4], -3)).toEqual([0, 1])
  })

  test('test 4', () => {
    expect(addTwoNum([-1, -2, -3, -4, -5], -8)).toEqual([2, 4])
  })
})

describe('两数之和 哈希表', () => {
  test('test 1', () => {
    expect(hashAddTwoNum([1, 2, 3, 4, 5], 5)).toEqual([1, 2])
  })

  test('test 2', () => {
    expect(hashAddTwoNum([3, 3], 6)).toEqual([0, 1])
  })

  test('test 3', () => {
    expect(hashAddTwoNum([-1, -2, -3, -4], -3)).toEqual([0, 1])
  })

  test('test 4', () => {
    expect(hashAddTwoNum([-1, -2, -3, -4, -5], -8)).toEqual([2, 4])
  })
})
