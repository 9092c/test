class Person {
  constructor(name) {
    this.name = name;
  };
  sayHai() {
    console.log(`${this.name}`)
  }
}


const person1 = new Person('zhangsan');
person1.sayHai();