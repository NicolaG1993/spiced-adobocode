(function () {
    var countries = [
        "Afghanistan",
        "Albania",
        "Algeria",
        "Andorra",
        "Angola",
        "Antigua and Barbuda",
        "Argentina",
        "Armenia",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bhutan",
        "Bolivia",
        "Bosnia and Herzegovina",
        "Botswana",
        "Brazil",
        "Brunei Darussalam",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cabo Verde",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Central African Republic",
        "Chad",
        "Chile",
        "China",
        "Colombia",
        "Comoros",
        "Congo",
        "Costa Rica",
        "Côte D'Ivoire",
        "Croatia",
        "Cuba",
        "Cyprus",
        "Czech Republic",
        "Democratic People's Republic of Korea",
        "Democratic Republic of the Congo",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Eswatini",
        "Ethiopia",
        "Fiji",
        "Finland",
        "France",
        "Gabon",
        "Gambia",
        "Georgia",
        "Germany",
        "Ghana",
        "Greece",
        "Grenada",
        "Guatemala",
        "Guinea",
        "Guinea Bissau",
        "Guyana",
        "Haiti",
        "Honduras",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran",
        "Iraq",
        "Ireland",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Kuwait",
        "Kyrgyzstan",
        "Lao People’s Democratic Republic",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Marshall Islands",
        "Mauritania",
        "Mauritius",
        "Mexico",
        "Micronesia",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Morocco",
        "Mozambique",
        "Myanmar",
        "Namibia",
        "Nauru",
        "Nepal",
        "Netherlands",
        "New Zealand",
        "Nicaragua",
        "Niger",
        "Nigeria",
        "North Macedonia",
        "Norway",
        "Oman",
        "Pakistan",
        "Palau",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines",
        "Poland",
        "Portugal",
        "Qatar",
        "Republic of Korea",
        "Republic of Moldova",
        "Romania",
        "Russian Federation",
        "Rwanda",
        "Saint Kitts and Nevis",
        "Saint Lucia",
        "Saint Vincent and the Grenadines",
        "Samoa",
        "San Marino",
        "Sao Tome and Principe",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "Somalia",
        "South Africa",
        "South Sudan",
        "Spain",
        "Sri Lanka",
        "Sudan",
        "Suriname",
        "Sweden",
        "Switzerland",
        "Syrian Arab Republic",
        "Tajikistan",
        "Thailand",
        "Timor-Leste",
        "Togo",
        "Tonga",
        "Trinidad and Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Tuvalu",
        "Uganda",
        "Ukraine",
        "United Arab Emirates",
        "United Kingdom",
        "United Republic of Tanzania",
        "United States of America",
        "Uruguay",
        "Uzbekistan",
        "Vanuatu",
        "Venezuela",
        "Viet Nam",
        "Yemen",
        "Zambia",
        "Zimbabwe",
    ];
    var searchField = $("input");
    var resultsContainer = $(".results");

    //1. input eventListener
    searchField.on("input", function () {
        var inputVal = searchField.val().toLowerCase();
        console.log("input value typer: ", inputVal);
        var matchResults = [];

        for (var i = 0; i < countries.length; i++) {
            if (countries[i].toLowerCase().indexOf(inputVal) === 0) {
                console.log("found a match: ", countries[i]);

                matchResults.push(countries[i]);
                if (matchResults.length === 4) {
                    break;
                }
            }
        }

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
