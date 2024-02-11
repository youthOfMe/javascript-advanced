/*
    JavaScript 的类最终也是一种函数，，JavaScript 的 class 语法只是语法糖，
    使用 class 关键字创建的类会被编译成一个函数，因此其底层原理与函数有一些相似之处。
*/

/*
    使用 class 关键字来定义类时，在内部会创建一个特殊的函数，称为构造函数（constructor）。
    构造函数用于在创建对象时初始化对象的属性，类似于传统的基于原型的代码中的构造函数。
*/

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const p = new Person("Tom", 20);
console.log(p.name, p.age); // Tom 20

// 如果直接用构造器的写法
function Person1(name, age) {
    // 
}

/*
    class 中定义的属性和方法分别定义在这个构造函数的 prototype 属性中。
    并且与原型方式不同的是，类的方法是不可枚举的，因此无法使用 for...in 循环遍历类实例对象的属性和方法。
*/

/*
    for of 和 for in 的区别 iterable
    了解可枚举
*/

/*
    了解 集成 静态方法和属性 class表达式
*/

/*
    总体来说，JavaScript 的类本质上是一个函数，
    使用 class 关键字来声明类只是伪代码，这些代码最终都会被转成函数，并存在函数对象的属性和原型属性上。
*/

/*
    类，属性，方法这块儿主要复杂点字可能在：注解（装饰器），面向切面
    nest.js
    @Controller()
    public getName() {

    }
*/