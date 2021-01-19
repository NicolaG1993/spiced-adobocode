const countries = require("./countries");

test("if the passed string is empty, it returns an empty array", () => {
    const str = countries.find("");
    expect(str).toEqual([]);
});

test("The array that it returns contains no more than four matches", () => {
    const str = countries.find("a");
    expect(str.length).toBe(4);
});

test("The search is case insensitive", () => {
    const str = countries.find("ItAlY");
    expect(str[0]).toEqual("Italy");
});

test("If there are no matching countries, an empty array is returned", () => {
    const str = countries.find("zzz");
    expect(str).toEqual([]);
});
