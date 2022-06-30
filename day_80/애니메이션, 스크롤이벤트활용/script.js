/*
스크롤이 1500~2500 사이면 startText에 on이 붙는다.
스크롤이벤트가 발생했을 때, scrollCheck함수 호출(실행)

*/
const startText = document.querySelector(".startText");
window.addEventListener('scroll', scrollCheck);
function scrollCheck() {
    if( window.scrollY >= 1500 && window.scrollY < 2500){
        startText.classList.add('on')
    } else {
        startText.classList.remove('on')

    }
}
scrollCheck();