// https://pixabay.com/videos/
// 참고예제: https://p5js.org/ko/reference/#/p5/createVideo

/**
1. pixabay 에서 무료 비디오를 다운받는다.
2. 테스트용이라면, 용량이 작은 비디오를 다운받는다.
3. 그래도 용량이 3메가바이트가 넘는다면, 길이를 잘라서 편집한다.
4. 해당 영상을 아래 예제 editor.p5js.org 에다가 업로드한다.
5. 만약, mp4 포맷이 재생되지 않는다면, 구글에서 mp4 to mov 를 검색해서 변환한다. 
**/

// 오픈 프로세싱 에디터에서는 비디오 파일이 제대로 실행되지 않아서 editor.p5js.org에서 코드를 실행한다.
// 코드 실행 예제: https://editor.p5js.org/sosunnyproject/sketches/6Tzl56lUW