function setup() {
	createCanvas(1200, 1200);
	background(100);
	angleMode(DEGREES);
	rectMode(CENTER);
	noStroke();
}

function draw() {
	background(0);    // 배경색 코드를 비활성화: 궤적이 남음.
	let x = frameCount*2;    // 속도 빠르게 혹은 느리게
	let y = sin(x*2) * (height*0.5); // -1 ~ 1 에다가 height/2를 곱하면? 

	// 1. 삼각함수를 시각화
	push();
	fill(200, 100, 0);
	// 3D 캔버스의 중앙은 0, 왼쪽 가로 좌표값은 0 - 너비/2
	translate(x, y + (height * 0.5), 0);  
	// ellipse(0, 0, 20, 20);
	pop();
	
	// 2. 원형으로 배치
	push();
	translate(width*0.5, height*0.5);  // 캔버스의 중앙에 배치.
	// drawUnitCircle();
	pop();
	
	
	// 3. animTriM: 위 아래로 움직이는 M 모형
	push();
	translate(0, height*0.5);
	// animTriM();
	pop();
	
	// 4. animCrossDoubleTriM: M 모형을 한 번에 2개를 그린다. 반복해서 배치한다.
	for(let i = 0; i < width; i += 200) {
		push();
		translate(i, height/2 + sin(frameCount) * height/6);
		// animCrossDoubleTriM();
		pop();
	}
	
	//-------------------
	
	for(let i=0; i<width; i=i+320){
		push();
		translate(80,100);
		translate(i,sin(frameCount*2)*80);
		StructureS();
		pop();
	}
	
	for(let i=160; i<width; i=i+320){
		push();
		translate(80,100);
		translate(i,-sin(frameCount*2)*80);
		StructureS();
		pop();
	}
	
	for(let i=0; i<width; i=i+320){
		push();
		translate(80+i,340);
		rotate(frameCount*2);
		StructureC();
		pop();
	}

	for(let i=160; i<width; i=i+320){
		push();
		translate(80+i,420);
		rotate(-frameCount*2);
		StructureC();
		pop();
	}
	
	push();
	translate(0, 500);
	StructureType();
	pop();
}


//--------------------------

function drawUnitCircle() {
	// radius의 값을 고정된 숫자가 아닌 마우스와 연동한다면?
	let radius = 40;
	
	push()
	translate(cos(30)*radius, sin(30)*radius);
	// ellipse(0, 0, 10, 10);
	pop();

	push();
	translate(cos(60)*radius, sin(60)*radius);
	// ellipse(0, 0, 10, 10);
	pop();

	push();
	translate(cos(90)*radius, sin(90)*radius);
	// ellipse(0, 0, 10, 10);
	pop();
	
	// 1. 복붙을 해서 cos(), sin() 함수 안의 각도 값을 360도까지 적어보세요.
}

// 2. 반복문을 이용해서 drawUnitCircle을 다시 작성해보세요.
function forUnitCircle() {
	
	
}