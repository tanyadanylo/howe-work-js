Array.prototype.myForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};

let arr = [11, 22, 33];
arr.myForEach(function (item, index) {
    console.log(`Індекс ${index}: ${item}`);
})

Array.prototype.myFilter = function (callback) {
    let result = [];
    for (let i = 1; i < this.length; i++) {
        if (callback(this[i], i, this) === true) {
            result.push(this[i]);
        }
    }
    return result;
}

let numbers = [1, 2, 3, 4, 5];
console.log(numbers.myFilter(number => number % 2 === 0));
