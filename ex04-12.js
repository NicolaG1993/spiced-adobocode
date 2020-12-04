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
