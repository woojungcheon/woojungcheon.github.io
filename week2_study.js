
function setup(){
    background(0);
    angleMode(DEGREES);
    createCanvas(windowWidth, windowHeight);
}

function draw(){
    background(0);
    // drawGrid(10);
    showCoordinateNum();
	noStroke();

for(let i=0; i<height; i=i+200){
        push();
        translate(2*i,1*i);
        scale(0.5, 0.5);
        StructureType();
        pop();
    }
}

// Structure -----------------------------------------

function StructureType(){
    push();
    translate(80,80);
    StructureS();
    pop();

    push();
    translate(160,80);
    StructureT();
    pop();

    push();
    translate(360,80);
    StructureR();
    pop();

    push();
    translate(560,80);
    StructureU();
    pop();

    push();
    translate(720,160);
    StructureC();
    pop();

    push();
    translate(0,240);
    StructureT();
    pop();

    push();
    translate(280,240);
    StructureU();
    pop();

    push();
    translate(360,240);
    StructureR();
    pop();

    push();
    translate(560,320);
    StructureE();
    pop();
}


// 개별글자들 -----------------------------------------

function StructureS(){

    // let rot=map(mouseX, 0, width, 0, 360);

    push();

    // S 윗부분
    fill(255, 255, 255);
    arc(0, 0, 160, 160, 90, 360);
    fill(0, 0, 0);
    arc(0, 0, 80, 80, 90, 360);

    // S 아랫부분
    translate(0,80)
    // rotate(rot);
    fill(0, 0, 255);
    arc(0, 0, 160, 160, 270, 270+270);
    fill(0, 0, 0);
    arc(0, 0, 80, 80, 270, 270+270);
    pop();
}

function StructureT(){

    let wid=map(mouseX, 0, width, 0, 200);

    push();

    //T 가로획
    // rectMode(CENTER);
    fill(0, 0, 255);
    rect(0,0,wid,40);

    //T 세로획
    fill(255,255,255);
    rect(80,40,40,120)
    pop();
}

function StructureR(){

// let rot=map(mouseX, 0, width, 0, 720);

    push();

    //R 세로획
    fill(255,255,255);
    rect(0, 0, 40, 160);

    //R 호
    translate(120,80);
    // rotate(rot);
    fill(0, 0,255);
    arc(0, 0, 160, 160, 180, 270);
    fill(0,0,0);
    arc(0, 0, 80, 80, 180, 270);
    pop();
}

function StructureU(){

// let rot=map(mouseX, 0, width, 0, 360);

    push();

    //U 윗 부분
    fill(255,255,255);
    arc(0, 0, 160, 160, 0, 180);
    fill(0,0,0);
    arc(0, 0, 80, 80, 0, 180);
    
    //U 아랫부분
    translate(0,80);
    // rotate(rot);
    fill(0,0,255);
    arc(0, 0, 160, 160, 0, 180);
    fill(0,0,255);
    arc(0, 0, 80, 80, 0, 180);
    pop();
}   

function StructureC(){

// let rot=map(mouseX, 0, width, 0, 720);

    push();

    //C 호
    fill(0,0,255);
    arc(0,0,160,160,90,360)
    // rotate(rot);
    fill(255,255,255);
    arc(0,0,80,80,90,360)
    pop();
}

function StructureE(){

let rot=map(mouseX, 0, width, 0, 360);
let wid=map(mouseX, 0, width, 0, 220);

    push();

    //E 호
    arc(0,0,160,160,90,360)
    rotate(rot);
    fill(0,0,255);
    arc(0,0,80,80,90,360);
    pop();

    push();
    //E 가로획
    fill(255,255,255);
    rect(0, 0, wid, 40);
    pop();

}