import { moveZero1, moveZero2 } from '../move_zero'

describe('将数组中的0移动到数组末尾', () => {
  test('正常情况下', () => {
    const arr = [2, 7, 0, 11, 0, 5, 8, 0, 34, 22]
    expect(moveZero1(arr)).toEqual([2, 7, 11, 5, 8, 34, 22, 0, 0, 0])
  })

  test('连续0的情况', () => {
    const arr = [2, 7, 0, 0, 0, 0, 0, 34, 22]
    expect(moveZero1(arr)).toEqual([2, 7, 34, 22, 0, 0, 0, 0, 0])
  })

  test('没有0的情况', () => {
    const arr = [2, 7, 5, 34, 22]
    expect(moveZero1(arr)).toEqual([2, 7, 5, 34, 22])
  })

  test('正常情况下moveZero2', () => {
    const arr = [2, 7, 0, 11, 0, 5, 8, 0, 34, 22]
    expect(moveZero2(arr)).toEqual([2, 7, 11, 5, 8, 34, 22, 0, 0, 0])
  })

  test('连续0的情况moveZero2', () => {
    const arr = [2, 7, 0, 0, 0, 0, 0, 34, 22]
    expect(moveZero2(arr)).toEqual([2, 7, 34, 22, 0, 0, 0, 0, 0])
  })

  test('没有0的情况moveZero2', () => {
    const arr = [2, 7, 5, 34, 22]
    expect(moveZero2(arr)).toEqual([2, 7, 5, 34, 22])
  })
})
