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
            console.log("bearerToken: ", bearerToken);
            return getTweets(bearerToken);
        })
        .then((tweets) => {
            console.log("tweets: ", tweets);
            // 3. Filter & sort them into the correct format
            const filteredTweets = filterTweets(tweets);
            // 4. Send them back as JSON to ticker
            res.json(filteredTweets);
        })
        .catch((err) => console.log("error in calling promises: ", err));
});

app.listen(8080, () => console.log("Server Listening..."));
