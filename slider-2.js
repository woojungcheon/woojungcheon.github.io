let slider1;
let slider1_value = 0;
let slider2;
let slider2_value = 0;
// 한 번에 여러 변수 쓰는 방법.
let slider3, slider4, slider5, slider6, slider7;
let slider3_value = 0, slider4_value = 0, slider5_value = 0, slider6_value = 0, slider7_value = 0;
// 슬라이더 가로 위치에 일괄적으로 쓸 변수.
let slider_xpos = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	angleMode(DEGREES);
	rectMode(CENTER);
	noStroke();

	textSize(20);
	
	/* slider */
	
	slider1 = createSlider(40, 70, 1);
	slider1.position(slider_xpos, 20);
	
	slider2 = createSlider(0, 255, 1);
	slider2.position(slider_xpos, 60);
	
	slider3 = createSlider(-10, 10, 1);
	slider3.position(slider_xpos, 100);
	
	slider4 = createSlider(1, 20, 1);
	slider4.position(slider_xpos, 140);
	
	slider5 = createSlider(0, width*0.5, 1);
	slider5.position(slider_xpos, 180);

	slider6 = createSlider(0, 360, 1);
	slider6.position(slider_xpos, 220);
	
	slider7 = createSlider(0, 360, 1);
	slider7.position(slider_xpos, 260);
}

function draw() {
	background(100);

	// 슬라이더 메뉴
	text('반복 간격', slider_xpos, 20);
	text('배경 패턴 색 0-255', slider_xpos, 60);
	text('배경 패턴 세로 scale', slider_xpos, 100);
	text('속도', slider_xpos, 140);
	text('반지름', slider_xpos, 180);
	text('배경 패턴 회전', slider_xpos, 220);
	text('중앙 도형 회전', slider_xpos, 260);

  slider1_value = slider1.value();  // 다른 정수나 소수를 곱해서 크거나 작은 숫자 범위로 계산 가능.
	slider2_value = slider2.value();
	slider3_value = slider3.value() * 0.05; // -0.5 ~ 0.5
	slider4_value = slider4.value() * 0.01; // 1 * 0.05 ~ 50 * 0.05
	slider5_value = slider5.value();
	slider6_value = slider6.value();
	slider7_value = slider7.value();

	// 반복, 스케일, 회전
	let gap = slider1_value; //50;
	for(let x = 0; x < width; x = x + gap) {
		for(let y = 0; y < height; y = y + gap) {
			push();
			translate(x, y);
			rotate(slider6_value);
			scale(0.5, slider3_value);
			renderTriM(color(slider2_value, 75));
			pop();
		}
	}
	
	// 삼각함수 원형 배치 응용
	// 반지름, 속도 제어
	let radius = slider5_value;
	push();
	translate(width/2, height/2);
	animUnitCircle(slider4_value, radius, renderRectT);
	animUnitCircle(slider4_value, radius + 60, renderArcB);
	animUnitCircle(slider4_value, radius + 100, renderD);
	pop();
}

// 애니메이션이 추가된 원형 배치 도형
function animUnitCircle(speed, radius, shapeFunction) {
	for (let i = 1; i < 20; i = i + 1) {
		push()
		translate(cos(frameCount*speed*i)*radius, sin(frameCount*speed*i)*radius);
		rotate(slider7_value);
		scale(0.25);
		shapeFunction();
		pop();
	}
}

