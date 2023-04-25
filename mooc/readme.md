# Ajax、Fetch、Axios
1. `Ajax`: 一种技术统称，无刷新快速创建动态网页的技术,可以实现异步更新
    * 原理: 客户端发送请求，请求交给xhr对象，xhr对象接收数据，由javascript把数据写到页面桑
```!javascript
    const xhr = new XMLHttpRequest()
    xhr.open("GET", url, true)
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200) {
            ...
        }
   
    }
    xhr.send()
```

2. `Fetch`: 一个具体的API,提供了fetch()方法，可以对远程资源发起请求
    * XMLHttpRequest对象的Api设计的并不是很好，输入、输出、状态都在同一个接口中进行管理，容易出现代码混乱
    * Fetch api 提供一种新的规范，用来取代不完善的XMLHttpRequest对象
    * 特点:
        * 接口合理化，AJAX将所有不同性质的接口放在XHR对象上,fetch 将他们分散在不同的对象上，设计更合理
        * Fetch 操作返回Promise对象，避免了嵌套的回调函数

3. `Axios`: 第三方库, 是一根 基于promise的网络请求库， 本质上是对XMLHttpRequest的封装
    * 特点:
        * 从浏览器创建XMLHttpRequests
        * 从node.js创建http请求
        * 支持Promise api
        * 拦截请求和响应
        * 转换请求和响应
        * 取消请求
        * 自动转换JSON数据
        * 客户端支持防御XSRF

# 节流和防抖
节流和防抖作为页面性能优化的一种策略，可以降低回调函数的执行频率，节省计算资源，能有减少浏览器引擎的损耗，防止出现页面卡顿现象
## 节流函数
`限制一个动作在一段时间内只执行一次`

1. 应用场景:
    * drag、scroll事件，每个2s计算一次位置信息
    * 监听浏览器窗口 resize 时间，避免窗口缩放时造成过多极端，需要防抖函数

```!javascript
function throttle(fn, delay) {
    let timre = null
    return () => {
        if(tiemr) return 
        tiemr = setTimeout(() => {
            fn.apply(this, arguments)
            timer = null
        }, delay)
    }
}
```

## 防抖函数
`当一个动作连续触发，只执行最后一次动作`

1. 应用场景:
    * 登陆，支付等按钮为避免用户点击太快，以致于发送多次请求，需要防抖函数
    * 输入框实时搜索的场景
2. 实现：
```!javascript
function debounce(fn, delay) {
    let timer = null
    return () => {
        if(tiemr) {
            clearTimeout(tiemr)
        }
        tiemr = setTimeout(() => {
            fn.apply(this, arguments)
            timer = null
        }, delay)
    }
}
```

# px、%、em、rem、vw/vh 之间的区别
1. `px`: 基本单位，绝对单位
2. `%`: 相对于父元素
3. `em`: 相对于当前元素的font-size
4. `rem`: 相对于根节点的font-size，用来做手机端不同宽度的匹配的，可通过`@media`来匹配不同的元素
5. `vw/vh`: 相对于屏幕宽度/高度的 1%
    * vmin: vw 和 vh 之间的最小值
    * vmax： vw 和 vh 之间的最大值

# 箭头函数
1. 箭头函数有什么缺点?
    * 没有 `arguments`
    * 无法通过 call、apply、bind 来改变箭头函数的this，`箭头函数的this是固定的， 使用的父作用域的this，不是在调用的时候动态确定的`
    * 某些箭头函数的代码难以阅读
2. 什么时候不能使用箭头函数？
    * 不适用对象方法
    * 不适用原型方法
    * 不适用构造函数, `箭头函数不能作为构造函数使用`
    * 不适用`动态上下文`中的回调函数
    * vue 的生命周期 和 method, `vue 本质上是个对象`

# TCP
`传输控制协议(Transimission Control Protocol)`: 是一种面向连接的、可靠的、基于字节流的传输通信协议
1. TCP 为什么可靠？
* 针对数据报文丢失的情况，TCP提供了`重传机制`; 
2. TCP 协议的一些规定:
    * `数据分片`: 在发送端对用户数据进行分片，在接收端进行重组，由TCP确定分片的大小并控制分片重组
    * `到达确认`: 接收端接受到分片数据时，根据分片数据序号向发送端发送一个确认
    * `超时重发`: 发送端在发送分片数据时启动超时定时器，如果定时器超时之后没有收到相应的确认，重发分片
    * `滑动窗口`: TCP 链接每一方的接收缓冲空间的大小都是固定的，接收端只允许另一端发送 接收端 缓冲区能接纳的数据，TCP在滑动窗口的基础上提供了流量控制，防止较快主机 致使 较慢主机 的缓冲区溢出
    * `失序处理`: 作为IP数据报来传输的TCP分片会发生重复，TCP的接收端必须丢弃重复的数据
    * `重复处理`: 作为ip数据报来传输的TCP分片到达时可能会失序，TCP将对收到的数据进行重新排序，将收到的数据以正确的顺序交给应用层
    * `数据校验`: TCP将检验它的首部和数据在传输过程中的变化。如果收到的分片校验有问题会丢弃这个分片，并不确认收到此段报文段对前端的超时并重发
