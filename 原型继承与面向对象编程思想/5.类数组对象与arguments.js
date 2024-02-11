// 类数组对象 与 arguments

var arr = [1, 2, 3]

arr.length
a[0]

var arrLike = {
    length: 3,
    0: 1,
    1: 2,
    2: 'name'
}

console.log(arrLike[2])

/*
    类数组对象如果需要调用数组提供的方法 直接调用会报错
    Array.prototype.方法.call(类数组对象, 变量值)
    将类数组对象转换为数组
    Array.form(类数组对象) 返回值就是数组
*/