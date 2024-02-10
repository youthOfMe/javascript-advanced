// 手写bind

/*
    bind
        会创建同一个新函数 当新函数被调用时 bind 第一个参数this
    1. 返回的时一个函数
    2. 可以传递参数
*/

var foo = {
    value: 1
}

function bar(name, age) {
    console.log(this.value)
    console.log(name)
    console.log(age)
}

var bindFoo = bar.bind(foo, 'niuma')

bindFoo(18)

Function.prototype.bind2 = function(context) {
    // 预期是bar
    var _this = this; // this是bar
    var args = [...arguments].slice(1) // ['niuma']
    return function() {
        var bindArgs = [...arguments] // [18]
        return _this.apply(context, [...args, ...bindArgs])
    }
}

// -------------------------------------

var value = 2
var foo1 = {
    value: 1
}

function bar1(name, age) {
    this.habit = 'shopping'
    console.log(this.value)
    console.log(name)
    console.log(age)
}

bar1.prototype.friend = 'niubi'

var bindFoo = bar1.bind(foo, 'niuma')

var obj = new bindFoo(18) // 使用new进行创建bind返回的函数的时候 返回的this是一个null

console.log(obj.habit, obj.friend)

// ----------------------------------------

Function.prototype.bind3 = function(context) {
    if (typeof this !== 'function') {
        throw new Error('this is not a function')
    }
    // 预期是bar
    var _this = this; // this是bar
    var args = [...arguments].slice(1) // ['niuma']
    // return function() {
    //     var bindArgs = [...arguments] // [18]
    //     return _this.apply(context, [...args, ...bindArgs])
    // }

    var fBound = function() {
        // this instanceof fBound 生成的结果是 fBoudn 的实例 fBound 是构造函数 bind 返回的结果 bindFoo
        // 调用构造的时候 this指向新创建出来的对象
        var bindArgs = [...arguments]
        return _this.apply(this instanceof fBound ? this : context, [...args, ...bindArgs])
    }
    fBound.prototype = this.prototype // fBound修改原型 是不是把bar的原型也修改了?

    return fBound
}

var bindFoo1 = bar1.bind3(foo, 'niuma')

var obj = new bindFoo1(18)

console.log(obj.habit, obj.friend)


// ---------------------------- 中转防止bar的原型被修改
Function.prototype.bind4 = function(context) {
    if (typeof this !== 'function') {
        throw new Error('this is not a function')
    }
    // 预期是bar
    var _this = this; // this是bar
    var args = [...arguments].slice(1) // ['niuma']
    // return function() {
    //     var bindArgs = [...arguments] // [18]
    //     return _this.apply(context, [...args, ...bindArgs]) 
    // }

    var fNOP = function() {}

    var fBound = function() {
        // this instanceof fBound 生成的结果是 fBoudn 的实例 fBound 是构造函数 bind 返回的结果 bindFoo
        // 调用构造的时候 this指向新创建出来的对象
        var bindArgs = [...arguments]
        return _this.apply(this instanceof fBound ? this : context, [...args, ...bindArgs])
    }
    fNOP.prototype = this.prototype
    fBound.prototype = new fNOP() // fBound修改原型 是不是把bar的原型也修改了?

    return fBound
}