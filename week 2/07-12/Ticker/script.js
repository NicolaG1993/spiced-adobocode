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

(function () {
    var headlines = document.querySelector(".headlines"); //seleziono div

    var left = headlines.offsetLeft; //la differenza di pixels fra headlines e l'inizio del primo links
    //console.log("left: ", left);

    var links = document.getElementsByTagName("a"); //seleziono links

    function move() {
        left--; //
        headlines.style.left = left + "px";
        for (var i = 0; i < links.length; i++) {
            if (links[i].offsetWidth > left - links[i].offsetWidth) {
                //   headlines.removeChild(links[i]);
                left += links[i].offsetWidth;
                links.appendChild(links[i]);
            }
        }

        requestAnimationFrame(move);
    }

    move();
})();
