interface Human {
  name: string;
  age: number;
  greeting(message: string): void;
}

// このクラスが生成するインスタンスがもっている型をimplementsで定義する
class Developer implements Human {
  constructor(public name: string, public age: number, public experience: number) {}
  greeting(message: string) {
    console.log('Hello');
  }
}
const tempDeveloper = {
  name: 'Quill',
  age: 38,
  experience: 3,
  greeting(message: string) {
    console.log(message);
  },
};
// const user: Human = new Developer('Quill', 38, 3);
const user: Human = tempDeveloper;
