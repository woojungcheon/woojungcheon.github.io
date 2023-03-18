// 색상 배열 및 변수 설정 -------------------------

let coolors = ["#cbf3f0", "#2ec4b6", "#ff9f1c","#ffbf69"];
let coolors2 = ["#390099","#9e0059","#ff0054","#ff5400","#ffbd00"];

let colorIndex = 0;
let colorIndex1 = 1;
let colorIndex2 = 0;

function mouseClicked() {
	colorIndex = colorIndex + 1;
	colorIndex = colorIndex % 4;

  colorIndex1 = colorIndex1 + 1;
	colorIndex1 = colorIndex1 % 4;

  colorIndex2 = colorIndex2 + 1;
	colorIndex2 = colorIndex2 % 5;
}

//-----------------------------------------

function setup(){
  background(0);
  angleMode(DEGREES);
  // rectMode(CENTER);
  createCanvas(400, 400);
}

function draw(){
  background(0);
  drawGrid(10);
  showCoordinateNum();
	noStroke();

// 마우스 드래그로 도형 위치 이동 ----------------
	
let dragX = 0;
let dragY = 0;

function mouseDragged() {
    dragX = mouseX;
    dragY = mouseY;
}

//-----------------------------------------

// let cx = constrain(mouseX, 0, 5);
// let cy = constrain(mouseY, 0, 200);
let mapX = map(mouseX, 0, width, 1, 2);

push();
translate(width/2, height/2);
scale(mapX, 1);
myRectA();
pop();
	
//-----------------------------------------

push();
translate(mouseX, mouseY);
myArcD();
pop();

push();
translate(50,100);
myTriM();
pop();

push();
translate(200,100);
myCircleO();
pop();

push();
translate(30,240);
myRectE();
pop();

push();
translate(310,240);
myArcB();
pop();

}