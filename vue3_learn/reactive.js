/**
 * vue3 响应式系统
 */

function getTargetType (type) {
  switch (type) {
    case 'Object':
    case 'Array':
      return 1
    case 'Map':
    case 'WeakMap':
    case 'Set':
    case 'WeakSet':
      return 2
    default:
      return 0
  }
}

/**
 * 生成实例化对象
 * @param {*} target 目标对象
 * @param {*} isReadonly 是否设置为只读对象
 * @param {*} baseHandlers 基本对象、数组 proxy handler 处理逻辑
 * @param {*} collectionHandlers 集合类型 proxy handler 处理逻辑
 * @param {*} proxyMap 是一个以原始对象为key，代理对象为 value的 WeakMap
 */
function createReactiveObject (target, isReadonly, baseHandlers, collectionHandlers, proxyMap) {}

function reactive () {
  return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap)
}
