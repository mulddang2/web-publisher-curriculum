//**********로딩페이지

//로드되는 동안 waitFor가 나타났다 사라짐.
//필요 변수 waitFor, grid-container

var waitFor = document.querySelector('.waitFor');
var gridContainer = document.querySelector('.grid-container')

//기다릴때
function loading_wait() {
    waitFor.style.display = 'block';
    gridContainer.classList.add('on');
}

//로딩되면
function loading_complete() {
    waitFor.style.display = 'none';
    gridContainer.classList.remove('on');
}
loading_wait();
// window.onload = loading_complete;


//*******웰컴페이지

//setTimeout과 setInterval의 차이
//setTimeout은 1초 있다가 한번만 실행
//setInterval은 1초에 한번씩 실행
setTimeout(loading_complete, 3000)