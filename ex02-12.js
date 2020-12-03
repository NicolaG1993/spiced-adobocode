//EXERCISE 1
function sum() {
    var result = 0;
    for (var index = 0; index < arguments.length; index++) {
        result += arguments[index];
    }
    return result
}

console.log(sum(5, 10));
console.log(sum(5, 10, 15));
console.log(sum(5, 10, 15, 100, 200));


//EXERCISE 2

function waitThenRun(callback) {
    setTimeout(callback, 1500);
}

waitThenRun(function () {
    console.log("Hello!");
    waitThenRun(function () {
        console.log("Goodbye!");
    });
});


//EXERCISE 3
/*
function fn(n) {
    if (n <= 0 || isNaN(n)) {
        console.log("ERROR");
    } else if (n >= 1000000) {
        console.log(n);
    } else {
        while (n < 1000000) {       //why is it not working? //help!!
            n * 10;
            if (n < 1000000) {
                continue;
            }
            console.log(n);
        }
    }
}
*/

function fn(n) {
    if (n <= 0 || isNaN(n)) {
        return "ERROR";
    } else if (n >= 1000000) {
        return n;
    } else {
        return fn(n * 10);
    }
}

console.log(fn(-10));
console.log(fn(0));
console.log(fn("Nik"));
console.log(fn(2000000));
console.log(fn(60));


//BONUS
function funct(n) { // NOT FINISHED
    var store =+ n;
    return funct2(n) {

        return y
    }
    x + y;
    console.log(store);
}

funct(1);
funct(2);
funct(3);
funct(4);

function funct(num) {
    console.log(num);
    var accumulator =+ num
    
    if (num <= 0) {
        return;
    } else {
        funct(num + accumulator);
        
    }
}

funct(1);
funct(2);
funct(3);
funct(4);