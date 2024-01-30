"use strict";
let hasValue = false;
let count = 34;
let float = 3.5;
let negative = -5.6;
let single = 'hello';
let double = 'world';
let back = `hello`;
let hello;
hello = 'hello';
const person = {
    name: {
        first: 'Jack',
        last: 'Smith',
    },
    age: 21,
};
const fruits = ['Apple', 'Banana', 'Grape'];
const book = ['business', 1500, false];
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize[CoffeeSize["SHORT"] = 0] = "SHORT";
    CoffeeSize[CoffeeSize["TALL"] = 1] = "TALL";
    CoffeeSize[CoffeeSize["GRANDE"] = 2] = "GRANDE";
    CoffeeSize[CoffeeSize["VENTI"] = 3] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
const coffee = {
    hot: true,
    size: CoffeeSize.TALL,
};
console.log(CoffeeSize.SHORT);
let unionType = 10;
unionType = 'hello';
let unionTypes = [21, 'hello'];
const apple = 'apple';
const banana = 2;
let clothSize = 'small';
const cloth = {
    color: 'white',
    size: 'medium',
};
function add(num1, num2) {
    return num1 + num2;
}
add(3, 2);
function sayHello() {
    console.log('Hello');
}
console.log(sayHello());
let tmp;
const anotherAdd = function (num1, num2) {
    return num1 + num2;
};
const doubleNumber = (number) => number * 2;
const doubleNumber2 = (num) => num * 2;
function doubleAndHandle(num, cb) {
    const doubleNum = cb(num * 2);
    console.log(doubleNum);
}
doubleAndHandle(2, (doubleNum) => {
    return doubleNum;
});
let unknownInput;
let anyInput;
let text;
unknownInput = 'hello';
unknownInput = 21;
unknownInput = true;
// text = unknownInput;
// text = anyInput;
if (typeof unknownInput === 'string') {
    unknownInput;
}
function error(message) {
    throw new Error(message);
}
console.log(error('This is an error'));
