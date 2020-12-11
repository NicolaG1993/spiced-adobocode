var square = document.getElementsByClassName("square")[0];
console.log(square);

function getRandomRGB() {
    return Math.floor(Math.random() * 256);
}

square.addEventListener("mousedown", function () {
    var r = getRandomRGB();
    var g = getRandomRGB();
    var b = getRandomRGB();

    var randomNum = "rgb(" + r + "," + g + "," + b + ")";

    square.style.background = randomNum;
});

square.addEventListener("mouseup", function () {
    var r = getRandomRGB();
    var g = getRandomRGB();
    var b = getRandomRGB();

    var randomNum = "rgb(" + r + "," + g + "," + b + ")";

    square.style.background = randomNum;
});

//is there a way to nest them in only one function?