3. 三次握手
4. 四次挥手

# for...in 和 for...of
1. key 和 value 不同
    * `for...in`: 遍历得到 key/index
    * `for...of`: 遍历得到 value
2. 适用于不同的数据类型
    * `遍历对象`: for...in 可以, for...of 不行
    * `遍历Map、Set`: for...of 可以, for...in 不可以
    * `遍历 generator`: for...of可以, for...in 不可以
3. 可枚举 vs 可迭代
    * for...in 用于可枚举数据，如数组、对象、字符串 (enumerabel)
    * for...of 用于可迭代数据，如数组、字符串、Map、Set (iterator)

# js中for await...of有什么作用?
* `for await...of` 用于遍历多个 promise
```!javascript
function createPromise(val) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(val)
        }, 1000)
    })
}

(async function() {
    const p1 = createPromise(100)
    const p2 = createPromise(200)
    const p3 = createPromise(300)

    <!-- const res1 = await p1
    const res2 = await p2
    const res3 = await p3 -->

    for await (let res of [p1, p2, p3]) {
        console.log(res)
    }
})
```

# offsetHeight、scrollHeight、clientHeight 的区别

1. css 弹性盒模型:
    * width
    * height
    * padding
    * border
    * margin
    * box-sizing
2. offsetHeight / offsetWidth = border + padding + content
3. clientHeight / clientWdith = padding + cotent
4. scrollHeight / scrollWidth = padding + 实际内容尺寸

# HTMLCollection 和 NodeList 的区别
1. Node 和 Element
    * DOM是一颗树，所有节点都是Node
    * Node 是Element 的基类
    * Element 是其他HTML 元素的基类，如HTMLDivElement
```!javascript
class Node {}

// document
class Document extends Node{}
class DocumentFragment extends Node{}

// 文本和注释
class CharacterData extends Node{}
class Comment extends CharacterData {}
class Text extends CharacterData {}

// element
class Element extends Node {}
class HTMLElement extends Element{}
class HTMLDivElement extends HTMLElement{}
class HTMLInputElement extends HTMLElement{}
```
2. 获取Node 和 Element 的返回结果可能不一样
3. 如 elem.childNodes 和 elem.children 不一样
    * elem.childNodes 是 NodeList类型
    * elem.children 是 HTMLCollection 类型
4. NodeList 包含了Text 和Comment节点，HTMLCollection 没有包含
5. 都是类数组，不是真正的数组(类数组转换为数组的方式:)
    * Array.from(list)
    * Array.prototype.slice.call(list)
    * [...list]

# vue 中 Computed 和 Watch 的区别
1. 用途不同：
    * `computed`: 用于计算产生新的数据
    * `watch`: 用于监听数据
2. 缓存:
    * `computed`: 有缓存
    * `watch`: 没有缓存

# vue 组件通信的几种方式
1. props 和 $emit
2. 自定义事件 Event bus （event-emitter 第三方库）
    * 在 vue2 中，可以通过 `const bus = new Vue()` 创建一个事件中心
    * 在 vue3 里面，需要引入第三方的自定义事件库 (event-emitter)
3. $attrs
    * 使用场景：父子组件之间的通信，在子组件中获取父组件传递的属性
    * vue3 中将 $listeners 合并到了$attrs中

4. $parent 指向父组件 && $refs 指向子组件
    * vue 2中是 $parent 和 $children
    * vue 3中是 $parent 和 $refs
5. provide/inject
6. Vuex


# Vuex 中 mutation 和 action 的区别
1. `mutation`: 原子操作，必须是同步代码
2. `action`: 可包含多个 mutation, 可包含异步代码

# JS 严格模式有什么特点
1. 特点
    * 全局变量必须先声明
    * 禁止使用with
    * 创建 eval 作用域
    * 禁止 this 指向window， 严格模式下普通函数的this指向是undefined
    * 函数参数不能重名

# HTTP跨域请求时为何要发送options请求？
## 同源策略
* 同源策略一般会限制Ajax 请求, 不能跨域请求server
* 不会限制<img>、<link>、<script>、<iframe> 加载第三方资源

## 为什么会发起options请求？
* options 请求是跨域请求之前的预检查
* 是由浏览器自行发起的，无需我们干预
* 不会影响实际的功能

