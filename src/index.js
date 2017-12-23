// import drawEverything from './drawings/drawings';

let canvas;
let canvasContext;
let tileSize;

window.onload = function() {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    drawTiles(16);
}

function drawTiles(count) {
    if (count > 0 && Math.sqrt(count) % 1 === 0) {
        // calculate tile dimensions
        tileSize = canvas.width / Math.pow(count, 0.5);

        // draw 'count' number of tiles
        for (let i = 0; i < Math.sqrt(count); i++) {
            for (let j = 0; j < Math.sqrt(count); j++) {
                // console.log('fcgvhjbnjhhhhhhb' + i);
                drawRect(tileSize * i, tileSize * j, tileSize, tileSize, 'brown');
            }
        }
        return true;
    }
    console.log("Not a square number !!");
    return false;
}

function drawRect(leftX, topY, width, height, color) {
    console.log('square drawn.');

    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(leftX, topY, width, height);
    canvasContext.fillStyle = color;
    canvasContext.fillRect(leftX + width * 0.1 / 2, topY + width * 0.1 / 2, width * 0.9, height * 0.9);
}