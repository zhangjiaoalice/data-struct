import { consecutiveStr1, consecutiveStr2 } from '../consecutive_char'

describe('找出字符串中连续最多的字符串子串，及出现的次数', () => {
  test('传统解法，循环+跳步', () => {
    expect(consecutiveStr1('aabbcccddddeeeeeeee2323eee')).toEqual({
      subStr: 'e',
      subLen: 8
    })

    expect(consecutiveStr1('')).toEqual({})

    expect(consecutiveStr1('1234567')).toEqual({
      subStr: '1',
      subLen: 1
    })
  })
  test('双指针', () => {
    expect(consecutiveStr2('aabbcccddddeeeeeeee2323eee')).toEqual({
      subStr: 'e',
      subLen: 8
    })

    expect(consecutiveStr2('')).toEqual({})

    expect(consecutiveStr2('1234567')).toEqual({
      subStr: '1',
      subLen: 1
    })
  })
})
