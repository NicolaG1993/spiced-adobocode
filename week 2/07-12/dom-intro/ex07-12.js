//EXERCISE 1

function changeStyle(x) {
    var tag = document.querySelectorAll(x);
    //console.log("selecting p: ", p);
    //console.log("style in my p: ", p.style);
    for (var i = 0; i < tag.length; i++) {
        tag[i].style.fontWeight = "bold";
        tag[i].style.fontStyle = "italic";
        tag[i].style.textDecoration = "underline";
    }
}

changeStyle("p");

//EXERCISE 2

function changeStyleToClass(y) {
    var myClass = document.querySelectorAll(y);
    // console.log("my class is: ", myClass);
    var myArray = [];
    for (var i = 0; i < myClass.length; i++) {
        myArray.push(myClass[i]);
        // console.log("my array is loopin: ", myArray);
    }
    return myArray;
    // console.log("my array is: ", myArray);
}

changeStyleToClass(".numbers");

//EXERCISE 3

/*
Write a function that inserts an element into the body of the currently loaded page.
That element should have fixed position, z-index of 2147483647, 
left of 20px, top of 100px, font-size of 200px, and contain the text 'AWESOME'.
*/

function insertElem(z) {
    var myNewElem = document.createElement(z);
    var text = document.createTextNode("AWESOME");

    myNewElem.appendChild(text);

    myNewElem.style.position = "fixed";
    myNewElem.style.zIndex = "2147483647";
    myNewElem.style.top = "100px";
    myNewElem.style.left = "20px";
    myNewElem.style.fontSize = "200px";

    document.body.appendChild(myNewElem);
}

insertElem("div");
