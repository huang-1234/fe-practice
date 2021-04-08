let values = [1, 2, 10, 4, 5];
let getSum = function() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
};
console.log(getSum(...values));