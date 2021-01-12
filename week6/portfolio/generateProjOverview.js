const fs = require("fs");
const myPath = __dirname + "/projects";

module.exports.projectOverviewHtml = function () {
    //console.log("I will eventually generate html :)");
    const content = fs.readdirSync(myPath, { withFileTypes: true });
    let myFilesLinks = "";
    for (let i = 0; i < content.length; i++) {
        let fileLink = `<li><a href="/${content[i]["name"]}">${content[i]["name"]}</a></li>`;

        myFilesLinks += fileLink;
    }
    myFilesLinks = `<ul>${myFilesLinks}</ul>`;

    const myHtml = `<!doctype html>
                    <html>
                    <title>ProjOverview</title>
                    <div>
                    <h1>WELCOME TO MY PORTFOLIO</h1>
                    ${myFilesLinks}
                    </div>
                    </html>`;

    return myHtml;
};
