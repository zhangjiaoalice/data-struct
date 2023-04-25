import { commonDivisor, classifyFun } from '../classifyCard'

describe('卡牌组合问题', () => {
  test('求两数的最大公约数', () => {
    expect(commonDivisor(6, 9)).toEqual(3)
  })
  test('分组结果测试', () => {
    expect(classifyFun([1, 2, 1, 2, 3, 3])).toEqual(true)
  })
})
