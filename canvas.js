var WIDTH = 500, HEIGHT = 500;

function draw() {
    var canvas = document.querySelector("#canvas");
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgb(200, 0, 0)';
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
}

function gradientColor(x) {
    return Math.round(255 / WIDTH * x);
}

function drawGradient() {
    var canvas = document.querySelector("#canvas");
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgb(255, 255, 255)';
    for (x = 0; x < WIDTH ; x++) {
        var col = gradientColor(x);
        ctx.fillStyle = 'rgb(' + col + ', ' + col + ', ' + col + ')';
        ctx.fillRect(x, 0, 1, HEIGHT);
    }
}

function drawAnimatedRect() {
    var canvas = document.querySelector("#canvas");
    var ctx = canvas.getContext('2d');

    var fps = 30;
    var intervalId = setInterval(drawFrame, 1000 / fps);
    // clearInterval(intervalId);

    var x = 30;
    var y = 30;
    var w = 50;
    var h = 50;

    function drawFrame() {
        var canvas = document.querySelector("#canvas");
        var ctx = canvas.getContext('2d');
        x += 5;
        y += 5;
        if (x >= WIDTH - w && y >= HEIGHT - h) {
            clearInterval(intervalId);
        }

        ctx.fillStyle = 'rgb(255, 255, 255)';
        ctx.fillRect(0, 0, WIDTH, HEIGHT);
        ctx.fillStyle = 'rgb(128, 128, 128)';
        ctx.fillRect(x, y, w, h);
    }
}


