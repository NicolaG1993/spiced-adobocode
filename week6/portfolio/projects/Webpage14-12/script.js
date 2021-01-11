//WEEK 3
var alertOverlay = $(".alertOverlay");
var span = $("span");

function alert() {
    alertOverlay.css({
        visibility: "visible",
    });

    span.on("click", function () {
        alertOverlay.css({
            visibility: "hidden",
        });
    });
}

setTimeout(alert, 1000);

//WEEK 2
(function () {
    var nav = document.querySelector("nav");
    var open = document.getElementById("menu-button");
    var close = document.querySelector(".close");
    var overlay = document.querySelector(".overlay");

    open.addEventListener("click", function () {
        nav.classList.add("on");
        overlay.classList.add("show");
    });
    close.addEventListener("click", function () {
        nav.classList.remove("on");
        overlay.classList.remove("show");
    });
})();
