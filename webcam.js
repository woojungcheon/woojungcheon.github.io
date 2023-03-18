// 참고 예제: https://p5js.org/ko/examples/dom-video-pixels.html
// https://p5js.org/ko/examples/dom-video-capture.html

let video;  						// 비디오 변수
function setup() {
	createCanvas(800, 800);
	rectMode(CENTER);
	angleMode(DEGREES);
	
	// 웹캠 비디오를 세팅하고, 사이즈를 지정합니다.
	video = createCapture(VIDEO);
  video.size(width, height);
	// 원본 웹캠 영상을 가립니다.
	video.hide();
}

function draw() {
	background(255);
	
	// 웹캠에서 영상 데이터를 가져오고 업데이트합니다.
	video.loadPixels();
	video.updatePixels();
	
	// 비디오의 너비와 높이 픽셀을 for 반복문으로 훑으면서 픽셀 정보를 읽는다.
	for (let y = 0; y < video.height; y = y + 20) {
    for (let x = 0; x < video.width; x = x + 20) {
			let pixel_index = (y * video.width + x) * 4;
      let darkness = (255 - video.pixels[pixel_index]) / 255;
					
			// 픽셀의 밝기를 도형의 지름 값에 활용한다.
      let 지름 = 10 * darkness;
			
			push();
			translate(x, y);
			/* 도형 함수 원하는 대로 바꿔보기 */
			// darkness가 0.8보다 크다.
			if(darkness > 0.8) {
				rect(0, 0, 지름, 지름);
			}
			// darkness가 0.8보다 작거나 같고, and 0.5보다는 크거나 같다
			if(darkness <= 0.8 && darkness >= 0.5) {
				ellipse(0, 0, 지름, 지름);
			}
			// darkness가 0.5보다 작다.
			if(darkness < 0.5) {
				line(0, 0, 지름, 지름);
			}
			pop();
		}
	}
	// noLoop();  // 반복하지 않게 스탑. 
}
