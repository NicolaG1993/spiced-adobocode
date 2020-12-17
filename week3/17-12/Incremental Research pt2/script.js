(function () {
    var searchField = $("input");
    var resultsContainer = $(".results");

    //1. input eventListener
    searchField.on("input", function () {
        var inputVal = searchField.val().toLowerCase();
        console.log("input value typer: ", inputVal);

        var matchResults = [];

        /*
        for (var i = 0; i < countries.length; i++) {
            if (countries[i].toLowerCase().indexOf(inputVal) === 0) {
                console.log("found a match: ", countries[i]);

                matchResults.push(countries[i]);
                if (matchResults.length === 4) {
                    break;
                }
            }
        }
        */
        $.ajax({
            method: "GET",
            url: "https://spicedworld.herokuapp.com/",
            data: {
                q: inputVal,
            },
            success: function (response) {
                //potrebbe essere che per ritardi tornino riusltati nell'ordine sbagliato
                var currentInputVal = searchField.val().toLowerCase();
                if (currentInputVal === inputVal) {
                    console.log("response: ", response);
                } else {
                    console.log("response no longer needed - old responde");
                }
            },
        });

        /*
        if (!matchResults.length) {
            matchResults.push("no results");
        }
       
        console.log("match results: ", matchResults);
        var htmlForCountries = "";
        for (var j = 0; j < matchResults.length; j++) {
            htmlForCountries +=
                "<p class='country'>" + matchResults[j] + "</p>";
        }
        console.log("html we will be ejecting: ", htmlForCountries);
        resultsContainer.html(htmlForCountries);

        if (!inputVal.length) {
            resultsContainer.empty(htmlForCountries);
        }
        */

        // 2. mouseover event
        var country = $(".country");
        country.on("mouseenter", function (e) {
            console.log("the mouse is hovering above me!", $(e.target));
            $(e.target).addClass("highlight");

            // 3. mousedown event
            $(e.target).on("mousedown", function () {
                searchField.val(this.innerText);
                resultsContainer.html("");
            });
        });

        country.on("mouseleave", function (e) {
            console.log("the mouse is not hovering above me!", $(e.target));
            $(e.target).removeClass("highlight");
        });

        // 4. keydown event
        $(document).on("keydown", function (e) {
            if (e.keyCode === 40) {
                console.log("arrow down was pressed: ");

                if (!country.hasClass("highlight")) {
                    country.eq(0).addClass("highlight");
                    console.log("if 1 activated");
                } else if (country.eq(-1).hasClass("highlight")) {
                    console.log("if 2 activated");
                    return;
                } else {
                    var current = $(".highlight");
                    $(".highlight").removeClass("highlight");
                    current.next().addClass("highlight");
                    console.log("if 3 activated");
                }
            }
            if (e.keyCode === 38) {
                console.log("arrow up was pressed: ");
                if (!country.hasClass("highlight")) {
                    country.eq(-1).addClass("highlight");
                    console.log("if A activated");
                } else if (country.eq(0).hasClass("highlight")) {
                    console.log("if B activated");
                    return;
                } else {
                    var current = $(".highlight");
                    $(".highlight").removeClass("highlight");
                    current.prev().addClass("highlight");
                    console.log("if C activated");
                }
            }

            if (e.keyCode === 13) {
                for (var i = 0; i < country.length; i++) {
                    if (country.eq(i).hasClass("highlight")) {
                        searchField.val(country.eq(i).text());
                        resultsContainer.html("");
                    }
                }
            }

            // 5. focus event
            searchField.on("focus", function () {
                resultsContainer.show();
            });

            // 6. blur event
            searchField.on("blur", function () {
                resultsContainer.hide();
            });
        });
    });
})();
