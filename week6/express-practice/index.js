const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const { projectOverviewHtml } = require("./generateProjOverview");

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use((req, res, next) => {
    console.log("the route is:", req.url);
    console.log("req.cookies is:", req.cookies);
    next();
});
app.use((req, res, next) => {
    // console.log(`${req.method} request was made to ${req.url}`);

    if (req.url != "/cookies") {
        console.log("REQ", req.url);
        if (req.cookies["cookies-accepted"]) {
            console.log("Cookies are valide, u can navigate! 👽");
            //res.redirect(theCookie.reqURL);
            next();
        } else {
            if (req.url != "/style.css") {
                res.cookie("reqURL", req.url); //forse request dir + /
            }

            res.redirect("/cookies");
        }
    } else {
        next();
    }
});
app.use(express.static("./public"));
app.use(express.static("./projects"));

// app.get("/", (req, res) => {
//     //req e res hanno nuovi metodi!
//     console.log("I confirm GET req was made to the / route");

//     // res.send("<h1>HEY</h1>");
//     res.send(projectOverviewHtml());
//     //res.sendFile(__dirname + "/index.html");
//     //res.redirect("/about");
//     // res.render();
//     // res.json();
// });

/////////////////////
/////////////////////
app.get("/cookies", (req, res) => {
    res.sendFile(__dirname + "/cookies-settings.html");
});
/////////////////////
/////////////////////

app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/about.html");
});

/////////////////////
/////////////////////
app.post("/cookies", (req, res) => {
    const accepted = req.body["accept-cookies"];
    if (accepted) {
        res.cookie("cookies-accepted", "YEAH");
        console.log("COOKIE WILL REDIRECT TO: ", req.cookies.reqURL);
        res.redirect(req.cookies.reqURL);
    } else {
        res.send(`<h1>NOPE cookies not accepted</h1>`);
    }
});
/////////////////////
/////////////////////

app.listen(8080, () => console.log("Server listening on port 8080.."));
