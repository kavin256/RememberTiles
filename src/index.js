var canvas;
var canvasContext;
var ballX = 50,
    ballY = 40;
var ballSpeedX = 0.5,
    ballSpeedY = 0.5;
const ballSize = 5;
var PADDLE_SIZE_W, PADDLE_SIZE_H;
var paddle1_Y = 50;
var paddle2_Y = 50;

var paddle2Speed = 0.3;

window.onload = function() {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    // canvas.width = canvas.width / 2;

    PADDLE_SIZE_W = canvas.width / 100;
    PADDLE_SIZE_H = canvas.height / 5;

    drawEverything(4);

}

function drawEverything(count) {
    // draw screen color
    while (count > 0) {
        console.log('fcgvhjbnjhb' + count);
        drawRect(0, 0, canvas.width, canvas.height, 'brown');
        count--;
    }
}

function drawRect(leftX, topY, width, height, color) {
    canvasContext.fillStyle = color;
    canvasContext.fillRect(leftX, topY, width, height);
}