# JS 垃圾回收(GC)使用什么算法
1. 什么是垃圾回收？
回收哪些函数已经执行完成了，再也用不到的一些对象或数据
2. 垃圾回收算法
    * 引用计数(之前js引擎) 
        * 主要记录某个对象被引用的次数，当引用的次数为1时就清除当前的对象，存在引用就保留
        * 存在循环引用的的数据无法清除的缺陷
    * 标记清除(现代js引擎)
        * 从window 逐步开始向下遍历，如果能找到某个属性那个就保留，找不到就清除
```!javascript
// 循环引用
function fn3() {
    const obj1 = {}
    const obj2 = {}
    obj1.a = obj2
    obj2.a = obj1
}
fn3()

// IE6-7 内存泄漏的bug
var div1 = document.getElementById('div1')
div1.a = div1
```

# JS 闭包是内存泄漏吗
闭包中的数据是不能被垃圾回收，但这是这种情况是在我们的意料之中的情况，合理的使用不会导致内存泄漏，但是滥用可能会导致内存泄漏

# 如何检测JS内存泄漏
1. 检测内存变化
使用 `performace`

# JS 内存泄漏的场景有哪些？
1. 被全局变量、函数引用，组件销毁时未清除（vue）
2. 被全局事件、定时器引用，组件销毁时未清除
3. 被自定义事件引用，组件销毁时未清除
4. WeakMap 和 WeakSet
    * WeakMap 的 key 只能是引用类型，不能是值类型

# 浏览器 和 nodejs 事件循环
## 单线程和异步
1. js是单线程的
2. 浏览器中js执行和DOM渲染共用一个线程，是互斥的
3. 异步

## 宏任务和微任务




# 虚拟DOM(vnode) 真的很快吗

1. vdom 并不快，js直接操作dom才是最快的
2. 但是数据驱动视图要有合适的技术方案，不能将DOM每次都销毁再重建，每次只更新变化的部分效率更高
3. vdom 是目前最合适的技术方案，斌不是因为它快，而是因为它比较合适

# 遍历数组 for 和 forEach 哪个更快？
1. for 会更快
2. forEach 每次都要创建一个行数来调用，而for不需要创建函数
3. 函数需要独立的作用域，会有额外的开销
4. 越 `低级` 的代码，往往性能越好
5. 日常开发使用forEach的可读性会更好一些

# node 如何开启进程，进程之间如何通信？

## 进程（process）与线程（thread）
1. 进程： os进行资源分配和调度的最小单位，有独立的内存空间
2. 线程： os进行运算调度的最小单位，多个线程共享一个进程的内存空间

3. JS 是单线程的，但是可以开启多进程，如webWorker

## 为何需要多进程？
1. 多核CPU,更适合处理多进程
2. 内存较大，多个进程才能更好的利用(单进程有内存上限)
3. 总之，“压榨”机器资源，更快更节省

## 如何开启多进程
1. 可以通过`process.pid` 获取当前进程的ID
2. 浏览器中开启多进程的方式： `webWorker`
3. node 中开启多进程的方式:
    * `fork`: 适用于单个计算
    * `cluster`： 集群
```!node
// 主进程 (index.js) - fork 方式
const http = require('http')
const fork = require('child_process').fork

const server = http.createServer((req, res) => {
    if(req.url === '/get-sum') {
        console.info("主进程 id", process.pid)

        // 在主进程中开启子进程
        const computeProcess=fork('./computed.js')
        // 通信
        computeProcess.send('可以开始计算')

        computeProcess.on('message', data => {
            console.log('接受到子进程的信息')
            res.send('sum is' + data);
        })

        computeProcess.on('close', () => {
            console.log('子进程内部出错而退出了')
            computeProcess.kill()
            res.end('error')
        })

        res.send('hello node')
    }
})
server.listen(3000, () => {
    console.log('running...')
})

// 子进程 computed.js
function getSum () {
    let sum = 0;
    for(let i = 0; i < 10000; i++) {
        sum += i
    }
    return sum;
}

process.on('message', data => {
    console.log('子进程的id:', process.pid)

    const sum = getSum()

    // 发送消息给主进程
    process.send(sum)
})
```
`cluster的方式开启多进程, 根据cpu的核数创建子进程`
```!node
// cliuster.js
const http = require('http')
const os = require('os')
const cluster = require('cluster')
// cpu 核数
const cpuCoreLength = os.cpus().length

if(cluster.isMater) {
    // 主进程, 不开启服务
    for(let i = 0; i < cpuCoreLength; i++) {
        // 根据cpu核数开启子进程
        cluster.fork(); // 开启子进程
    }

    cluster.oon('exit', workder => {
        console.log('子进程退出')，
        cluster.fork(); // 进程守护
    })
} else {
    // fork出来的子进程，提供服务
    // 多个子进程会共享一个tcp链接，提供一个份网络服务
    const server = http.createServer((req, res) => {
        res.writeHead(200);
        res.end('done')
    })

    server.listen(3000, () => {
        console.log('server running...')
    })
}
```

