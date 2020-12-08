/*
(function () {
    // var headlines = document.getElementsByClassName("headlines")[0];
    //cosí torna il div senza che sia in un array
    var headlines = document.querySelector(".headlines"); //cosi fa lo stesso ed é piu corta
    // console.log(headlines); //test

    // var links = document.querySelectorAll(".headlines > a");
    var links = document.getElementsByTagName("a"); //fanno la stessa cosa
    // console.log(links);

    var left = 100; //dichiaro il valore del movimento verso sinistra che andiamo a dichiarare in una funzione

    function move() {
        //una funzione che va a modificare left in css
        left--; //e sottrae 1 ogni volta //per questo dobbiamo dichiararlo prima
        headlines.style.left = left + "px";
        requestAnimationFrame(move); //funzione buiildin //chiama move per sempre ma senza entrare in un infinite loop
    }

    move(); //invoco funzione
})();
*/

//////////////////////

/*
(function () {
    var headlines = document.querySelector(".headlines");

    var left = headlines.offsetLeft;

    var links = document.getElementsByTagName("a");

    var left2 = links[0].offsetWidth;

    function move() {
        left--;
        headlines.style.left = left + "px";

        if (left <= left2 * -1) {
            left += left2;
            headlines.appendChild(links[0]);
            left2 = links[0].offsetWidth;
        }

        requestAnimationFrame(move);
    }

    move();
})();
*/

///////////////////

//PART 1
(function () {
    var headlines = document.querySelector(".headlines");

    var left = headlines.offsetLeft;

    var links = document.getElementsByTagName("a");
    var link1 = links[0];
    var link2 = link1.offsetLeft + link1.offsetWidth;

    function move() {
        left--;

        if (left < -link2) {
            left += link2;
            headlines.appendChild(link1);
            link1 = links[0];
            left2 = link1.offsetWidth;
        }
        headlines.style.left = left + "px";
        requestAnimationFrame(move);
    }

    move();

    //PART 2
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener("mouseenter", function (event) {
            left = event.target.offsetX;
            links[i].style.color = "blue";
            links[i].style.textDecoration = "underline";
        });

        links[i].addEventListener("mouseleave", function () {
            left = headlines.offsetLeft;
            links[i].style.color = "turquoise";
            links[i].style.textDecoration = "none";
        });
    }
})();
