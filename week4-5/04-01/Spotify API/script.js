(function () {
    var userInput = $("input");
    var artistOrAlbum = $("select");
    var moreBtn = $("#more-button");
    var nextUrl;
    var infiniteScroll = location.search.indexOf("scroll=infinite") > -1; // true or false
    console.log(infiniteScroll); //why always false in my code? // cant use it

    //SUBMIT INPUT AND FIRST RESPONSE
    $(".submit-button").on("click", function () {
        showResults("https://spicedify.herokuapp.com/spotify");
    });

    //MORE BUTTON EVENT
    moreBtn.on("click", function () {
        showResults(nextUrl);
    });

    //CALLBACK TO REQUEST RESULTS
    function showResults(link) {
        $.ajax({
            method: "GET",
            url: link,
            data: {
                query: userInput.val(),
                type: artistOrAlbum.val(),
            },
            success: function (response) {
                response = response.artists || response.albums;

                setNextUrl(response.next);

                $(".results-container").html(getResultsHtml(response.items));

                if (response.items.length > 0) {
                    $(".results-container").prepend(
                        "<h3>Results for " +
                            '"' +
                            userInput.val() +
                            '"' +
                            "</h3>"
                    );
                } else {
                    $(".results-container").html(
                        "<h3>No results found! ＞﹏＜</h3>"
                    );
                }

                if (response.next == null || infiniteScroll) {
                    moreBtn.addClass("hide");
                } else {
                    moreBtn.removeClass("hide");
                }

                checkScrollToBot();
            },
        });
    }

    //CALLBACK TO SET THE URL OF THE NEXT RESULTS
    function setNextUrl(url) {
        nextUrl =
            url &&
            url.replace(
                "api.spotify.com/v1/search",
                "spicedify.herokuapp.com/spotify"
            );
    }

    //CALLBACK TO SET AND GET THE HTML OF THE RESULTS/ITEMS
    function getResultsHtml(items) {
        var resultsHtml = "";

        for (var i = 0; i < items.length; i++) {
            var defaultImage =
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzohmtLxu2osIMHbtlft80obBxbQAYUzDnAQ&usqp=CAU";
            if (items[i].images.length > 0) {
                defaultImage = items[i].images[0].url;
            }

            var albumCover = "<img src='" + defaultImage + "'>";
            resultsHtml +=
                "<div><a href='" +
                items[i].external_urls.spotify +
                "'>" +
                albumCover +
                "<p>" +
                items[i].name +
                "</p>" +
                "</a></div>";
        }
        return resultsHtml;
    }

    //CALLBACK TO CHECK IF USER HAVE SCROLLED TO THE BOTTOM OF THE PAGE
    function checkScrollToBot() {
        var pageHeight = $(document).height();
        var windowHeight = $(window).height();
        var pagePosition = $(document).scrollTop();

        var scrolledToBot = pageHeight - 350 <= windowHeight + pagePosition;

        if (scrolledToBot) {
            $.ajax({
                url: nextUrl,
                success: function (response) {
                    response = response.artists || response.albums;

                    setNextUrl(response.next);

                    $(".results-container").append(
                        getResultsHtml(response.items)
                    );

                    checkScrollToBot();
                },
            });
        } else {
            setTimeout(checkScrollToBot, 200);
        }
    }
})();
