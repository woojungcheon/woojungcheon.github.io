function setup() {
  createCanvas(400, 400);
  background(0);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
    background(0);
    // drawGrid(20);         
    showCoordinateNum();
	
// 도형함수의 매개변수 + 반복문 -----------------------
	
for(let i=1; i<6; i=i+1){
		push();
		rectMode(CENTER);
    // translate(width/2, height/2);
    noStroke();
    // rect(50, 20*i, 25*i, 10);
		pop();
	}
	
// translate() 함수 + 반복문 -----------------------
	
for(y=0; y<height; y=y+90){
	for(x=0; x<width; x=x+90){
  	push();
  	translate(x,y);
  	myCircleO();
  	pop();
  	}
	}
	
for(let x=0; x < width; x = x+100){
		push();
		translate(x, 0);
		// myTriM();
		pop();
		}
	
for(let y=0; y < height; y = y+100){
		push();
		translate(y,y+100)
		// myRectE();
		pop();
		}
	
for(let z=0; z < width; z = z+100){
		push();
		translate(z+150,z);
		// myRectA();
		pop();
		}
}
