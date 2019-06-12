let someValue: any = 'this is a string'

console.log(someValue.length) // 这里是找不到length 属性的

// 正确做法
let strLength: number = (<string>someValue).length
let strLength1: number = (someValue as string).length