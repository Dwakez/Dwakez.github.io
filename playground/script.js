var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// Starting Points (Middle)
var x = canvas.width / 2;
var y = canvas.height / 2;

var ballRadius = 10;
var upPressed = false;
var downPressed = false;
var leftPressed = false;
var rightPressed = false;
var map = {};

onkeydown = function (e) {
    map[e.keyCode] = e.type == 'keydown';
    if (e.keyCode === 87) {
        upPressed = true
    }
    if (e.keyCode === 83) {
        downPressed = true
    }
    if (e.keyCode === 65) {
        leftPressed = true;
    }
    if (e.keyCode === 68) {
        rightPressed = true;
    }
}

onkeyup = function (e) {
    map[e.keyCode] = e.type == 'keyup';
    if (e.keyCode === 87) {
        upPressed = false
    }
    if (e.keyCode === 83) {
        downPressed = false
    }
    if (e.keyCode === 65) {
        leftPressed = false;
    }
    if (e.keyCode === 68) {
        rightPressed = false;
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
    if (leftPressed && x - ballRadius > 0) {
        x -= 2
    }
    if (upPressed && y - ballRadius > 0) {
        y -= 2
    }
    if (downPressed && y < canvas.height - ballRadius) {
        y += 2
    }

}

setInterval(move, 10);
