import countString from '../countString'

describe('计算子串测试用例', () => {
  test('countString method test', () => {
    expect(countString('00110011')).toEqual(['0011', '01', '1100', '10', '0011', '01'])
  })
})
