// 变量对象

/*
    执行上下文 execution context
        1. 变量对象
        2. 作用域链
        3. this
*/ 

/*
    variable object VO 变量对象
    在执行上下文中 变量 或者 函数的声明 由 变量对象VO进行指代
*/

/*
    全局上下文
    VO指向的是全局中定义的属性和对象
    方法属性为什么能直接调用? 因为这些东西都是在全局上下文中进行定义的
*/
console.log(this) // 在浏览器中指向window

/*
    函数上下文中的变量对象
    avtivation object AO 活动对象
*/

// VO === 全局上下文的对象 + AO

/*
    在执行上下文代码的时候
        1. 分析 ---> 进入执行上下文
            VO
                函数的定义 声明 变量的声明 函数的形参(没有时机的传入参数 arguments在此时是undefined)
            AO的分析在下面
        2. 执行
*/
function foo(a) {
    var b = 2
    function c() {}
    var d = function() {}

    b = 3
}

foo(1)

/*
    AO = {
        arguments: {
            0: 1,
            length: 1
        }
        a: 1,
        刚开始分析阶段 只分析到函数执行时传进去的实参情况和arguments等等 函数内部是分析不到赋值的
        b: undefined --> 变量赋值分析不到
        c: reference to function c() {} 函数如果使用声明的方式 则直接进行赋值成功
        d: undefined --> 变量赋值分析不到
    }
*/

/*
    2. 执行阶段
    AO = {
        arguments: {
            0: 1,
            length: 1
        }
        a: 1,
        b: 2,
        c: reference to function c() {}
        d: refernece ro FunctionExpresstion d (指的是函数表达式d)
    }
*/

function foo1() {
    console.log(a);
    a = 1
}

foo()

// 分析阶段
AO = {
    arguments: {
        length: 0
    }
}
// 执行阶段
AO = {
    a: undefined // 找不到值 引用使用 报错
}

function foo2() {
    console.log(a);
    var a = 1
}

foo2()

function bar() {
    a = 1
    console.log(a)
}
bar()