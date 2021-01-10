const http = require("http");
//console.log("http: ", http); // obj{METHODS:[], STATUS_CODES:{}, Agent: {}[]}

const server = http.createServer(function (req, res) {
    // inside here we will handle requests and send responses
    req.on("error", (error) => {
        console.log("error on req object: ", error);
    });
    res.on("error", (error) => {
        console.log("error on response object: ", error);
    });

    // console.log("req: ", req); //obj {objs and properties}
    // console.log("req.url: ", req.url); // /path/to/file/index.html?name=value
    // console.log("req.headers: ", req.headers); // obj {host, connection, accept, dnt}
    // console.log("req.method: ", req.method); // GET

    if (req.method === "GET" || req.method === "HEAD") {
        //console.log("req: ", req); //obj {objs and properties}
        //console.log("req.url: ", req.url); // /path/to/file/index.html?name=value
        //console.log("req.headers: ", req.headers); // obj {host, connection, accept, dnt}
        console.log("req.method: ", req.method); // GET

        res.setHeader("Content-Type", "text/html");
        res.statusCode = 200;

        if (req.method === "GET") {
            console.log("This is a GET request!!!");
        } else if (req.method === "HEAD") {
            console.log("This is a HEAD request!!!");
        }
    } else if (req.method === "POST") {
        console.log("This is a POST request!!!");
    }

    let body = "";
    req.on("data", function (chunk) {
        body += chunk;
    }).on("end", function () {
        //console.log("body: ", body); // logs the entire request body // ? empty ?
        //console.log("res: ", res); // obj{objs}
        res.setHeader("Content-Type", "text/html"); // ?? sembra inutile
        res.statusCode = 200; // ?? sembra inutile
        res.end(`
                <!doctype html>
                <h1>Thanks! ${body} </h1>
                `);
    }); // return html on our browser
});

server.listen(8080, () => console.log("My server is listening..."));

// http://localhost:8080/path/to/file/index.html?name=value
