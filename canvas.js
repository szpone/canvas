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
