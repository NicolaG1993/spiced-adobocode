(function () {
    $(".submit-button").on("click", function () {
        var userInput = $("input").val();
        var artistOrAlbum = $("select").val();
        var moreBtn = $("#more-button");
        console.log("user data: ", userInput, " - ", artistOrAlbum);

        $.ajax({
            method: "GET",
            url: "https://spicedify.herokuapp.com/spotify",
            data: {
                query: userInput,
                type: artistOrAlbum,
            },
            success: function (response) {
                response = response.artists || response.albums;
                console.log("response: ", response);

                var resultsHtml = "";
                for (var i = 0; i < response.items.length; i++) {
                    var defaultImage =
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzohmtLxu2osIMHbtlft80obBxbQAYUzDnAQ&usqp=CAU";
                    if (response.items[i].images.length > 0) {
                        defaultImage = response.items[i].images[0].url;
                    }

                    var albumCover = "<img src='" + defaultImage + "'>";
                    resultsHtml +=
                        "<div><a href='" +
                        response.items[i].external_urls.spotify +
                        "'>" +
                        albumCover +
                        "<p>" +
                        response.items[i].name +
                        "</p>" +
                        "</a></div>";
                }

                $(".results-container").html(resultsHtml);

                //
                if (resultsHtml.length > 0) {
                    $(".results-container").prepend(
                        "<h3>Results for " + '"' + userInput + '"' + "</h3>"
                    );
                } else {
                    $(".results-container").html(
                        "<h3>No results found! ＞﹏＜</h3>"
                    );
                }
                //

                console.log("response.next: ", response.next);
                var nextUrl =
                    response.next &&
                    response.next.replace(
                        "api.spotify.com/v1/search",
                        "spicedify.herokuapp.com/spotify"
                    );
                console.log("nextUrl: ", nextUrl);

                //

                if (response.next == null) {
                    moreBtn.addClass("hide");
                } else {
                    moreBtn.removeClass("hide");
                }

                moreBtn.on("click", function () {
                    $.ajax({
                        method: "GET",
                        url: nextUrl,
                        data: {
                            query: userInput,
                            type: artistOrAlbum,
                        },
                        success: function (response) {
                            response = response.artists || response.albums;
                            console.log("response: ", response);

                            var resultsHtml = "";
                            for (var i = 0; i < response.items.length; i++) {
                                var defaultImage =
                                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzohmtLxu2osIMHbtlft80obBxbQAYUzDnAQ&usqp=CAU";
                                if (response.items[i].images.length > 0) {
                                    defaultImage =
                                        response.items[i].images[0].url;
                                }

                                var albumCover =
                                    "<img src='" + defaultImage + "'>";
                                resultsHtml +=
                                    "<div><a href='" +
                                    response.items[i].external_urls.spotify +
                                    "'>" +
                                    albumCover +
                                    "<p>" +
                                    response.items[i].name +
                                    "</p>" +
                                    "</a></div>";
                            }

                            $(".results-container").append(resultsHtml);

                            nextUrl =
                                response.next &&
                                response.next.replace(
                                    "api.spotify.com/v1/search",
                                    "spicedify.herokuapp.com/spotify"
                                );

                            console.log(response.offset);
                        },

                        // response.offset += 20;
                        //     console.log(response.offset);
                    });
                });
                //
            },
        });
    });
})();

///////TODO////////

// For the search, you need a text input, a select tag (dropdown menu), and a submit button. *

// After receiving the search response, begin you results with...."Results for artist/album name" *

// If there are no results, render a message saying "No results found!" *

// For each result you should see.. *
// The Image *
// Artist or album name *
// Both of these should be clickable links, taking you to the external_url.spotify URL found in the response object. *
// To give an image this functionality, you can simply wrap it in an anchor tag. *

// Be sure to handle the possibility of a result having no images by rendering a default image in it's place *

// There is a property in the response object called next *
// If its value is null, this means that there are no more results - hide the more button *
// If its not null, this means that there ARE results - show the more button *
// When you click the more button, you are going to make a second ajax request to the next url (nextUrl)
// Before you make a request to that URL you need to replace the spotify url with the spicedify url, so you don't get a 401 / Unauthorized
