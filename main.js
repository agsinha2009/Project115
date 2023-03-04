function preload(){

}

function setup(){
    canvas=createCanvas(400,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(400,300);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function gotPoses(results){
    if(results.length>0){
       console.log(results);
       noseX=results[0].pose.nose.x-15;
       noseY=results[0].pose.nose.y-15;
    }
}

function modelLoaded(){
        console.log('Posenet is initialized');
}

function draw(){
    image(video,0,0,400,300);
}

function Takesnapshot(){
    save("mustache_filter.jpg")
}