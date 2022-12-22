noseX=0;
noseY=0;

function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(90, 125);
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y + 38;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}

function draw() {
    image(video, 0, 0, 640, 480);
    fill("hotpink");
    stroke("hotpink");
    ellipse(noseX, noseY, 40, 15);
}

function take_snapshot() {
    save('party_filter.png');
}

function modelLoaded() {
    console.log('PoseNet is initialized!');
}
