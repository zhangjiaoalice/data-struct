const obj = {
  name: 'aaaa',
  age: 22,
  sex: 'famel'
}

Object.defineProperty(obj, 'hair', {
  configurable: false,
  get () {
    return this._hair_
  },
  set (val) {
    this._hair_ = val
  }
})

const propertyNames = Object.getOwnPropertyNames(obj)
console.log('propertyNames:', propertyNames) // ['name', 'age', 'sex',  hair]

const configurableList = propertyNames.filter((p) => {
  const des = Object.getOwnPropertyDescriptor(obj, p)
  return !des.configurable
})

console.log('unConfigurable:', configurableList)

configurableList.forEach(item => {
  const des = Object.getOwnPropertyDescriptor(obj, item)
  if (des) {
    const hasGetter = Object.prototype.hasOwnProperty.call(des, 'get')
    console.log('hasGetter:', hasGetter)
  }
})
