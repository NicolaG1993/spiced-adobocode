(function () {
    var areaText = $("#validator");
    var btn = $("button");
    console.log("areaText :", areaText);
    console.log("btn :", btn);

    areaText.on("input", function () {
        var inputVal = areaText.val();
        console.log("inputVal :", inputVal);

        btn.on("click", function () {
            try {
                JSON.parse(inputVal);
                areaText.val("Yeah! That's JSON");
                areaText.removeClass("false");
                areaText.addClass("true");

                console.log("try :", true);
            } catch (err) {
                areaText.val("Nope, that isn't JSON");
                areaText.removeClass("true");
                areaText.addClass("false");

                console.log("error: ", err);
            }
        });
    });
})();
