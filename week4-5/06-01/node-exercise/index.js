const url = require("url");
const querystring = require("querystring");
const newQueryString = url.parse(process.argv[2]).query;
console.log(querystring.parse(newQueryString));

//console.log(process);
//console.log(process.argv);
//console.log(url.parse(process.argv[2]));
console.log("The protocol is", url.parse(process.argv[2]).protocol);
console.log("The host is", url.parse(process.argv[2]).host);
console.log("The hostname is", url.parse(process.argv[2]).hostname);
console.log("The port is", url.parse(process.argv[2]).port);
console.log("The pathname is", url.parse(process.argv[2]).pathname);
console.log("The query is", newQueryString);

if (newQueryString !== null) {
    const parsedObj = querystring.parse(newQueryString);
    const entries = Object.entries(parsedObj);

    for (const [key, value] of entries) {
        console.log(`The value of ${key} is ${value}`);
    }
}

// node . "http://127.0.0.1:8080/test?a=100&b=200"