```pm2 npm 包可以提供进程守护的服务```
3. 可以使用`send` 和 `on` 来进行通信


# 坐标
1. 客户端坐标： clientX、clientY，浏览器窗口中的坐标
2. 页面坐标： pageX、pageY
3. 屏幕坐标: screenX, screenY

# 事件处理程序的内存与性能
1. 在js中事件处理程序的数量和页面整体性能直接相关，首先每个函数都是对象，对象越多性能越差，其次为指定时间处理程序所需访问dom的次数会先期造成整个页面交互的延迟，只要使用时间处理程序时多注意方法就可以改善页面的性能
2. `事件委托`: 利用事件冒泡,针对过多事件处理程序的一种方案,利用事件委托，可以使用一个事件处理程序来管理一种类型的事件（只给document对象添加一个事件处理程序，通过它处理页面中所有元素的某种类型的事件），优点：
    * document对象可以随时使用，任何时候都可以给它添加事件处理程序（不用等改DOMContentLoaded 或 load事件）。这意味着只要页面渲染出可点击元素，就可以无延迟的使用
    * 节省花在设置页面事件处理程序上的时间，只需要指定一个事件处理程序就可以节省时间
    * 减少整个页面所需的内存，提升整体的性能
2. `删除事件处理程序`: 及时删除不使用的事件，很多web性能不佳都是由于一些无用事件处理程序长期占用内存导致的

# 请描述JS Bridge 的原理

### 什么是 js Bridge
1. js 无法直接调用 native API
2. 需要通过一些特殊的 `格式` 来调用
3. 这些 `格式` 同称为JS-Bridge， 例如微信 JSDDK
4. js-Bridge 将 Native 提供的能力进行封装，然后js 进行调用

### JS-Bridge 常见的实现方式
1. 注册全局 API 的方式: 适用于简单的数据，不适用于异步的情况
2. URL Scheme(定义一个协议标准，然后让webview 和 APP 通过协议进行通信): 适用于所有的情况

##  关于React fiber
1. react Fiber => 将vnode 转换为 `链表` 从而实现分段渲染
2. 转换为链表之后，渲染可以暂停，先执行更高优先级的任务，空闲时再继续执行渲染
3. 如何判断cpu空闲？ => 使用 requestIdleCallback 渲染完成后，cpu空间时执行

# requestIdleCallback 和 requestAnimationFrame 的区别
1. `requestIdleCallback`: 渲染完成之后，cpu空闲时才执行,是低优先级的
2. `requestAnimationFrame`: 每次渲染完成都会执行，高优先级
    * 网页刷新频率 60帧/秒 大概是 每次间隔 16.6ms 去渲染一次 (理想情况下的渲染频率)

3. requestIdleCallback 和 requestAnimationFrame 都是宏任务，都是在dom渲染完成之后才执行

# vue 每个生命周期都做了什么？
1. `breforeCreate`
    * 会创建一个空的 Vue 实例
    * 这个阶段的 data, method 都尚未被初始化，不可使用
2. `created`
    * Vue 实例创建完成，完成响应式绑定
    * data，method 都已经初始化完成，可以调用
    * 尚未开始渲染模板，可以处理一些和页面渲染无关的逻辑
3. `beforeMount`:
    * 在这个阶段会编译模板，执行renderer(渲染器),生成vdom
    * 还没有开始渲染dom，还没有将vdom转换为真实dom
4. `mounted`
    * 完成dom渲染，虚拟dom 转化为真实dom， 可以在这个阶段访问到真实dom
    * 组件创建完成
    * 开始由 "创建阶段" 进入 “运行阶段“
5. `beforeUpdate`
    * data 发生变化之后
    * 准备更新dom但是还没有更新dom
6. `updated`
    * data 发生变化之后，DOM 更新完成
    * `不要在 updated中 修改data, 可能会导致死循环`
7. `beforeUnmount`
    * 组件进入销毁阶段，但是还没销毁，可以正常使用
    * 可以在这个阶段中移除、解绑一些全局事件、自定义事件
8. `unmounted`
    * 组件被销毁
    * 所有的自组件也都被销毁了
9. `onActived`: 缓存组件被激活
10. `onDeactivated`: 缓存组件被隐藏

# vue 什么时候操作DOM比较合适？
1. mounted 和 updated 都不能保证子组件全部挂载完成
2. 所以我们需要使用 `$nextTick` 来操作真实的DOM

# Ajax 可以放在哪个生命周期
1. 有两个选择 `mounted` 和 `created` 里面
2. 推荐 `mounted`

# vue 3 Composition api 的生命周期有什么区别？
1. 使用 setup 代替了 breforeCreate 和 created 生命周期函数
2. 使用 hooks 的形式，如 mounted => onMounted()


