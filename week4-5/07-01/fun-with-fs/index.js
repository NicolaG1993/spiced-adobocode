const fs = require("fs");
const chalk = require("chalk");
const myPath = __dirname;
//console.log("myPath: ", myPath);

//PART 1

const logSizes = (x) => {
    fs.readdir(x, { withFileTypes: true }, (err, content) => {
        if (err) {
            console.log("error!", err);
            return;
        }
        for (let i = 0; i < content.length; i++) {
            let path = x + `/${content[i].name}`;
            if (content[i].isFile()) {
                fs.stat(path, (err, stats) => {
                    if (err) {
                        console.log("error!", err);
                        return;
                    }

                    console.log(chalk.bgBlueBright(`${path}: ${stats.size}`));
                });
            } else if (content[i].isDirectory()) {
                logSizes(path);
            }
        }
    });
};

logSizes(myPath);

//PART 2

mapSizes = (x) => {
    let myObj = {};
    let content = fs.readdirSync(x, { withFileTypes: true });

    for (let i = 0; i < content.length; i++) {
        let element = content[i];
        let dirPath = x + `/${element.name}`;

        if (element.isFile()) {
            let stats = fs.statSync(dirPath);
            myObj[element.name] = stats.size;
        } else if (element.isDirectory()) {
            myObj[element.name] = mapSizes(dirPath);
        }
    }
    return myObj;
};

let finalObj = mapSizes(myPath);
let finalData = fs.writeFileSync(
    myPath + "/files.json",
    JSON.stringify(finalObj, null, 4)
);

console.log(chalk.red(finalData));

//PART 3
