const os = require("os");
const cluster = require("cluster");

// console.log('os: ',os);
//console.log("os.cpus().length: ", os.cpus().length);
//console.log("os.cpus(): ", os.cpus());

cluster.setupMaster({
    //exec: __dirname + "/app.js",
    exec: "index.js",
});

for (let i = 0, l = os.cpus().length; i < l; i++) {
    cluster.fork(); //im using 8 processor now
}

/*
cluster.fork(); //one for every processor we have
cluster.fork();
cluster.fork();
*/

cluster.on("exit", (worker) => {
    console.log(`WORKER ${worker.process.pid} STOPPED WORKING!`);
    cluster.fork();
});
