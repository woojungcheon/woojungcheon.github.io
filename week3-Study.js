
// 슬라이더 셋팅 ------------------------------------------

let sliderScale, sliderStroke, sliderRadius, sliderSpeed, sliderMwidth;
let sliderScaleValue, sliderStrokevalue, sliderRadiusValue, sliderSpeedValue, sliderMwidthvalue;

function setup() {
	createCanvas(windowWidth, windowHeight);

	background(255);
	angleMode(DEGREES)
	// rectMode(CENTER)

    //슬라이더 value 값 설정 -------------------------------

    
    sliderScale = createSlider(1,5,1,0);
    sliderScale.position(20, height-250);
    sliderScale.style("width", "200px");

    sliderStroke = createSlider(5, 40, 5, 1);
    sliderStroke.position(20,height-200)
    sliderStroke.style("width", "200px");

    sliderRadius = createSlider(100, 500, 100, 1);
    sliderRadius.position(20,height-150)
    sliderRadius.style("width", "200px");

    sliderSpeed = createSlider(0.01, 1, 0.01, 0);
    sliderSpeed.position(20,height-100)
    sliderSpeed.style("width", "200px");

    sliderMwidth = createSlider(5, 20, 5);
    sliderMwidth.position(20,height-50)
    sliderMwidth.style("width", "200px");
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw(){
    background(0,0,200);
    // drawGrid(10);
    // showCoordinateNum();
    noFill();
    stroke(255,255,255);
    strokeWeight(0.5);
	// noStroke();
	
	let lineX = 200;
	line(250,0,250,height);

    // 슬라이더 캡션 작성 ---------------------------
    push();
    fill(255,255,255);
    textSize(14);
    text("Scale", 23,height-255);
    text("StrokeWeight", 23,height-205);
    text("Radius", 23,height-155);
    text("Speed", 23,height-105);
    text("Scale-M", 23,height-55);
		
		textSize(27);
	  text("p5.js", 23,35);
		text("Interactive", 23,70);
	  text("Visual Type", 23,105);


    pop();

    // 슬라이더 value 값 업데이트--------------------
    sliderScaleValue = sliderScale.value();
    sliderStrokevalue = sliderStroke.value()*0.07;
    sliderRadiusValue = sliderRadius.value();
    sliderSpeedValue = sliderSpeed.value();
    sliderMwidthvalue = sliderMwidth.value();
    

    // 중앙 글자 모션 제어 -------------------------

    // 중앙 솔리드 O
    push();
    translate(width/2 + lineX,height/2);
    scale(sliderScaleValue);
    LightSolidO_Center();
    pop();


    // 1-원 반복 O
    for(let a=0; a<8; a=a+1){

        let speed=sliderSpeedValue;
        let radius=sliderRadiusValue+300;

        push();
        translate(cos(frameCount*a*speed)*radius, sin(frameCount*a*speed)*radius);
        EllipseO_Center();
        pop();
    }

    // 2- 라인 반복
    push();
    translate(width/2 + lineX,height/2);

    for(let i=0; i<360; i=i+10){
        line(cos(i)*150,sin(i)*150,cos(i)*250,sin(i)*250);
    }
    pop();

    // 3- 라이트 O
    for(let a=0; a<15; a=a+1){

        let speed=sliderSpeedValue;
        let radius=sliderRadiusValue+150;

        push();
        translate(width/2 + lineX,height/2)
        translate(cos(frameCount*a*speed)*radius, sin(frameCount*a*speed)*radius);
        LightLineO_Center();
        pop();
    }

    // 4- 라인 반복
    push();
    translate(width/2 + lineX,height/2);
    scale(sliderScaleValue);

        for(let i=0; i<360; i=i+2){
            line(cos(i)*250,sin(i)*250,cos(i)*350,sin(i)*350);
        }
    pop();


    // 글자 함수들 ---------------------
    push();
    translate(350,0);
    SolidA();
    pop();

    push()
    translate(250+300,0);
    stroke(255,255,255);
    strokeWeight(sliderStrokevalue);
    LineM();
    pop();

    push();
    translate(250+500,0);
    LightSolidO();
    pop();

    push();
    translate(250+700,0)
    SolidD();
    pop();

    push();
    translate(250+900,0);
    stroke(255,255,255);
    strokeWeight(sliderStrokevalue);
    LightLineO();
    pop();

    push();
    translate(250+1100,0);
    SolidM();
    pop();

    push();
    translate(250+1300,0)
    strokeWeight(sliderStrokevalue);
    LineN();
    pop();

    push();
    translate(250+1500,0);
    SolidT();
    pop();

}

// 중앙 회전용 도형 글자들 -----------------------

function LightSolidO_Center(){

    //바깥 원
    push();
    fill(255,255,255);
    ellipse(0,0,100,100);
    pop();

    //안쪽 원
    push();
    noStroke();
    fill(0,0,255);
    rotate(cos(frameCount)*360);
    ellipse(0,0,30,90);
    pop();

    push();
    noStroke();
    fill(0,0,255);
    rotate(-cos(frameCount)*360);
    ellipse(0,0,90,30);
    pop();
}



function LightLineO_Center(){
    push();
    scale(sliderScaleValue);
    strokeWeight(sliderStrokevalue);
    for(let i=0; i<360; i=i+10){
        line(0,0,cos(frameCount+i)*50, sin(frameCount+i)*50);
    }
    pop();
}

function EllipseO_Center(){

    for(let angle=0; angle<360; angle=angle+40){
        push();
        translate(width/2 + 200,height/2);
        scale(sliderScaleValue);
        strokeWeight(sliderStrokevalue);
        translate(cos(angle)*40, sin(angle)*40);
        ellipse(0,0,20,20);
        pop();
    }
}



// 알파벳 함수들 ------------------------------------

function SolidA(){
    push();

    let x=cos(frameCount)*50;
    let xx=abs(x);

    noStroke();
    fill(255,255,255);
    ellipse(25,25+xx,50,50);
    pop();

    push();
    ellipse(25,75-xx,50,50);
    pop();

    push();
    fill(255,255,255);
    noStroke();
    arc(50,50,100,100,270,360);
    arc(100,50,100,100,90,180);
    pop();
}

function LineM(){

    //왼쪽 라인 삼각형
    push();
    translate(0,100); //높이 100 삼각형이므로 y축 100부터 시작

    let x=cos(frameCount)*20;
    let xx=abs(x);
    translate(xx,0);

    for(let i=0; i<110; i=i+10){
        triangle(0,0,30,-i,60,0);
    }
    pop();

    //오른쪽 라인 삼각형
    push();
    translate(0,100); //높이 100 삼각형이므로 y축 100부터 시작

    let y=cos(frameCount)*20;
    let yy=abs(y);
    translate(-yy,0);

    for(let i=0; i<110; i=i+10){
        triangle(40,0,70,-i,100,0);
    }
    pop();
}

function LightSolidO(){

    //바깥 원
    push();
    translate(50,50)  //지름 100 원이므로 50, 50에서 시작
    fill(255,255,255);
    ellipse(0,0,100,100);
    pop();

    //안쪽 원
    push();
    translate(50,50);
    noStroke();
    fill(0,0,255);
    rotate(cos(frameCount)*360);
    ellipse(0,0,30,90);
    pop();

    push();
    translate(50,50);
    noStroke();
    fill(0,0,255);
    rotate(-cos(frameCount)*360);
    ellipse(0,0,90,30);
    pop();
}

function LightLineO(){
    push();
    translate(50,50);  //지름 100 원이므로 50, 50에서 시작

    for(let i=0; i<360; i=i+10){
        line(0,0,cos(frameCount+i)*50, sin(frameCount+i)*50);
    }
    pop();
}

function SolidD(){
    //왼쪽 사각형 기둥
    push();
    fill(255,255,255);
    rect(0,0,50,100);  //왼쪽 사각형 기둥
    arc(50,50,100,100,270,270+180);
    //안쪽 회전 원
    fill(0,0,255);
    translate(50,50);
    rotate(sin(frameCount)*360);
    arc(0,0,100,100,90,270);
    // noStroke();
    fill(255,255,255);
    ellipse(0,0,40,40);
    pop();
}

function SolidM(){
    push();
    noStroke();
    fill(255,255,255);
    rect(0,20,sliderMwidthvalue,80);
    rect(20,0,sliderMwidthvalue,20);
    rect(40,20,sliderMwidthvalue,80);
    rect(60,0,sliderMwidthvalue,20);
    rect(80,20,sliderMwidthvalue,80);
    pop();
}

function LineN(){

    push();    
    for(let i=0; i<110; i=i+10){
        line(0,0,i,100);
    }

    for(let i=0; i<110; i=i+10){
        line(100,100,i,0);
    }
    pop();
}

function SolidT(){
    push();
    noStroke();
    fill(255,255,255);
    arc(0,0,60,60,0,90);
    rect(20,0,15,5);
    arc(35,0,60,60,0,90);
    rect(55,0,15,5);
    rect(70,0,30,30);
    arc(35,60,60,60,270,360);
    rect(35,60,30,40);
    pop();
}
