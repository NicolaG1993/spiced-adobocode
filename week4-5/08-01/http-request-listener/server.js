const http = require("http");

const fs = require("fs");
//console.log("fs: ", fs);

const server = http.createServer(function (req, res) {
    req.on("error", (error) => {
        console.log("error on request object: ", error);
    });
    res.on("error", (error) => {
        console.log("error on response object: ", error);
    });
    console.log("req.url: ", req.url);
    console.log("req.headers: ", req.headers);
    console.log("req.method: ", req.method);

    let requests = [new Date(), req.method, req.url, req.headers["user-agent"]];
    let requestsFormatted = "\n" + requests.join("\t");
    fs.appendFile("requests.txt", requestsFormatted, (error) => {
        if (error) {
            console.log("error on appendFile request: ", error);
        }
    });

    if (req.method === "GET" || req.method === "HEAD") {
        res.setHeader("Content-Type", "text/html");
        res.statusCode = 200;

        if (req.method === "HEAD") {
            console.log("This is a HEAD request!!!");
            // ???
        } else if (req.method === "GET") {
            res.end(`<!doctype html>
            <html>
                <title>Hello World!</title>
                <p>Hello Worlda!</p>
            </html>`);
        }
    } else if (req.method === "POST") {
        let body = "";
        req.on("data", function (chunk) {
            body += chunk;
        }).on("end", function () {
            res.setHeader("Location", "/");
            res.statusCode = 302;
            res.end();
        });
    } else {
        res.statusCode = 405;
        res.end();
    }
});

server.listen(8080, () => console.log("My server is listening..."));

// http://localhost:8080
