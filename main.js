nose_X=0;
nose_y=0;
function preload(){
    clown_nose=loadImage('https://i.postimg.cc/YCcWZN61/clownnose.png');
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
    video.size(300,300);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video,0,0,300,300);
    //fill("#fc0303");
    //stroke("#fc0303");
    //circle(nose_x,nose_y,20);
    image(clown_nose,nose_x,nose_y,30,30);
}

function take_snapshot(){
    save('myfilterimage.png');
}

function modelLoaded(){
    console.log("posenet is initialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        nose_X=results[0].pose.nose.x-15;
        nose_y=results[0].pose.nose.y-15;
        console.log("nose x- "+nose_X);
        console.log("nose y- "+nose_y);
    }
}