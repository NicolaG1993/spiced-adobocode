const http = require("http");
const chalk = require("chalk");
const querystring = require("querystring");
const myHtml = `<!doctype html>
                    <html>
                    <title>Colors</title>
                    <form method="POST">
                      <input type="text" name="text">
                      <select name="color">
                        <option value="red">red</option>
                        <option value="blue">blue</option>
                        <option value="green">green</option>
                        <option value="yellow">yellow</option>
                        <option value="gray">gray</option>
                        <option value="magenta">magenta</option>
                        <option value="cyan">cyan</option>
                      </select>
                      <button type="submit">Go</button>
                    </form>
                    </html>`;

const server = http.createServer(function (req, res) {
    req.on("error", (err) => {
        console.log("request error! ", err);
    });
    res.on("error", (err) => {
        console.log("response error! ", err);
    });

    if (req.method === "GET" || req.method === "POST") {
        //res.setHeader("Content-Type", "text/html");
        res.statusCode = 200;

        if (req.method === "GET") {
            //console.log("GET Method");
            res.write(myHtml);
            res.end();
        }

        if (req.method === "POST") {
            //console.log("POST Method");
            let body = "";

            req.on("data", (chunk) => {
                body += chunk;
            }).on("end", () => {
                //console.log("body inside the end listener: ", body);
                let str = querystring.parse(body);
                let color = chalk.keyword(`${str.color}`);
                //console.log(color("HEY"));
                //console.log("str: ", str);
                console.log("str.text: ", color(str.text));

                res.end(`<!doctype html>
                    <html>
                    <title> ${str.text} </title>
                    <a href=${req.headers.origin} style="color:${str.color}; text-decoration:none">${str.text}</a>
                    </html>`);
            });
        }
    } else {
        console.log("ERR 405");
        res.statusCode = 405;
        res.end();
    }
});

server.listen(8080, () => console.log("Server is listening on port 8080..."));
