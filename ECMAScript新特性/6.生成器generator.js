/*
    生成器generator
    JavaScript中的生成器（Generator）引入的一种函数类型，它与传统的函数不同之处在于，
    在生成器中，我们可以中途停止函数的执行，
    并保存相关的上下文信息，待下次继续执行时可以从保存的上下文信息处继续执行。
*/

/*
    基本概念
    生成器的定义与传统函数非常相似，不同之处在于生成器函数的关键字为“function*”（注意是带星号的function），
    并使用 yield 操作符来指定生成器函数的执行步骤。
    yield 操作符可以看做是一个暂停器，它可以和外部程序交换数据，
    并在函数执行停滞时暂停函数的操作，并记录下执行状态信息以备之后恢复时使用
*/

function* generateSequence() {
    yield 1;
    yield 2;
    yield 3;
  }
  
const sequence = generateSequence(); // 获取生成器实例
console.log(sequence.next().value); // 输出 1
console.log(sequence.next().value); // 输出 2
console.log(sequence.next().value); // 输出 3

console.log(sequence.__proto__) // Generator
Generator.prototype // 访问不到 报错
Generator // 访问不到报错
new Generator() // 无法创建 报错
// 报错原因都是和V8引擎内部的机制有关

// TODO 使用场景