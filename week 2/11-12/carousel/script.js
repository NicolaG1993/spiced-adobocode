(function () {
    var dogs = document.querySelectorAll("#dogs img");

    var currentDog = 0;

    function moveDogs() {
        // console.log("I will move the dogs, maybe!");

        // console.log("currentDog before increase: ", currentDog);

        dogs[currentDog].classList.replace("onscreen", "exit-left");
        currentDog++;

        if (currentDog >= dogs.length) {
            currentDog = 0;
        }

        dogs[currentDog].classList.add("onscreen");
        // console.log("currentDog after increase: ", currentDog);

        setTimeout(moveDogs, 5000); //make sure our moveDogs fn keeps moving forever, invoke
    }

    setTimeout(moveDogs, 2000); //this gets the carousel moving initially

    document.addEventListener("transitionend", function (e) {
        var a = "exit-left";
        //console.log(e.target.classList.contains("exit-left"));

        if (e.target.classList.contains("exit-left")) {
            e.target.classList.remove("exit-left");
        }
    });
})();
