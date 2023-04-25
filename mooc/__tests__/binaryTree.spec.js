import { getBstValue, bstTree } from '../binary_tree'

describe('求二叉搜索树的第k小值', () => {
  test('getBstValue test', () => {
    expect(getBstValue(bstTree, 3)).toBe(4)
  })
})
