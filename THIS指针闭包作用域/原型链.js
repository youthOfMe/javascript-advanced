
function Person() {}

Person.prototype.name = 'love_you'
const person1 = new Person()
const person2 = new Person()

console.log(person1.name)
console.log(person2.name)

// 原型: 任何一个JS对象中创建时会关联的一个对象 任何根据原型的构造函数创建出来的对象 都会集成原型上的

function PersonA() {
    
}
const personA1 = new PersonA()
// 返回true
console.log(personA1.__proto__ === PersonA.prototype)
console.log(PersonA == PersonA.prototype.constructor)
console.log(Object.getPrototypeOf(person1) === person1.__proto__, 666)

/*

*/

function PersonB () {}

PersonB.prototype.name = 'love_you'

const personB1 = new PersonB()
personB1.name = 'you_love'
console.log(personB1.name)

delete personB1.name
console.log(personB1.name)

const obj = new Object()
obj.name = 'love_you'
console.log(obj.name)

console.log(Object.prototype.__proto__) // null

// -------------------

function Cat() {}

const cat = new Cat()

console.log(cat.constructor === Cat) // true
Cat.prototype.constructor === Cat

// 继承 任何对象 会从原型继承属性
// 继承的意思是可以得到 委托过去 而不是整体复制