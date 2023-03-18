
function myRectA(){

    push();
    rectMode(CENTER);
    noStroke();
    fill(coolors2[colorIndex2]);
    rect(0, 20, 25/2, 10);
    rect(0, 40, 25, 10);
    rect(0, 60, 50, 10);
    rect(0, 80, 75, 10);
    rect(0, 100, 100, 10);
    pop();
}

function myRectE(){
    push();
    rectMode(CORNER);
    noStroke();
    fill(coolors2[colorIndex2]);
    rect(0, 0, 20, 100, 0, 0, 50, 50);
    rect(20, 0, 40, 20, 50);
    rect(20, 40, 30, 20, 50, 50, 50, 0);
    rect(20, 80, 40, 20, 50, 50, 50, 0);
    pop();
}

function myArcD(){

    let rot = map(mouseX, 0, width, 0, 720);

    push();
    rotate(rot);
    noStroke();
    fill(coolors[colorIndex1]);
    arc(0, 0, 100, 100, 270, 270+180);
    fill(coolors2[colorIndex2]);
    arc(0, 0, 40, 40, 270, 270+180);
    pop();
}

function myTriM(){
    push();
    noStroke();
    fill(coolors[colorIndex1]);
    triangle(0, 100, 20, 0, 40, 100);
    triangle(40, 100, 60, 0, 80, 100);
    pop();
}

function myArcB(){
    push();
    noStroke();
    fill(coolors[colorIndex]);
    arc(0, 20, 40, 40, 270, 270+180);
    arc(0, 70, 70, 70, 270, 270+180);
    pop();
}

function myCircleO(){
    push();
    noStroke();
    // fill(x,y,200);
    // translate(width/2, height/2);
    fill(coolors[colorIndex]);
    circle(0, 0, 90);
    // fill(x,170,y);
    fill(coolors2[colorIndex2]);
    circle(0, 0, 60);
    // fill(x,255,150);
    fill(coolors[colorIndex1]);
    circle(0, 0, 30);
    pop();
}