(function () {
    var currentPlayer = "player1";
    var preChip = $(".preChip");

    var board = $(".board");
    var slots = $(".slot");
    var hand = $(".handCont");
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
        preChip.removeClass("player1" && "player2");
        preChip.addClass(currentPlayer);
    });

    function switchPlayer() {
        if (currentPlayer === "player1") {
            currentPlayer = "player2";
        } else {
            currentPlayer = "player1";
        }
    }

    // function switchColor() {
    //     if (currentColor === "color1") {
    //         currentColor = "color2";
    //     } else {
    //         currentColor = "color1";
    //     }
    // }

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

                    //console.log("I won!");
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
                return true;
                //console.log("rx Diagonal won!");
            } else if (
                slots.eq(i).hasClass(currentPlayer) &&
                slots.eq(i + 7).hasClass(currentPlayer) &&
                slots.eq(i + 14).hasClass(currentPlayer) &&
                slots.eq(i + 21).hasClass(currentPlayer)
            ) {
                return true;
                //console.log("sx Diagonal won!");
            }
        }
    }

    //GAME OVER - CONTINUE - RESET
    function gameOver(str) {
        victory.css("visibility", "visible");
        if (currentPlayer === "player1") {
            score1++;
            $("#player1Score").html(score1);
        } else {
            score2++;
            $("#player2Score").html(score2);
            //localstorage? // non riesco a settare default value 0
        }
        $(".winner").text("🎉 The winner is " + currentPlayer + " 🎉");
        $(".victoryStyle").text("It was a " + str);
        console.log(str);
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
        slots.removeClass("player1");
        slots.removeClass("player2");
        $("#player1Score").html((score1 = 0));
        $("#player2Score").html((score2 = 0));
        victory.css("visibility", "hidden");
    });

    //MUOSE HOVER ANIMATION
    board.on("mousemove", function (e) {
        hand.css("left", e.clientX - "120" + "px");
    });

    board.on("mouseover", function (e) {
        var arrowColumn = $(".arrowColumn");

        switch (e.target) {
            case e.currentTarget.children[0]:
                arrowColumn.html("");
                arrowColumn.eq(0).html("<span>▲</span>");
                break;
            case e.currentTarget.children[1]:
                arrowColumn.html("");
                arrowColumn.eq(1).html("<span>▲</span>");
                break;
            case e.currentTarget.children[2]:
                arrowColumn.html("");
                arrowColumn.eq(2).html("<span>▲</span>");
                break;
            case e.currentTarget.children[3]:
                arrowColumn.html("");
                arrowColumn.eq(3).html("<span>▲</span>");
                break;
            case e.currentTarget.children[4]:
                arrowColumn.html("");
                arrowColumn.eq(4).html("<span>▲</span>");
                break;
            case e.currentTarget.children[5]:
                arrowColumn.html("");
                arrowColumn.eq(5).html("<span>▲</span>");
                break;
            case e.currentTarget.children[6]:
                arrowColumn.html("");
                arrowColumn.eq(6).html("<span>▲</span>");
                break;
            default:
                break;
        }
    });

    // //COLOR MENU
    var colorPicker = $(".colorPicker");
    var colorsCont = $(".colorsCont");
    colorPicker.on("click", function () {
        colorsCont.toggleClass("on");
    });

    // cant make this part works
    //var colors = $(".skin");
    // colors.on("click", function (e) {
    //     var colorsCol = $(e.target);
    //     // var colorInCol = colorsCol.children();

    //     board.find($(".player1 .hole")).css("background", "white");
    //     //.addClass(e.target.classList[1]);

    //     console.log($(this).prop("class"));
    //     console.log(e);
    //     console.log(e.target);
    //     console.log(e.target.classList[1]);
    //     // console.log(currentPlayer);

    //     // //  $(currentPlayer).addClass(e.target.classList[1]);
    //     // currentPlayer = currentPlayer + " " + e.target.classList[1];
    //     // //currentPlayer.removeClass

    //     // preChip.removeClass("player1" && "player2");
    //     // preChip.addClass(currentPlayer);
    // });
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
        overlay.css("opacity", "50" + "%");
        btn2.addClass("show");
        btn1.removeClass("show");
    });

    btn2.on("click", function () {
        nav.removeClass("on");
        $(".colorsCont").removeClass("on");

        overlay.css("opacity", 0);
        overlay.css("visibility", "hidden");

        btn2.removeClass("show");
        btn1.addClass("show");
    });
})();

////////////////////////////////

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
