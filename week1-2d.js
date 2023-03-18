let 속도 = 0.5;

let ellipsWidth = 50/2;
let ellipsColor = "#0496ff";

console.log(ellipsWidth);
console.log(ellipsColor);

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	angleMode(DEGREES);
	rectMode(CENTER);
}

function draw() {
	background(0);
	drawGrid(20);  				// 모눈종이표
	showCoordinateNum();  // 마우스 현재 위치 좌표값
	noFill();
	stroke(255);
	
	//------------
	
	push();
	fill('#f72585');
	stroke("#4361ee");
	strokeWeight(4);
	translate_guide(300, 200);
	rect_guide(0, 0, 100, 200, 100, 100);
	pop();
	
	push();
	fill("#4361ee");
	translate_guide(width*0.5, height*0.5);
	ellipse_guide(0, 0, 100, 100);
	pop();
	
	push();
	fill("#ff0054");
	translate_guide(100, 400);
	arc_guide(0, 0, 100, 100, 45, 360, PIE);
	pop();
	
	push();
	fill("#4cc9f0");
	translate_guide(50, 50);
	triangle(0, 100, 50, 0, 100, 100);
	pop();
	
	//------------
	
	
	//ellipse_guide(10 + 100*0.5, 10 + 100*0.5, 100, 100);

	
	push()
	//translate_guide(10, 10);
	//rect(0, 0, 100, 100);
	pop();
	
	push()
	//translate_guide(200, 200);
	//ellipse_guide(0, 0, 100, 100);
	pop()
	
	
}

