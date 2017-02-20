var WIDTH = 500, HEIGHT = 500;
var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext('2d');

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
    var sparks = [
        { x1: xm, y1: ym, x2: xm + 50, y2: ym + 50, dx: 5, dy: 5},
        { x1: xm, y1: ym, x2: xm - 50, y2: ym + 50, dx: -5, dy: 5},
        { x1: xm, y1: ym, x2: xm, y2: ym + 50, dx: 0, dy: 5},
        { x1: xm, y1: ym, x2: xm - 50, y2: ym, dx: -5, dy: 0},
        { x1: xm, y1: ym, x2: xm + 50, y2: ym, dx: 5, dy: 0},
        { x1: xm, y1: ym, x2: xm + 50, y2: ym - 50, dx: 5, dy: -5},
        { x1: xm, y1: ym, x2: xm - 50, y2: ym - 50, dx: -5, dy: -5},
        { x1: xm, y1: ym, x2: xm , y2: ym - 50, dx: 0, dy: -5},
    ];

    fillCanvas('rgb(0, 0, 0)');
    ctx.strokeStyle = 'rgb(255, 255, 0)';
    var fps = 30;
    var intervalId = setInterval(drawFrame, 1000 / fps);

    function drawFrame() {
        fillCanvas('rgb(0, 0, 0)');
        for (var i = 0; i < sparks.length; i++) {
            sparks[i].x1 += sparks[i].dx;
            sparks[i].y1 += sparks[i].dy;
            sparks[i].x2 += sparks[i].dx;
            sparks[i].y2 += sparks[i].dy;
        }

        for (var i = 0; i < sparks.length; i++) {
            ctx.beginPath();
            ctx.moveTo(sparks[i].x1, sparks[i].y1);
            ctx.lineTo(sparks[i].x2, sparks[i].y2);
            ctx.stroke();
        }
    }

}

