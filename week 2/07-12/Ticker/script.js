console.log("HEY");

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
