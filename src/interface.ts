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
