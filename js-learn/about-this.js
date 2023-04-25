/**
 * this绑定规则的四条规则
 * 1. 隐式绑定
 * 2. 显示绑定
 * 3. 硬绑定
 * 4. new 绑定
 * 4条规则的优先级
 * new绑定 > 硬绑定 > 显式绑定 > 隐式绑定
 */

// #region 显示绑定 vs 隐式绑定
// function foo () {
//   console.log(this.a)
// }

// var obj1 = {
//   a: 2,
//   foo: foo
// }

// var obj2 = {
//   a: 3,
//   foo: foo
// }

// // 隐式绑定
// obj1.foo() // 2
// obj2.foo() // 3

// // 显式绑定
// obj1.foo.call(obj2) // 3
// obj2.foo.call(obj1) // 2
// #endregion 显式绑定 vs 隐式绑定

// #region new绑定 vs 隐式绑定
// function foo (num) {
//   this.a = num
// }

// var obj1 = {
//   foo: foo
// }

// var obj2 = {}

// // 隐式绑定
// obj1.foo(2)
// console.log('obj1.a=', obj1.a) // 2

// // 显式绑定
// obj1.foo.call(obj2, 3)
// console.log('obj2.a=', obj2.a) // 3

// // new 绑定
// var baz = new obj1.foo(4)
// console.log('obj1.a = ', obj1.a) // 2
// console.log('baz.a=', baz.a) // 4
// #endregion new绑定 vs 隐式绑定

// #region 显式绑定 vs new绑定
// function foo (num) {
//   this.a = num
// }

// var obj1 = {}

// // 硬绑定
// var bar = foo.bind(obj1)
// bar(2)
// console.log('obj1.a=', obj1.a) // 2

// // new 绑定
// var baz = new bar(4)
// console.log('obj1.a=', obj1.a) // 2ß
// console.log('baz.a=', baz.a) // 3

// #endregion 显式绑定 vs new绑定

// #region 箭头函数
function arrowFun () {
  return a => {
    console.log(this.a) // 44
  }
//   return function (a) {
//     console.log(this.a) // 55
//   }
}

var obj1 = {
  a: 44
}

var obj2 = {
  a: 55
}

var bar = arrowFun.call(obj1)
bar.call(obj2) // 44(箭头函数的this指向不能被修改)
// #endregion 箭头函数

/**
 * 软绑定： 给默认绑定制定一个undefined 和全局对象以外的值，可以实现和硬绑定相同的效果，同时保留隐式或者显示绑定修改this的能力
 */
// if (!Function.prototype.softBind) {
//   Function.prototype.softBind = function (obj) {
//     var fn = this
//     // 获取参数
//     var curried = [].slice.call(arguments, 1)
//     var bound = function () {
//       return fn.apply(
//         (!this || this === (window || global)) ? obj : this, curried.concat.apply(curried, arguments)
//       )
//     }
//     bound.prototype = Object.create(fn.prototype)
//     return bound
//   }
// }
