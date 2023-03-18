let slider1;
let slider1_value = 0;
let slider2;
let slider2_value = 0;
let slider_xpos = 0;
let inputText = "H";
let inputTextLength = 1;
let currentKey = "H";

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	angleMode(DEGREES);
	rectMode(CENTER);
	noStroke();

	textSize(20);
	
	/* slider */
	slider1 = createSlider(0, width * 0.1, 1);
	slider1.position(slider_xpos, 20);
	
	slider2 = createSlider(10, 40, 1);
	slider2.position(slider_xpos, 60);
	
	slider3 = createSlider(1, 80, 1);
	slider3.position(slider_xpos, 100);
	
	slider4 = createSlider(1, 80, 1);
	slider4.position(slider_xpos, 140);
	
	slider5 = createSlider(1, 100, 1, 5);
	slider5.position(slider_xpos, 180);

	let inp = createInput("H");
  inp.position(0, 300);
  inp.size(100);
  inp.input(myInputEvent);  // 파라미터: 함수 이름
}

// 키보드 입력했을 때, 실행할 함수.
function myInputEvent() {
  inputText = this.value();
	inputTextLength = inputText.length;
  console.log("타이핑하는 글자:" + this.value() + "길이: " + this.value().length);
}

function keyPressed() {
	currentKey = key;
	console.log(key);
	
	// 첫 5초동안의 프레임들을 gif로 저장.
  // if (key === 's') {
  //   saveGif('mySketch', 5);
  // }
}

function draw() {
	background(100);
	// 슬라이더 메뉴
	text('텍스트 반복: text_repeat', slider_xpos, 20);
	text('텍스트 사이즈: text_size', slider_xpos, 60);
	text('가로 scale: scaleX', slider_xpos, 100);
	text('세로 scale: scaleY', slider_xpos, 140);
	text('반복 간격: yGap', slider_xpos, 180);
	
	slider1_value = slider1.value();  // 다른 정수나 소수를 곱해서 크거나 작은 숫자 범위로 계산 가능.
	slider2_value = slider2.value();
	slider3_value = slider3.value() * 0.05; // -0.5 ~ 0.5
	slider4_value = slider4.value() * 0.05;
	slider5_value = slider5.value();
	
	let text_repeat = slider1_value;
	let text_size = slider2_value;
	
	push();
	textSize(text_size);
	translate(width*0.5, height*0.5); // 이제 기준점이 캔버스의 중앙이 됨.
	for(let x = -text_repeat; x < text_repeat; x = x + 1) {
		for(let y = -text_repeat; y < text_repeat; y = y + 1) {
			// text(currentKey, x * text_size, y * text_size);
		}
	}
	pop();
	
	// 텍스트 스케일
	let textScaleX = slider3_value;
	let textScaleY = slider4_value;
	let yGap = slider5_value;
	push();
	textSize(text_size);
	textAlign(CENTER);
	translate(width*0.5, height*0.5); // 이제 기준점이 캔버스의 중앙이 됨.
	
	for(let y = -text_repeat; y < text_repeat; y = y + 1) {
		push();
		translate(0, y * yGap);
		scale(textScaleX, textScaleY);
		text("HELLO THIS IS TEXT", 0, 0);
		pop();		
	}
	
	pop();
	

	// 키보드 입력칸에 쓰는 글자를 렌더하기.
	// repeatInput();
}

function repeatInput() {	
	let text_repeat = slider1_value;
	let text_size = slider2_value;
	inputTextLength = inputText.length;
	push();
	textSize(text_size);
	translate(width*0.5, height*0.5); // 이제 기준점이 캔버스의 중앙이 됨.
	for(let x = -text_repeat; x < text_repeat; x++) {
		for(let y = -text_repeat; y < text_repeat; y++) {
			text(inputText, x * (text_size * inputTextLength * 0.5), y * text_size);
		}
	}
	pop();
}

