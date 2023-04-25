import { formate1, formate2 } from '../formate_num'

describe('js 实现数字千分位格式化', () => {
  test('转化为数组实现formate1', () => {
    expect(formate1(12050100)).toBe('12,050,100')
  })
  test('解析字符串实现formate2', () => {
    expect(formate2(12050100)).toBe('12,050,100')
  })
})
