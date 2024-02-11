/*
    JavaScript 模板字符串是 ES6 中新增的一种特殊的字符串语法，它允许嵌入表达式和变量，
    通过 ${} 拼接字符串和表达式，
    相比传统的字符串拼接来说，模板字符串更具可读性和可维护性。
*/

/*
    底层实现原理
    模板字符串的实现原理，可以大致分为两个步骤：首先，JavaScript 引擎会将模板字符串解析成一个函数调用表达式；
    接着，这个表达式会被执行，并输出一个最终的字符串

    对于第一步，当 JavaScript 引擎解析模板字符串时，它会将特殊字符和变量值分割成多个参数，
    并将它们作为函数调用的参数传递给一个名为 Tagged Template 的函数。
    该函数的第一个参数是一个数组，其中包含原始模板字符串中的所有字符文字，除了所有插入字符。
    其余参数则是与模板字符串插值表达式相对应的插入值。
*/

const name = "Tom";
const age = 20;
// DSL
const str = `My name is ${name}, I'm ${age} years old.
I'm from China.`;
console.log(str);

// 也就是说，上面的示例可以被解析为如下调用:
const result = tagFn(["My name is ", ", I'm ", " years old.\nI'm from China."], name, age);

// 实现tagFn
const tagFn = (temp, ...args) => {
    let str = ''
    for(let i = 0; l < temp.length; i++) {
        // 这里我就不考虑一些容错情况
        str += temp[i] + args[0]
    }
    return str
}

/*
    DSL 是不可能用 正则去处理的，必须用专业角度的编译原理去实现
    其中，tagFn 是一个可被调用的函数，用于实现对模板字符串的自定义处理。我们可以通过这个函数对模板字符串和变量进行任意的处理和操作。
    也正是由于这种设计，模板字符串才能够像函数一样实现更加复杂的逻辑，比如计算计算、转换等操作。
*/

// 了解tagged template

/*
    总的来说，JavaScript 的模板字符串是一种非常实用的语法，它在拼接复杂的字符串时，可以很好地保证代码的可读性和可维护性。
    其实现原理是利用函数的调用实现的，使得模板字符串可以与 JavaScript 中的函数交互，给程序员带来了更多的可能性。
*/