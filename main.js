difference=0;
rwristX=0;
lwristX=0;
function setup() {
  video=createCapture(VIDEO);
video.size(550,500);

canvas=createCanvas(550,500);
canvas.position(560,150);

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotPoses);

}
function modelLoaded() {
  console.log("posenet is initialized");
  
}
function gotPoses(results) {
  if (results.length>0) {
    console.log(results);
    lwristX=results[0].pose.leftWrist.x;
    rwristX=results[0].pose.rightWrist.x;
    difference=floor(lwristX-rwristX);
    console.log("left wrist = "+ lwristX + "right wrist = " + rwristX+"difference = "+ difference);
  }
}
function draw() {
  background=("#D5B0AC");
  document.getElementById("text_size").innerHTML="font size of the text will be " +difference+"px";
  textSize(difference);
  fill("#F93943");
  text("Veda",50,400);

}