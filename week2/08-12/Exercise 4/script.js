var box = document.getElementsByClassName("box")[0];
var square = document.getElementsByClassName("square")[0];
console.log("box: ", box);
console.log("square: ", square);

function getRandomRGB() {
    return Math.floor(Math.random() * 256);
}

box.addEventListener("click", function () {
    var r = getRandomRGB();
    var g = getRandomRGB();
    var b = getRandomRGB();

    var randomNum = "rgb(" + r + "," + g + "," + b + ")";

    box.style.background = randomNum;
});

square.addEventListener("click", function (event) {
    event.stopPropagation();

    var r = getRandomRGB();
    var g = getRandomRGB();
    var b = getRandomRGB();

    var randomNum = "rgb(" + r + "," + g + "," + b + ")";

    square.style.background = randomNum;
});
