const fs = require("fs");
const chalk = require("chalk");
const myPath = __dirname;
//console.log("myPath: ", myPath);

//PART 1

const logSizes = (x) => {
    //passo x invece di myPath perché non voglio sia un valore fisso
    fs.readdir(x, { withFileTypes: true }, (err, content) => {
        if (err) {
            console.log("error!", err);
            return;
        }
        for (let i = 0; i < content.length; i++) {
            //console.log("content[i]: ", content[i]);
            //console.log("isFile? ", content[i].isFile());
            //console.log("isDirectory? ", content[i].isDirectory());
            let path = x + `/${content[i].name}`; //creo un nuovo path che aggiunge il nome del file attuale a myPath
            //console.log("x: ", x);
            //console.log("path: ", path);

            if (content[i].isFile()) {
                fs.stat(path, (err, stats) => {
                    if (err) {
                        console.log("error!", err);
                        return;
                    }
                    //console.log("stats: ", stats);
                    console.log(chalk.bgBlueBright(`${path}: ${stats.size}`));
                });
            } else if (content[i].isDirectory()) {
                //console.log("content[i]: ", content[i].name);
                //console.log("dirPath: ", dirPath);
                logSizes(path);
            }
        }
    });
};

logSizes(myPath);

//PART 2

//const part2Content = fs.readdirSync();

//PART 3
