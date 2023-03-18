// 참고 예제: https://p5js.org/ko/examples/image-brightness.html

let img;
let currentKey = "d";
function preload() {
  img = loadImage('dog1.jpeg');
}
function setup() {
	createCanvas(600, 800);
	img.resize(width, height);
  // image(img, 0, 0, width, height);
	console.log(img.width, img.height);
	img.loadPixels();
	rectMode(CENTER);
	angleMode(DEGREES);
}


function keyPressed() {
	currentKey = key;
	console.log(key, currentKey);
}

function draw() {
	background(255);
	
	for (let y = 0; y < img.height; y = y + 20) {
    for (let x = 0; x < img.width; x = x + 20) {
			let pixel_index = (y * img.width + x) * 4;
      let darkness = (255 - img.pixels[pixel_index]) / 255;
			
			let original_col = img.get(x, y);
			
			push();
			translate(x, y);
			stroke(original_col);
			strokeWeight(3);
			
				if(darkness > 0.5) {
					// ellipse(0, 0, 10, 10);
					push();
					scale(0.15);
					noFill();
					stroke(original_col);
					strokeWeight(10);
					if(currentKey === "d") {
						renderD(original_col);
					}
					if(currentKey === "o") {
						myCircleO(original_col);
					}
					pop();
				}
			
			if(darkness <= 0.5) line(0, 0, 10, 10);			
			pop();
		}
	}
	
	// noLoop();  // 반복하지 않게 스탑. 
}

/* 최적화: 반복문을 여기로 옮기기 */
function forDraw() {
	
}