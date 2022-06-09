/*
스크롤이 0 이상이면 on 클래스 붙이기
ul li a 의 색깔이 민트색으로,
logo의 색깔이 민트색으로
*/

var aEl = document.querySelectorAll("a"),
    logo = document.querySelector(".logo"),
    header = document.querySelector("header");

//window.addEventListener(이벤트 종류, 함수);
//사용자가 어떤 동작을 했을때, 동작함
window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
        header.classList.add("on");
    } else {
        header.classList.remove("on");
    }
});
