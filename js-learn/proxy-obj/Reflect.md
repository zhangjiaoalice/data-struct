# Reflect
* Reflect 是js的一个内置对象（`全局对象`），提供了拦截js操作方法。这些方法和`Proxy handler` 的方法相同
* Reflect 不是一个函数对象, 不能使用new操作符实例化对象
* Reflect 所有的属性和方法都是静态的

# 静态方法
1. `Reflect.apply(targte, thisArgument, argumentsList)`: 对一个函数进行调用操纵，同时可以传入一个数组作为调用参数,类似于Function.prototype.apply()功能
    * target: 目标函数
    * thisArgument: target函数调用时绑定的this对象
    * argumentsList: 参数列表
2. `Reflect.construct(target, argumentsList,[newTarget])`: 对构造函数进行new操作, 相当于执行 `new target(...args)`操作，创建对象
    * target: 目标构造函数
    * argumentsList: 参数列表
    * newTrget: 作为创建对象的constructor属性
3. `Reflect.defineProptotype(target, propertyKey, attributes)`: 和`Object.defineProperty()` 类似，设置成功返回true
    * target: 目标对象
    * propertyKey: 属性名称
    * attribues: 需要定义或者修改的属性描述符
4. `Reflect.deleteProperty(target,propertyKey)`: 作为函数的delete 操作符,相当于执行 `delete target[name]` 操作
5. `Reflect.get(target, propertyKey,[reveiver])`: 获取对象某个属性
    * target: 目标对象
    * propertyKey: 需要获取的键值
    * reciver: 如果target对象中指定了getter, reciver则为getter调用时的this值
6. `Reflect.getOwnPropertyDescriptor(target, propertyKey)`: 类似于`Object.getOwnPropertyDescriptor()`, 如果对象中存在该属性，则返回该属性的属性描述符，否则返回undefined
7. `Reflect.getOwnPropertyOf（target`： 类似于`Object.getPropertyOf()`
8. `Reflect.has(target, propertyKey)`: 判断一个对象中是否存在某个属性, 和in操作符相同
9. `Reflect.isExtensible(target)`: 类似于`Object.isExtensible()`, 判断一个对象是否可扩展
10. `Reflect.ownKeys(target)`: 返回一个包含自身属性（不包含继承属性）的数组，类似于`Object.keys()`,但不受enumerable影响
11. `Reflect.preventExtensions(target)`: 返回一个Boolean， 类似于`Object.preventExtensions()`
12. `Reflect.set(target, propertyKey, value, [reciver])`: 将value分配给属性的函数
13. `Reflect.setPrototypeOf(target, prototype)`: 设置对象的原型

# VUE3 中使用 Reflect 解决了什么问题？
1. 在副作用函数中通过`原始对象`访问它的某个属性是不会建立响应联系的，只有代理对象是响应式数据，这样会导致当访问或者修改这个属性的时候不会触发响应（依赖收集和执行副作用函数）
2. 使用 Reflect.*(target, key, reciver) 接收的第三个参数就是`函数调用中的this指向`，通过 代理对象访问某个属性可以在响应式数据和副作用函数之间建立联系
