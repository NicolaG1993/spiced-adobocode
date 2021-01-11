const fs = require("fs");
const myPath = __dirname + "/projects";

module.exports.projectOverviewHtml = function () {
    console.log("I will eventually generate html :)");

    const content = fs.readdirSync(myPath, { withFileTypes: true });
    //console.log("content: ", content);
    let myFilesLinks = "";
    for (let i = 0; i < content.length; i++) {
        //console.log("content[i].name: ", content[i].name); //nomi dei files.file

        let fileLink = `<li><a href="/${content[i]["name"]}">${content[i]["name"]}</a></li>`;
        //crea un <a> per ogni file
        myFilesLinks += fileLink;
    }
    myFilesLinks = `<ul>${myFilesLinks}</ul>`;
    //console.log("myFilesLinks: ", myFilesLinks);

    const myHtml = `<!doctype html>
                    <html>
                    <title>ProjOverview</title>
                    <div>
                    <h1>WELCOME TO MY PORTFOLIO</h1>
                    ${myFilesLinks}
                    </div>
                    </html>`;

    return myHtml;

    // generate your html *
    // read the content of our projects directory *
    // use readdirSync *

    // IF you decide to use readdir, this will slightly compilcate your life, *
    // you will need to figure out a way to send the response to the browser only *?
    // when readdir is done running. *
    // readdir will generate an array of projects for us *
    // we want to create an HTML string, and loop over our list of projects that are contained by the projects directory
    // for each project in the list of projects we want to compose html, that is a link to the respective project
    // make sure that this function returns a completed html string
};
