const handler = {
  get: function (obj, prop) {
    return prop in obj ? obj[prop] : 25
  }
}

const p = new Proxy({}, handler)
p.a = 1
p.b = undefined

console.log('a:', p.a)
console.log('b:', p.b)
console.log('c:', p.c)

// Symbol.unscopables
const property1 = 12
const object1 = {
  property1: 22
}

console.log('test 1:', property1)

object1[Symbol.unscopables] = {
  property1: true
}

/** 修改window属性的公共方法
 * @param prop 更新的属性名称
 * @param value 更新的属性值
 * @param isDel
*/
const updateWindow = (prop, value, isDel) => {
  if (value === undefined || isDel) {
    // 更新的值不存在或者需要删除该属性时, 从window对象上删除该属性
    delete window[prop]
  } else {
    // 更新window对象上对应的属性值
    window[prop] = value
  }
}

/** 基于Proxy 实现沙箱 - 单实例 */
class ProxySandbox1 {
  constructor (name) {
    this.name = name // 沙箱名称
    const fakeWindow = Object.create(null) // 沙箱上下文
    this.proxy = null // 沙箱上箱文对象代理对象
    // 记录新增的属性
    this.addedPropsMap = new Map()
    // 记录更新的属性
    this.updatedPropsMap = new Map()
    // 记录所有新增/更新的属性
    this.allChangePropsMap = new Map()
    const proxy = new Proxy(fakeWindow, {
      get (target, prop) {
        return target[prop]
      },
      set (target, prop, value) {
        if (!window.hasOwnProperty(prop)) {
          // 全局对象没有该属性，添加到沙箱中
          this.addedPropsMap.set(prop, value)
        } else if (!this.updatedPropsMap.has(prop)) {
          // window 对象中存在该属性，但是在沙箱中还没有更新属性
          const orgVal = window[prop]
          this.updatedPropsMap.set(prop, orgVal)
        }

        // 记录所有更新的属性
        this.allChangePropsMap.set(prop, value)
        // 更新window对象
        updateWindow(prop, value)
        return true
      }
    })
    this.proxy = proxy
  }
  /** 激活沙箱 */
  activeSandbox () {
    // 根据记录的属性变更记录更新window对像
    this.allChangePropsMap.forEach((val, prop) => updateWindow(prop, val))
  }

  /** 关闭沙箱 */
  inactiveSandbox () {
    // 将变更的属性重置
    this.updatedPropsMap.forEach((val, prop) => updateWindow(prop, val))
    // 删除所有新增的属性
    this.addedPropsMap.forEach((_, prop) => updateWindow(prop, undefined, true))
  }
}

/** 基于Proxy 实现沙箱 - 多实例 */
class ProxySandbox2 {
  constructor (name, context) {
    // 代理沙箱名称
    this.name = name
    // 共享上下文
    this.context = context
    // 代理对象
    this.proxy = null
    // 沙箱上下文对象
    const fakeWindow = Object.create({})
    // 沙箱激活状态
    this.sandboxRunning = true
    const proxy = new Proxy(fakeWindow, {
      get (target, prop) {
        // 优先使用共享对象
        if (Object.keys(this.context).includes(prop)) {
          return context[prop]
        }
        return target[prop]
      },
      set (target, prop, value) {
        if (this.sandboxRunning) {
          // 激活状态下更新属性
          if (Object.keys(this.context).includes(prop)) {
            // 更行共享上下文的属性
            context[prop] = value
          }
          target[prop] = value
        }
      }
    })
    this.proxy = proxy
  }

  /** 激活沙箱 */
  activeSandbox () {
    this.sandboxRunning = true
  }

  /** 关闭沙箱 */
  inactiveSandbox () {
    this.sandboxRunning = false
  }
}
