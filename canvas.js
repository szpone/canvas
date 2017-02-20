var WIDTH = 500, HEIGHT = 500;

function draw() {
    var canvas = document.querySelector("#canvas");
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgb(200, 0, 0)';
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
}

draw();
