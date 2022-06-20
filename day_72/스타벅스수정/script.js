//a(메뉴)에 마우스를 올리면 .drop
var header = document.querySelector("header"),
gnb = document.querySelector(".gnb"),
menu = document.querySelectorAll(".gnb li a"),
div = document.querySelectorAll(".gnb li div"),
drop = document.querySelector(".drop");

//gnb에 마우스가 들어왔을 때 header의 높이가 400
gnb.addEventListener("mouseenter", function(){
    header.style.height = 400 + "px";
})

//gnb에 마우스가 나갔을 때 header의 높이가 60
gnb.addEventListener("mouseleave", function(){
    header.style.height = 60 + "px";
});

//메뉴에 마우스가 들어오면 .drop 붙인다.

var ev = undefined;
for(var i = 0; i < div.length; i++) {
    menu[i].addEventListener("mouseenter", function(e){
        ev = e.target.nextElementSibling;//ev를 재할당
        namoji();
        ev.classList.add("drop")
    });
}

//ev가 아닌 것은 .drop을 뗀다 
function namoji() {
    for(var i = 0; i < div.length; i++) {
        div[i].className = ""; //->기존 클래스 이름을 다 떼고 넣는 것
    }

}