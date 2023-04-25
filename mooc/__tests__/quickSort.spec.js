import { quickSort1, quickSort2 } from '../quick_sort'

describe('快速排序', () => {
  test('使用splice获取中间值', () => {
    expect(quickSort1([2, 3, 3, 555, 656, -2, 423, 3323, 67, 8])).toEqual([-2, 2, 3, 3, 8, 67, 423, 555, 656, 3323])
    expect(quickSort1([])).toEqual([])
    expect(quickSort1([22, 3, 4, 12, 55, 88, 6, 33, 9, 0, 4])).toEqual([0, 3, 4, 4, 6, 9, 12, 22, 33, 55, 88])
  })
  test('使用slice获取中间值', () => {
    expect(quickSort2([2, 3, 3, 555, 656, -2, 423, 3323, 67, 8])).toEqual([-2, 2, 3, 3, 8, 67, 423, 555, 656, 3323])
    expect(quickSort2([])).toEqual([])
    expect(quickSort2([22, 3, 4, 12, 55, 88, 6, 33, 9, 0, 4])).toEqual([0, 3, 4, 4, 6, 9, 12, 22, 33, 55, 88])
  })
})
