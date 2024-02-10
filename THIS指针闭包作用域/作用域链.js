// 作用域链

// 找变量先从当前上下文中找 找不到就去上一级上下文找 再找不到就去全局找

[[scope]]

function foo() {
    function bar() {}
}

bar()

/*
    foo.[[scope]] - [
        globalContext.VO
    ]
*/

/*
    bar.[[scope]] = [
        fooContext.AO
        globalContext.VO
    ]
*/

/*
    [bar AO].concat(...[
        fooContext.AO
        globalContext.VO
    ])
*/

var scope = "global scope"
function checkscope() {
    var scope2 = "local scope"
    return scope2
}
checkscope()

/* 
    checkscope.[[scope]] = [
        globalContext.VO
    ]

    ECS stack = [
        checkscopeContext,
        globalContext
    ]
*/

// 在调用checkscope时 不会立即执行 但是会进行准备工作 VO scope chain this
/*
    准备阶段
    checkscopeContext = {
        Scope: [AO , ...[checkscope.[[scope]]]],
        AO: {
            arguments: {
                length: 0,
            },
            scope2: undefined
        }
    }
*/

/*
    执行阶段
        checkscopeContext = {
        Scope: [AO , ...[checkscope.[[scope]]]],
        AO: {
            arguments: {
                length: 0,
            },
            scope2: local scope
        }
    }

    执行结束 栈清空
    ECS stack = []
*/