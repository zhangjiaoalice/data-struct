/**
 * Ajax、Fetch、Axios 之间的区别
 * Ajax: 一种网络请求技术的统称
 * Fetch: 浏览器原声API， 用于网络请求，支持promise，和XMLHttpRequest 是一个级别的
 * Axios: 网络请求的第三方库, 底层可以通过XMLHttpRequest构造函数或者fetch api 实现
 */

// 使用XMLHttpRequest 实现ajax

const ajax1 = (url, successFn) => {
  // eslint-disable-next-line no-undef
  const xhr = new XMLHttpRequest()
  xhr.open('GET', url, false)
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        // 请求成功
        successFn(xhr.responseText)
      }
    }
  }
  xhr.send(null)
}

// 使用fetch api 实现ajax
const ajax2 = (url) => {
  // eslint-disable-next-line no-undef
  return fetch(url).then(res => res.json())
}
