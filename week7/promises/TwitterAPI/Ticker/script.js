//PART 1

(function () {
    var headlines = $(".headlines");
    var left = headlines.offset().left; //
    //console.log(headlines);
    //console.log(left);

    /*
    $.ajax({
        url: "data.json",
        method: "GET",

        success: function (data) {
            for (var i = 0; i < data.length; i++) {
                //console.log(data[i]);
                //console.log(data[i].url);

                headlines.append(
                    '<a href="' + data[i].url + '">' + data[i].title + "</a>"
                );
            }
        },
    });
*/
    var links;
    var html = "";
    $.ajax({
        url: "data.json",
        method: "GET",

        success: function (data) {
            for (var i = 0; i < data.length; i++) {
                html +=
                    '<a href="' + data[i].url + '">' + data[i].title + "</a>";
            }
            headlines.html(html);
            var links = $("a");

            var link1 = links.eq(0);
            var link2 = link1.offset().left + link1.offset().width;
            // console.log(links);
            //console.log(link1);
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
            links.eq(i).on("mouseenter", function (event) {
                left = event.target.offsetX; //?

                links.eq(i).css({
                    color: "blue",
                    textDecoration: "underline",
                });
            });

            links.eq(i).on("mouseleave", function () {
                left = headlines.offset().left; //?
                links.eq(i).css({
                    color: "turquoise",
                    textDecoration: "none",
                });
            });
        },
    });
})();
