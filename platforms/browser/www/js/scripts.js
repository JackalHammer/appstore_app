document.addEventListener("deviceready", init, false);

function init() {

    if (window.DeviceOrientationEvent) {
        window.addEventListener("deviceorientation", handleOrientation)
    } else {
        alert("no luck")
    }
}

function handleOrientation(event) {

    z = event.alpha;
    y = event.beta;
    x = event.gamma;

    posx = map(x, -180, 180, 0, window.innerWidth, true)
    posy = map(y, -90, 90, 0, window.innerHeight, true)

    posx += x;
    posy += y;

    col1 = map(x, -180, 180, 0, 255, true)
    col2 = map(y, -90, 90, 0, 255, true)
    col3 = map(z, 0, 360, 0, 255, true)


    $("#alpha").html(z)
    $("#beta").html(y)
    $("#gamma").html(x)
}

var posx = window.innerWidth;
var posy = window.innerHeight;
var col1, col2, col3;
var x, y, z;

function setup() {
    var cnv = createCanvas(window.innerWidth, window.innerHeight);
    cnv.parent("myCanvas")

    posx = width / 2;
    posy = height / 2;
}

function draw() {
    noStroke();
    fill(col1, col2, col3);
    ellipse(posx, posy, 100, 100);

    strokeWeight(10);
    stroke(col1, col2, col3)
    fill(255);
    textSize(100);
    textAlign(CENTER, CENTER);
    text('PAINT!', window.innerWidth / 2, (window.innerHeight / 2) - 200)

}
