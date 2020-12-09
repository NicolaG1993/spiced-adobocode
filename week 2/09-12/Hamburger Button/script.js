(function () {
    var nav = document.querySelector("nav");
    var btn1 = document.querySelector(".open");
    var btn2 = document.querySelector(".close");
    var overlay = document.querySelector(".overlay");

    btn1.classList.add("show");

    btn1.addEventListener("click", function () {
        nav.classList.add("on");

        overlay.style.opacity = "33" + "%";
        btn2.classList.add("show");
        btn1.classList.remove("show");
    });

    btn2.addEventListener("click", function () {
        nav.classList.remove("on");

        overlay.style.opacity = 0;
        btn2.classList.remove("show");
        btn1.classList.add("show");
    });
})();
