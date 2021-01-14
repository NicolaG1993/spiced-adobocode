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
        title: "HB Portfolio",
        myData,
        //adding a local helper
        // helpers: {
        //     stressImportance(text) {
        //         return text.toUpperCase() + "!!!!!" + 👻;
        //     },
        // },
    });
});

app.get("/about", (req, res) => {
    res.render("about", {
        layout: "main",
        title: "about",
        emojis: ["🦩", "🚀", "👽"],
    });
});

app.get("/projects/:project", (req, res) => {
    const project = req.params.project;
    console.log("project: ", project);
    // you can also use destructuring:
    // const { project } = req.params;

    const selectedProject = myData.find(
        (item) => item.directory == project
        //console.log("item: ", item);
    );
    //console.log("myData: ", myData);
    console.log("selected project: ", selectedProject);

    if (!selectedProject) {
        return res.sendStatus(404);
    } else {
        res.render("description", {
            layout: "main",
            title: selectedProject.title,
            description: selectedProject.description,
        });
    }
});

app.listen(8080, () => console.log("hb portfolio listening on port 8080..."));