# 0.1 + 0.2 为什么不等于0.3
1. js 中所有的计算都是以二进制的方式进行计算的
2. 当计算 0.1 + 0.2 时需要将0.1 和 0.2 都转换成 二进制， 0.1，0.2 转成二进制时无穷的
3. 现代浏览器中都是用浮点数形式的二进制来存储而精致，所以还需将 0.1， 0.2 转化的二进制再转换成浮点数形式的二进制数据
4. 转换过程中发生了两次精度丢失


# rollup、webpack、esbuild 之间的区别
1. `rollup` 是一个模块打包器，而webpack是一个模块打包工具，着意味着webpack支持打包更多类型的文件包括可以loader处理图像、字体
2. `Rollup` 的打包速度更快，更小巧，专注于打包js模块，webpack打包速度慢，因为webpak 需要处理的文件类型更多
3. `Rollup` 使用 tree-shaking 机制删除未使用的代码，webpack 同样支持tree-shaking
4. `Rollup` 具有更少的配置选项，更易使用
5. `esbuild` 是一个快速的js打包器，可以解析js但是不能运行js


# webpack tree-shaking
tree-shaking 只保留有用的代码, 但是 `dead code` 依然存在，使用插件 `webpack-bundle-analyzeer`、`webpack-deadcode-plugin`

# vue2、vue3 和react 之间diff算法的区别是什么？

## diff 算法
1. diff 算法很早就有了
2. diff 算法应用广泛，例如 github 的 pull Request 中的代码diff
3. 如果要严格diff两颗树，事件复杂度是O(n^3) ，是不可用的

## tree diff 的优化(优化后的时间复杂度是 O(n))
1. 只比较同一层级的，不跨级进行比较
2. tag 不通就删掉重建(不在去比较内部的细节)
3. 子节点通过key进行区分，通过key找出可复用的节点让后进行patch

## 比较不同点
1. react diff 算法:
    * oldNode 仅右移，仅往右边移动，不往左边移动

2. vue2 diff 算法：
    * 双端diff算法

3. vue3 diff 算法
    * 快速diff算法
    * 前置/后置节点预处理
    * 最长递增子序列

# vue、react 循环时为何必须要使用key？
1. vdom diff算法中会根据key值判断元素是否可以进行复用，或者是新增元素、可删除元素
2. 新旧dom树中key相同的vnode可以服用，只需要进行patch和DOM移动操作进行更新
3. 没有匹配到的key就新增或者删除就可以了
4. 销毁重建的性能差

# vue-router 的 MemoryHistory 是什么？

### vue-router 的三种模式
1. `hash 模式`
    * 当 # 后面的路径发生变化时，不会想服务器发起请求，而是通过监听 `hashchange` 事件变化，查找对应的路由规则
    * 优点: 浏览器兼容性好
    * 缺点: 不美观
2. `WebHistory 模式`
    * history api 是浏览器提供的新特性，每次刷新会想服务器发起请求，如果服务器没有响应会返回404
    * 需要后端支持
    * 利用H5中的`pushstate` 和 `replacestate` 和 `popstate` 事件监听url变化
    * 兼容性不如 hash 模式 
3. `MemoryHistory 模式`
    * 将路由存在一个对象里面，在URL上看不到url变化，适用于手机端

# 移动端 H5 点击有300ms延迟，应该如何解决？
1. 历史遗留问题: 执行了一次点击事件之后，会延迟300ms，来确定用户是否要执行双击事件，300ms内点击两次，视为双击事件
2. 初期的解决方案: 使用 `FastClick` 库
```!javascript
window.addeventListener("load", function() {
    FastClick.attach(document.body)
})
```
3. `FastClick` 原理:
    * 1). 监听 `touchend` 事件 (touchstart touchend 会先于 click 进行触发)
    * 2). 使用 `自定DOM事件` 模拟一个click 事件
    * 3). 把默认的click事件(300ms 之后触发) 禁止掉
4. 现代浏览器改进之后，只要在meta标签的content 属性设置`width=device-width`就不会再有300ms的延迟了
```!html <meta name="viewport" content="width=device-width, initial-scale=1.0">```

# Retina 屏幕的 1px 像素如何实现？

1. 因为手机屏幕的`DPR = 2`, 1px的物理像素看起来比较粗
2. 解决这个问题我们不能直接设置 `0.5px`,这样兼容性不好，可能会还是会出现1px的效果
3. 解决方案
    * 使用 transform scale 缩小
```!javascript
#box {
    padding: 10px 0;
    position: relative;
}
#box::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: #d9d9d9;
    transform: scaleY(0.5);
    transform-origin: 0 0;
} 
```
4. `怎么设置border-radius？`
    * 使用box-shadow 进行设置
```!javascript
margin-top: 20px;
padding: 10px;
border-radius: 5px;
box-shadow: 0 0 0 0.5px #d9d9d9;
```

