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