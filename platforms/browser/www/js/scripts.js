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

    $("#alpha").html(z)
    $("#beta").html(y)
    $("#gamma").html(x)

    $("#match").html(percent)
    $("#result").html(words)
    $("#instructions").html(tell)
}

var x, y, z;
var words = '';
var percent = '0%';
var tell = '';

function setup() {}

function draw() {

    if (y >= -20 && y <= 20) {
        if (z >= 0 && z < 30) {
            words = "They are alright... you can do better.";
            percent = '50%';
        } else if (z >= 30 && z < 60) {
            words = 'HAHAHAHAHA... No.';
            percent = '40%';
        } else if (z >= 60 && z < 90) {
            words = 'Would make a good secondary friend.';
            percent = '60%';
        } else if (z >= 90 && z < 120) {
            words = 'Might wanna just get started on the restraining order now.';
            percent = '10%';
        } else if (z >= 150 && z < 180) {
            words = "This person could be your new BFF. You would no longer need your old ugly friends that don't laugh at your jokes.";
            percent = '80%';
        } else if (z >= 210 && z < 240) {
            words = 'This dude seems pretty sus, would stay away from this one.';
            percent = '30%';
        } else if (z >= 270 && z < 300) {
            words = 'Run...'
            percent = '0%';
        } else if (z >= 300 && z < 330) {
            words = "Don't even say hi when you see them in the halls, they are clingy and will get the wrong idea.";
            percent = '20%';
        } else if (z >= 330 && z <= 360) {
            words = 'Take their hand, and never let them go.';
            percent = '100%';
        }
    } else {
        words = 'Point your phone at someone and see how compatible of a friend they would be.';
        percent = '---';

    }

}