# HTTP 请求中token 和 cookie有什么区别 ？
## cookie
1. http 请求是无状态的, 每次请求都要cookie，以帮助服务端辨认客户端的身份
2. 服务端也可以向客户端set-cookie, cookie 大小限制为4kb
3. cookie 默认有跨域限制： 不可跨域共享、传递cookie

4. HTML5 之前cookie 常被用于本地存储
5. HTML5 之后推荐使用localStroage 和 sessionStroage
6. 现代浏览器开始禁止第三方cookie（禁止网页引入第三方设置的cookie），打击第三方广告，保护用户隐私
7. 新增了 `SameSite: Strict/Lax,None` 属性， 降低安全风险


## cookie 和 session
1. cookie 用于登陆验证，存储用户身份标识
2. session 存储在服务端(缓存)，集中存储用户详细信息，和cookie 信息一一对应
3. cookie + session 是常见的登陆验证解决方案

## cookie 和 token
1. cookie 是 HTTP 规范，配合session使用，而token是自定义传递的
2. cookie 默认会被浏览器存储，而token需要自己存储(localStorage, sessionStorage)
3. token 默认没有跨越限制

## token(JSON Web Token) JWT
1. 前端发起登陆，后端验证成功之后，返回一个加密的token（用户信息相关的字符串）
2. 前端自行存储这个token（包含了用户信息，但是经过后端加密了）
3. 以后访问服务端接口，都带着这个token，作为用户信息

# session 和 token 哪个更好?
## session
1. 优点：
    * 原理简单，易于学习
    * 用户信息存储在服务端，可快速封禁某个用户
2. 缺点：
    * 占用服务端内存，硬件成本高
    * 多进程，多服务，不好同步-需要使用第三方缓存（redias）
`有严格管理用户信息的需求（保密，快速封禁）推荐使用session`

## token
1. 优点：
    * 不占用服务端内存
    * 多进程、多服务器，不受影响
2. 缺点：
    * 信息存储在客户端，无法快速封禁某用户
    * 网易服务端密钥被泄漏，则用户信息全部丢失
    * token 体积一般大于cookie，会增加请求的数据量

# 如何实现SSO 单点登录？

## 基于cookie
1. cookie 默认不可跨域共享，但是有些情况下可以设置为共享 (设置 domain)
2. 主域名相同，`www.baidu.com` 和 `image.baidu.com`
3. 设置 cookie domain为主域名，即共享cookie

4. 主域名不同时,cookie 是不能共享的
5. 可以使用SSO技术方案(第三方认证)

# http 协议1.0、1.1、2.0 版本之间的区别
## HTTP 1.0 版本
1. 最基础的HTTP协议
2. 支持基本的GET、POST 方法

## HTTP 1.1
1. 增加了缓存策略 cache-control E-tag 等
2. 支持长链接 Connection: keep-alive, 一次TCP链接发送多次请求
3. 断点续传，状态码 206
4. 支持新的方法 PUT DELETE 等，可用Restful API

## HTTP 2.0
1. 可压缩 header, 减少体积
2. 多路复用，一次TCP链接中可以多个HTTP并行请求
3. 服务端推送(一般是用websocket)


# 什么事HTTPS 中间人攻击（黑客伪造证书）？如何预防？
HTTP 明文传输， HTTPS 加密传输

1. `HTTPS = HTTP + TLS/SSL`
2. 对称加密，只有一个密钥，存储在服务端，需要加密时需要客户端先获取密钥，不够安全
3. 非对称加密: 有公钥(负责加密) 和 私钥(负责解密)
    * 服务端和客户端各自保存自己的公钥和私钥
    * 客户端和服务端的公钥相互传递
## HTTPS加密过程（非对称加密 + 对称加密）



# Script defer 和 async 有什么区别?
1. script 没有属性时： HTML 暂停解析，下载JS，执行JS，再继续解析HTML
2. script 属性为 derfer 时: HTML 继续解析饿，并行加载JS，HTML 解析完再执行JS
3. script 属性为 async 时: HTML 继续解析，并行加载js，执行js再解析HTML

# prefecth 和 dns-prefetch 分别时什么？
prefetch 是资源预获取和preload有关，dns-prefetch是DNS查询和（preconnect有关）
### preload 和 prefetch （link 标签的rel属性）
1. `preload` 资源在当前页面使用，会优先加载
2. `preftch`: 资源在未来页面使用，空闲时加载

### dns-prefetch 和 preconnent （link  标签的rel属性）
1. `dns-preftch`: DNS 预查询
2. `preconnect`: DNS 预链接

# 前端攻击有哪些？如何预防？

## XSS 攻击
`Cross Site Script 跨站脚本攻击`
1. 攻击手段： 黑客将JS代码插入网页内容中，渲染时执行攻击JS代码
2. 预防： 前端或者后端可以`替换特殊字符`
3. vue 和 react 都是默认屏蔽 XSS 攻击的(v-html 和 dangerouslySetInnerHtml 除外)

