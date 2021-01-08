const fs = require("fs");
const chalk = require("chalk");
const myPath = __dirname;
//console.log("myPath: ", myPath);

//PART 1

// const logSizes = (x) => {
//     //passo x invece di myPath perché non voglio sia un valore fisso
//     fs.readdir(x, { withFileTypes: true }, (err, content) => {
//         if (err) {
//             console.log("error!", err);
//             return;
//         }
//         for (let i = 0; i < content.length; i++) {
//             //console.log("content[i]: ", content[i]);
//             //console.log("isFile? ", content[i].isFile());
//             //console.log("isDirectory? ", content[i].isDirectory());
//             let path = x + `/${content[i].name}`; //creo un nuovo path che aggiunge il nome del file attuale a myPath
//             //console.log("x: ", x);
//             //console.log("path: ", path);

//             if (content[i].isFile()) {
//                 fs.stat(path, (err, stats) => {
//                     if (err) {
//                         console.log("error!", err);
//                         return;
//                     }
//                     //console.log("stats: ", stats);
//                     console.log(chalk.bgBlueBright(`${path}: ${stats.size}`));
//                 });
//             } else if (content[i].isDirectory()) {
//                 //console.log("content[i]: ", content[i].name);
//                 //console.log("dirPath: ", dirPath);
//                 logSizes(path);
//             }
//         }
//     });
// };

// logSizes(myPath);

//PART 2

// const content = fs.readdirSync(myPath, { withFileTypes: true });
//legge la nostra directory e torna un array contenente oggetti(files and folders)

mapSizes = (link) => {
    let myObj = {};
    let content = fs.readdirSync(link, { withFileTypes: true });
    // let newContent = fs.readdirSync(x, { withFileTypes: true });
    // console.log("newContent: ", newContent);
    // console.log(data);
    //console.log(x);
    for (let i = 0; i < content.length; i++) {
        let element = content[i];
        //let newContent = fs.readdirSync(element, { withFileTypes: true });
        let dirPath = link + `/${element.name}`; // __dirname ?

        //console.log("element: ", element); //obj
        //console.log("newContent: ", newContent);

        if (element.isFile()) {
            //console.log("this is a file! >> ", element);
            let stats = fs.statSync(dirPath); //accedo alle info dell'oggetto
            //console.log(stats);
            //console.log(stats.size);
            //element[element.name] = stats.size; //syntax to add property to our element(object) and set his value
            myObj[element.name] = stats.size;
            //console.log("element: ", element);
        } else if (element.isDirectory()) {
            //console.log("this is a folder! >> ", element);
            //console.log("this is the folder link >> ", dirPath);
            myObj[element.name] = mapSizes(dirPath);
            //console.log("myObj: ", myObj);
            //element[element.name] = mapSizes(dirPath);
            //console.log(element);
        }
    }
    //console.log("My Object: ", myObj);
    return myObj;
};

let finalObj = mapSizes(myPath);
//console.log("finalObj: ", finalObj);
let finalData = fs.writeFileSync(
    myPath + "/files.json",
    JSON.stringify(finalObj, null, 4)
);

console.log(JSON.stringify(finalData)); //why do i get undefined?

//PART 3

/*
0- determino content (un array contenente oggetti(files and folders))
    sará il primo argomento che passo quando invocheró la funzione inizialmente (x)

1- passo x nella mia funzione (array di obj)
    e creo un oggetto vuoto (sará quello che torna la funzione)
2- loopo dentro l'argomento x
3- ora ho ogni singolo elemento dentro x (obj(contiene nome e tipo))
4- lo nomino element
5- salvo il suo link in un altra var, uso il path del mio file index.js + il nome dell'element

6- if element é un file
    salva le sue informazioni in una var chiamata stats, usando il metodo statSync, passandogli il link del nostro element
    questo torna un'obj contenente varie infos sul file
    prendiamo quella riguardante il suo size che useremo fra poco come valore di una nuova proprietá per il nostro obj vuoto
    prima questa nuova proprietá prenderá il nome dall'obj element

7- if element é un folder
    prendiamo il suo link
    lo passiamo attraverso la nostra funzione
    che dovrá tornare un oggetto


*/
