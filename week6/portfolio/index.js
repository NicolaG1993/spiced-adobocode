const http = require("http");
const fs = require("fs");
const path = require("path");
// console.log("path: ", path); //obj
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
//console.log("contentType 1: ", contentType[".css"]);

http.createServer((req, res) => {
    req.on("error", (err) => console.log("err in request: ", err));
    res.on("error", (err) => console.log("err in response: ", err));

    // only need to allow GET requests
    if (req.method != "GET") {
        console.log("not a GET request, not ok!");
        res.statusCode = 405; //status: method not allowed
        return res.end();
    }

    //setting a var to hold the file or dir the user is requesting to see
    const filePath = path.normalize(__dirname + "/projects" + req.url); //req.url -> what comes after localhost:8080/ ...
    //console.log("filePath normalized: ", filePath); // /mnt/c/Users/Nik93/lavoro/spiced/adobo-code/week6/portfolio/project/ + req.url

    //we are making sure that we limit user access to only the projects directory
    if (!filePath.startsWith(__dirname + "/projects")) {
        console.log("INTRUDER INCOMING");
        res.statusCode = 403; // status: forbidden
        return res.end();
    }

    /*
    //DEMO of requiring an img
    console.log(__dirname+"/projects/ConnectFour/assets/sub.jpg");
    // create a readstream, to stream that img data
    const stream = fs.createReadStream(
        __dirname + "/projects/ConnectFour/assets/sub.jpg"
    );
    // send our data packages as a response
    stream.pipe(res); 
    //it is like a res.end() or write() but works only with readStream
    */

    //ex filePath -> Users/m_fischer/adobo-code/portfolio/projects/whatever
    fs.stat(filePath, (err, stats) => {
        console.log("stats: ", stats); //returns an fs.Stat object which has several properties and methods to get details about the file or directory
        if (err) {
            console.log("err in fs.stats: ", err);
            res.statusCode = 404; //status: not found
            return res.end();
        }
        if (stats.isFile()) {
            console.log("it is a file");
            //console.log("requesting filePath: ", filePath); // /mnt/c/Users/Nik93/lavoro/spiced/adobo-code/week6/portfolio/projects/ConnectFour/index.html
            // console.log(
            //     "file extenseion of requested file is: ",
            //     path.extname(filePath) // .html
            // );

            res.setHeader("Content-Type", contentType[path.extname(filePath)]);
            //console.log("response headers: ", res.getHeaders());

            const stream = fs.createReadStream(filePath);
            stream.pipe(res);
            //creiamo uno stream e lo logghiamo con pipe(la nostra response) //funziona come write-end
            stream.on("error", (err) => {
                console.log("err in readStreamHtml: ", err);
                res.statusCode = 500; // internal server error
                return res.end();
            });
        } else {
            //console.log("it is a directory");
            //console.log("requesting filePath: ", filePath);

            // if (req.url == "/favicon.ico") {
            //     console.log("leave us alone with this Favicon");
            //     res.statusCode = 405; // status: not allowed
            //     return res.end();
            // }

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
                //console.log("about to redirect....");
                res.setHeader("Location", req.url + "/");
                //res.write(projectOverviewHtml());
                res.statusCode = 302; //redirect?
                res.end();
            }
        }
    });

    //console.log("legit request made it here :D");
}).listen(8080, () => console.log("server is listening..."));
