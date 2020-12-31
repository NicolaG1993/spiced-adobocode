//PART 1
(function () {
    var headlines = $(".headlines");

    var left = headlines.offset().left;

    //console.log(headlines);
    //console.log(left);

    var links = $("a");
    var link1 = links.eq(0);
    //var link2 = link1.offset().left + link1.offset().width;
    var linkWidth = links.eq(0).outerWidth();

    var animate;

    //console.log(link2);

    //PART 2
    // for (let i = 0; i < links.length; i++) {
    //     $(links.eq(i)).on("mouseenter", function (event) {
    //         left = event.target.offsetX; //?

    //         links.eq(i).css({
    //             color: "blue",
    //             textDecoration: "underline",
    //         });
    //         cancelAnimationFrame(animate);
    //     });

    //     $(links.eq(i)).on("mouseleave", function () {
    //         left = headlines.offsetLeft; //?
    //         links.eq(i).css({
    //             color: "white",
    //             textDecoration: "none",
    //         });
    //         move();
    //     });
    // }

    headlines.on("mouseenter", function (e) {
        cancelAnimationFrame(animate);
    });

    headlines.on("mouseleave", function () {
        move();
    });

    //PART 1
    function move() {
        left--;

        if (left < -linkWidth) {
            left += linkWidth;
            // headlines.appendTo(link1);
            link1.appendTo(headlines);
            link1 = links.eq(0);
            // links = $("a");
            linkWidth = links.eq(0).outerWidth();
        }
        headlines.css({
            left: left + "px",
        });

        animate = requestAnimationFrame(move);
    }

    move();
})();
