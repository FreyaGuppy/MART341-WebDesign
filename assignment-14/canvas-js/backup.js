var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

//line
ctx.moveTo(10, 0);
ctx.lineTo(160, 100);
ctx.stroke();

//circle
ctx.beginPath();
ctx.arc(250, 50, 40, 0, 2 * Math.PI);
ctx.stroke();

//text
ctx.font = "30px Arial";
ctx.fillText("Hello World", 10, 150);

//stroke text
ctx.font = "30px Arial";
ctx.strokeText("Hello World", 180, 150);

//linear gradient
    // Create gradient
    var grd = ctx.createLinearGradient(10, 0, 150, 0);
    grd.addColorStop(0, "red");
    grd.addColorStop(1, "white");

    // Fill with gradient
    ctx.fillStyle = grd;
    ctx.fillRect(10, 200, 150, 80);

//circular gradient
    // Create gradient
    var grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
    grd.addColorStop(0, "red");
    grd.addColorStop(1, "white");

    // fill with gradient
    ctx.fillStyle = grd;
    ctx.fillRect(150, 10, 150, 80);


