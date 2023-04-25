/**
 * 1. 浅拷贝: 复制值，如果是对象拷贝的是对美村地址的引用，拷贝前后的对象因为共享了同一份内存地址，修改之后会相互影响
 * 2. 深拷贝: 拷贝的是新开的内存地址,前后两个对象指向不同的内存地址
 * 3. 浅拷贝的实现方式: Object.assign(), Array.prototype.slice(), Arrary.prototype.concat, ES6 延展操作符
 * 4. 深拷贝的实现方式: JSON.parse/JSON.stringfy, 深成递归拷贝(复杂数据类型递归，基本类型直接拷贝)
 */
export const deepCopy = (obj) => {
  let newObj = null
  if (typeof obj === 'object' || obj !== null) {
    // 复杂数据类型, null 通过 typeof 判断是object类型，但是null不支持循环

    newObj = obj instanceof Array ? [] : {} // 根据具体的数据类型声明newObj的初始值
    // 深成遍历递归
    for (let key in obj) {
      newObj[key] = deepCopy(obj)
    }
  } else {
    // 基本类型，直接拷贝
    newObj = obj
  }
}
