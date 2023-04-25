import { reveserString, reverseStringArr } from '../reverser'

describe('字符串反转测试', () => {
  test('reveserString test', () => {
    expect(reveserString('hello world!')).toBe('olleh !dlrow')
  })
})

describe('字符串数组反转测试', () => {
  test('reveserString test', () => {
    expect(reverseStringArr(['h', 'e', 'l', 'l', 'o'])).toEqual(['o', 'l', 'l', 'e', 'h'])
  })
})
