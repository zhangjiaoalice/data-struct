import { reverseArrMethod1, reverseArrMethod2, reverseReview } from '../arr_reverse'

describe('将一个数组反转k步', () => {
  test('数组反转k步', () => {
    expect(reverseArrMethod1([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([5, 6, 7, 1, 2, 3, 4])
  })
  test('方法二', () => {
    expect(reverseArrMethod2([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([5, 6, 7, 1, 2, 3, 4])
  })

  test('review', () => {
    expect(reverseReview([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([5, 6, 7, 1, 2, 3, 4])
  })
})
