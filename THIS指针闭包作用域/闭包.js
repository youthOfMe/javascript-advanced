/*
    闭包
        能够访问自由变量的函数

    自由变量
        在函数中使用的 但是不是函数的参数 同时也不是函数内部的局部变量的这些变量

    闭包 = 函数 + 能够访问函数外的变量
*/

var a = 1
function foo() {
    console.log(a)
}

foo()

/*
    ESC static = [
        fooContext,
        globalContext
    ]
*/

AO = {
    arguments: {
        length: 0
    }
}

fooContext = {
    [[scope]]: [VO, [[globalVO]]],
    AO: {
        arguments: {
            length:0
        }
    }
}