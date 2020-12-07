//EXERCISE 1
function Square(size) {
    this.width = size;
    this.heigth = size;
}

function Rectangle(width, heigth) {
    this.width = width;
    this.heigth = heigth;
}

Object.prototype.getArea = function () {
    console.log(this.width * this.heigth);
};

var square = new Square(4);
square.getArea();

var rect = new Rectangle(4, 5);
rect.getArea();

//EXERCISE 2

function invertCase(str) {
    var output = "";
    var splitStr = str.split("");

    for (var i = 0; i < splitStr.length; i++) {
        if (splitStr[i] === splitStr[i].toUpperCase()) {
            output += splitStr[i].toLowerCase();
        } else {
            output += splitStr[i].toUpperCase();
        }
    }
    return output;
}

console.log(invertCase("hey"));
console.log(invertCase("HEY"));
console.log(invertCase("Hey Nicola Gaioni"));
console.log(invertCase("1969 $ & % #"));

//BONUS
function Countdown(seconds) {
    while (seconds >= 0) {
        // setTimeout(, 1000);
        console.log(seconds);
        seconds--;
    }
}

Countdown(5);

Countdown.prototype.start = function () {};

var countdown = new Countdown(5);
countdown.start();

/*
function Countdown(n) {
    this.start = function() {
        tick(n);
    };
    function tick(n) {
        console.log(n);
        if (n > 0) {
            setTimeout(function() {
                tick(n - 1);
            }, 1000);
        }
    }
}
*/
