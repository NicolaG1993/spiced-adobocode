(function () {
    var userInput = $("input");
    var artistOrAlbum = $("select");
    var moreBtn = $("#more-button");
    var nextUrl;
    var infiniteScroll = location.search.indexOf("scroll=infinite") > -1; // true or false
    console.log(infiniteScroll); //in my code its always false //doesnt doesnt work?

    //SUBMIT INPUT AND FIRST RESPONSE
    $(".submit-button").on("click", function () {
        $.ajax({
            method: "GET",
            url: "https://spicedify.herokuapp.com/spotify",
            data: {
                query: userInput.val(),
                type: artistOrAlbum.val(),
            },
            success: function (response) {
                response = response.artists || response.albums;
                console.log("response: ", response);

                console.log("response.next: ", response.next); //url for the next 20 results //it comes within our response
                setNextUrl(response.next); //we pass it as an argoument for the function
                //important to pass it as an argoument because it changes everytime we got a response

                $(".results-container").html(getResultsHtml(response.items));
                // we pass the items of our response as argument for the fn that creates the html for our results

                //
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
                //
                //keep btn hide if no results or scroll=infinite is true
                //else unhide
                if (response.next == null || infiniteScroll) {
                    moreBtn.addClass("hide");
                } else {
                    moreBtn.removeClass("hide");
                }

                checkScrollToBot();
            },
        });
    });

    //MORE BUTTON EVENT
    moreBtn.on("click", function () {
        $.ajax({
            method: "GET",
            url: nextUrl,
            data: {
                query: userInput.val(),
                type: artistOrAlbum.val(),
            },
            success: function (response) {
                response = response.artists || response.albums;

                setNextUrl(response.next);

                $(".results-container").append(getResultsHtml(response.items));
            },
        });
    });

    //CALLBACK TO SET THE URL OF THE NEXT RESULTS
    function setNextUrl(url) {
        //we declare the fn and a general name for our argument
        //we set the url for the next results as the value of nextUrl
        //and we replace part of the url to make it works on spiced api
        nextUrl =
            url &&
            url.replace(
                "api.spotify.com/v1/search",
                "spicedify.herokuapp.com/spotify"
            );
        console.log("nextUrl: ", nextUrl);
    }

    //CALLBACK TO SET AND GET THE HTML OF THE RESULTS ITEMS
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
        console.log("started");
        var pageHeight = $(document).height();
        var windowHeight = $(window).height();
        var pagePosition = $(document).scrollTop();

        var scrolledToBot = pageHeight - 350 <= windowHeight + pagePosition;

        if (scrolledToBot) {
            console.log("scrolled is true");
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
