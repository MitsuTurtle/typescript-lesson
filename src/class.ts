class Person {
  readonly id: number = 32;
  constructor(readonly name: string, private age: number) {
    this.id = 31;
    this.id = 30;
    this.name = 'hoge';
  }

  incrementAge() {
    this.age += 1;
  }
  greeting(this: Person) {
    console.log(`Hello! My name is ${this.name}. I am ${this.age} years old.`);
  }
}
let person2: Person;
const quill = new Person('Quill', 38);
quill.incrementAge();
console.log(quill);
console.log(quill.id);
console.log(quill.name);
quill.greeting();
