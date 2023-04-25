import numCombination from '../numCombination'

describe('电话号码字母组合', () => {
  test('numCombination method test', () => {
    expect(numCombination('23')).toEqual(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'])
  })
  test('numCombination method', () => {
    expect(numCombination('2')).toEqual(['a', 'b', 'c'])
  })
})
