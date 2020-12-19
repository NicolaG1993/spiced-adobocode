(function () {
    var currentPlayer = "player1";
    var slots = $(".slot");
    var victory = $(".victory");
    //console.log("slots:", slots);
    var score1 = 0;
    var score2 = 0;

    $(".column").on("click", function (e) {
        //console.log("target:", e.target);
        //console.log("currentTarget:", e.currentTarget);
        //console.log("rowX: ", $(".row3"));

        var col = $(e.currentTarget);

        var slotsInCol = col.children();
        //console.log("slotsInCol :", slotsInCol);
        //console.log("slotsInCol.length :", slotsInCol.length);

        for (var i = slotsInCol.length - 1; i >= 0; i--) {
            //console.log("slotsInCol[i] :", slotsInCol.eq(i));
            if (
                !slotsInCol.eq(i).hasClass("player1") &&
                !slotsInCol.eq(i).hasClass("player2")
            ) {
                slotsInCol.eq(i).addClass(currentPlayer);
                break;
            }
        }

        var slotsInRow = $(".row" + i);

        if (checkforVictory(slotsInCol)) {
            gameOver("column victory");
        } else if (checkforVictory(slotsInRow)) {
            gameOver("row victory");
        } else if (checkforVictory(slots)) {
            gameOver("diagonal victory");
        }

        switchPlayer();
    });

    function switchPlayer() {
        if (currentPlayer === "player1") {
            currentPlayer = "player2";
        } else {
            currentPlayer = "player1";
        }
    }

    function checkforVictory(slots) {
        //console.log(slots);
        var counter = 0;
        for (var i = 0; i < slots.length; i++) {
            //console.log(slots.eq(i));
            if (slots.eq(i).hasClass(currentPlayer)) {
                counter++;
                if (counter === 4) {
                    //inserire condizioni per bug bordo alto
                    //if con ogni coppia di i
                    // if (
                    //     slots.eq(5 || 11 || 17 || 23 || 29 || 35 || 41) &&
                    //     slots.eq(0 || 6 || 12 || 18 || 24 || 30 || 36)
                    // ) {return false; }

                    console.log("I won!");
                    return true;
                }
            } else {
                counter = 0;
                //console.log("counter go back to 0");
            }
            if (
                //checkDiag
                slots.eq(i).hasClass(currentPlayer) &&
                slots.eq(i + 5).hasClass(currentPlayer) &&
                slots.eq(i + 10).hasClass(currentPlayer) &&
                slots.eq(i + 15).hasClass(currentPlayer)
            ) {
                console.log("rx Diagonal won!");
            } else if (
                slots.eq(i).hasClass(currentPlayer) &&
                slots.eq(i + 7).hasClass(currentPlayer) &&
                slots.eq(i + 14).hasClass(currentPlayer) &&
                slots.eq(i + 21).hasClass(currentPlayer)
            ) {
                console.log("sx Diagonal won!");
            }
        }
    }

    function gameOver(str) {
        victory.css("visibility", "visible");
        //pusha in html stringa vincitore + tipo di vittoria
        if (currentPlayer === "player1") {
            score1++;
            console.log(score1);
            $("#player1Score").html(score1);
        } else {
            score2++;
            console.log(score2);
            $("#player2Score").html(score2);
        }
        console.log("winner is: " + currentPlayer);
        console.log(str);
        //aggiorna risultato
        //salvalo
        // localStorage.setItem("toStore", inputVal);
    }

    var playAgain = $(".playAgain");
    var reset = $(".reset");

    playAgain.on("click", function () {
        slots.removeClass("player1");
        slots.removeClass("player2");
        victory.css("visibility", "hidden");
    });

    reset.on("click", function () {
        //reset local storage
        //clear console
        //refresh page
        //questo codice non serve poi
        slots.removeClass("player1");
        slots.removeClass("player2");
        victory.css("visibility", "hidden");
    });
})();

//HAMBURGER BUTTON & NAV
(function hamburgerBtn() {
    var nav = $("nav");
    var btn1 = $(".open");
    var btn2 = $(".continue");
    var overlay = $(".overlay");

    btn1.addClass("show");

    btn1.on("click", function () {
        nav.addClass("on");

        overlay.css("visibility", "visible");
        overlay.css("opacity", "33" + "%");
        btn2.addClass("show");
        btn1.removeClass("show");
    });

    btn2.on("click", function () {
        nav.removeClass("on");

        overlay.css("opacity", 0);
        overlay.css("visibility", "hidden");

        btn2.removeClass("show");
        btn1.addClass("show");
    });
})();

// function checkDiag() {
//     for (var i = 0; i < slots.length; i++) {
//         if (
//             slots.eq(i).hasClass(currentPlayer) &&
//             slots.eq(i + 5).hasClass(currentPlayer) &&
//             slots.eq(i + 10).hasClass(currentPlayer) &&
//             slots.eq(i + 15).hasClass(currentPlayer)
//         ) {
//             console.log("rx Diagonal won!");
//         } else if (
//             slots.eq(i).hasClass(currentPlayer) &&
//             slots.eq(i + 7).hasClass(currentPlayer) &&
//             slots.eq(i + 14).hasClass(currentPlayer) &&
//             slots.eq(i + 21).hasClass(currentPlayer)
//         ) {
//             console.log("sx Diagonal won!");
//         }
//     }
// }

// function checkDiag() {
//     for (var i = 0; i < slots.length; i++) {
//         var diagCounterRight = 0;
//         if (slots.eq(i + 7).hasClass(currentPlayer)) {
//             diagCounterRight++;
//             console.log(diagCounterRight);
//             if (diagCounterRight === 4) {
//                 console.log("Diagonal won!");
//                 return true;
//             }
//             // if (diagCounterRight < 4) {
//             //     continue;
//             //}
//         }
//     }
// }

// function checkDiag() {
//     for (var i = 0; i < slots.length; i++) {
//         // var diagCounterRight = 0;
//         // var diagCounterLeft = 0;
//         if (slots.eq(i).hasClass(currentPlayer)) {
//             // console.log(slots.eq(i));

//             diagCounterRight = slots.eq(i + 7);
//             diagCounterLeft = slots.eq(i + 5);
//             console.log(slots.eq(diagCounterRight));
//             // if (
//             //     slots.eq(diagCounterRight).hasClass(currentPlayer) ||
//             //     slots.eq(diagCounterLeft).hasClass(currentPlayer)
//             // ) {
//             // }
//             if (diagCounterRight === 22 || diagCounterLeft === 16) {
//                 console.log("diagonal victory!!!");
//                 return true;
//             }
//         }
//     }
// }
