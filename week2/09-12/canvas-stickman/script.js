(function () {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    console.log("ctx: ", ctx);

    ////HEAD
    ctx.beginPath(); //start path
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 2;
    ctx.arc(300, 100, 50, 0, 2 * Math.PI);
    ctx.stroke();
    ////BODY
    ctx.beginPath();
    ctx.moveTo(300, 150);
    ctx.lineTo(300, 350);
    ctx.stroke();
    ////ARMS
    ctx.beginPath();
    ctx.moveTo(150, 250);
    ctx.lineTo(300, 200);
    ctx.lineTo(450, 250);
    ctx.stroke();
    ////LEGS
    ctx.beginPath();
    ctx.moveTo(250, 550);
    ctx.lineTo(300, 350);
    ctx.lineTo(350, 550);
    ctx.stroke();

    ///BONUS
    var frame = document.getElementById("frame").getContext("2d");
    frame.drawImage(canvas, 10, 10);

    frame.addEventListener("input", function () {
        //
    });
})();
