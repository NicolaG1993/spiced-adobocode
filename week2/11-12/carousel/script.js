(function () {
    var dogs = document.querySelectorAll("#dogs img");
    var dots = document.getElementsByClassName("dot");
    var currentDog = 0;
    var timer;
    var isTransitioning = false;

    function moveDogs() {
        isTransitioning = true;
        dots[currentDog].classList.remove("on");
        dogs[currentDog].classList.replace("onscreen", "exit-left");

        if (arguments.length) {
            currentDog = arguments[0];
        } else {
            currentDog++;
        }

        if (currentDog >= dogs.length) {
            currentDog = 0;
        }

        dogs[currentDog].classList.add("onscreen");
        dots[currentDog].classList.add("on");
    }

    timer = setTimeout(moveDogs, 2000);

    document.addEventListener("transitionend", function (e) {
        if (e.target.classList.contains("exit-left")) {
            e.target.classList.remove("exit-left");
            timer = setTimeout(moveDogs, 5000);
        }

        isTransitioning = false;
    });

    for (var i = 0; i < dots.length; i++) {
        dots[i].addEventListener("click", getClickHandler(i));
    }

    function getClickHandler(i) {
        return function (e) {
            if (e.target.classList.contains("on")) {
                return;
            }
            if (isTransitioning) {
                console.log(isTransitioning);
                return;
            }
            clearTimeout(timer);
            console.log(isTransitioning);

            moveDogs(i);
        };
    }
})();

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }
