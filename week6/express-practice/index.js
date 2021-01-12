const express = require("express"); //é una funzione
const app = express(); //un obj pieno di metodi
const cookieParser = require("cookie-parser");

app.use(express.urlencoded({ extended: false })); //this is what parse all the data
app.use(cookieParser());
app.use((req, res, next) => {
    console.log(`${req.method} request was made to ${req.url}`);
    //console.log("req.cookies: ", req.cookies);

    //res.cookie("reqURL", req.url);
    //let theCookie = req.cookies;

    //console.log("theCookie: ", theCookie);

    if (req.url !== "/cookies") {
        if (req.cookies["cookies-accepted"]) {
            console.log("Cookies are valide, u can navigate! 👽");
            //res.redirect(theCookie.reqURL);
            //next();
        } else {
            res.cookie("reqURL", req.url);
            res.redirect("/cookies");
        }
    }
    next(); //we need it to make the fn(or express?) running
    //i dont get this part
});
app.use(express.static("./public")); //i dont get this part
app.use(express.static("./projects"));

app.get("/", (req, res) => {
    //req e res hanno nuovi metodi!
    console.log("I confirm GET req was made to the / route");
    //res.cookie("first-cookie", "AMAZING!");
    // res.send("<h1>HEY</h1>");
    res.sendFile(__dirname + "/index.html");
    // res.redirect("/about");
    // res.render();
    // res.json();
});

//se i cookie non sono stati accettati
//reindirizza a /cookies //ma prima crea un valore previousLink in cookie con l'attuale url
//user accetta -> POST request a /cookies
//cookie salva data dello user
//conserva data per tutto il tempo che user naviga nel sito
//reindirizza user a link precedente di /cookies
//se non accetta ritorna html --> accesso sito vietato

/////////////////////
/////////////////////
app.get("/cookies", (req, res) => {
    //console.log("req made to /cookies route", req.method, req.url);
    res.sendFile(__dirname + "/cookies-settings.html");
});
/////////////////////
/////////////////////

app.get("/about", (req, res) => {
    //console.log("req made to /about route");
    res.sendFile(__dirname + "/about.html");
});

app.get("/users/:username/:postId", (req, res) => {
    //console.log("req.params: ", req.params);
    const { username, postId } = req.params; //req.params.username

    //here i could get data from the DB

    res.send(`
    <h1>This is the page for user ${username}</h1>
    <h2>This is the post for the id ${postId}</h2>
    `);
});

app.get("/register", (req, res) => {
    res.send(`
<h2>Please tell us about yourself</h2>
        <form method='POST' style="display: flex; flex-direction: column; justify-content: space-between; width: 40%; height: 50%;">
            <input type='text' name='firstname' placeholder='First Name' autocomplete='off'>
            <input type='text' name='lastname' placeholder='Last Name' autocomplete='off'>
            <div>
                <span>How old are you? </span><input type="number" name="age">
            </div>
            <div>
                <input type="checkbox" name="subscribe"><span>Would you like to receive our newsletter?</span>
            </div>
            <button> submit </submit>
        </form>
    `); //if i click submit in the form its making a post req to /register
});

app.post("/register", (req, res) => {
    console.log("post made to /register");
    console.log("req.body: ", req.body);
    //i need post req to send data in an obj //sensitive infos: email, name, etc
    //we use middleware
    res.cookie("authenticated", true);

    const { firstname, lastname, age, subscribe } = req.body; // req.body.firstname, etc
    //vengono presi dal name nel html del form, sono i valori nel nostro obj (body)
    if (subscribe) {
        res.send(`
        <h1>Thanks ${firstname} ${lastname} for subscribing to the newsletter!</h1>
        <h2>You are ${age} years old apparaently</h2>`);
    } else {
        res.send(`
        <h1>What? You don't want to subscribe to the newsletter!?</h1>
        <h2>See u in ${age} years ${firstname} ${lastname}</h2>
        `);
    }
});

/////////////////////
/////////////////////
app.post("/cookies", (req, res) => {
    //console.log("my post req made to /cookies: ", req.body);
    const accepted = req.body["accept-cookies"];
    if (accepted) {
        //res.send(`<h1>YEAH cookies accepted</h1>`);
        res.cookie("cookies-accepted", "YEAH");
        //res.send(`<h1>YEAH cookies accepted</h1>`);
        console.log("COOKIE WILL REDIRECT TO: ", req.cookies.reqURL);
        res.redirect(req.cookies.reqURL);
        res.clearCookie(req.cookies.reqURL);
        //console.log("req.cookies: ", req.cookies);
    } else {
        res.send(`<h1>NOPE cookies not accepted</h1>`);
    }
});
/////////////////////
/////////////////////

app.get("/private", (req, res) => {
    console.log("req.cookies: ", req.cookies);
    if (req.cookies.authenticated) {
        res.send(`
            <h1>TOP SECRET STUFF ✋ 🛑</h1>
            <h1>This is so secret and private</h1>
        `);
    } else {
        res.redirect("/");
    }
});

app.listen(8080, () => console.log("Server listening on port 8080.."));
