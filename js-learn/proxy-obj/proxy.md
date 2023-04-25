# Proxy
Proxy 构造函数用于创建一个对象的代理对象，从而实现基本的拦截和定义(属性读取、赋值、函数调用、枚举等)

# 理解代理的含义
* 代理是指对一个对象`基本语意`的代理。它允许我们拦截并重新定义一个对象的基本操作
* 对象的实际语意是由对象`内部的方法`指定的
* `内部方法`: 指的是当我们对一个对象进行操做时在引擎内部调用的方法，这些方法对js使用者来说是不可用的
    * [[GetPrototypeOf]]
    * [[SetProrotypeOf]]
    * [[IsExtensible]]
    * [[PreventExtensible]]
    * [[GetOwnProperty]]
    * [[DefineOwnProperty]]
    * [[HasProperty]]
    * [[Get]]
    * [[Set]]
    * [[Delete]]
    * [[OwnPropertyKeys]]
    * [[Call]]
    * [[Construct]]

# 工作原理
1. 对象的分类？
    * 常规对象
        - 内部方法必须使用ECMA规范的10.1.x给出的定义实现
        - 内部方法[[Get]], 必须使用ECMA规范 10.2.1 给出的定义实现
        - 内部方法[[Construct]], 必须使用ECMA规范10.2.2 节给出的定义实现
    * 异质对象
2. 创建代理对象时指定的拦截函数，实质上是用来定义代理对象内部本身的方法和行为的，而不是用来指定被代理对象内部方法和行为的

# 如何代理对象
1. 拦截读取操作
    * 访问属性: 使用 get 拦截函数实现, `handler.get(target, key, reciver)` 、 `Reflect.get(target, key, reciver)`
    * in操作符(判断对象或者对象原型上是否存在某个属性)的拦截: 使用 has 拦截函数实现 `handler.has(target, key)` 、 `Reflect.has(target, key)`
    * for...in (循环遍历对象) 的拦截： 使用ownKeys拦截函数实现 `handler.ownKeys(target)`、 `Reflect.ownKeys(target)`
2. 拦截设置操作
    * 通过 set 拦截函数实现, `handler.set(target, key, val, reciver)`、 `Reflect.set(target, key, val, reciver)`
3. 拦截属性删除操作
    * 通过 deleteProperty 拦截函数实现, `handler.deleteProperty(target, key)`、 `Reflect.deleteProperty(target, key)`
# 如何代理数组
1. 数组和普通对象的区别
    * 数组是一个异质对象，数组内部的[[DefineOwnProperty]] 方法和普通对象的不同, 其他内部方法和其他常规对象的逻辑都是先通的
    * 通过索引设置对象属性值与设置普通对象属性值存在根本上的不同，设置对象属性或者数组属性值时会调用内部[[Set]] 方法， 但是内部[[Set]] 方法的实现依赖于[[DefindOwnProperty]]
2. 数组的读取操作:
    * 通过索引获取对应元素的值 arr[0]
    * 通过length属性访问数组长度
    * 把数组作为对象通过for...in 进行访问
    * 使用for...of 遍历数组
    * 数组的原型方法 concat/join/every/some/find/findIndex/includes...
        - 重写数组的原型方法,原理`先去代理对象中查找，如果找不到再去原始数组中查找`
3. 数组的设置操作
    * 通过索引更改数组对应下标的值 arr[0] = 1
        - 当通过索引值设置元素属性值时，可能会隐式的修改length属性的值，多亿当出发响应时，也应该出发与length属性相关的副作用函数重新执行,在实现Set拦截时通过判断设置的索引值是否小于length 属性从而对操作类型进行判断，如果小于则试为SET操作，否则视为ADD操作
    * 修改数组长度 arr.length = 2
    * 修改原数组的方法 splice/fill/sort
    * 数组栈方法 pop/push/shift/unshift

# 如何代理 Map 和 Set

