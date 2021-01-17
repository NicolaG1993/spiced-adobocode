const https = require("https");
const { twitterKey, twitterSecret } = require("./secrets");
// console.log("twitterKey: ", twitterKey);
// console.log("twitterSecret: ", twitterSecret);

module.exports.getToken = function (callback) {
    const creds = `${twitterKey}:${twitterSecret}`;
    const encodedCreds = Buffer.from(creds).toString("base64");
    console.log("creds: ", creds);

    const config = {
        method: "POST",
        host: "api.twitter.com",
        path: "/oauth2/token",
        headers: {
            Authorization: `Basic ${encodedCreds}`,
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
    };

    function httpsRequestCallback(res) {
        if (res.statusCode !== 200) {
            callback(res.statusCode);
            return;
        }
        let body = "";
        res.on("data", (chunk) => {
            body += chunk;
            console.log("body: ", body);
        });
        res.on("end", () => {
            const parsedBody = JSON.parse(body);
            console.log("parsedBody: ", parsedBody);
            callback(null, parsedBody.access_token);
        });
    }

    const req = https.request(config, httpsRequestCallback);
    req.end("grant_type=client_credentials");
};

module.exports.getTweets = function (bearerToken, callback) {
    // hint: stessa metodologia di getToken //accedi data (tweets u get) //
    // Once we have our bearerToken we can get the tweets from twitter
    // with this function.
    // This is also asynchronous -> hence the callback!
    // We  need to send the bearer token EVERY time we do this!
    // This is for you to complete yourselves.
};

module.exports.filterTweets = function (tweets) {
    // Once we have the tweets we need, this function will sort them into
    // the format needed for ticker (i.e. an array of objects, containing 2 properties)
    // This is also for you to complete.
    // n.b. this process is SYNCHRONOUS
};
