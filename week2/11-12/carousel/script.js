(function () {
    var dogs = document.querySelectorAll("#dogs img");
    var dots = document.getElementsByClassName("dot");
    var currentDog = 0;
    var timer; //setTimeout torna un valore, lo vogliamo salvare ogni volta che viene invocato

    function moveDogs() {
        // console.log("I will move the dogs, maybe!");

        // console.log("currentDog before increase: ", currentDog);
        dots[currentDog].classList.remove("on");

        dogs[currentDog].classList.replace("onscreen", "exit-left");
        currentDog++;

        if (currentDog >= dogs.length) {
            currentDog = 0;
        }

        dogs[currentDog].classList.add("onscreen");
        // console.log("currentDog after increase: ", currentDog);

        dots[currentDog].classList.add("on");
    }

    timer = setTimeout(moveDogs, 2000); //this gets the carousel moving initially

    document.addEventListener("transitionend", function (e) {
        if (e.target.classList.contains("exit-left")) {
            e.target.classList.remove("exit-left");
            timer = setTimeout(moveDogs, 5000); //make sure our moveDogs fn keeps moving forever, invoke
        }
    });

    /*
    for (var i = 0; i < dots.length; i++) {
        //loopo attraverso dots e gli aggiungo un event listener
        dots[i].addEventListener("click", function (e) {
            //console.log("clicked");
            console.log(i); //vedremo che i qua non corrisponde ai dots (?), non ho capito perché
            console.log(e.target.id); //torna ID, ma stringa
            console.log(+e.target.id.slice(3)); //converte il mio id in un numero

            clearTimeout(timer);
            for (var i = 0; i < dots.length; i++) {
                if (dots[i] == e.target) {
                    console.log(i);
                    break;
                }
            }
        });
    }
    */
})();
