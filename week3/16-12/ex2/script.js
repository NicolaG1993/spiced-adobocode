(function () {
    var body = $("body");

    function translateNumberToGerman() {
        try {
            console.log("launching function");
            askForNumber();
        } catch (error) {
            console.log("error", error);
        } finally {
            if (1) {
                body.append("eins");
            }
            if (2) {
                body.append("zwei");
            }
            if (3) {
                body.append("drei");
            }
            if (4) {
                body.append("vier");
            }
            if (5) {
                body.append("fünf");
            }
            if (6) {
                body.append("sechs");
            }
            if (7) {
                body.append("sieben");
            }
            if (8) {
                body.append("acht");
            }
            if (9) {
                body.append("neun");
            }
            if (10) {
                body.append("zehn");
            }
        }
    }

    function askForNumber() {
        var num = prompt("Please enter a number between 1 and 10");
        if (num >= 1 && num <= 10 && num == parseInt(num)) {
            return num;
        }
        throw new Error("Bad number");
    }

    translateNumberToGerman();
})();
