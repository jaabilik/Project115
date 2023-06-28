noseX=0;
noseY=0;
rightEarX=0;
rightEarY=0;
function preload() {
    fancynose = loadImage("https://i.postimg.cc/3rG3PyV3/954e1f719e7e519ae7fd001e97a665a9-removebg-preview.png");
    fancynothair = loadImage("https://i.postimg.cc/rs5cWbxD/th-removebg-preview-1.png");
}

function setup() {
canvas = createCanvas(300, 300);
canvas.position(485,250)
video = createCapture(VIDEO);
video.size(300, 300);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('Posenet will find you :3')
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        rightEarX = results[0].pose.rightEar.x;
        rightEarY = results[0].pose.rightEar.y;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y); 
        console.log("right ear x ="+ results[0].pose.rightEar.x);
        console.log("right ear y ="+ results[0].pose.rightEar.y);
    }
}

function draw() {
image(video, 0, 0, 300, 300);
image(fancynose, noseX-20, noseY, 40, 40);
image(fancynothair, rightEarX-50, rightEarY-170, 170, 170);
}

function takeSnapshot() {
    save('NOTClownimagequeationmark.png')
}
