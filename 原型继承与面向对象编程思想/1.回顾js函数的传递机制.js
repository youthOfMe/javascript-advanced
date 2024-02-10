// 参数安置传递
// ES所有的函数的参数 都是按值传递
// 按值传递: 函数外部的值 赋值给函数的参数

var value = 1
function foo(v) {
    v = 2
    console.log(v)
}

foo(value) // 2

console.log(value) // 1

// ---------------------

var obj = {
    value: 1
}
function foo(o) {
    o.value = 2
    console.log(o.value)
}

foo(obj) // 2

console.log(obj.value) // 2

/*
    基本数据类型的数据和指针是存储在栈中的
    引用类型的真实值存储在堆中
*/


// ---------------------

var obj = {
    value: 1
}
function foo(o) {
    o = 2
    console.log(o)
}
foo(obj) // 2
console.log(obj.value) // 1