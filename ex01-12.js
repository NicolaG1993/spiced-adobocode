//EXERCISE 1
function logType(arg) {
    if (typeof arg == "undefined") {
        console.log("undefined!");
    } else if (arg === null) {
        console.log("null!");
    } else if (typeof arg == "number") {
        if (isNaN(arg)) console.log("not a number!");
        else console.log("number!");
    } else if (typeof arg == "string") {
        console.log("string!");
    } else if (typeof arg == "boolean") {
        console.log("boolean!");
    } else if (typeof arg == "bigint") {
        console.log("bigint!");
    } else if (typeof arg == "function") {
        console.log("function!");
    } else if (typeof arg == "object") {
        if (Array.isArray(arg)) console.log("array!");
        else console.log("object!");
    } else {
        console.log("I have no idea!");
    }
}

logType();
logType(null);
logType(14);
logType(NaN);
logType("Hey Joe");
logType(true);
logType(14n);
logType(function () {});
logType({});
logType([1, 2]);

//EXERCISE 2
var a = {
    Berlin: "Germany",
    Paris: "France",
    "New York": "USA",
};

var b = {};

/*
for (var key in a) {
    b[a[key]] = key;
    b[key.value] = a[key];
*/

/* for (var key in a) {     // my first attempts
    a[key.value] = b[key];
    a[key] = b[key.value];
}
*/

/*
for (var property in a) {   //In my mind this was the logic answer, but doesn't work
    b[a[property]] = a[property.value];
    b[property.value] = a[property];
}
*/

for (var property in a) {
    //I was lucky here, i don't really understand it
    b[a[property]] = property;
    a[property] = b[property.value];
}

console.log(b);

//EXERCISE 3
n = 10;
while (n > 0) {
    console.log(n);
    n--;
}