## CDRF 攻击
`Cross Site Request Forgery 跨站请求伪造`
1. 攻击手段: 黑客诱导用户访问另一个网站的接口，伪造请求
2. 详细过程：
    * 用户登陆 A 网站存储了cookie之后
    * 黑客诱导用户到B网站，并发起模拟A网站用户身份，向A网站接口发送请求
    * A网站的API 发现有cookie,认为时合法用户发送的
    * 
2. 预防:
    * 严格的跨域限制（如判断reffer请求来源）
    * 设置cookie为SameSite（禁止第三方使用cookie）,禁止跨域传递cookie
    * 关键接口使用短信验证码

## 点击劫持
`Click Jacking`
1. 攻击手段端： 诱导洁面上蒙一个透明的iframe，诱导用户点击
2. 预防：
```!javascript
if(top.location.hostname !== self.location.hostname) {
    alert("您正在访问不安全的页面，即将条钻到安全的页面！")
    top.location.href = self.location.href
}
```

## DDos 攻击
`Distribute denial-of-service 分布式拒绝服务`
1. 攻击手段: 分布式的、大规模的流量访问，使服务器瘫痪（木马软件，病毒）
2. 预防：软件层不好做，需硬件预防（如阿里云 WAF）

## SQL 注入
1. 攻击手段: 黑客提交内容时写入SQL语句，破坏数据库
2. 预防： 处理输入的内容，替换特殊字符

# Websoket 和 HTTP 协议的 区别是什么？
## Websocket
1. 支持端对端通信
2. 可以由client发起，可以由server发起
3. 应用场景：消息通知，直播间讨论区，聊天室，协同编辑
4. 链接过程：
    * 先发起一个HTTP 请求
    * 成功之后再升级到WebSocket协议，再通信
5. ws 可升级为 wss (像https)
```!javascript
import { createServer } from 'https';
import { readFileSync } from 'fs';
import { WebSocketServer } from 'ws';

const server = createServer({
    cert: readFileSync('/path/to/cert.pem'),
    key: readFileSync('/path/to/key/pe')
})
const wss = new WebSocketServer({server})
```

6. 和HTTP的区别
    * websocket 协议名是ws://,可发起双端请求
    * websocket 没有跨域限制
    * 通过send 和 onmessage 通信(HTTP 通过 req 和 res)

7. WebSocket 和 HTTP 长轮询的区别
    * HTTP 长轮询：客户端发起请求，服务端阻塞，不会立即返（可能会触发timeout机制）
    * WebSocket长轮询: 客户端发起请求，服务端也可以发起请求

# 描述从输入URL到网页显示的完整过程
`网络请求 => 解析 => 渲染`

1. DNS查询, 获取服务端IP，建立TCP三次握手
2. 浏览器发起HTTP请求
3. 收到请求响应，得到HTML源代码
4. 解析HTML 过程中，遇到静态资源还会继续发起网络请求(静态资源可能有强缓存，有缓存时不用请求)
5. JS、CSS、图片、视频等解析
6. ...
## 优化解析
1. CSS 放在<head>中，不要异步加载CSS
2. JS 放在 <body> 最下面（合理使用defer和async）
3. <img> 提前定义好 width 和 height

# 网页重绘(repaint) 和重排(reflow) 有什么区别？
`动态网页随时都会重绘、重排`
* 网页动画
* Modal Dialog 弹窗
* 增加/删除一个元素，显示/隐藏一个元素
1. 重绘:
    * 元素外观改变，颜色、背景
    * 元素的尺寸、定位不变，不会影响其他元素的位置
2. 重排：
    * 需要重新计算尺寸和布局，可能会影响其他元素的位置
    * 如元素高度增加，可能会使相邻元素的位置下移
### 区别
* 重排比重绘的影响要大，消耗也更大
* 所以要尽量避免无意义的重排

### 减少重排列的方法
1. 集中修改样式，或者直接切换css，class
2. 修改之前先设置display: none,脱离文档流
3. 使用BFC特性，不影响其他元素位置
4. 频繁出发的（resize, scroll）使用节流和防抖
5. 使用crateDocumentFragment 批量操作DOM
6. 优化动画，使用css3 和 requestAnimationFrame

### BFCT 特性
* Block Format Context 块级格式化上下文
* 内部的元素无论如何改动，都不会影响其他元素的位置
* 触发BFC 的条件：
    * 根节点 <html>
    * float: left/right
    * overflow: auto/scroll/hidden
    * display: inline-block/table/table-row/table-cell;
    * display: flex/grid; 的直接子元素
    * position: absolute/fixed;

# 如何实现网页多标签tab通讯？
1. websocket
    * 无跨域限制
    * 需要服务端支持，成本较高
