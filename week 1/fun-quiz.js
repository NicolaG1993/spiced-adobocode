var x = 7;
var doubleX = timesTwo(x);

function timesTwo(n) {
    return n * 2;
}

var numbers = [x, doubleX];

for (var index = 0; index < numbers.length; index++) {
    console.log(numbers[index]);
}

var numbers = {
    y: doubleX,
};
