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

function getNameAndCountry(x) {
    return [x.name, x.country];
}

function getRelocatedCity(city1, city2 = { country: "Germany" }) {
    var [, country] = getNameAndCountry(city2);
    return {
        ...city1,
        country,
    };
}
