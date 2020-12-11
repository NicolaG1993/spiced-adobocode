var square = document.getElementsByClassName("square")[0];
console.log(square);
//seleziono square

document.addEventListener("mousemove", function (e) {
    //console.log("check event: ", event);

    square.style.top = e.clientY - 50 + "px";
    square.style.left = e.clientX - 50 + "px";
});
