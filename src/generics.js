function copy(value, key) {
    value[key];
    return value;
}
console.log(copy({ name: 'Quill', age: 38 }, 'age'));
var LightDatabase = /** @class */ (function () {
    function LightDatabase() {
        this.data = [];
    }
    LightDatabase.prototype.add = function (item) {
        this.data.push(item);
    };
    LightDatabase.prototype.remove = function (item) {
        this.data.splice(this.data.indexOf(item), 1);
    };
    LightDatabase.prototype.get = function () {
        return this.data;
    };
    return LightDatabase;
}());
var stringLightDatabase = new LightDatabase();
stringLightDatabase.add('apple');
stringLightDatabase.add('Banana');
stringLightDatabase.add('Grape');
stringLightDatabase.remove('Banana');
console.log(stringLightDatabase.get());
var TmpDatabase = {
    id: 3,
    data: [32],
};
var fetchData = new Promise(function (resolve) {
    setTimeout(function () {
        resolve('hello');
    }, 3000);
});
fetchData.then(function (data) {
    data.toUpperCase();
});
var vegetables = ['Tomato', 'Broccoli', 'Asparagus'];
var tmp2;
var tmp3;
