// 作用域: 代码中程序定义变量的区域 区域就是一个作用域
// 作用域中定义了如何找到对应的变量 在执行代码 运行在作用域中 获取对变量的访问权限

// JS词法作用域

// 静态作用域: 作用域在定义时就确的
// 动态作用域: 作用域实在调用时确定的

const value = 1
function foo() {
    console.log(value)
}

function bar() {
    const value = 2;
    foo()
}

// 结果为1 则得知js是一个静态作用域
bar()

// 执行上下文
/*
    看起来js的执行上下文是顺序执行的
*/
var foo = function() {
    console.log('foo1')
}

foo()

var foo = function() {
    console.log('foo2')
}

foo()

// 两个执行结果都是foo2
// 具有变量提升 所以js执行并不是一串的顺序执行 而是一段一段执行的
function foo1() {
    console.log('foo1')
}
foo1()

function foo1() {
    console.log('foo2')
}
foo1()

// 可执行代码 executable code

// 全局代码 函数代码 eval

// execution context 执行上下文

// execution context stack ECS 执行上下文栈

/*
    模拟执行js代码
    ESCstack = [
        第一步 解析全局代码 globalContext
        
    ]
*/

function fun3() {
    console.log('fun3')
}

function fun2() {
    fun3()
}

function fun1() {
    fun2()
}

fun1()