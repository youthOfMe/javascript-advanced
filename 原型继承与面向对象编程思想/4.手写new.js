// new

function Person(name, age) {
    this.name = name
    this.age = age

    this.habit = 'Games'
}

// var person = new Person('niuma', 18)

var person = objectFctory(Person, 'niuma', 18)

function objectFctory() {
    var obj = new Object()
    var Constructor = [].shift.call(arguments) // arguments 是类数组对象, Constructor: Person arguments: name, age

    obj.__proto__ = Constructor.prototype // obj的原型是Constructor 指向原型
    Constructor.apply(obj, arguments) // 绑定了this
}

console.log(person)

// 如果构造函数有返回值 那么构造出来的对象就只能获取到返回对象中的属性
function Person(name, age) {
    this.strength = 60
    this.age = age

    return {
        name,
        habit: 'Games'
    }
}

var person = new Person('Kevin', 18)

console.log(person)

function objectFctory() {
    var obj = new Object()
    var Constructor = [].shift.call(arguments) // arguments 是类数组对象, Constructor: Person arguments: name, age

    obj.__proto__ = Constructor.prototype // obj的原型是Constructor 指向原型
    var ret = Constructor.apply(obj, arguments) // 绑定了this

    return typeof ret === 'object' ? ret : obj
}

var person = objectFctory(Person, 'Kevin', 18)

console.log(person)

