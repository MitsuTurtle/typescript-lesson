let hasValue = false;
let count = 34;
let float = 3.5;
let negative = -5.6;
let single = 'hello';
let double = 'world';
let back = `hello`;
let hello: string;
hello = 'hello';

const person: {
  name: {
    first: string;
    last: string;
  };
  age: number;
} = {
  name: {
    first: 'Jack',
    last: 'Smith',
  },
  age: 21,
};
const fruits: string[] = ['Apple', 'Banana', 'Grape'];

const book: [string, number, boolean] = ['business', 1500, false];

enum CoffeeSize {
  SHORT,
  TALL,
  GRANDE,
  VENTI,
}

const coffee = {
  hot: true,
  size: CoffeeSize.TALL,
};
console.log(CoffeeSize.SHORT);

let unionType: number | string = 10;
unionType = 'hello';
let unionTypes: (number | string)[] = [21, 'hello'];

type ClothSize = 'small' | 'medium' | 'large';
const apple: 'apple' = 'apple';
const banana: 2 = 2;

let clothSize: 'small' | 'medium' | 'large' = 'small';
const cloth: {
  color: string;
  size: ClothSize;
} = {
  color: 'white',
  size: 'medium',
};

function add(num1: number, num2: number): number {
  return num1 + num2;
}
add(3, 2);

function sayHello(): void {
  console.log('Hello');
}

console.log(sayHello());

let tmp: undefined;

const anotherAdd: (n1: number, n2: number) => number = function (num1, num2) {
  return num1 + num2;
};
const doubleNumber = (number: number): number => number * 2;
const doubleNumber2: (num: number) => number = (num) => num * 2;

function doubleAndHandle(num: number, cb: (num: number) => number): void {
  const doubleNum = cb(num * 2);
  console.log(doubleNum);
}
doubleAndHandle(2, (doubleNum) => {
  return doubleNum;
});

let unknownInput: unknown;
let anyInput: any;
let text: string;
unknownInput = 'hello';
unknownInput = 21;
unknownInput = true;
// text = unknownInput;
// text = anyInput;

if (typeof unknownInput === 'string') {
  unknownInput;
}

function error(message: string): never {
  throw new Error(message);
}
console.log(error('This is an error'));
