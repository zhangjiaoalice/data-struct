import { strMatchSymbols, matchStringReview } from '../match_string'

describe('括号匹配', () => {
  test('strMatchSymbols', () => {
    expect(strMatchSymbols('{abc}sd(ss)')).toEqual(true)
  })
  test('match string review', () => {
    expect(matchStringReview('{abc}sd(ss)')).toEqual(true)
  })
})
