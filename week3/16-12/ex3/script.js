(function () {
    var textArea = $("#textHere");

    textArea.on("input", function (e) {
        var inputVal = textArea.val();
        console.log(inputVal);
        localStorage.setItem(inputVal);
    });
    textArea.val(localStorage.getItem(inputVal));
})();
