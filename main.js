song1 = "";
song2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
webcam = ""

function preload() {
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center()
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.posenet(Video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function draw() {
    Image(video, 0, 0, 600, 500);
    fill("#FF0000");
    stroke("#FF0000");
}

function modelLoaded() {
    console.log('Posenet is initialized');

}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.X;
        leftWristY = results[0].pose.leftWrist.Y;
        console.log("leftWristX = " + leftWristX + "leftWristY" + leftWristY);

        rightWristX = results[0].pose.rightWrist.X;
        rightWristY = results[0].pose.rightWrist.Y;
        console.log("rightWristX = " + rightWristX + "rightWristY" + rightWristY);
    }

}