//EXERCISE 1
function each(x, callback) {
    if (Array.isArray(x)) {
        for (var index = 0; index < x.length; index++) {
            callback(x[index], index);
        }
    } else {
        for (var key in x) {
            callback(x[key], key);
        }
    }
}

each(
    {
        a: 1,
        b: 2,
    },
    function (val, name) {
        console.log("The value of " + name + " is " + val);
    }
);

each(["a", "b"], function (val, idx) {
    console.log("The value of item " + idx + " is " + val);
});

//EXERCISE 2
var arr = [1, 2, 3, 4, 5, 6];

function reverseArr(x) {
    return x.slice().reverse();
}

console.log(reverseArr(arr));
console.log(arr);

//EXERCISE 3
function getLessThanZero(x) {
    return x.slice().filter(function (negativeNumb) {
        if (negativeNumb < 0) {
            return negativeNumb;
        }
    });
}

console.log(getLessThanZero([1, 2, -1, -90, 10]));
console.log(getLessThanZero([1, 2]));
