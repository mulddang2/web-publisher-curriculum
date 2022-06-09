/*
스크롤이 0 이상이면 
ul li a 의 색깔이 민트색으로,
logo의 색깔이 민트색으로
*/

var aEl = document.querySelectorAll("a"),
logo = document.querySelector(".logo"),
header = document.querySelector("header");


//window.addEventListener(이벤트 종류, 함수); 
//사용자가 어떤 동작을 했을때, 동작함
window.addEventListener("scroll", function(){
    for(var i = 0; i < aEl.length; i++) {
        if(window.scrollY > 0) {
            aEl[i].style.color = "#00b7b4";
            header.style.backgroundColor = "rgba(255,255,255,.2)";
            logo.style.backgroundImage = "url('./images/logo_m.png')"
        } else {
            aEl[i].style.color = "#ffffff";
            //header의 bgc가 transparent(투명)
            header.style.backgroundColor = "rgba(255,255,255, 0)";
            //logo도 다시 logo_w.png 로 돌아오기
            logo.style.backgroundImage = "url('./images/logo_w.png')"

        }
    }
}); 


