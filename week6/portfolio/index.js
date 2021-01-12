const http = require("http");
const fs = require("fs");
const path = require("path");
const { projectOverviewHtml } = require("./generateProjOverview");

const contentType = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".json": "application/json",
    ".gif": "image/gif",
    ".jpg": "image/jpeg",
    ".png": "image/png",
    ".svg": "image/svg+xml",
};

http.createServer((req, res) => {
    req.on("error", (err) => console.log("err in request: ", err));
    res.on("error", (err) => console.log("err in response: ", err));

    if (req.method != "GET") {
        console.log("not a GET request, not ok!");
        res.statusCode = 405; //status: method not allowed
        return res.end();
    }

    const filePath = path.normalize(__dirname + "/projects" + req.url);

    if (!filePath.startsWith(__dirname + "/projects")) {
        console.log("INTRUDER INCOMING");
        res.statusCode = 403; // status: forbidden
        return res.end();
    }

    fs.stat(filePath, (err, stats) => {
        if (err) {
            console.log("err in fs.stats: ", err);
            res.statusCode = 404; //status: not found
            return res.end();
        }
        if (stats.isFile()) {
            console.log("it is a file");
            res.setHeader("Content-Type", contentType[path.extname(filePath)]);
            const stream = fs.createReadStream(filePath);
            stream.pipe(res);
            stream.on("error", (err) => {
                console.log("err in readStreamHtml: ", err);
                res.statusCode = 500; // internal server error
                return res.end();
            });
        } else {
            console.log("it is a directory");

            if (req.url.endsWith("/")) {
                res.setHeader("ContentType", "text/html");
                if (req.url == "/") {
                    res.setHeader("ContentType", "text/html");
                    res.write(projectOverviewHtml());
                    res.end();
                } else {
                    const readStreamHtml = fs.createReadStream(
                        filePath + "/index.html"
                    );

                    readStreamHtml.pipe(res);
                    readStreamHtml.on("error", (err) => {
                        console.log("err in readStreamHtml: ", err);
                        res.statusCode = 500; // internal server error
                        return res.end();
                    });
                }
            } else {
                res.setHeader("Location", req.url + "/");
                res.statusCode = 302; //redirect
                res.end();
            }
        }
    });
}).listen(8080, () => console.log("server is listening..."));
