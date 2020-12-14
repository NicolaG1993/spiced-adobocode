//PART 1
(function () {
    var headlines = $(".headlines");

    var left = headlines.offset().left;

    //console.log(headlines);
    //console.log(left);

    var links = $("a");
    var link1 = links.eq(0);
    var link2 = link1.offset().left + link1.offset().width;

    //console.log(link2);

    function move() {
        left--;

        if (left < -link2) {
            left += link2;
            headlines.appendTo(link1);
            link1 = links.eq(0);
            left2 = link1.offsetWidth;
        }
        headlines.css({
            left: left + "px",
        });

        requestAnimationFrame(move);
    }

    move();

    //PART 2
    $(links.eq(i)).on("mouseenter", function (event) {
        left = event.target.offsetX; //?

        links.eq(i).css({
            color: "blue",
            textDecoration: "underline",
        });
    });

    $(links.eq(i)).on("mouseleave", function () {
        left = headlines.offsetLeft; //?
        links.eq(i).css({
            color: "turquoise",
            textDecoration: "none",
        });
    });
})();
