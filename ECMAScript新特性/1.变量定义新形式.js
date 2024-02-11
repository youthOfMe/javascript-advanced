/*
    var定义变量有声明问题?
*/

if (true) {
    let i = 1
    console.log(i) // 输出1
}
console.log(i) // 未定义 报错

const PI = 3.1415926335
PI = 3 // 报错 不可更改值

/*
    新增变量定义的主要原因
        1. 更加安全 
            使用 let 和 const 可以有效地避免一些变量作用域混淆的问题。
            通过使用块级作用域，我们可以让变量只在指定代码块内部有效，避免了不必要的变量污染和冲突。
        2. 更加简洁
            使用 let 和 const 可以大量减少代码量，并且更加易于维护。
            在使用 var 时，由于变量作用域问题，经常需要添加额外的语句进行变量定义、检查和清除等操作，
            而使用 let 和 const 可以直接在代码中进行定义和使用，更加简洁和高效。
        3. 更加规范
            使用 let 和 const 可以使代码更加规范，让代码更好读懂、易于维护。
            随着 JavaScript 的逐渐发展，代码规范性和可读性越来越重要，let 和 const 关键字的引入正是为了更好地实现这一目标。
        综上所述，let 和 const 关键字可以使 JavaScript 更加安全、简洁和规范，
        有效地解决了以往 JavaScript 变量定义存在的一些问题，带来更佳的开发体验。
*/

// 示例一: 循环使用let声明变量避免问题
for (let i = 0; i < 5; i++) {
    // 使用let的时候打印出来就是 0 1 2 3 4。使用var的时候打印出来就是 4 4 4 4 4。
    setTimeout(function() {
        console.log(i)
    }, 1000)
}

// 示例三: 使用const进行定义对象变量, 防止对象被篡改
const user = {
    name: "张三",
    age: 18,
    gender: "男"
};

user.name = "李四";
console.log(user); // { name: "李四", age: 18, gender: "男" }

Object.freeze(user); // 其实也可以使用Object.freeze进行冻结对象 防止对象的内容被修改 使用const是防止对象变量存储的对象内容指针被篡改

user.age = 20;
console.log(user); // { name: "李四", age: 18, gender: "男" }

/*
    深入理解let和const在js引擎中的实现
    底层实现上，let 和 const 的工作方式是通过 JavaScript 引擎来实现的。
    在 JavaScript 引擎中，每一个变量都会被封装在一个称为“变量对象”的容器中，这个对象包含了所有当前上下文中定义的变量与函数。
    变量对象类似于一个键/值对的容器，其中键是变量名，值是变量的值。
    在 JavaScript 引擎中，使用 let 和 const 定义变量，实际上是将该变量定义在了一个块级作用域中，而块级作用域是由编译器在编译阶段中实现的。
*/

/*
    {
        代码片段 在程序中这就是一块作用域
    }
*/
