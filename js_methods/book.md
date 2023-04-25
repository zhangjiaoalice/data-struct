# 箭头函数
使用比函数表达式更简洁的方式声明创建函数
1. 特点:
    * 没有自己的this，在常规的函数中的this指向是动态的，指向执行的上下文（this指项取决于函数本身被如何调用），箭头函数中的this永远等于外层函数中的this
    * 没有`arguments`对象，常规函数中，arguments独行是一个类数组的独享，包含了函数执行时接收到的参数列表， 在箭头函数中项获取参数对象的话，有es的剩余操作符进行操作(...)
    * 箭头函数只能声明成匿名函数，可以通过表达式的方式让箭头函数具名
    * 箭头函数没有原型， xxx.prototype  = undefined
    * 箭头函数不能作为构造函数和Generator函数

# call、apply、bind
1. 相同点:
    * 都是改变原函数的this指向
    * 第一个参数都是原函数this需要指向的对象，如果没有这个参数就会指向undifined 或 null，默认指向window
    * 都可以向原函数传递参数，只是参数传递的方式不一样

2. 不同点:
    * call, bind 可以依次传入多个参数，但是apply只能传递一个数组作为canshu 
    * bind 是返回绑定this之后的函数，不会立即执行
    * call,apply 绑定this之后会立即执行

# undefined 和 null
1. 相同点:
    * Undefined 和 Null 两种数据类型都只有一个字面值，分别是undefined 和 null
    * Undefined 和 Null 在转换成Boolean时，都是false
    * 在将Undefined 和 Null转换为对象时，都会抛出一个TypeError的异常
    * Undefined 派生自 Null, 非严格模式下相等 undefined == null

2. 不同点:
    * null 是 js 关键字，而undefined 是js的一个全局变量，也就是挂载在window对象上的一个变量，并不是关键字
    * 在用typeof进行检测的时候，Undefined会返回undefined, 而 Null 会返回 object
    * 在进行字符串类型转换的时候， null 会转换成 "null", undefined 会转换成字符串的"undefined"
    * 进行值类型转换的时候，undefined 会转换成NaN， Null 转换为 0

# 判断数组类型
1. `Array.isArray()`: IE 9 以下不兼容
2. `arr instanceof Array`: 判断某个元素是否是某对象（Array）的构造函数实例
3. `Object.prototype.toString.call(arr) === [Object Array]`： 使用toString判断数组类型
4. `constructor`: 通过构造函数判断
```!javascript
const arr = [1, 2, 3, 4]
arr.constructor === Array; //true
arr.__proto__.constructor === Array; // true
```



