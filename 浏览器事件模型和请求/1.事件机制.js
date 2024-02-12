// 事件机制

/*
    事件模型
*/

// DOM事件
// DOM document object model --> tree

// React Vue 并不是操作真是的DOM virtual DOM VDOM

const a = <span className="test">{test}</span>

// AST抽象语法树

const a1 = {
    type: 'span',
    props: {
        class: 'test'
    },
    children: [
        test
    ]
}

// DOM分为三层
/* 
    DOM0 浏览器各自为战的事件
    DOM1 W3C提供的最初的浏览器统一的规范
    DOM2
*/

// W3C提供 ECMAScript规范
// 1998年最终提供了 DOM1的事件

// DOM1 --> 融合各家的规范 但是没有给出具体的代码方案
// DOM2 --> 

// DOM2事件定义的规范
addEventListener
removeEventListener

// addEventListener(事件类型, 事件回调函数, 是否冒泡)
btn.addEventListener('click', function() {

}, false) // 传递匿名函数不行，会无法解绑

function fn1() {}
function fn2() {}

btn.addEventListener('click', fn1)
btn.addEventListener('click', fn2)

// 一个元素绑定的所有事件是通过队列进行维护绑定的
// 进行解绑事件的时候必须使用具名函数 不要使用匿名函数
btn.removeEventListener('click', fn1)

btn.removeEventListener('click', function () {
    
})

// IE IE的事件只能在冒泡阶段捕获
attachEvent('click', fn1)
derachEvent('click', fn2)

// 以前的兼容写法
if (typeof btn.addEventListener === 'function') {
    btn.addEventListener('click', fn1)
} else if (typeof btn.attachEvent === 'function') {
    btn.attachEvent('click', fn1)
} else {
    btn.onclick = function() {

    }
}