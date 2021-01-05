(function () {
    var textArea = $("#textHere");
    console.log(textArea);

    try {
        textArea.html(localStorage.getItem("toStore"));
    } catch (e) {}

    textArea.on("input", function (e) {
        var inputVal = textArea.val();
        // console.log(inputVal);
        try {
            localStorage.setItem("toStore", inputVal);
        } catch (e) {}
    });
})();

//MY FIRST VERSION
/*
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
*/
