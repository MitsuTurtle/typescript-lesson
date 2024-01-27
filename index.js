var hasValue = false;
var count = 34;
var float = 3.5;
var negative = -5.6;
var single = 'hello';
var double = 'world';
var back = "hello";
var hello;
hello = 'hello';
var person = {
    name: {
        first: 'Jack',
        last: 'Smith',
    },
    age: 21,
};
var fruits = ['Apple', 'Banana', 'Grape'];
var book = ['business', 1500, false];
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize[CoffeeSize["SHORT"] = 0] = "SHORT";
    CoffeeSize[CoffeeSize["TALL"] = 1] = "TALL";
    CoffeeSize[CoffeeSize["GRANDE"] = 2] = "GRANDE";
    CoffeeSize[CoffeeSize["VENTI"] = 3] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
    hot: true,
    size: CoffeeSize.TALL,
};
console.log(CoffeeSize.SHORT);
var unionType = 10;
unionType = 'hello';
var unionTypes = [21, 'hello'];
var apple = 'apple';
var banana = 2;
var clothSize = 'small';
var cloth = {
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
var tmp;
var anotherAdd = function (num1, num2) {
    return num1 + num2;
};
var doubleNumber = function (number) { return number * 2; };
var doubleNumber2 = function (num) { return num * 2; };
function doubleAndHandle(num, cb) {
    var doubleNum = cb(num * 2);
    console.log(doubleNum);
}
doubleAndHandle(2, function (doubleNum) {
    return doubleNum;
});
