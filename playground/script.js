var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// Starting Points (Middle)
var x = canvas.width / 2;
var y = canvas.height / 2;

var ballRadius = 10;
var upPressed = false
var downPressed = false
var leftPressed = false
var rightPressed = false

function keyDownHandler(e) {
    if (e.keyCode == 68) {
        rightPressed = true;
    }
    else if (e.keyCode == 65) {
        leftPressed = true;
    }
    else if (e.keyCode == 87) {
        upPressed = true
    }
    else if (e.keyCode == 83) {
        downPressed = true
    }
}

function keyUpHandler(e) {
    if (e.keyCode == 68) {
        rightPressed = false;
    }
    else if (e.keyCode == 65) {
        leftPressed = false;
    }
    else if (e.keyCode == 87) {
        upPressed = false
    }
    else if (e.keyCode == 83) {
        downPressed = false
    }
}

function drawBall() {
    // This is our Pinky Background !
    ctx.fillStyle = "hsl(0, 50%, 70%)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // This is our Ball !
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function move() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    if (rightPressed && x < canvas.width - ballRadius) {
        x += 2
    }
    else if (leftPressed && x - ballRadius > 0) {
        x -= 2
    }
    else if (upPressed && y - ballRadius > 0) {
        y -= 2
    }
    else if (downPressed && y < canvas.height - ballRadius) {
        y += 2
    }

}

document.addEventListener("keydown", keyDownHandler, false);    // Key Pressed
document.addEventListener("keyup", keyUpHandler, false);        // Key Unpressed
setInterval(move, 10);
