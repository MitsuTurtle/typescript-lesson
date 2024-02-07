// 通常は↓この書き方の方がわかりやすい
// type addFunc = (num1: 1, num2: number) => number;
interface addFunc {
  (num1: number, num2: number): number;
}
let addFunc: addFunc;
addFunc = (n1: number, n2: number) => {
  return n1 + n2;
};
interface Nameable {
  name: string;
  nickName?: string;
}
const nameable: Nameable = {
  name: 'Quill',
  nickName: 'Quilla',
};
interface Human extends Nameable {
  age: number;
  greeting(message: string): void;
}

// このクラスが生成するインスタンスがもっている型をimplementsで定義する
class Developer implements Human {
  constructor(public name: string, public age: number, public experience: number) {}
  greeting(message: string) {
    console.log(message);
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
let developer = new Developer('Quill', 38, 3);
// interfaceのreadonlyはimplementsには効果を及ぼさない
developer.name = 'Tom';
