/** 
 * 创建一个空的简单 JavaScript 对象（即{}）；
 * 为步骤 1 新创建的对象添加属性__proto__，将该属性链接至构造函数的原型对象 ；
 * 将步骤 1 新创建的对象作为this的上下文 ；
 * 如果该函数没有返回对象，则返回this。
 */

function customNew(Constructor, ...args) {
  let o = Object.create(Constructor.prototype);
  let result = Constructor.apply(o, args);
  const type = typeof result;
  return ['object', 'function'].includes(type) ? result : o;
}

function Cat(name, hobby) {
  this.name = name;
  this.hobby = hobby;
}

Cat.prototype.say = function say() {
  console.log(`Hi! I'm ${this.name}, i like ${this.hobby}.`);
}

const c = customNew(Cat, '辣条', 'sleep');
c.say();

const arr = customNew(Array, 1, 2, 3)
