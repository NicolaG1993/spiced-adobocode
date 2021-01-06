//EXERCISE 1

const arr = [7, 14, 21];
const newArrayGenerator = ([a, b, c]) => [c, b, a];

newArrayGenerator(arr);
console.log(newArrayGenerator(arr));

//EXERCISE 2

const arr1 = [7, 14, 21];
const arr2 = [28, 35, 42];
const anotherArrayGenerator = (a, b) => [...a, ...b];

anotherArrayGenerator(arr1, arr2);
console.log(anotherArrayGenerator(arr1, arr2));

//EXERCISE 3

function logInfo(city) {
    const { name, country, population: numPeople } = city;

    console.log(`${name} is in ${country} and has ${numPeople} in it.`);
}

logInfo({ name: "Venice", country: "Italy", population: 1000000 });

//EXERCISE 4

var Bologna = { name: "Bologna", country: "Italy" };
var Lugano = { name: "Lugano", country: "Switzerland" };

function getNameAndCountry(x) {
    return [x.name, x.country];
}

function getRelocatedCity(city1, city2) {
    if (typeof city2 == "undefined") {
        city2 = {
            country: "Germany",
        };
    }
    var country = getNameAndCountry(city2)[1];
    var obj = {};

    for (var key in city1) {
        obj[key] = city1[key];
    }

    return {
        obj,
        country,
    };
}

console.log(getRelocatedCity(Bologna, Lugano));
//console.log(getNameAndCountry());
//console.log(getNameAndCountry(city1));

//EXERCISE 5

function* fizzbuzz() {
    let count = 1;
    while (count <= 100) {
        if (count % 3 == 0) {
            if (count % 5 == 0) {
                yield "fizzbuzz";
            } else {
                yield "fizz";
            }
        } else {
            if (count % 5 == 0) {
                yield "buzz";
            } else {
                yield count;
            }
        }
        ++count;
    }
}

for (const num of fizzbuzz()) {
    console.log("num: ", num);
}

//EXERCISE 6
let arr = [7, 14, 21];

function* generator(arr) {
    const newArray = [...arr];

    yield newArray.reverse();
}

const clone = generator();
console.log(clone.next());

//const it = generator();
//const val = it.next();

//const val = it.next();
//console.log(val);

//BONUS EXERCISE
