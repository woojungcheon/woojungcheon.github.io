let 속도 = 0.5;   // alphabets-sample.js의 함수에서도 쓰는 글로벌 변수

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	angleMode(DEGREES);
	rectMode(CENTER);
	noStroke();
	// frameRate(20);  // 프레임 속도를 낮추고 싶다면 30 이하 숫자.
}

function draw() {
	// background(0);
	drawGrid(20);  				// 모눈종이표
	showCoordinateNum();  // 마우스 현재 위치 좌표값
	
	push();
	translate(0, 0);
	animRectB();
	pop();
	
	push()
	translate(200, 100);
	animArcC();
	pop();
	
	push()
	translate(200, 200);
	animA2();
	pop();
}