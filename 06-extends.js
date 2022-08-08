function customextends(Child, Parent) {

  // 继承静态成员
  for (var prop in Parent) {
    if (!(prop in Child)) {
      Child[prop] = Parent[prop];
    }
  }

  // 继承父类prototype上的成员
  // 用一个新的构造函数切断父类和子类之间的数据共享
  function Noop() { }
  Noop.prototype = Parent.prototype;

  const o = new Noop();

  for (var prop in o) {
    if (!(prop in Child)) {
      Child.prototype[prop] = o[prop];
    }
  }
}

function Animal(name, age) {
  this.name = name;
  this.age = age;
}

Animal.prototype.say = function () {
  console.log(`Hi! I'm ${this.name}, i'm ${this.age} years old.`);
}

function Cat(name, age, hobby) {
  Animal.call(this, name, age);
  this.hobby = hobby;
}

Cat.prototype.say2 = function () {
  console.log(`Hi! I'm ${this.name}, i'm ${this.age} years old, i like ${this.hobby}.`);
}

customextends(Cat, Animal);

const cat = new Cat('辣条', 3, 'sleep')

cat.say();
cat.say2();
