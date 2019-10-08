var allMyBalls = [];
var amountOfBalls = 15;

function preload() {
    // put preload code here
}

function setup() {

    createCanvas(windowWidth, windowHeight);
    background(0, 9, 30);

    //stelle
    for (var i = 0; i < 120; i++) {
        var x = random() * windowWidth;
        var y = random() * windowHeight;
        var d = random() * 4;
        noStroke();
        ellipse(x, y, d);
        fill(color("white"));
    }

    //testo
    textAlign(CENTER, CENTER);
    textSize(25);
    strokeWeight(4);
    stroke(0);
    fill("white");
    text("CLICK ANYWHERE TO FILL THIS STARRY NIGHT WITH COLORFUL FIREWORKS", windowWidth / 2, windowHeight / 2);

}

function mousePressed() {

    for (var i = 0; i < amountOfBalls; i++) {
        var tempx = mouseX;
        var tempy = mouseY;
        var tempr = random(5, 15);
        var tempBall = new Ball(tempx, tempy, tempr);

        tempBall.color = color(random() * 255, random() * 255, random() * 255);

        allMyBalls.push(tempBall);
    }
}

function draw() {

    for (var i = 0; i < allMyBalls.length; i++) {
        var tempBall = allMyBalls[i];
        tempBall.display();
        tempBall.move();
    }

}


function Ball(_x, _y, _diameter) {

    this.size = _diameter;
    this.x = _x;
    this.y = _y;
    this.speed = 3;

    var xIncrease = random(-3, 3);
    var yIncrease = random(-3, 3);

    this.move = function() {
        this.x += xIncrease * this.speed;
        this.y += yIncrease * this.speed;
    }

    this.display = function() {
        ellipse(this.x, this.y, this.size);
        fill(this.color);
        noStroke();
    }
}
