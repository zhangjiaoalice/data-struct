/**
 * 防抖： 限制执行的次数，多次密集的输入只会触发执行一次
 * 场景： 输出框输入抖动
 */

// const debounce = (fn, delay = 200) => {
//   let timer = null
//   return function () {
//     if (timer) clearTimeout(timer) // 上一次操作还没执行完成，清除上一个次的定时器，重新开启新的定时器
//     timer = setTimeout(() => {
//       // 上一次操作执行完成了，执行函数
//       fn.allpy(this, arguments) // 透传this和参数
//       timer = null
//     }, delay)
//   }
// }

/**
 * 节流: 限制执行频率，有节奏的触发
 * 场景: 窗口、元素拖拽
 */
// const throttle = (fn, delay = 100) => {
//   let timer = null
//   return function () {
//     if (timer) return
//     timer = setTimeout(() => {
//       fn.allpy(this, arguments)
//       timer = null
//     }, delay)
//   }
// }

const blueList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
const redList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]
const map = new Map()

for (let i = 0; i < blueList.length; i++) {
  if (!map.has(blueList[i])) {
    let step = Math.floor(Math.random() * 33)
    let tmp = step > 27 ? redList.slice(step) : redList.slice(step, step + 6)
    map.set(blueList[i], tmp)
  }
}

console.log('map:', map)
