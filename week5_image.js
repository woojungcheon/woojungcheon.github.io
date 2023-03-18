
let img;
function preload(){
    img = loadImage("face.jpg");
}

function setup(){
    createCanvas(327*2,410*2);
    img.resize(width,height);
    // image(img,0,0,width,height);
    img.loadPixels();

    rectMode(CENTER);
    angleMode(DEGREES);
}

function draw(){
	// background(0,0,0);
	for(let y=0; y<img.height; y=y+15){
		for(let x=0; x<img.width; x=x+15){
			let pixel_index = (y*img.width + x)*4;
			let darkness = (255 - img.pixels[pixel_index]) / 255;
			
			let original_col = img.get(x, y); // 픽셀마다의 색상값
			
			
			push();
			translate(x,y);
			
			if(darkness > 0.5){
				
				push();
				scale(0.2);
				strokeWeight(0.03);
				fill(original_col);
				LineM();
				pop();
			}
			if(darkness <= 0.5){
				fill(original_col);
				strokeWeight(2);
				line(0,0,10,10);
			}
			
			pop();
		}
	}
	
	
	
	
	
}