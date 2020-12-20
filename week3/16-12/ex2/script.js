(function () {
    var body = $("main");
    var germanNumbers = [
        "null<br>👌",
        "eins<br>👍",
        "zwei<br>✌",
        "drei<br>🤟",
        "vier<br>✌✌",
        "fünf<br>🖐",
        "sechs<br>🖐👍",
        "sieben<br>🖐✌",
        "acht<br>🖐🤟",
        "neun<br>🖐✌✌",
        "zehn<br>🖐🖐",
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
