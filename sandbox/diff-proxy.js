/**
 * 在不支持proxy的浏览器中，可以通过diff的方式实现沙箱
 * 在运行子应用时保存一个window的快照对象，将当前的window对象全部复制到这个快照对象中
 * 子应用卸载时将window对象和快照对象对象进行diff，将不同的属性保存下来，再次挂载的时候再添加上这些属性
 */

class DiffSandbox {
  constructor (name) {
    // 沙箱名称
    this.name = name
    // 记录修改过的属性
    this.modifiedProps = {}
    // window 的快照对象
    this.windowSnapshot = {}
  }

  /** 激活应用 */
  activeSandbox () {
    // 先清空快照对象
    this.windowSnapshot = {}
    // 拷贝window对象
    for (const key in window) {
      this.windowSnapshot[key] = window[key]
    }

    // 记录更改的属性
    Object.keys(this.modifiedProps).forEach(prop => {
      window[prop] = this.modifiedProps[prop]
    })
  }

  /** 卸载应用 */
  inactiveSandbox () {
    // 执行diff操作
    for (const key in window) {
      if (this.windowSnapshot[key] !== window[key]) {
        // 记录变更
        this.modifiedProps[key] = window[key]

        // 还原window对像
        window[key] = this.windowSnapshot[key]
      }
    }
  }
}

// diff 沙箱测试
const diffSandbox = new DiffSandbox('diff沙箱')
// 激活沙箱
diffSandbox.activeSandbox()
window.cat = '1'
console.log('激活沙箱', window.cat)

// 关闭沙箱
diffSandbox.inactiveSandbox()
console.log('关闭沙箱', window.cat)

diffSandbox.activeSandbox()
console.log('重新激活沙箱', window.cat)
