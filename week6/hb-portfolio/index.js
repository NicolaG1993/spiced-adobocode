const express = require("express");
const app = express();
const hb = require("express-handlebars");
const myData = require("./myData");

app.engine("handlebars", hb());
app.set("view engine", "handlebars");

app.use(express.static("./public"));
app.use(express.static("./projects"));

app.get("/", (req, res) => {
    res.render("welcome", {
        layout: "main",
        cohort: "Adobo",
        title: "welcome",
        myData,
    });
});

app.get("/about", (req, res) => {
    res.render("about", {
        title: "about",
        emojis: ["🦩", "🚀", "👽"],
    });
});

app.listen(8080, () => console.log("hb portfolio listening on port 8080..."));
