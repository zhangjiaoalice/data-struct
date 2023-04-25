export const reveserString = (s) => {
  return s.split(' ').map(item => item.split('').reverse().join('')).join(' ')
}

export const reverseStringArr = (s) => {
  let tmp = null
  for (let i = 0, j = s.length - 1; i < s.length / 2; i++, j--) {
    console.log('s[i]:', i, s[i])
    console.log('s[j]:', j, s[j])
    tmp = s[i]
    s[i] = s[j]
    s[j] = tmp
  }
  return s
}
