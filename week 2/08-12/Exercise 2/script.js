var textArea = document.getElementById("myTextarea");
var text =
    "Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.";

textArea.addEventListener("input", function () {
    textArea.value = text.slice(0, textArea.textLength);
});

/*
var numb = 0;

textArea.addEventListener("input", function () {
    var insert = text.slice(0, numb);
    textArea.value = insert;
    numb++;
});
*/
