//EXERCISE 1
function each(x, callback) {
    if (x == {}) {
        for (var index = 0; index < x.length; index++) {
            const element = array[index];
        }
    } else if (x == []) {
    }
}

//EXERCISE 2
var arr = [1, 2, 3, 4, 5, 6];

function reverseArr(x) {
    return x.slice(0, x.legth).reverse();
}

console.log(reverseArr(arr));
console.log(arr);

//EXERCISE 3
function getLessThanZero(x) {
    return x.filter(function (negativeNumb) {
        if (negativeNumb < 0) {
            return negativeNumb;
        }
    });
}

console.log(getLessThanZero([1, 2, -1, -90, 10]));
console.log(getLessThanZero([1, 2]));
