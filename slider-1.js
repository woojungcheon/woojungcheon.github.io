let slider1;
let slider1_value = 0;
let slider2;
let slider2_value = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	angleMode(DEGREES);
	rectMode(CENTER);
	noStroke();

	textSize(20);
	
	/* slider */
	slider1 = createSlider(0, 90, 1);
	slider1.position(width-150, 20);
	
	slider2 = createSlider(0, 90, 1);
	slider2.position(width-150, 60);
	
	slider3 = createSlider(0, 90, 1);
	slider3.position(width-150, 100);
}

function draw() {
	background(100);

	// 슬라이더 메뉴
	text('회전', width-150, 20);
	text('y 위치', width-150, 60);
	text('반지름', width-150, 100);
  slider1_value = slider1.value();  // 다른 정수나 소수를 곱해서 크거나 작은 숫자 범위로 계산 가능.
	slider2_value = slider2.value();
	slider3_value = slider3.value();
	// console.log(slider1_value);

	// 회전
	push();
	rotate(slider1_value);
	for(let i = 0; i < width - 200; i = i + 100) {
		push();
		translate(i, 20);
		renderTriM();
		pop();
	}
	pop();
	
	// 이동
	push();
	for(let i = 0; i < width - 200; i = i + 100) {
		push();
		translate(i, slider2_value);
		renderTriM();
		pop();
	}
	pop();
	
	// 삼각함수 원형 배치 응용
	let radius = slider3_value;
	push();
	translate(width/2, height/2);
	forUnitCircle(radius);
	pop();
}

function forUnitCircle(radius) {
	// 각도 변수를 업데이트.
	for (let angle = 0; angle < 360; angle = angle + 20) {
		/* 반복할 코드 */
		push()
		translate(cos(angle)*radius, sin(angle)*radius);
		fill(0, 255, 0);
		ellipse(0, 0, 10, 10);
		pop();
	}
}

function forUnitCircle2(radius) {
	// 갯수 변수를 업데이트.
	for (let i = 0; i < 10; i = i + 1) {
		/* 반복할 코드 */
		let angle = (360 / 10)*i; // 360도를 갯수만큼 일정하게 나누기.
		push()
		translate(cos(angle)*radius, sin(angle)*radius);
		ellipse(0, 0, 20, 20);
		pop();
	}
}