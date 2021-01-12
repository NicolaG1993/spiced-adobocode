const express = require("express"); //é una funzione
const app = express(); //un obj pieno di metodi

app.get("/", (req, res) => {
    //req e res hanno nuovi metodi!
    console.log("GET req was made to the / route");
    res.send("<h1>HEY</h1>");
    // res.redirect("/about");
    // res.render();
    // res.json();
});

//potremmo fare tutto in one line:
//app.get("/", (req, res) => res.send("<h1>HEY</h1>")); //un metodo invece di 4: error, set headers, code, end

app.get("/about", (req, res) => {
    console.log("req made to /about route");
    res.sendFile(__dirname + "/index.html");
});

app.get("/users/:username", (req, res) => {
    console.log("req.params: ", req.params);
});
//or
app.get("/users/:username/:postId", (req, res) => {
    console.log("req.params: ", req.params);

    //here i could get data from the DB

    res.send(`
    <h1>This is the page for user ${req.params.username}</h1>
    <h2>This is the post for the id ${req.params.postId}</h2>
    `);
});
//or
app.get("/users/:username/:postId", (req, res) => {
    const { username, postId } = req.params;

    //here i could get data from the DB

    res.send(`
    <h1>This is the page for user ${username}</h1>
    <h2>This is the post for the id ${postId}</h2>
    `);
});

app.listen(8080, () => console.log("Server listening on port 8080.."));
