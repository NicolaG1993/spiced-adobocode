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
    // var newStr = str;
    str.split("").filter(function (newStr) {
        if (newStr.charCodeAt(0) >= 65 && newStr.charCodeAt(0) <= 90) {
            return concat(newStr.toLowerCase());
        }
    });

    //  if () {}
    // return str.toUpperCase || str.toLowerCase;
}

function invertCase(str) {
    var splitStr = str.split();

    for (var i = 0; i < splitStr.length; i++) {
        if (splitStr[i] === splitStr[i].toUpperCase()) {
            return splitStr[i].toLowerCase();
        } else {
            return splitStr[i].toUpperCase();
        }
        return spliStr.join();
    }
}

console.log(invertCase("hey"));
console.log(invertCase("HEY"));
console.log(invertCase("Hey Nicola Gaioni"));
console.log(invertCase("1969 $ & % #"));
