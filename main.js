noseX=0;
noseY=0;
difference=0;
leftWristX=0;
rightWristX=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(600,550);
    canvas=createCanvas(650,600);
    canvas.position(600,100);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("Pose net is initialized.");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("Nose X= "+noseX+" Nose Y= "+noseY);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
        console.log("Left Wrist X= "+leftWristX+" Right Wrist X = "+rightWristX+" Difference= "+difference);
    }
}

function draw(){
    background("#3269a8");
    document.getElementById("square_sides").innerHTML="Width and Height of the Square will be= "+difference+"px";
    fill('#deb22f');
    stroke('#deb22f');
    square(noseX,noseY,difference);
}