var expectNmbFn = function (expectNmb) {
    if (expectNmb <= 0 || isNaN(expectNmb)) {
        console.log("ERROR");
    } else if (expectNmb >= 1000000) {
        console.log(expectNmb);
        return expectNmb;
    } else {
        while (expectNmb < 1000000) {
            expectNmb * 10;
        }
        console.log(expectNmb);
        return expectNmb;
    }
};

expectNmbFn(200);