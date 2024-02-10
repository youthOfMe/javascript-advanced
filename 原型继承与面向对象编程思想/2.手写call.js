// 手写calll

// call就是应用在指定this和arguments调用函数或者方法的场景

let foo = {
    value: 1
}

function bar() {
    console.log(this.value)
}

bar.call(foo) // 1

/*
    1. this -> foo
    2. bar execute
*/

/*
    原理如下
    let foo1 = {
        value: 1,
        bar: function() {
            console.log(this.value)
        }
    }
    foo.bar()
*/

/*
    思路
        1. 将bar设置为foo的属性
        2. 执行bar
        3. 删除foo bar
    foo.someFn = bar
    foo.someFn()
    delete foo.someFn
*/

Function.prototype.call2 = function(context) {
    context.someFn = this
    context.someFn()
    delete context.someFn
}

let value = 2
function bar2 () {
    console.log(this)
}

foo2 = {
    value: 1
}

bar2() // window
bar2.call2(foo2) // foo2

// ------ 增加入参的功能
var foo3 = {
    value: 1
}

function bar3(name, age) {
    console.log(name)
    console.log(age)
    console.log(this.value)
}

bar3.call(foo3, 'niuma', 18)

arguments = {
    0: foo3,
    1: 'niuma',
    2: 18,
    length: 3
}

// arguments是可以迭代的
var args = []
for (var i = 1; len = arguments.length, i < len; i++) {
    args.push('arguments[' + i + ']')
}

Function.prototype.call2 = function(context) {
    context.someFn = this
    let arg = [...arguments].slice(1) // 获取到参数
    context.someFn(...arg) // context.someFn('niuma', 18)
    delete context.someFn
}
bar3.call2(foo3, 'niuma', 18)

// -------------------
var value1 = 1
function bar() {
    console.log(this.value1)
}
bar.call(null)

// ------------------
var foo4 = {
    value: 1
}

function bar4(name, age) {
    return {
        value: this.value,
        name,
        age
    }
}

console.log(bar4.call(foo4, 'niuma', 18))
Function.prototype.call2 = function(context) {
    var context = context || window // 处理context为null的情况
    context.someFn = this
    let arg = [...arguments].slice(1) // 获取到参数
    // 处理函数返回的结果
    const result = context.someFn(...arg) // context.someFn('niuma', 18)
    delete context.someFn

    return result
}
console.log(bar4.call2(foo4, 'niuma', 18))