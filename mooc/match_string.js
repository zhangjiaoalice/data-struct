/** 判断字符串中的括号是否匹配
 * 字符串中可能包含的口号类型有 (), [], {}
 */

import e from 'express'

const isMatch = (left, right) => {
  if (left === '(' && right === ')') return true
  if (left === '{' && right === '}') return true
  if (left === '[' && right === ']') return true
  return false
}

/**
 * 复杂度分析: 时间复杂度 - O(n), 空间复杂度 - O(n)
 */
export const strMatchSymbols = (str) => {
  if (str.length === 0) return true
  const stack = []
  const leftSymbols = '({['
  const rigtSymbols = ')}]'

  for (let i = 0; i < str.length; i++) {
    const s = str[i]
    if (leftSymbols.includes(s)) {
      // 左括号
      stack.push(s)
    } else if (rigtSymbols.includes(s)) {
      // 右括号
      const top = stack[stack.length - 1]
      if (isMatch(top, s)) {
        stack.pop()
      } else {
        return false
      }
    }
  }
  return !(stack.length > 0)
}

function matchFn (top, right) {
  if (top === '(' && right === ')') return true
  if (top === '{' && right === '}') return true
  if (top === '[' && right === ']') return true
  return false
}

export function matchStringReview (str) {
  if (!str || str.length === 0) return false
  const leftSymbols = '({['
  const rightSymbols = ']})'
  const stack = []
  for (let i = 0; i < str.length; i++) {
    const s = str[i]
    if (leftSymbols.includes(s)) {
      // 入栈
      stack.push(s)
    } else if (rightSymbols.includes(s)) {
      const top = stack.pop()
      const isMatch = matchFn(top, s)
      if (!isMatch) {
        return false
      }
    }
  }
  return !(stack.length > 0)
}
