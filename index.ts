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
