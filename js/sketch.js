function setup() {
    let myCanvas = createCanvas(windowWidth, windowHeight);
    myCanvas.parent("canvas");
    background(0);
}

function draw() {
    stroke(mouseX, 0, mouseY);
    line(0, 0, mouseX, mouseY);
    line(600, 400, mouseX, mouseY);
    line(600, 0,  mouseX, mouseY);
    line(0, 400, mouseX, mouseY);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
