// this

/*
    Reference 规范类型
        1. base value 属性所在的对象
        2. referenced name 属性本身的名称
        2. strict reference
*/

var foo = 1

fooReference = {
    baes: 'EnvirenmentRecord',
    name: 'foo',
    strict: false
}

var foo1 = {
    bar: function() {
        return this;
    }
}
console.log(foo1.bar()) // this指向bar

barReference = {
    base: foo1,
    name: bar,
    strict: false
}

// GetBase reference base value

var value = 1

var foo = {
    value: 2,
    bar: function () {
        return this.value
    }
}

// 1.
console.log(foo.bar()) // memberExpersion ==> foo.bar
reference = {
    base: 'foo',
    name: 'bar',
    strict: false
}

// this -> GetBase(ref) base 从reference中获取到base得到this的-指向 -> this foo


// 2.
console.log((foo.bar)()) // memberExpersion ==> foo.bar
// this -> foo

// 3.
console.log((foo.bar = foo.bar)()) // (foo.bar = foo.bar)
// 无法转换为reference 获取不到this的值 this -> undefined -> window

// 4.
console.log((false || foo.bar)())
// this -> window

// 5.
console.log((foo.bar, foo.bar)())
// this -> window