2. localStorage 通讯
    * 同域的 A 和 B 两个页面
    * A 页面设置 localStorage
    * B 页面可以监听到localStorage 值的修改
3. ShareWorker通讯，不兼容IE11
    * `SharedWorker` 是 WebWorker 的一种
    * `WebWrker` 可以开启子进程执行JS，但是不能操作DOM
    * `SharedWoker` 可以单独开启一个进程，用于同域页面通讯

# 如何实现网页和iframe 之间的通信？
1. 使用postMessage通信
2. 注意跨域的限制和判断

# 请描述 Koa2 的洋葱模型
1. 一个简约、流行的 nodejs 框架
2. 通过中间件组织代码
3. 多个中间件一 "洋葱圈模型" 执行


# H5 页面如何进行首屏优化？
1. 路由懒加载
    * 适用于 SPA(不适用于MPA)
    * 路由拆分，优先保证首页加载

2. 服务端渲染SSR
    * 传统的前后端分离(SPA)渲染的过程很复杂
    * ssr渲染的页面过程简单，性能好
    * 纯 H5 页面 SSR 是性能优化的终极方案

3. APP 预取
    * 如果H5 在 App WebView 中展示，可使用APP预取
    * 用户访问列表页时，APP预加载文章首屏内容
    * 用户进入H5页面, 直接从APP中获取内容，瞬间展示首屏
4. 分页
    * 针对列表页
    * 默认只显示第一页的内容
    * 上滑加载更多内容
5. 图片懒加载
    * 针对详情
    * 默认只展示文本内容，然后触发图片懒加载
    * 注意： 提前设置图片尺寸，尽量只重绘不重排
6. Hybrid
    * 提前将 HTML JS CSS 下载到APP内部
    * 在APP WebView 中使用file:// 协议加载页面文件
    * 再使用Ajax 获取内容并展示(也结合APP预取)


# 前端常用的设计模式
1. 工厂模式 jquery($), react.createElement
    * 将创建对象的过程单独封装起来
2. 单例模式
    * 
3. 代理模型
4. 观察者模式
5. 发布订阅模式
6. 装饰器模式

# 观察者模式和发布订阅模式之间的区别
## 观察者模式
```!javascript
btn.addEventListener('click', () => {})
```

## 发布订阅模式
```!javascript
// 绑定
event.on('event-key', () => {})
event.on('event-key', () => {})

// 触发
event.emit('event-key')
```

# 实际工作中对vue进行的优化
## v-if和v-show
* `v-if`: 彻底销毁组件
* `v-show`: 使用css（display: none）隐藏组件
* 大部分情况下使用v-if更好一些，不要过度优化

## v-for 使用key

## 使用computed 缓存（调度器）

## keep-alive 缓存组件
* 针对频繁切换的组件（tabs）
* 缓存组件太多会占用内存，不好进行debug

## 异步组件
* 针对体积比较大的组件，如编辑器，复杂表哥，复杂表单等
* 拆包，需要异步加载，不需要时不加载
* 减少主包体积，首页加载会更快

## 路由懒加载
* 项目比较大，拆分路由，保证首页先加载

## 服务端渲染 SSR
* 可使用 Nuxt.js
* 按需优化，使用 SSR 成本高

# 使用vue过程中遇到的坑
## 内存泄漏
* 全局变量，全局事件，全局定时器绑定完之后，没有及时销毁
* 自定义事件绑定完之后没有及时销毁

## vue 2响应式的缺陷（vue3 已经没有了）
* data 新增属性的时候需要使用 `Vue.set()`
* data 删除属性的时候需要使用 `Vue.delete()`
* 无法直接修改数据arr[index] = value

## 路由切换时scroll到顶部
* spa 的通病，不仅仅是Vue
* 例如，列表也，滚动到第二屏, 点击进入详情,再返回到列表页面，这个时候组件会重新渲染，scroll到顶部
* 解决方案:
    * 在列表页缓存数据和scrollTop 值
    * 当再次返回列表页面是，渲染组件，执行scrollTo(xxx)

# 实际工作中对 React 进行的优化
## 通过修改 css display 来显示/隐藏组件，模拟 vue v-show的实现，尽量避免频繁创建和销毁组件

## 循环使用key
* 通过diff算法对比新旧节点之间的差异，在最大程度上复用DOM，从而减少DOM 操作的次数，提升新能。
* 通过key可以知道新子节点和旧子节点之间的映射关系
* 如果没有key 就无法知道

## 使用 Fragment 减少层级

## jsx 中不要去定义函数
* jsx 会被频繁执行，我们应该避免 在jsx中频繁的新建一些东西

## 在构造函数中 bind this

## 使用 sholudComponentUpdate
* 使用`shouldComponentUpdate` 判断组件是否需要更新
* 或者直接使用 React.PureComponent
* 函数组件使用 React.memo