var WIDTH = 500, HEIGHT = 500;
var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext('2d');
var intervalId = null;

function fillCanvas(color) {
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
}

function draw() {
    fillCanvas('rgb(200, 0, 0)');

}

function gradientColor(x) {
    return Math.round(255 / WIDTH * x);
}

function drawGradient() {
    ctx.fillStyle = 'rgb(255, 255, 255)';
    for (var x = 0; x < WIDTH ; x++) {
        var col = gradientColor(x);
        ctx.fillStyle = 'rgb(' + col + ', ' + col + ', ' + col + ')';
        ctx.fillRect(x, 0, 1, HEIGHT);
    }
}

function drawAnimatedRect() {
    var fps = 30;
    var intervalId = setInterval(drawFrame, 1000 / fps);
    // clearInterval(intervalId);

    var x = 30;
    var y = 30;
    var w = 50;
    var h = 50;

    function drawFrame() {
        x += 5;
        y += 5;
        if (x >= WIDTH - w && y >= HEIGHT - h) {
            clearInterval(intervalId);
        }
        fillCanvas('rgb(255, 255, 255)');
        ctx.fillStyle = 'rgb(128, 128, 128)';
        ctx.fillRect(x, y, w, h);
    }
}

function drawFireworks() {
    var xm = 0.5 * WIDTH;
    var ym = 0.5 * HEIGHT;
    var nSparks = 500;
    // var sparks = [
    //     { x: xm, y: ym, dx: 5, dy: 5},
    //     { x: xm, y: ym, dx: -5, dy: 5},
    //     { x: xm, y: ym, dx: 0, dy: 5},
    //     { x: xm, y: ym, dx: -5, dy: 0},
    //     { x: xm, y: ym, dx: 5, dy: 0},
    //     { x: xm, y: ym, dx: 5, dy: -5},
    //     { x: xm, y: ym, dx: -5, dy: -5},
    //     { x: xm, y: ym, dx: 0, dy: -5},
    // ];
    var sparks = [];
    for (var i = 0; i < nSparks; i++) {
        var alpha = Math.random() * 2 * Math.PI;
        var radius = Math.random() * 10;
        var dx = Math.sin(alpha);
        var dy = Math.cos(alpha);

        var spark = {x: xm, y: ym, dx: dx * radius, dy: dy * radius};
        sparks.push(spark);
    }

    fillCanvas('rgb(0, 0, 0)');
    ctx.strokeStyle = 'rgb(255, 255, 0)';
    var fps = 30;
    if (intervalId !== null) {
        clearInterval(intervalId);
    }
    intervalId = setInterval(drawFrame, 1000 / fps);

    function drawFrame() {
        fillCanvas('rgb(0, 0, 0)');
        for (var i = 0; i < sparks.length; i++) {
            sparks[i].x += sparks[i].dx;
            sparks[i].y += sparks[i].dy;
        }

        for (var i = 0; i < sparks.length; i++) {
            ctx.beginPath();
            ctx.moveTo(sparks[i].x, sparks[i].y);
            ctx.lineTo(sparks[i].x + sparks[i].dx*2, sparks[i].y + sparks[i].dy*2);
            ctx.stroke();
        }
    }

}

