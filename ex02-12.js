//EXERCISE 1
function sum() {
    var result = 0;
    for (var index = 0; index < arguments.length; index++) {
        result += arguments[index];
    }
    console.log(result);
}

sum(5, 10);
sum(5, 10, 15);
sum(5, 10, 15, 100, 200);

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
        while (n < 1000000) {       //my first solution but doesnt work from here, but it's kind of logical to me
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
        console.log("ERROR");
    } else if (n >= 1000000) {
        console.log(n);
    } else {
        return fn(n * 10);
    }
}

fn(-10);
fn(0);
fn("Nik");
fn(2000000);
fn(60);

//BONUS
function funct(n) {
    var store = 0;
    return funct2() {}
}

funct(1);
funct(2);
funct(3);
funct(4);

