$("<div><h3>Welcome!!!</h3><p>Take a tour<p/></div>")
    .css({
        textDecoration: "underline",
    })
    .addClass("happy")
    .appendTo("body");

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
