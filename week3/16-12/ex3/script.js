(function () {
    var textArea = $("#textHere");
    console.log(textArea);

    textArea.on("input", function (e) {
        var inputVal = textArea.val();
        localStorage.setItem("toStore", inputVal);
        // console.log(inputVal);
    });

    textArea.html(localStorage.getItem("toStore"));
})();
