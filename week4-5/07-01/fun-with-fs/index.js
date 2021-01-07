const fs = require("fs");
const chalk = require("chalk");
const myPath = __dirname;
//console.log("myPath: ", myPath);

//PART 1

const logSizes = fs.readdir(myPath, { withFileTypes: true }, (err, content) => {
    if (err) {
        console.log("error!", err);
        return;
    }
    for (let i = 0; i < content.length; i++) {
        //console.log("content[i]: ", content[i]);
        //console.log("isFile? ", content[i].isFile());
        //console.log("isDirectory? ", content[i].isDirectory());

        if (content[i].isFile()) {
            fs.stat(myPath, (err, stats) => {
                //console.log("stats: ", stats);
                console.log(
                    chalk.bgBlueBright(
                        `${__dirname + __filename}: ${stats.size}`
                    )
                );
            });
        } else if (content[i].isDirectory()) {
        }
    }
});

//PART 2

//const part2Content = fs.readdirSync();

//PART 3

// For every file it should call fs.stat to determine the file's size. Once the size is known,
//it should log the path to the file followed by a colon and the size of the file.

// For every directory, it should call itself and pass the path to the directory so that
//the sizes of all the files contained in the directory will be logged.
