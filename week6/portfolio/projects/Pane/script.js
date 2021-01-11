(function () {
    var section = $("section");
    var img1 = $(".imgBox1");
    var slide = $(".slide");
    //coded the day after with soultions

    var sectionX, sectionWidth, offset;

    slide.on("mousedown", function (e) {
        sectionX = section.offset().left;
        sectionWidth = section.outerWidth();
        var slideX = slide.position().left;
        var pointerX = e.clientX - sectionX;
        offset = pointerX - slideX;
        section.on("mousemove", drag);
        e.preventDefault();
    });

    $(document).on("mouseup", function () {
        section.off("mousemove");
    });

    function drag(e) {
        if (e.clientX > sectionX + sectionWidth || e.clientX < sectionX) {
            return;
        }

        var px = e.clientX - sectionX - offset + "px";

        slide.css({
            left: px,
        });
        img1.css({
            width: px,
        });
    }
})();
