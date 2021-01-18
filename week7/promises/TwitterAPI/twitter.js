const https = require("https");
const { twitterKey, twitterSecret } = require("./secrets");

module.exports.getToken = function () {
    // step 1: wrap the function in the promise constructor
    return new Promise((resolve, reject) => {
        // step 2: resolve values we want
        const creds = `${twitterKey}:${twitterSecret}`;
        const encodedCreds = Buffer.from(creds).toString("base64");

        const config = {
            method: "POST",
            host: "api.twitter.com",
            path: "/oauth2/token",
            headers: {
                Authorization: `Basic ${encodedCreds}`,
                "Content-Type":
                    "application/x-www-form-urlencoded;charset=UTF-8",
            },
        };

        function httpsRequestCallback(res) {
            if (res.statusCode !== 200) {
                reject("error, status not 200!", res.statusCode);
                //return;
            }
            let body = "";
            res.on("data", (chunk) => {
                body += chunk;
            });
            res.on("end", () => {
                const parsedBody = JSON.parse(body);

                resolve(parsedBody.access_token);
            });
        }

        const req = https.request(config, httpsRequestCallback);
        req.end("grant_type=client_credentials");
    });
};

module.exports.getTweets = function (bearerToken, tweetSource) {
    return new Promise((resolve, reject) => {
        const config = {
            method: "GET",
            host: "api.twitter.com",
            path: `/1.1/statuses/user_timeline.json?screen_name=${tweetSource}&tweet_mode=extended&count=2`,
            headers: {
                Authorization: `Bearer ${bearerToken}`,
            },
        };

        function httpsRequestCallback(res) {
            if (res.statusCode !== 200) {
                reject("error, status not 200!", res.statusCode);
            }
            let body = "";
            res.on("data", (chunk) => {
                body += chunk;
            });
            res.on("end", () => {
                const tweets = JSON.parse(body);

                resolve(tweets);
            });
        }

        const req = https.request(config, httpsRequestCallback);
        req.end();
    });
};

module.exports.filterTweets = function (tweets) {
    const newArray = tweets.filter((tweet) => tweet.entities.urls.length == 1);

    let arr = [];
    for (let i = 0; i < newArray.length; i++) {
        const tweetText = newArray[i].full_text;

        const tweetURL = newArray[i].entities.urls[0].url;
        let mediaURL;

        if (newArray[i].entities.media) {
            mediaURL = newArray[i].entities.media[0].url;
        }

        const finalText = tweetText
            .replace(mediaURL, "")
            .replace(tweetURL, "")
            .trim();

        const obj = { url: tweetURL, title: finalText };

        arr.push(obj);
    }

    console.log("arr: ", arr);
    return arr;
};
