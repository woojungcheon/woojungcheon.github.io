
let video;

function setup(){
  createCanvas(800,800);
    // img.resize(width,height);
    // image(img,0,0,width,height);
    // img.loadPixels();
	
	video = createCapture(VIDEO);
  video.size(width, height);

  rectMode(CENTER);
  angleMode(DEGREES);
}

function draw(){
	background(255, 10);
	
	video.loadPixels();
	video.updatePixels();
	
	
	for(let y=0; y<video.height; y=y+15){
		for(let x=0; x<video.width; x=x+15){
			let pixel_index = (y*video.width + x)*4;
			let darkness = (255 - video.pixels[pixel_index]) / 255;
			
			// let original_col = img.get(x, y); // 픽셀마다의 색상값
			
			let 지름 = 10 * darkness;
			
			push();
			translate(x,y);
			
			if(darkness > 0.5){
				
				push();
				ellipse(0,0,지름,지름);
				pop();
			}
			if(darkness <= 0.5){
				strokeWeight(2);
				line(0,0,지름,지름);
			}
			
			pop();
		}
	}
	
	
	
	
	
}