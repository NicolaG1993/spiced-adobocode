const fs = require("fs").promises;
//const { readdir, stat } = require("fs").promises;

const chalk = require("chalk");
const myPath = __dirname;
//console.log("myPath: ", myPath);

//PART 1

const logSizes = (x) => {
    return fs
        .readdir(x, { withFileTypes: true })
        .then((content) => {
            let myArray = [];
            for (let i = 0; i < content.length; i++) {
                let path = x + `/${content[i].name}`;
                if (content[i].isFile()) {
                    myArray.push(
                        fs.stat(path).then((stats) => {
                            console.log(
                                chalk.bgBlueBright(`${path}: ${stats.size}`)
                            );
                        })
                    );
                } else if (content[i].isDirectory()) {
                    myArray.push(logSizes(path));
                }
            }
            return Promise.all(myArray);
        })
        .catch((err) => console.log("error catched: ", err));
};

logSizes(myPath).then(() => console.log("THAT IS IT"));
