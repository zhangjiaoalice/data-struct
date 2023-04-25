import { swicthLetterCase1, switchLetterCase2 } from '../switchLetterCase'

describe('切换字母大小', () => {
  test('使用正则表达式', () => {
    expect(swicthLetterCase1('hh233BcDFaa#4')).toBe('HH233bCdfAA#4')
  })
  test('使用ASCII码判断', () => {
    expect(switchLetterCase2('hh233BcDFaa#4')).toBe('HH233bCdfAA#4')
  })
})
