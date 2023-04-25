import { fibonacci } from '../fibonacci'

describe('斐波那契数列时间复杂度优化', () => {
  test('fibonacci test', () => {
    expect(fibonacci(1)).toBe(1)
    expect(fibonacci(2)).toBe(1)
    expect(fibonacci(3)).toBe(2)
    expect(fibonacci(5)).toBe(5)
    expect(fibonacci(22)).toBe(17711)
  })
})
