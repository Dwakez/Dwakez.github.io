var player;

function startGame() {
    myGameArea.start();
    player = new component(10, "green", 500, 250);
}

function component(radius, color, x, y) {
    this.r = radius
    this.x = x;
    this.y = y;
    this.gravitySpeed = 0;
    this.gravityAccel = 0.05;
    this.update = function() {
        ctx = myGameArea.context;
        // Player Ball
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.closePath();

        // Floor
        ctx.fillStyle = "lightblue";
        ctx.fillRect(0, 450, 700, 100);
    },
    this.newpos = function() {
        this.gravitySpeed +=  this.gravityAccel;
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.y + this.r < 450) {this.y += this.gravitySpeed; }
    }
}

myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 1000;
        this.canvas.height = 500;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        setInterval(updateGameArea, 10);
        window.addEventListener('keydown', function (e) {
            myGameArea.keys = (myGameArea.keys || []);
            myGameArea.keys[e.keyCode] = true;
        })
        window.addEventListener('keyup', function (e) {
            myGameArea.keys[e.keyCode] = false;
        })
    },
    clear : function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
}

function updateGameArea() {
    myGameArea.clear(); // Remove trail
    player.speedX = 0;
    player.speedY = 0;
    if (myGameArea.keys && myGameArea.keys[65]) { player.speedX = -1; }
    if (myGameArea.keys && myGameArea.keys[68]) { player.speedX = 1; }
    if (myGameArea.keys && myGameArea.keys[87]) { player.gravitySpeed = -3; }
    if (myGameArea.keys && myGameArea.keys[83]) { player.speedY = 1; }
    player.newpos();
    player.update();
}