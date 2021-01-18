const express = require("express");
const app = express();
const { getToken, getTweets, filterTweets } = require("./twitter");

app.use(express.static("./ticker"));

app.get("/data.json", (req, res) => {
    console.log("Request for data.json was made");
    // NEXT STEPS
    // 1. Get our bearer token from twitter
    // 2. Get the tweets from twitter using the bearer token.
    getToken()
        .then((bearerToken) => {
            //console.log("bearerToken: ", bearerToken);
            return Promise.all([
                getTweets(bearerToken, "bethesda"),
                getTweets(bearerToken, "Konami"),
                getTweets(bearerToken, "SquareEnix"),
            ]);
        })
        .then((tweets) => {
            //console.log("tweets: ", tweets);

            const bethesda = tweets[0];
            const konami = tweets[1];
            const squareEnix = tweets[2];

            const allTweets = [...bethesda, ...konami, ...squareEnix];

            const sorted = allTweets.sort((a, b) => {
                return new Date(b.created_at) - new Date(a.created_at);
            });

            // 3. Filter & sort them into the correct format
            const filteredTweets = filterTweets(sorted);
            // 4. Send them back as JSON to ticker
            res.json(filteredTweets);
        })
        .catch((err) => console.log("error in calling promises: ", err));
});

app.listen(8080, () => console.log("Server Listening..."));
