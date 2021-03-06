(function () {
    var body = $("main");
    var germanNumbers = [
        "null<br>π",
        "eins<br>π",
        "zwei<br>β",
        "drei<br>π€",
        "vier<br>ββ",
        "fΓΌnf<br>π",
        "sechs<br>ππ",
        "sieben<br>πβ",
        "acht<br>ππ€",
        "neun<br>πββ",
        "zehn<br>ππ",
    ];

    (function translateNumberToGerman() {
        try {
            //console.log("launching function");
            body.append(askForNumber());
            return;
        } catch (e) {
            console.log("error", e);
            translateNumberToGerman();
        }
    })();

    function askForNumber() {
        var num = prompt("Please enter a number between 1 and 10");
        if (num >= 1 && num <= 10 && num == parseInt(num)) {
            return germanNumbers[num];
        }
        throw new Error("Bad number");
    }
})();
